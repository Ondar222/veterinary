import Image from "next/image"
import myImageLoader from "../../loader"

export default function imagePreview(upload_urls) {
  if (typeof upload_urls !== 'undefined') {
    return <Image loader={myImageLoader} alt='some' src={upload_urls} width={600} height={400} objectFit="cover" className="dark:grayscale"/>
  }

  else {
    return <Image loader={myImageLoader} alt='some' src='/news_1.jpg' width={600} height={400} objectFit="cover" className="dark:grayscale"/>
  }
}