import Image from 'next/image'
import Link from 'next/link'
import project from './project.module.scss'
import parse from 'html-react-parser'
import {PageName} from '../PageName/PageName'
import myImageLoader from '../../loader'

const ProjectCard = (params) =>
    <div className={project.card}>
        <div className={project.header}>
            <h3>{params.title}</h3>
        </div>

        <div className={project.body}>
            <div className='img_container_md'>
                <Image loader={myImageLoader} alt='some' src={process.env.APIpath + params.image} width={300} height={200} layout="responsive"
                       objectFit='cover' className='dark:grayscale'/>
            </div>

            <div className={project.content}>
                {parse(params.shortDescription)}

                <Link href={`${process.env.APIpath}` + params.documentURL} className='button dark:bg-gray-500'>Паспорт программы
                </Link>
            </div>
        </div>

        <div className={project.footer}>
            <p>Статус: {params.status}</p>

            <Link href={params.href}><a className='button dark:bg-gray-500'>Подробнее</a></Link>
        </div>
    </div>


export const ProjectPages = (params) =>
    <>
        <PageName title={params.title}/>
        <div className={project.page}>
            <div>
                {parse(params.description)}
            </div>
            <div>
                <Link href={`${process.env.APIpath}` + params.documentURL} className='button dark:bg-gray-500'>Паспорт программы
                </Link>
            </div>
        </div>
    </>


export default ProjectCard