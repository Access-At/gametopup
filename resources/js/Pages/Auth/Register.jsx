import { Button, Input } from "@material-tailwind/react";

export default function Register() {

    // const handleSubmit = ( e ) => {
    //     e.preventDefault()

    //     Inertia.post(route('user.register'))
    // }
    return (
        <form className="flex flex-col gap-3 w-full">
            <Input
                size="lg"
                label="Email"
                type="email"
                className="focus:ring-0"
            />
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
                Sign Up
            </Button>
        </form>
    );
}
