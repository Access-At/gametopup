import { Typography } from "@material-tailwind/react";

export default function AboutType({ title, children }) {
  return (
      <div className="flex flex-col gap-1 text-justify">
          <Typography variant="h6">{title}</Typography>
          <Typography>{children}</Typography>
      </div>
  );
}
