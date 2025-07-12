import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"  // Importing the Input component
import { Button } from "@/components/ui/button"  // Importing the Button component

function Login() {
  return (
    <div className="w-full max-w-sm">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-lg bg-white">
        <CardHeader className="mb-4 text-center">
          <CardTitle className="text-2xl font-semibold">Login to your account</CardTitle>
          <CardDescription className="text-sm text-gray-500">Enter your email below to login to your account</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-4 padding">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left">Password</label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-2">
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot your password?</a>
            <a href="/signup" className="text-sm text-gray-500 hover:underline">Sign Up</a>
          </div>
        </CardContent>

        <CardFooter className="mt-4 space-y-3 flex-col">
          <Button className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 focus:ring-2 focus:ring-blue-500">
            Login
          </Button>
          <Button className="w-full py-3 bg-gray-200 text-black rounded-md hover:bg-gray-300 focus:ring-2 focus:ring-blue-500">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login








