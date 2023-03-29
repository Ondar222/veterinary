import SidebarMenu from "../../components/Sidebar/SidebarMenu"
import SidebarMenuItem from "../../components/Sidebar/SidebarMenuItem"
import { useEffect, useState } from "react"

const CivilservicePageLayout = ({ children }) => {
  const [menu, setMenu] = useState()
  const getData = async () => {
    await fetch(`${process.env.APIpath}/api/civilservice-pages?sort=sorting:ASC&populate=*`, {
      headers: {
        Authorization: `Bearer ${process.env.token}`
      }
    })
      .then((res) => res.json())
      .then((res) => res.data)
      .then((res) => setMenu(res.filter((data, index) => index != 0)))
      .catch((e) => console.error(e))
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div className="container mx-auto flex flex-row gap-5 text-black font-light min-h-[500px] py-10">
        <SidebarMenu>
          {menu?.map((item) =>
            <SidebarMenuItem
              key={item.id}
              url={`/civilservice/${item.title}`}
              title={item.title} />)}
        </SidebarMenu>

        <div className="xs:full md:w-9/12 leading-7 [&>p]:pb-3 [&>ul]:list-disc py-3">
          {children}
        </div>
      </div>
    </>
  )
}

export default CivilservicePageLayout