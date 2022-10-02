import SidebarMenu from "../PagesComponent/SidebarMenu";
import Template from "../PagesComponent/Template";

export default function ContentTemplate({ children }) {
  return (
    <>
      <div className="max7xl">
        {/* sidebar */}
        <SidebarMenu />
        {/* content */}
        {/* dibagain sini udh semua isi content */} {/* OK !!! */}
        <Template>
          {children}
        </Template>
      </div>

    </>
  )
}
