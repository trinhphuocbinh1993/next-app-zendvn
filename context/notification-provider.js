import { createContext, useEffect, useState } from "react";

// export const NotificationContext = createContext();

// function NotificationProvider() {
//   const [notification, setNotification] = useState(null); // {title, message, status}
//   const [showNotification, setShowNotification] = useState(false);
//   return (
//     <NotificationContext.Provider
//       value={{
//         notification,
//         setNotification,
//         showNotification,
//         setShowNotification,
//       }}
//     />
//   );
// }

// export default NotificationProvider;

// using Udemy way
const NotificationContext = createContext({
  notification: null, // {title, message, status}
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();

  //   useEffect(() => {
  //     console.log("activeNotification", activeNotification);
  //   }, []);

  useEffect(() => {
    if (activeNotification) {
      if (
        activeNotification.status === "success" ||
        activeNotification.status === "error"
      ) {
        const timer = setTimeout(() => {
          setActiveNotification(null);
        }, 3000);
        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [activeNotification]);

  function showNotification(notificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotification() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotification,
    hideNotification: hideNotification,
  };
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
