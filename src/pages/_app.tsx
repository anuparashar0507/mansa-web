import { type Session } from "next-auth";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SessionProvider } from "next-auth/react";
// import { getCsrfToken, signIn, signOut } from "next-auth/react";
import { type AppType } from "next/app";
import DefaultLayout from "~/layouts/default";
import "~/styles/globals.css";
import { SEO } from "~/components/SEO";
import React from "react";
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <SEO
        title={"Welcome to MANSA"}
        description="Madhya Bharat Association of Students and Alumni"
      />
      <DefaultLayout>
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </DefaultLayout>
    </SessionProvider>
  );
};

// export default api.withTRPC(MyApp);
export default MyApp;
