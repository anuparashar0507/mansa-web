import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import DefaultLayout from "~/layouts/default";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <DefaultLayout>
      <Component {...pageProps} />
      </DefaultLayout>
    </SessionProvider>
  );
};

export default MyApp;
