import { Link } from "@inertiajs/inertia-react";
import {
    Chip,
    menu,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
} from "@material-tailwind/react";
import AboutType from "../PagesComponent/AboutType";
import ContentTemplate from "../PagesComponent/ContentTemplate";

export default function OtherPageContent({ Auth, Menu }) {
    return (
        <ContentTemplate Auth={Auth}>
            <div className="flex flex-col gap-5">
                <Tabs value="faq">
                    <TabsHeader>
                        {Menu.map((menu, i) => {
                            return (
                                <Tab key={i} value={menu.name_page}>
                                    {menu.name_page}
                                </Tab>
                            );
                        })}
                    </TabsHeader>
                    <TabsBody>
                        {Menu.map((menu, i) => {
                            return (
                                <TabPanel key={i} value={menu.name_page}>
                                    <div className="bg-white h-[39rem] w-full p-5 flex flex-col gap-4  overflow-y-auto">
                                        <AboutType title={menu.name_page}>
                                            {menu.content_page}
                                        </AboutType>
                                    </div>
                                </TabPanel>
                            );
                        })}
                    </TabsBody>
                </Tabs>
            </div>
        </ContentTemplate>
    );
}
