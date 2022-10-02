import { Link } from "@inertiajs/inertia-react";
import { Chip } from "@material-tailwind/react";
import AboutType from "../PagesComponent/AboutType";
import ContentTemplate from "../PagesComponent/ContentTemplate";

export default function AboutStoreContent() {
  return (
    <ContentTemplate >
      <div className="flex flex-col gap-7">
        {/* breadcrumbs */}

        <div className="flex gap-4">
          <Link href={route("home")}>
            <Chip value="Homepage" className="bg-white text-primary-500" />
          </Link>
          <Link>
            <Chip value="About Store" className="bg-primary-500 text-white" />
          </Link>
        </div>
        <div className="bg-white h-[39rem] w-full p-5 flex flex-col gap-4  overflow-y-auto">
          <AboutType title="What is Lorem Ipsum?">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </AboutType>

          <AboutType title="What is Lorem Ipsum?">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </AboutType>

          <AboutType title="What is Lorem Ipsum?">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </AboutType>

          <AboutType title="What is Lorem Ipsum?">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </AboutType>
        </div>
      </div>
    </ContentTemplate >
  )
}
