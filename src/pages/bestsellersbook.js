import React, { useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { getBooksAction } from "@/redux/action/getBooksAction";
import styles from "../styles/homePage.module.scss";
import Link from "next/link";

export default function bestsellersbook() {
  const dispatch = useDispatch();
  const booksData = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(getBooksAction("best+sellers"));
  }, []);

  console.log(booksData);

  return (
    <>
      <Head>
        <title>Magic Books | Best Sellers</title>
        <meta name="description" content="MagicBook Booksapp googleBooksApi " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.section1}>
        {booksData?.data?.items?.map((book, index) => {
          return (
            <div key={index} className={styles.cards}>
              <div className={styles.card}>
                <Link href={`/${book?.id}`}>
                  <img
                    src={book?.volumeInfo?.imageLinks?.smallThumbnail}
                    alt="bookImage"
                  />
                </Link>
                <div>
                  <p>
                    {book?.volumeInfo?.description?.slice(0, 50)}....{" "}
                    <span>
                      <Link href={`/${book?.id}`}>more</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
