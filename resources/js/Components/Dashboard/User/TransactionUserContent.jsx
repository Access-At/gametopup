import ContentTemplate from "@/Components/PagesComponent/ContentTemplate";
import TransactionCard from "@/Components/PagesComponent/TransactionCard";

export default function TransactionUserContent() {
    return (
        <ContentTemplate Auth={true}>
            <div className="flex flex-col">
                <div className="bg-primary-500 text-white rounded-t p-4">
                    Your Transaction Purchase
                </div>
                <div className="flex flex-col bg-white rounded-b h-[30rem] p-4 gap-5 overflow-y-auto">
                    <TransactionCard
                        image="https://via.placeholder.com/100x100"
                        invoice="#TOPUP-1919498990"
                        isSuccess={true}
                    />
                    <TransactionCard
                        image="https://via.placeholder.com/100x100"
                        invoice="#TOPUP-1919498990"
                        isSuccess={true}
                    />
                    <TransactionCard
                        image="https://via.placeholder.com/100x100"
                        invoice="#TOPUP-1919498990"
                        isSuccess={true}
                    />
                    <TransactionCard
                        image="https://via.placeholder.com/100x100"
                        invoice="#TOPUP-1919498990"
                        isSuccess={true}
                    />
                    <TransactionCard
                        image="https://via.placeholder.com/100x100"
                        invoice="#TOPUP-1919498990"
                        isSuccess={false}
                    />
                    <TransactionCard
                        image="https://via.placeholder.com/100x100"
                        invoice="#TOPUP-1919498990"
                        isSuccess={false}
                    />
                </div>
            </div>
        </ContentTemplate>
    );
}
