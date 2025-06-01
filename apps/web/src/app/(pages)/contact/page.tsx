import {
  FacebookIcon,
  GithubSVG,
  Input,
  Textarea,
  TwitterSVG,
  WhatsAppIcon,
} from "@programmer/ui";
import Link from "next/link";
import React from "react";

interface SocialLinksType {
  icon: React.ElementType;
  url: string;
}

const SOCIAL_LINKS: SocialLinksType[] = [
  {
    icon: GithubSVG,
    url: "https://github.com/gitmahin",
  },
  {
    icon: TwitterSVG,
    url: "https://x.com/pr0grammerMahin",
  },
  {
    icon: FacebookIcon,
    url: "https://www.facebook.com/ni.mahin.94",
  },
  {
    icon: WhatsAppIcon,
    url: "https://wa.me/01950787553",
  },
];

type ContactType = "contact" | "question" | "support";

interface ContactObjectType {
  type: ContactType;
  label: string;
  meta?: string;
}

const CONTACT_OPTIONS: ContactObjectType[] = [
  {
    type: "contact",
    label: "Contact",
  },
  {
    type: "question",
    label: "Question",
  },
  {
    type: "support",
    label: "Support",
  },
];

export default function ContactPage() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-[9999999999] overflow-hidden bg-background-color_950C flex justify-center items-center">
      <div className="w-full relative h-full flex justify-center items-center ">
        <div className="absolute w-full h-full bg-gradient-to-r from-background-color_950C via-background-color_950C to-transparent z-[2]"></div>

        <div className="relative z-20 max-w-[350px] w-full h-[500px]">
          <div className="flex justify-center items-center w-full gap-3">
            {CONTACT_OPTIONS.map((item, i) => {
              return (
                <label key={i} className="w-full ">
                  <input
                    type="radio"
                    name="contactType"
                    value={item.type}
                    className="hidden peer"
                    id={item.type}
                  />
                  <div className="text-text-color_2 peer-checked:bg-[var(--surface-purple-bg)] border-border-color_800C peer-checked:border-[var(--surface-purple-border)] peer-checked:text-[var(--surface-purple-fg)] hover:bg-[var(--surface-purple-bg)] w-full px-3 py-1.5 text-read_2 font-medium rounded border flex justify-center items-center hover:border-[var(--surface-purple-bg)] hover:text-[var(--surface-purple-fg)] cursor-pointer transition-colors">
                    {item.label}
                  </div>
                </label>
              );
            })}
          </div>

          <div className="mt-5">
            <p className="text-read_2 font-medium text-text-color_4">Name</p>
            <Input
              type="text"
              placeholder="Jhon Doe"
              className="text-read_2 mt-1 bg-background-color_925C py-5"
              name="name"
            />
          </div>

          <div className="mt-3">
            <p className="text-read_2 font-medium text-text-color_4">Email</p>
            <Input
              type="text"
              placeholder="youremail@gmail.com"
              className="text-read_2 mt-1 bg-background-color_925C py-5"
              name="email"
            />
          </div>


          <div className="mt-3">
            <p className="text-read_2 font-medium text-text-color_4">Message</p>
            <Textarea
              placeholder="youremail@gmail.com"
              className="text-read_2 h-[100px] mt-1 bg-background-color_925C custom_scrollbar"
              name="message"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[800px] flex-shrink-0 w-full h-full flex justify-center items-center">
        <div className=" w-full h-full max-h-[700px] my-auto relative p-10 pr-0">
          <div className="absolute w-[20px] border-background-color_900C  border-l h-screen top-1/2 -translate-y-1/2 left-0"></div>
          <div className="absolute w-screen border-background-color_900C  border-b h-[20px] top-0 right-0"></div>
          <div className="absolute w-screen border-background-color_900C  border-t h-[20px] bottom-0 right-0"></div>

          <div className="w-[200px] -z-[1] h-screen absolute left-5 top-1/2 -translate-y-1/2 border-solid box-border border-l border-r border-background-color_900C bg-[image:repeating-linear-gradient(315deg,_var(--background-color-900C)_0,_var(--background-color-900C)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--background-color-900C)]/5 md:block dark:[--pattern-fg:var(--background-color-900C)]/10"></div>

          <div className="w-full h-[calc(100%-70px)] backdrop-blur-md rounded-l-[20px] border border-r-0 border-background-color_900C p-2 pr-0">
            <div className="w-full h-full bg-background-color_900C rounded-l-[15px]"></div>
          </div>
          <div className=" w-full h-[50px] mt-5 flex justify-start items-center gap-3">
            {SOCIAL_LINKS.map((item, i) => {
              const SocialIcon = item.icon;
              return (
                <Link href={`${item.url}`} key={i} target="_blank">
                  <SocialIcon width={25} height={25} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
