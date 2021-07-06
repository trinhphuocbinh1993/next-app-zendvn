import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Layout from "../components/layout/layout";
import LeadsProvider from "../context/leads-provider";
import { NotificationContextProvider } from "../context/notification-provider";

function MyApp({ Component, pageProps }) {
  return (
    <LeadsProvider>
      <NotificationContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NotificationContextProvider>
    </LeadsProvider>
  );
}

export default MyApp;
