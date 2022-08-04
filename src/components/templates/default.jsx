import Head from "next/head";
import styles from "./default.module.scss";
import dynamic from "next/dynamic";
import { Suspense } from "react";

//Prevent html being match between server and client
const BaseHeader = dynamic(() => import("../organisms/BaseHeader/baseHeader"), {
  suspense: true,
});

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Layouts Default</title>
      </Head>
      <div className={styles.defaultLayout}>
        <Suspense fallback={`Loading...`}>
          <BaseHeader />
        </Suspense>
        <div className={styles.defaultContainer}>{children}</div>
      </div>
    </>
  );
}
