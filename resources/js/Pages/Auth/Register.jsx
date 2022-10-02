import { useForm } from "@inertiajs/inertia-react";
import { Button, Input } from "@material-tailwind/react";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    fullname: "",
    username: "",
    email: "",
    password: "",
    phone_number: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post('/register/user')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      <Input
        size="lg"
        label="Fullname"
        value={data.fullname}
        onChange={(e) => setData("fullname", e.target.value)}
        type="text"
        className="focus:ring-0"
      />
      {errors.fullname && <div>{errors.fullname}</div>}
      <Input
        size="lg"
        label="Username"
        value={data.username}
        onChange={(e) => setData("username", e.target.value)}
        type="text"
        className="focus:ring-0"
      />
      {errors.username && <div>{errors.username}</div>}
      <Input
        size="lg"
        label="Email"
        value={data.email}
        onChange={(e) => setData("email", e.target.value)}
        type="email"
        className="focus:ring-0"
      />
      {errors.email && <div>{errors.email}</div>}
      <Input
        size="lg"
        label="Phone Number"
        value={data.phone_number}
        onChange={(e) => setData("phone_number", e.target.value)}
        type="number"
        className="focus:ring-0"
      />
      <Input
        size="lg"
        label="Password"
        value={data.password}
        onChange={(e) => setData("password", e.target.value)}
        type="password"
        className="focus:ring-0"
      />
      {errors.password && <div>{errors.password}</div>}
      <Button type="submit" className="bg-primary-500 hover:shadow-primary-500/50">
        Sign Up
      </Button>
    </form>
  );
}
