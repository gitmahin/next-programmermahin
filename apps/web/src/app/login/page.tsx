import { PMLogo } from "@programmer/ui";
import { LoginComp } from "@/components/auth_components/loginComp";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full h-screen overflow-y-auto fixed top-0 left-0 bg-background-color_950C z-[9999999999] flex justify-center items-start">
      <div className="max-w-[400px]  w-full p-5 py-24 my-auto  h-fit ">
        <div>
          <Link href={"/"}>
            <PMLogo size="sm" />
          </Link>
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
  );
}
