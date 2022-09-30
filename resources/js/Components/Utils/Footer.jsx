import { Typography } from "@material-tailwind/react";

export default function Footer() {
    return (
        <div className="bg-primary-500 text-white fixed bottom-0 w-full">
            <div className="flex flex-col container mx-auto max-w-7xl md:flex-row md:justify-between md:gap-10 lg:gap-x-20 p-5 gap-y-3 divide-y divide-primary-900 md:divide-y-0">
                <div className="flex flex-col gap-y-1 md:max-w-xs xl:max-w-xl">
                    <Typography variant="h4" className="uppercase">
                        topup-in
                    </Typography>
                    <Typography variant="paragraph" className="font-medium">
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </div>
                <div className="flex flex-col gap-y-1 md:max-w-xs xl:max-w-xl">
                    <Typography variant="lead" className="font-medium">
                        Other Links
                    </Typography>
                    <Typography variant="paragraph" className="font-medium">
                        <ul className="capitalize">
                            <li>about store</li>
                            <li className="uppercase">faq</li>
                            <li>Payment method</li>
                            <li>term of service</li>
                        </ul>
                    </Typography>
                </div>
                <div className="flex flex-col gap-y-1 md:max-w-xs xl:max-w-xl">
                    <Typography
                        variant="lead"
                        className="font-medium capitalize"
                    >
                        payment gateway
                    </Typography>
                    <div></div>
                </div>
            </div>
            <footer className="md:text-center p-5">
                <Typography variant="h6">2022 &copy; Topup-in</Typography>
            </footer>
        </div>
    );
}
