import Loading from "@/components/loading";
import SelectComponent from "@/components/select";
import { getBooksAction } from "@/redux/action/getBooksAction";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/homePage.module.scss";
import { Input, Button, message } from "antd";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const booksData = useSelector((state) => state.booksReducer);
  const [searchText, setSearchText] = useState("education");
  const { Search } = Input;
  const [messageApi, contextHolder] = message.useMessage();

  const onSearch = (value) => {
    if (value.trim() === "") {
      error();
    } else {
      dispatch(getBooksAction(value));
    }
  };

  useEffect(() => {
    dispatch(getBooksAction(searchText));
  }, []);

  const error = () => {
    messageApi.open({
      type: "error",
      content: "The length of value must be greater than 1",
    });
  };

  return (
    <>
      <Head>
        <title>Magic Books</title>
        <meta name="description" content="MagicBook Booksapp googleBooksApi " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {booksData.loading ? (
        <Loading />
      ) : (
        <>
          <main className={styles.homeMain}>
            <div className={styles.components}>
              <div className={styles.searchInput}>
                <Search
                  placeholder="input search text"
                  allowClear
                  enterButton="Search"
                  size="large"
                  onSearch={onSearch}
                />
              </div>
              <SelectComponent />
            </div>
            {contextHolder}
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
          </main>
        </>
      )}
    </>
  );
}
