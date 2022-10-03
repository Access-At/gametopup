import { useForm } from "@inertiajs/inertia-react";
import { Button, Input } from "@material-tailwind/react";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("users.login"));
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <Input
                size="lg"
                label="Email"
                name="email"
                type="text"
                onChange={(e) => setData("email", e.target.value)}
                value={data.email}
                className="focus:ring-0"
            />
            {errors.email && <div>{errors.email}</div>}
            <Input
                size="lg"
                label="Password"
                name="password"
                type="password"
                onChange={(e) => setData("password", e.target.value)}
                value={data.password}
                className="focus:ring-0"
            />
            {errors.password && <div>{errors.password}</div>}
            <Button
                type="submit"
                disabled={processing}
                className="bg-primary-500 hover:shadow-primary-500/50"
            >
                Sign In
            </Button>
        </form>
    );
}
