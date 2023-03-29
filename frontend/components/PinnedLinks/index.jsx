import Image from "next/image";
import Link from "next/link";

const PinnedLinks = (params) => {
  return (
    <>
      {params.pinned_links.map((item) => {
        return (
          <Link
            href={item.url}
            key={item.id}
            className="min-w-60 min-h-60 cursor-pointer"
          >
            <a>
              <Image
                src={`${process.env.APIpath}${item.image.url}`}
                alt="First slide"
                width={250}
                height={240}
                priority="true"
                loading="eager"
                layout={"responsive"}
                objectFit={"contain"}
                className="min-w-40 min-h-40 dark:grayscale cursor-pointer"
              />
            </a>
          </Link>
        );
      })}
    </>
  );
};

export default PinnedLinks;
