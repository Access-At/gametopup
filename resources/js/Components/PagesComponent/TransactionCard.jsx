import { Avatar, Chip, Typography } from "@material-tailwind/react";

export default function TransactionCard({ image, invoice, isSuccess = false }) {
    return (
        <div className="flex justify-between items-center bg-white border border-primary-500 w-full p-3 rounded">
            <div className="flex items-center gap-4">
                <Avatar src={image} variant="circular" />
                <Typography variant="h6">{invoice}</Typography>
            </div>
            <Chip
                value={isSuccess ? "success" : "process"}
                className={isSuccess ? "bg-green-500" : ""}
            />
        </div>
    );
}
