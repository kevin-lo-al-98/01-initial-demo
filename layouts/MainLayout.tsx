import {FC, ReactNode} from 'react';

import Head from 'next/head';

import {NavBar} from "../components/Navbar/Navbar";

import styles from "./MainLayout.module.css";

interface BaseLayoutProps {
    children?: ReactNode;
}

export const MainLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
      <div className={styles.container}>
          <Head>
              <title>Home</title>
              <meta name="description" content="Home page" />
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <NavBar />

          <main className={styles.main}>
              {children}
          </main>

      </div>
  )
}