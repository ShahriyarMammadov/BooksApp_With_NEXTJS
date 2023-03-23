import Link from "next/link";
import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <>
      <header id={styles.header}>
        <div className={styles.logo}>
          <Link href={"/"}>Magic Books</Link>
        </div>
        <nav className={styles.navBar}>
          <Link href={"/bestsellersbook"}>Best Sellers Books</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
