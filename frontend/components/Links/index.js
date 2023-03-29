import Image from "next/image"
import Link from "next/link"
import myImageLoader from "../../loader"

export const ImageLink = (params) => {

  return (
    <Link href={params.url}>
      <Image loader={myImageLoader} src={params.image} alt='some.png' width={350} height={233} loading='lazy' className='dark:grayscale' />
    </Link>
  )
}