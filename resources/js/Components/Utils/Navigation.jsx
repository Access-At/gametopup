import Login from "@/Pages/Auth/Login";
import Register from "@/Pages/Auth/Register";
import {
    Button,
    Navbar,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
} from "@material-tailwind/react";
import Popup from "./Popup";
import { FaAlignLeft } from "react-icons/fa";
import { Link, usePage } from "@inertiajs/inertia-react";
import Sidebar from "../PagesComponent/Sidebar";

export default function Navigation({ Auth }) {
    const { url } = usePage();
    const data = [
        { title: "Sign In", value: "signin", component: <Login /> },
        { title: "Sign Up", value: "signup", component: <Register /> },
    ];

    const urlList = ["/", "/price", "/check-invoice", "/about-store", "/other"];
    const urlListDashboard = [
        "/dashboard/user",
        "/dashboard/user/transaction",
        "/dashboard/user/settings",
    ];

    return (
        <Navbar
            fullWidth={true}
            blurred={false}
            className="rounded-none bg-primary-500 sticky top-0 z-10"
        >
            <div className="container flex justify-between max-w-7xl mx-auto items-center">
                <div className="font-bold text-lg lg:text-xl uppercase flex items-center gap-3">
                    <Sidebar
                        Auth={Auth}
                        activator={({ setIsOpen }) => (
                            <button
                                className="lg:hidden block"
                                onClick={() => setIsOpen(true)}
                            >
                                <FaAlignLeft />
                            </button>
                        )}
                    />
                    <Link className="lg:text-2xl text-lg">topup-in</Link>
                </div>

                {Auth.user === null && (
                    <div>
                        <Popup
                            activator={({ handleOpen }) => (
                                <Button
                                    variant="text"
                                    color="white"
                                    onClick={handleOpen}
                                    className="text-lg lg:text-2xl"
                                >
                                    Sign in
                                </Button>
                            )}
                        >
                            <Tabs
                                value="signin"
                                className="container flex flex-col bg-white text-white p-5 rounded"
                            >
                                <TabsHeader>
                                    {data.map(({ title, value }) => (
                                        <Tab key={value} value={value}>
                                            {title}
                                        </Tab>
                                    ))}
                                </TabsHeader>
                                <TabsBody
                                    animate={{
                                        mount: { x: 0 },
                                        unmount: { x: 250 },
                                    }}
                                >
                                    {data.map(({ value, component }) => (
                                        <TabPanel key={value} value={value}>
                                            {component}
                                        </TabPanel>
                                    ))}
                                </TabsBody>
                            </Tabs>
                        </Popup>
                    </div>
                )}

                {Auth.user !== null && urlList.includes(url) && (
                    <Link href={route("users.dashboard")} method="get">
                        <Button
                            variant="text"
                            color="white"
                            className="text-lg lg:text-2xl"
                        >
                            Dashboard
                        </Button>
                    </Link>
                )}

                {Auth.user !== null && urlListDashboard.includes(url) && (
                    <Link href={route("logout")} method="post">
                        <Button
                            variant="text"
                            color="white"
                            className="text-lg lg:text-2xl"
                        >
                            Logout
                        </Button>
                    </Link>
                )}
            </div>
        </Navbar>
    );
}
