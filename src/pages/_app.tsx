import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
// import { getCsrfToken, signIn, signOut } from "next-auth/react";
import { type AppType } from "next/app";
import DefaultLayout from "~/layouts/default";
import "~/styles/globals.css";
import { SEO } from "~/components/SEO";
import React from "react";
// import { api } from "~/utils/api";
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  console.log("session", session);
  return (
    <SessionProvider session={session}>
      <SEO
        title={"Welcome to MANSA"}
        description="Madhya Bharat Association of Students and Alumni"
      />
      <DefaultLayout>
        {/* {csrfToken ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : ( */}
        <Component {...pageProps} />
        {/* )} */}
      </DefaultLayout>
    </SessionProvider>
  );
};

// export default api.withTRPC(MyApp);
export default MyApp;
