import Image from "next/image";
import { Button, Card } from "react-bootstrap";
import subordinate from './subordinate.module.scss'
import parse from 'html-react-parser'
import myImageLoader from "../../loader";

export default function Subordinate(params) {
  return (
    <div className={subordinate.card}>
      <div className={subordinate.header}>
        <h3>{params.title}</h3>
      </div>
      <div className={subordinate.body}>
        <div className="img_container_md">
          <Image loader={myImageLoader} alt='some' src={params.image} layout="fill" className="image" />
        </div>

        <div className={subordinate.content}>
          <div className={subordinate.info}>
            {parse(params.info)}
          </div>
          
          <div>
            <h4>Контактная информация</h4>
            <p>{params.address}</p>
            <p>Контактный телефон: {params.phone}</p>
            <p>Электронная почта: {params.email}</p>
          </div>

        </div>
      </div>
      <div className={subordinate.footer}>
        <div className={subordinate.social_media}>
          <Image loader={myImageLoader} alt="some" src='/vk_logo.png' width={40} height={40} className={subordinate.image + "dark:grayscale"} />
          <Image loader={myImageLoader} alt="some" src='/vk_logo.png' width={40} height={40} className={subordinate.image + "dark:grayscale"} />
          <Image loader={myImageLoader} alt="some" src='/vk_logo.png' width={40} height={40} className={subordinate.image + "dark:grayscale"} />
          <Image loader={myImageLoader} alt="some" src='/vk_logo.png' width={40} height={40} className={subordinate.image + "dark:grayscale"} />
          <Image loader={myImageLoader} alt="some" src='/vk_logo.png' width={40} height={40} className={subordinate.image + "dark:grayscale"} />
          <Image loader={myImageLoader} alt="some" src='/vk_logo.png' width={40} height={40} className={subordinate.image + "dark:grayscale"} />
        </div>

        <Button className="button" href={params.webSiteUrl}>Перейти на сайт</Button>
      </div>
    </div>
  )
}