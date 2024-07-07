import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          property="og:title"
          content="WEB3 NEXUS SPACE - the Space for Web3 Nexus!"
        ></meta>
        <meta
          property="og:description"
          content="WEB3 NEXUS SPACE is a pioneering Web3 project with the ambition to connect projects with every possible entity within the Web3 ecosystem..."
        ></meta>
        <meta property="og:image" content="https://ibb.co/Zh16YVZ"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
