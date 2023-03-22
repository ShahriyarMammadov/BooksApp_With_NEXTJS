import axios from "axios";

export default function BookDetail({ detailData }) {
  return (
    <div>
      <div className="detailCard">
        <div className="imageLeft">
          <img
            width={350}
            height={500}
            src={detailData?.volumeInfo?.imageLinks?.smallThumbnail}
            alt="detailBook"
          />
        </div>
      </div>
    </div>
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
