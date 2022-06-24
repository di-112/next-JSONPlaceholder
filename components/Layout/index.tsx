import React, {FC, ReactNode} from 'react';
import Header from "./components/Header";
import Head from "next/head";
import styles from "./style.module.scss";
import Footer from "./components/Footer";

interface ILayout {
  children: ReactNode
}

const Layout:FC<ILayout> = ({children}) => {
  return (<div className={styles.layout}>
    <Head  >
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className={styles.main}>
      {children}
    </main>
    <Footer/>
    </div>);
};

export default Layout;