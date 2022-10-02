import { Typography } from "@material-tailwind/react";
import NavbarBottom from "@/Components/PagesComponent/NavbarBottom";

export default function Footer() {
  return (
    <>
      <div className=" bg-primary-500 text-white flex flex-col mt-5 lg:mb-0 mb-12">
        <div className="flex flex-col container mx-auto max-w-7xl md:flex-row md:justify-between md:gap-10 lg:gap-x-20 p-5 gap-y-3 divide-y divide-primary-900 md:divide-y-0">
          <div className="flex flex-col gap-y-1 md:max-w-xs xl:max-w-xl">
            <Typography variant="h4" className="uppercase">
              topup-in
            </Typography>
            <Typography variant="paragraph" className="font-medium">
              It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, ands
              more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </div>
          <div className="flex flex-col gap-y-1 md:max-w-xs xl:max-w-xl">
            <Typography variant="lead" className="font-medium">
              Other Links
            </Typography>
            <ul className="capitalize">
              <Typography
                variant="paragraph"
                className="font-medium"
              >
                <li>about store</li>
                <li className="uppercase">faq</li>
                <li>Payment method</li>
                <li>term of service</li>
              </Typography>
            </ul>
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
      <NavbarBottom />
    </>
  );
}
