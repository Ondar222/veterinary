import Link from "next/link"

const MobileMenuItem = (params) => {

  return (
      <li className="text-white font-semibold tracking-wider">
          <Link href={params.url}><a>{params.title}</a></Link>
      </li>
  )
}

export default MobileMenuItem