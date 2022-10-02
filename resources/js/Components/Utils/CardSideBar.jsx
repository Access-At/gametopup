import { Link } from "@inertiajs/inertia-react";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function CardSidebar({ title, icon, links, active = false }) {

  return (
    <>
      <Card
        className={`rounded-sm w-40 mb-2 ${!active ? "cursor-pointer" : ""}`}
      >
        <Link href={links}>
          <CardBody
            className={`flex flex-col items-center ${active ? "bg-primary-500 text-white" : ""} `}
          >
            <Typography variant="h1" className="text-center">
              {icon}
            </Typography>
            <Typography variant="h6" className="mb-2">
              {title}
            </Typography>
          </CardBody>
        </Link>
      </Card>
    </>
  );
}
