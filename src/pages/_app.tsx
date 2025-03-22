import type { AppProps } from "next/app";
import "../styles/scss/style.scss";
import Head from "next/head";
import Layout from "@/layout/layout";
import AppProvider from "@/context/AppContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>What</title>
        <meta name="title" content="What" />
        <meta name="description" content="" />
        <meta name="keywords" content="tianshan, what" />
      </Head>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  );
}
