import ContentTemplate from "@/Components/PagesComponent/ContentTemplate";
import { Typography } from "@material-tailwind/react";

export default function UserContent({ Auth }) {
    return (
        <ContentTemplate Auth={Auth}>
            <div className="flex flex-col gap-8">
                <div className="flex gap-2 bg-white rounded p-4 text-primary-500">
                    <Typography>Welcome back,</Typography>
                    <Typography variant="h6">{Auth.user.username}</Typography>
                </div>
                <div>masih belom ada design</div>
            </div>
        </ContentTemplate>
    );
}
