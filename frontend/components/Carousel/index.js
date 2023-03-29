import Image from 'next/image'
import myImageLoader from '../../loader';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import parser from "html-react-parser"

const Carousel = (params) => {
    return <div className="index-page-slider w-full left-0 right-0">
        <Slider adaptiveHeight>
            {params.slider.map((item, index) => {
                return (
                    <div key={index} className="item">
                        <div className="container mx-auto relative grid sm:grid-cols-1 md:grid-cols-2">
                            <div className="text select-none xs:absolute top-0 right-0 bottom-0 sm:absolute md:static md:flex flex-col justify-center items-center">
                                <div className="text-lg p-5">{item.title}</div>
                                <div className="w-full text-md px-5">{parser(item?.content)}</div>
                            </div>
                            <div className="relative block w-full h-full
                                            sm:min-w-full sm:max-h-[300px] sm:min-h-[300px]
                                            xs:min-w-full xs:max-h-[300px] xs:min-h-[300px]
                                            md:min-w-full md:min-h-[400px] md:max-h-[400px]">
                                <Image
                                    src={process.env.APIpath + item.image.url}
                                    loader={myImageLoader}
                                    alt="First slide"
                                    layout="fill"
                                    objectFit="contain"
                                    objectPosition="center"
                                    className="dark:grayscale cursor-pointer"
                                />
                            </div>

                        </div>
                    </div>
                );
            })}
        </Slider>
    </div>
}
export default Carousel