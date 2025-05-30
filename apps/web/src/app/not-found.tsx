import { ErrorIcon, PMButton, PMLogo, StatusBox } from "@programmer/ui";
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
      <div className="fixed w-full h-screen bg-background-color_950C px-5 left-0 top-0 flex flex-col justify-center z-[9999999999]">
        <div className="layout_max_330 mx-auto mb-5">
          <PMLogo size="sm" />
        </div>
        <StatusBox
          status="error"
          statusCode={400}
          tag="Not Found"
          message="Sorry, the page you're looking for doesn't exist or may have been moved."
        />
        <div className="layout_max_330 mt-3 mx-auto">
          <Link href={"/"}>
            <PMButton
              variant="secondary"
              className="w-full px-3 py-1 rounded transition-colors "
            >
              <span className="text-read_2 font-medium">Continue to root</span>
            </PMButton>
          </Link>
        </div>
      </div>
    </>
  );
}
