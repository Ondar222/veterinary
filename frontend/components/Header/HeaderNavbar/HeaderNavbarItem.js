import Link from "next/link"

const HeaderNavbarItem = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className="h-full min-h-[50px] flex items-center text-md font-normal cursor-pointer px-1">
        {children}
      </a>
    </Link>
  )
}

export default HeaderNavbarItem