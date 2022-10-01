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
import { Link } from "@inertiajs/inertia-react";
import Sidebar from "../PagesComponent/Sidebar";

export default function Navigation() {
    const data = [
        { title: "Sign In", value: "signin", component: <Login /> },
        { title: "Sign Up", value: "signup", component: <Register /> },
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
            </div>
        </Navbar>
    );
}
