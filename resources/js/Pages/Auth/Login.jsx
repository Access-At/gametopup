import { Button, Input } from "@material-tailwind/react";

export default function Login() {
    return (
        <form className="flex flex-col gap-3">
            <Input
                size="lg"
                label="Username"
                type="text"
                className="focus:ring-0"
            />
            <Input
                size="lg"
                label="Password"
                type="password"
                className="focus:ring-0"
            />
            <Button className="bg-primary-500 hover:shadow-primary-500/50">
                Sign In
            </Button>
        </form>
    );
}
