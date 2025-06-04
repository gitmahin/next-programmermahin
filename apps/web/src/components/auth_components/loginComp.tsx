"use client";
import {
  DiscordIcon,
  Input,
  PMButton,
  Separator,
  GithubSVG,
  GoogleSVG,
  StatusBox,
  StatusAlert,
  StatusTypes,
} from "@programmer/ui";
import Link from "next/link";
import React, { useState } from "react";
import Turnstile, { useTurnstile } from "react-turnstile";

interface LoginCompPropsTypes {
  seperatorTextBackground?: string;
  textLeft?: boolean;
}

export const LoginComp = ({
  seperatorTextBackground,
  textLeft = false,
}: LoginCompPropsTypes) => {
  const turnstile = useTurnstile();
  const [turnstileStatus, setTurnstileStatus] =
    useState<StatusTypes>("neutral");
  const [error, setError] = useState<string | null>(null);
  return (
    <>
      <div className="h-fit">
        <p
          className={`text-read_3 font-medium text-text-color_3 ${textLeft ? "text-left" : "text-center"} mb-2`}
        >
          Continue with
        </p>
        <PMButton
          disabled={turnstileStatus !== "success"}
          variant="secondary"
          className="px-3 py-2 rounded flex justify-center items-center w-full gap-2 transition-colors"
        >
          <GoogleSVG width={20} height={20} />
          <span className="text-read_1 font-medium">Google</span>
        </PMButton>
        <div className="flex justify-center items-center gap-3 mt-3">
          <PMButton
            disabled={turnstileStatus !== "success"}
            className="px-3 py-2 rounded flex transition-colors disabled:!bg-[#101315] dark:disabled:!bg-[#101315] justify-center items-center text-text-zinc_white w-full gap-2 bg-[#24292E] hover:bg-[#1b1f23]"
          >
            <GithubSVG width={20} height={20} color="#ffffff" />
            <span className="text-read_1 font-medium">Github</span>
          </PMButton>
          <PMButton
            disabled={turnstileStatus !== "success"}
            className="px-3 py-2 rounded flex transition-colors justify-center items-center text-text-zinc_white w-full gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:!bg-indigo-400 dark:disabled:!bg-indigo-900"
          >
            <DiscordIcon width={20} height={20} color="#ffffff" />
            <span className="text-read_1 font-medium">Discord</span>
          </PMButton>
        </div>

        <div className="mt-5">
          <div className="mb-2">
            {error && (
              <StatusAlert status={`${turnstileStatus}`} text={`${error}`} />
            )}
          </div>
          <Turnstile
            className=" overflow-hidden w-full p-0 "
            size="flexible"
            theme="auto"
            fixedSize={true}
            sitekey={`${process.env.NEXT_PUBLIC_CLOUDFLARETURNSTILE_SITE_KEY}`}
            retry="auto"
            refreshExpired="auto"
            onLoad={() => {
              setTurnstileStatus("neutral");
              setError(null);
            }}
            onVerify={(token) => {
              // add logic to send token to backend for siteVerify cloudflare api
              setTurnstileStatus("success");
              setError(null);
            }}
            onError={() => {
              setTurnstileStatus("error");
              setError("Security check failed. Please try again.");
            }}
            onExpire={() => {
              setTurnstileStatus("error");
              setError("Token expired. Please verify again.");
            }}
            onTimeout={() => {
              setTurnstileStatus("error");
              setError("Challenge timed out. Please try again.");
            }}
          />
        </div>
        <div className="mt-5">
          <StatusBox
            status="warning"
            tag="Under Development"
            message={
              <p>
                Login is currently under development. You can still access your
                account at{" "}
                <Link
                  href={"https://v2.programmermahin.com"}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  v2.programmermahin.com
                </Link>
                . Feel free to log in or create a new account there while we’re
                merging everything into the latest version of the platform.
              </p>
            }
            statusCode={503}
          />
        </div>
        <div className="relative w-full my-7 h-fit flex justify-center items-center">
          <Separator className={`bg-background-color_800C w-full`} />
          <span
            className={`${seperatorTextBackground ? seperatorTextBackground : "bg-background-color_925C"}  px-1 text-read_3 text-text-color_2 absolute`}
          >
            Or
          </span>
        </div>

        <div>
          <Input
            className="bg-background-color_900C h-10 text-read_1 text-text-color_2"
            placeholder="Email"
          />
          <Input
            className="bg-background-color_900C mt-3 h-10 text-read_1 text-text-color_2"
            type="password"
            placeholder="Password"
          />
          <div className={`text-left  w-full mt-1`}>
            <Link
              href=""
              className="text-read_3 font-medium text-blue-500 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <PMButton
            disabled={turnstileStatus !== "success"}
            className="px-3 py-2 rounded w-full gap-2 mt-3 text-text-zinc_white transition-colors "
          >
            <span className="text-read_1 font-medium">Continue</span>
          </PMButton>
          <p className="text-read_3 mt-5 text-text-color_2">
            By signing in, you agree to our{" "}
            <Link href={"/legals/terms"} className="text-blue-500 hover:underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link href={"/legals/privacy-policy"} className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
