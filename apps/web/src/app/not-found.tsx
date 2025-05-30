import { ErrorIcon, PMButton, PMLogo } from "@programmer/ui";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {

    return {
      title: "Not Found",
      description:
        "Sorry, the page you're looking for doesn't exist or may have been moved.",
    };
}

export default function NotFound() {
  return (
    <>
      <div className="fixed w-full h-screen bg-background-color_950C px-5 left-0 top-0 flex justify-center items-center z-[9999999999]">
        <div className="max-w-[330px] w-full">
          <PMLogo size="sm" />

          <div className="w-full h-fit border border-border-color_800C rounded mt-5  overflow-hidden ">
            <div className="px-2 flex justify-between items-center py-2 border-b border-border-color_800C bg-background-color_900C">
              <div className="px-3 py-1 rounded bg-background-color_850C h-fit flex justify-center items-center w-fit gap-2 border-background-color_800C border ">
                <ErrorIcon width={10} height={10} />
                <span className="text-read_1 font-medium text-text-color_1">
                  404
                </span>
              </div>
              <span className="font-medium text-read_1 text-text-color_2 mr-3">
                Not Found
              </span>
            </div>

            <div className="p-2 bg-background-color_925C">
              <p className="text-text-color_3 text-read_3">Sorry, the page you're looking for doesn't exist or may have been moved.</p>
            </div>
          </div>

          <div className="w-full mt-3">
            <Link href={"/"}>
              <PMButton
                variant="secondary"
                className="w-full px-3 py-1 rounded transition-colors "
              >
                <span className="text-read_2 font-medium">
                  Continue to root
                </span>
              </PMButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
