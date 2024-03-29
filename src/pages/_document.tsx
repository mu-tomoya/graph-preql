import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <title>Graph PreQL</title>
        <meta name="description" content="プリキュアのGraphQLAPI" />
        <meta property="og:title" content="Graph PreQL" />
        <meta property="og:url" content="https://graph-preql.vercel.app" />
        <meta name="description" content="プリキュアのGraphQLAPI" />
        <meta property="og:image" content="https://graph-preql.vercel.app/logo.png" />
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_SITE_VERIFICATION} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@mu_tomoya" />
        <meta name="twitter:description" content="プリキュアのGraphQLAPI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
