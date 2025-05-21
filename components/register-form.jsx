import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RegisterForm({
  className,
  ...props
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="flex gap-3">

              <div className="grid gap-3">
                <Label htmlFor="first-name" className="text-bold">First Name</Label>
                <Input id="first-name" type="text" placeholder="First name" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="first-name" className="text-bold">Last Name</Label>
                <Input id="first-name" type="text" placeholder="Last name" required />
              </div>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email" className="text-bold">Email</Label>
                <Input id="email" type="email" placeholder="user@gmail.com" required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-bold">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full cursor-pointer">
                  Sign Up
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <a href="#" className="underline underline-offset-4 cursor-pointer">
                Login
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
