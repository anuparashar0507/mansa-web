import Head from "next/head";

const siteUrl = "https://mansa-web.vercel.app/";

type MainLayoutProps = {
  title: string;
  description?: string;
  ogImgUrl?: string;
  ogUrl?: string;
  siteUrl?: string;
};

export function SEO({
  title,
  description,
  ogImgUrl = "/MANSALogo.png",
  ogUrl = siteUrl,
}: MainLayoutProps): JSX.Element {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="og:title" content={title} />
      {description && (
        <meta key="description" name="description" content={description} />
      )}
      {description && <meta name="og:description" content={description} />}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={title} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="og:image" property="og:image" content={ogImgUrl} />
      <meta key="og:url" property="og:url" content={ogUrl} />
      <meta
        key="twitter:card"
        property="twitter:card"
        content="summary_large_image"
      />
    </Head>
  );
}
