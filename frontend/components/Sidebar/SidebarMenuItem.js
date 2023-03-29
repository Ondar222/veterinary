import { useRouter } from "next/router"

const SidebarMenuItem = (params) => {

  const router = useRouter()
  
  return (
      <li className="sm:hidden md:flex lg:flex flex flex-row items-center gap-2 text-xs"
          onClick={() => router.push(params.url)}>
          <p className="hover:text-white hover:scale-105 cursor-pointer">
              {params.title}
          </p>
      </li>
  )
}

export default SidebarMenuItem