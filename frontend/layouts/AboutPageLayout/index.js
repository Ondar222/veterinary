import SidebarMenu from '../../components/Sidebar/SidebarMenu'
import SidebarMenuItem from '../../components/Sidebar/SidebarMenuItem'
import { observer } from 'mobx-react-lite'
import dynamicPageRoutingSlice from '../../store/dynamicPageRoutingSlice'
import { useCallback } from 'react'

export const AboutPageLayout = observer(({ children }) => {
  const getRoutes = useCallback(() => {
    dynamicPageRoutingSlice.getAboutPageRoutes()
  }, [])
  
  return (
    <>
      <div className="container mx-auto text-black font-light min-h-[500px] py-10">
        <div className="flex xs:flex-col md:flex-row gap-5">
          <SidebarMenu>
            <SidebarMenuItem url='/management' title='Руководство' />
            <SidebarMenuItem url='/civilservice' title='Государственная служба'
            />
            {
              dynamicPageRoutingSlice.aboutPage?.map((item, index) => {
                return index != 0 ?
                  <SidebarMenuItem
                    key={item.id}
                    url={`/about/${item.title}`}
                    title={item.title}
                  />
                  :
                  null
              })
            }
          </SidebarMenu>
          <div className="xs:w-full md:w-9/12 [&>ul]:list-disc [&>p]:text-justify sm:py-3 xs:py-3 md:py-0 lg:py-0">
            {children}
          </div>
        </div>
      </div>
    </>
  )
})