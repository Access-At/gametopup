import SidebarMenu from "../PagesComponent/SidebarMenu";
import Template from "../PagesComponent/Template";

export default function ContentTemplate({ children, Auth }) {
    return (
        <>
            <div className="max7xl">
                {/* sidebar */}
                <SidebarMenu Auth={Auth} />
                {/* content */}
                {/* dibagain sini udh semua isi content */} {/* OK !!! */}
                <Template>{children}</Template>
            </div>
        </>
    );
}
