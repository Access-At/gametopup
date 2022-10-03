import ContentTemplate from "@/Components/PagesComponent/ContentTemplate";

export default function SettingsUserContent() {
    return (
        <ContentTemplate Auth={true}>
            <div className="flex flex-col">
                <div className="bg-primary-500 text-white rounded-t p-4">
                    Edit Data User
                </div>
                <div className="flex flex-col bg-white rounded-b h-[30rem] p-4 gap-5 overflow-y-auto"></div>
            </div>
        </ContentTemplate>
    );
}
