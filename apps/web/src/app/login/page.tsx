import { PMLogo } from "@programmer/ui";
import { LoginComp } from "@/components/auth_components/loginComp";
import Link from "next/link";

export default function LoginPage() {
   
  return (
    <>
      <div className="w-full h-screen py-24 overflow-y-auto fixed top-0 left-0 bg-background-color_950C z-[9999999999] flex justify-center items-center">
        
        <div className="max-w-[400px]  w-full p-5  h-fit">
          <div className="mt-24">
            <PMLogo size="sm" />
          </div>
          <p className="w-full text-read_3 font-medium text-text-color_3 mt-1 mb-5">
            Welcome back!
          </p>
          <h1 className=" text-read_20 font-semibold">Login to your account</h1>
          <p className="text-read_2 text-text-color_2 mt-1 mb-6">
            Dont have an account?{" "}
            <Link href={"/signup"} className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>

          <LoginComp
            seperatorTextBackground="bg-background-color_950C"
            textLeft={true}
          />
        </div>
      </div>
  
    </>
  );
}
