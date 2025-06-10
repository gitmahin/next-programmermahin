import { PMLogo, StatusBox } from "@programmer/ui";
import Link from "next/link";
import { HEADER_NAV_LINKS } from "@/constants";

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
          <Link href={"/getting-started/introduction-to-developer-docs"}>
            <button className="px-10 py-2 text-read_1 font-medium classic_button">
              Get Started
            </button>
          </Link>
        </div>

        <div className="mt-5">
          <StatusBox status="warning" statusCode={503} tag="Under Development" message={"Developer Docs is currently under development. All content displayed here is for demonstration purposes. Please check back later for live information."} />
        </div>
      </div>

      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-20 flex justify-center items-center gap-5 text-read_1">
        {
          HEADER_NAV_LINKS.slice(2).map((navLink, i) => {
            return <Link href={`${navLink.slug}`} key={i} className="classic_link">
          {navLink.label}
        </Link>
          })
        }
      </div>
    </div>
  );
}
