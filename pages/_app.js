import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import "normalize.css";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600"
            rel="stylesheet"
          />
        </Head>
        <style global jsx>{`
          body {
            font-family: "Source Sans Pro", sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
        <Component {...pageProps} />
      </Container>
    );
  }
}
