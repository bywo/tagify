import React from "react";
import App, { Container } from "next/app";
import Router from "next/router";
import Head from "next/head";
import "normalize.css";
import withGA from "next-ga";
import "../data/analytics";

export default withGA(
  "UA-130563636-1",
  Router,
)(function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,500i,600,700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style global jsx>
        {`
          body {
            font-family: Raleway, sans-serif;
            background: #ddd;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
});
