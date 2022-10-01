
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function CardContent() {
  return (
    <div className="card">
      <CardHeader
        color="blue"
        className="relative h-56"
      >
        <img
          src="https://www.material-tailwind.com/_next/image?url=%2Fimg%2Fblog.jpg&w=3840&q=75"
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" className="mb-2 text-center">
          Cozy 5 Stars Apartment
        </Typography>
        <Typography className="text-justify">
          The place is close to Barceloneta Beach
          and bus stop just 2 min by walk and near
          to "Naviglio" where you can enjoy the
          main night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter
        divider
        className="flex items-center justify-between py-3"
      >
        <Button fullWidth className="bg-primary-500/80 hover:shadow-primary-500/50">Topup Game</Button>
      </CardFooter>
    </div>

  )
}
