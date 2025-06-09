import Image from "next/image";
import { PMLogo } from "@programmer/ui";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="layout_max_1200 mx-auto h-fit">
        <div className="w-full flex justify-center items-center">
          <PMLogo size="sm" />
        </div>

        <div className="mt-5">
          <h1 className="text-center w-full main_hero_heading_sync_developer_project font-extrabold tracking-tight ">
            A Classic Developer Docs
          </h1>
        </div>

        <div className="w-full flex justify-center items-center gap-5 mt-5">
          <Link href={""}>
            <button className="px-10 py-2 text-read_1 font-medium classic_button">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-20 flex justify-center items-center gap-5">
        <Link href={""} className="classic_link">
          Github
        </Link>
        <Link href={""} className="classic_link">
          Facebook
        </Link>
        <Link href={""} className="classic_link">
          Discord
        </Link>
        <Link href={""} className="classic_link">
          Contact
        </Link>
      </div>
    </div>
  );
}
