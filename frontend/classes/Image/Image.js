import Image from "next/image";
import myImageLoader from "../../loader";

class ImageGetter {

  getImagesList(params) {

    try {
      if (!params) {
        let images = []

        params.map((item) => {
          images.push(process.env.APIpath + item.url)
        })

        return images
      }
      else {

      }
    }
    catch (error) {
      console.error(error)
    }
  }

  imagePreview(images) {

    try {
      if (typeof images !== 'undefined') {
        return <Image loader={myImageLoader} alt='some' src={images} layout='fill' className="dark:grayscale" />
      }

      else {
        return <Image loader={myImageLoader} alt='some' src='/fourthree.jpeg' layout='fill' className="dark:grayscale" />
      }
    }
    catch (error) {
      console.error(error)
    }
  }
}

export default new ImageGetter