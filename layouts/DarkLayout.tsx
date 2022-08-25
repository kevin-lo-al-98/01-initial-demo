import React, {FC, ReactNode} from "react";

import styles from "./MainLayout.module.css";
interface BaseLayoutProps {
    children?: ReactNode;
}
export const DarkLayout: FC<BaseLayoutProps> = ( { children } ) => {
  return (
      <div className={styles.container}>
          <h3>Dark layout</h3>
          <main className={styles.main}>
              {children}
          </main>
      </div>
  )
}