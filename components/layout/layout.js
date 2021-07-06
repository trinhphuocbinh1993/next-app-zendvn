import { Fragment, useContext } from "react";
import NotificationContext from "../../context/notification-provider";
import Notification from "../ui/notification";
import Header from "./header";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <Fragment>
      <Header />
      <main className="bg-gray-100">{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
