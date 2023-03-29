import { useEffect, useState } from "react"
import MobileMenu from "../../components/MobileMenu"
import MobileMenuItem from "../../components/MobileMenu/MobileMenuItem"
import SidebarMenu from "../../components/Sidebar/SidebarMenu"
import SidebarMenuItem from "../../components/Sidebar/SidebarMenuItem"

const ActivityPageLayout = ({ children }) => {
  const [menu, setMenu] = useState()
  const getData = async () => {
    await fetch(`${process.env.APIpath}/api/activity-pages?sort=sorting:ASC&populate=*`, {
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
      <div className="container mx-auto text-black font-light min-h-[500px] py-10">

        <div className="flex xs:flex-col md:flex-row gap-5">
          <SidebarMenu>
            {/* <SidebarMenuItem
              url={`/activity/projects`}
              title="Проекты" /> */}
            {menu?.map((item) =>
              <SidebarMenuItem
                key={item.id}
                url={`/activity/${item.title}`}
                title={item.title} />)}
          </SidebarMenu>

          <div className='xs:full md:w-9/12 leading-7 [&>p]:pb-3 [&>ul]:list-disc py-3'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default ActivityPageLayout