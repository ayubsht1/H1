import { RegisterForm } from "@/components/register-form";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Link from "next/link";
export default function Page() {
  return (<>
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="fixed top-4 left-4 text-5xl text-primary">
        <Link href="/">
      <IoArrowBackCircleSharp />
        </Link>
      </div>

      <div className="flex w-full max-w-sm flex-col gap-6">
        <RegisterForm/>
      </div>
    </div>
  </>
  );
}


