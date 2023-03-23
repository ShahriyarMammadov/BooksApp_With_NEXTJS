import axios from "axios";
import Head from "next/head";
import style from "../styles/details.module.scss";

export default function BookDetail({ detailData }) {
  console.log(detailData);
  return (
    <>
      <Head>
        <title>{detailData?.volumeInfo?.title}</title>
        <meta
          name="description"
          content="books google books api myBook magicbook"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.parentDiv}>
        <div className={style.detailCard}>
          <div className={style.imageLeft}>
            <img
              src={detailData?.volumeInfo?.imageLinks?.smallThumbnail}
              alt="detailBook"
            />
          </div>

          <div className={style.rightDetail}>
            <div className={style.authorInfo}>
              <div className={style.author}>
                {detailData?.volumeInfo?.authors?.map((author, i) => {
                  return (
                    <h2 key={i}>
                      <span>Author:</span> {author}
                    </h2>
                  );
                })}
                <h2>
                  <span>Title:</span> {detailData?.volumeInfo?.title}
                </h2>
              </div>
              <div className={style.categories}>
                <h4>
                  <span>Categories:</span>{" "}
                  {detailData?.volumeInfo?.categories &&
                    detailData?.volumeInfo?.categories[0]}
                </h4>
                <h4>
                  <span>Language:</span> {detailData?.volumeInfo?.language}
                </h4>
              </div>
            </div>

            <div className={style.description}>
              <p>
                <span>Description:</span> {detailData?.volumeInfo?.description}
              </p>

              <div className={style.dimension}>
                <h5>
                  <span>Width:</span>{" "}
                  {detailData?.volumeInfo?.dimensions?.width}
                </h5>
                <h5>
                  <span>Height:</span>{" "}
                  {detailData?.volumeInfo?.dimensions?.height}
                </h5>
                <h5>
                  <span>thickness:</span>{" "}
                  {detailData?.volumeInfo?.dimensions?.thickness}
                </h5>
                <h5>
                  <span>Page Count:</span> {detailData?.volumeInfo?.pageCount}
                </h5>
                <h5>
                  <span>Type:</span> {detailData?.volumeInfo?.printType}
                </h5>
                <h5>
                  <span>Published Date:</span>{" "}
                  {detailData?.volumeInfo?.publishedDate}
                </h5>
                <h5>
                  <span>Publisher:</span> {detailData?.volumeInfo?.publisher}
                </h5>
              </div>
            </div>

            <div className={style.identifier}>
              {detailData?.volumeInfo?.industryIdentifiers?.map(
                (identifier, i) => {
                  return (
                    <>
                      <h5 key={i}>
                        <span>Identifier:</span> {identifier.identifier}
                      </h5>
                      <h5 key={i}>
                        <span>Type:</span> {identifier.type}
                      </h5>
                    </>
                  );
                }
              )}
            </div>

            <div className={style.saleInfo}>
              <h3>
                <span>Your Country:</span> {detailData?.saleInfo?.country}
              </h3>
              <h3>
                <span>Sale:</span> {detailData?.saleInfo?.saleability}
              </h3>
            </div>

            <a href={detailData?.volumeInfo?.infoLink} target="_blank">
              More Info
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    const detailData = response.data;
    return {
      props: {
        detailData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}
