import { Link } from "@inertiajs/inertia-react";
import { Chip, Input } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import ContentTemplate from "../PagesComponent/ContentTemplate";
import InvoiceCard from "../PagesComponent/InvoiceCard";

export default function CheckOrderContent({ Auth }) {
    return (
        <ContentTemplate Auth={Auth}>
            <div className="flex flex-col gap-5">
                {/* breadcrumbs */}

                <div className="flex gap-4">
                    <Link href={route("home")}>
                        <Chip
                            value="Homepage"
                            className="bg-white text-primary-500"
                        />
                    </Link>
                    <Link>
                        <Chip
                            value="Check Order"
                            className="bg-primary-500 text-white"
                        />
                    </Link>
                </div>

                <section className="flex flex-col gap-5">
                    <Input
                        label="Enter your check order invoice"
                        icon={<FaSearch />}
                    />
                    <InvoiceCard
                        invoice="#TOPUP-19194xxxxx"
                        image="https://via.placeholder.com/100x100"
                    />
                    <InvoiceCard
                        invoice="#TOPUP-19194xxxxx"
                        isSuccess={true}
                        image="https://via.placeholder.com/100x100"
                    />
                    <InvoiceCard
                        invoice="#TOPUP-19194xxxxx"
                        isSuccess={true}
                        image="https://via.placeholder.com/100x100"
                    />
                    <InvoiceCard
                        invoice="#TOPUP-19194xxxxx"
                        image="https://via.placeholder.com/100x100"
                    />
                </section>
            </div>
        </ContentTemplate>
    );
}
