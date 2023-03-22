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
          <Link href={"/bestsellers"}>Best Sellers Books</Link>
          <div className={styles.toggleMode}>
            <i
              className="fa-solid fa-moon"
              // onClick={() => {
              //   setToggleMode(false);
              // }}
            ></i>

            {/* <i
              className="fa-solid fa-sun"
              onClick={() => {
                setToggleMode(true);
              }}
            ></i> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
