import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LoginForm from "@/components/ui/login-form"

import Logo from "@/components/ui/logo"

export default function Login() {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen bg-main-white">
      <div className="place-self-start p-6">
        <Logo />
      </div>

      <Card className="w-full max-w-sm place-self-center">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>

        <LoginForm />
      </Card>
    </div>
  )
}
