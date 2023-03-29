import Image from "next/image";
import Link from "next/link";
import { unixTimeConverter } from "./functions/unixTimeConverter";

const FormattedDate = (params) => {
  const date = new Date(params.date);
  const timestamp = date.valueOf();

  const formattedDate = new Intl.DateTimeFormat("ru-RU", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(timestamp);

  return formattedDate;
};

export default FormattedDate;

const LastPosts = (params) => {
  return (
    <div className="last-news">
      <Link href="/news">
        <a className="font-semibold text-xl text-blue-800 tracking-wider">
          Все новости
        </a>
      </Link>
      <div className="last-news__container">
        {params?.news?.map((item) => {
          return (
            <div
              key={item.id}
              className="last-news__card first:relative first:flex-[0_0_auto] w-1/3 first:w-2/3 h-full md:first:h-[400px] odd:px-2 even:px-2 mt-5"
            >
              <div className="relative h-full w-full min-w-[200px] min-h-[200px]">
                <Image
                  src={process.env.APIpath + item.post_card.image.url}
                  className="first:max-w-full first:max-h-[400px] max-w-[300px] max-h-[200px] h-[200px]"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="last-news__card-content__container">
                <div className="last-news__card-content opacity-75 mr-5">
                  <Link href={`/news/${item.id}`}>
                    <a className="last-news__card-title">
                      <h3 className="text-lg break-words overflow-hidden text-ellipsis whitespace-nowrap">
                        {item.title}
                      </h3>
                    </a>
                  </Link>

                  <div className="last-news__card-date text-sm">
                    <FormattedDate date={item.publishedAt} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { LastPosts };
