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
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600"
          rel="stylesheet"
        />
      </Head>
      <style global jsx>
        {`
          body {
            font-family: "Source Sans Pro", sans-serif;
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
