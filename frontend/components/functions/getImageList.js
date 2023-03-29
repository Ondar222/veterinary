export default function getImageList(params) {

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