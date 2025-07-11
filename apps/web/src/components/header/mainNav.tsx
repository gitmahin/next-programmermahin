"use client";
import React, { useState } from "react";
import {
  DiscordIcon,
  FacebookIcon,
  GithubSVG,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@programmer/ui";
import Link from "next/link";
import Image from "next/image";
import { CodeXml, UsersRound } from "lucide-react";

const NAV_OTHER_RESOURCES: { label: string; desc: string; link: string }[] = [
  {
    label: "Blog",
    desc: "Begin your journey with the right foundation - step-by-step paths built for absolute beginners",
    link: "blog",
  },
  {
    label: "Errors Resolving",
    desc: "This roadmap breaks down the essential steps, skills, and tools you need to become a successful software engineer - from the basics of coding to real-world projects and career paths.",
    link: "error-resolving",
  },
];

export const MainNav = () => {
  const [isBlogNavHover, setIsBlogNavHover] = useState(false);
  return (
    <nav className="max-[1060px]:hidden">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[720px] h-[300px] p-2">
                <div className="w-full h-full grid grid-cols-[220px_220px_1fr] gap-2">
                  <Link
                    href={"https://developer.programmermahin.com"}
                    target="_blank"
                    className="w-full h-full"
                  >
                    <div className="w-full h-full border px-3 py-3 border-border-color_800C rounded overflow-hidden bg-background-color_900C group relative ">
                      <div className="flex justify-start items-center gap-2">
                        <div className="w-[40px] h-[40px] flex-shrink-0 border rounded flex justify-center shadow-md items-center border-background-color_750C bg-gradient-to-tl from-background-color_800C to-background-color_750C">
                          <CodeXml size={20} className="text-text-color_4" />
                        </div>
                        <div>
                          <h3 className="text-text-color_1 text-read_2 font-medium">
                            Developer Docs
                          </h3>
                          <p className=" text-read_3 text-text-color_2 one_line_ellipsis">
                            Build, contribute, and explore the core of
                            ProgrammerMahin.
                          </p>
                        </div>
                      </div>

                      <div className="absolute bottom-0 right-0 border-t border-l rounded-tl-[10px] border-border-color_800C group-hover:border-pm_purple-600 transition-colors w-[207px] h-[200px] overflow-hidden p-1 bg-background-color_850C">
                        <div className="w-full h-full rounded-tl-[6px] overflow-hidden "></div>
                      </div>
                    </div>
                  </Link>
                  <div className="w-full h-full border border-border-color_800C px-3 py-3  rounded overflow-hidden bg-background-color_900C group relative">
                    <div className="flex justify-start items-center gap-2">
                      <div className="w-[40px] h-[40px] flex-shrink-0 border rounded flex justify-center shadow-md items-center border-background-color_750C bg-gradient-to-tl from-background-color_800C to-background-color_750C">
                        <UsersRound size={18} className="text-text-color_4" />
                      </div>
                      <div>
                        <h3 className="text-text-color_1 text-read_2 font-medium">
                          Community
                        </h3>
                        <p className=" text-read_3 text-text-color_2 one_line_ellipsis">
                          Connect with like-minded developers to exchange
                          knowledge, collaborate, and grow together.
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 right-0 border-t border-l rounded-tl-[10px] border-border-color_800C w-[207px] h-[200px] group-hover:border-pm_purple-600 transition-colors overflow-hidden p-1 bg-background-color_850C">
                      <div className="w-full h-full rounded-tl-[6px] overflow-hidden "></div>
                    </div>
                  </div>
                  <div className="w-full h-full grid grid-rows-3 gap-2">
                    <Link
                      href={"https://github.com/gitmahin/next-programmermahin"}
                      target="_blank"
                    >
                      <button className="w-full h-full py-2 rounded transition-colors  bg-[#24292E] hover:bg-[#1b1f23]">
                        <div className="flex justify-between items-center px-4">
                          <GithubSVG color={"#ffffff"} width={22} height={22} />
                          <h4 className="text-text-zinc_white font-medium text-read_2">
                            Github
                          </h4>
                        </div>
                        <div className="w-full px-4 p-1">
                          <p className="text-left text-[12px] mt-1 leading-[0.9rem] two_line_ellipsis text-pm_zinc-200">
                            Learn by coding. Contribute to programmermahin.com
                          </p>
                        </div>
                      </button>
                    </Link>

                    <Link
                      href={"https://discord.com/invite/yDjXa9hu2P"}
                      target="_blank"
                    >
                      <button className="w-full h-full py-2 rounded transition-colors  bg-indigo-600 hover:bg-indigo-700">
                        <div className="flex justify-between items-center px-4">
                          <DiscordIcon
                            width={22} height={22}
                            className={"flex-shrink-0"}
                          />
                          <h4 className="text-text-zinc_white font-medium text-read_2">
                            Join On Discord
                          </h4>
                        </div>
                        <div className="w-full px-4 p-1">
                          <p className="text-left text-[12px] mt-1 leading-[0.9rem] two_line_ellipsis text-pm_zinc-200">
                            Be part of our developer circle - collaborate,
                            learn, and grow on Discord.
                          </p>
                        </div>
                      </button>
                    </Link>
                    <Link
                      href={"https://www.facebook.com/groups/1269302621096148"}
                      target="_blank"
                    >
                      <button className="w-full h-full py-2 rounded transition-colors  bg-[#1772E8] hover:bg-[#1772e8e0]">
                        <div className="flex justify-between items-center px-4">
                          <FacebookIcon
                            width={22} height={22}
                            className={"flex-shrink-0"}
                          />
                          <h4 className="text-text-zinc_white font-medium text-read_2">
                            Connect With Facebook
                          </h4>
                        </div>
                        <div className="w-full px-4 p-1">
                          <p className="text-left text-[12px] mt-1 leading-[0.9rem] two_line_ellipsis text-pm_zinc-200">
                            Learn, Build, and Stay Updated. Join group chats and
                            share your projects on social.
                          </p>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[800px] h-[330px] grid grid-cols-[250px_280px_1fr]">
                <Link
                  href={"https://tutorial.programmermahin.com"}
                  target="_blank"
                >
                  <div className="w-[250px] border-r h-full border-border-color_800C relative group">
                    <Image
                      src={"/images/dark/tutorial_menu.png"}
                      width={500}
                      height={600}
                      alt="Tutorial"
                      priority
                      className="w-full h-full object-cover object-left-top hidden dark:block"
                    />
                    <Image
                      src={"/images/light/tutorial_menu.png"}
                      width={500}
                      height={600}
                      alt="Tutorial"
                      priority
                      className="w-full h-full object-cover object-left-top dark:hidden block"
                    />
                    <div className="absolute bottom-0 h-[200px] w-full bg-gradient-to-b from-transparent to-background-color_925C group-hover:to-background-color_850C flex justify-start items-end">
                      <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-background-color_925C"></div>
                      <div className="relative z-10 p-5">
                        <h3 className="text-[18px] font-medium">Tutorials</h3>
                        <p className="text-read_3 text-text-color_2 mt-2">
                          Free, In-Depth Tutorials That Actually Teach You
                          Something
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="w-full h-full p-2 pr-0">
                  <Link
                    href={"https://tutorial.programmermahin.com/quick-learn"}
                    target="_blank"
                  >
                    <div className="w-full h-full bg-background-color_900C border border-background-color_850C dark:hover:bg-background-color_850C hover:bg-background-color_800C transition-colors rounded relative overflow-hidden">
                      <div className="p-5">
                        <h3 className="text-read_1 font-medium">Quick Learn</h3>
                        <p className="text-read_3 text-text-color_2 mt-1">
                          Learn the essentials in minutes - not hours.
                        </p>
                      </div>
                      <div className="w-full h-[200px] border-t border-l bg-background-color_800C absolute bottom-0 left-5 border-border-color_800C rounded-tl-[8px] pt-2 pl-2">
                        <div className="w-full h-full rounded-tl-[6px] overflow-hidden">
                          <Image
                            src={"/images/dark/quick_learn.png"}
                            width={500}
                            height={500}
                            alt="quick-learn"
                            priority
                            className="w-full h-full object-left-top object-cover hidden dark:block"
                          />
                          <Image
                            src={"/images/light/quick_learn.png"}
                            width={500}
                            height={500}
                            alt="quick-learn"
                            priority
                            className="w-full h-full object-left-top object-cover dark:hidden block"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="w-full relative h-full ">
                  <div className="w-full h-full p-2 pt-5  relative z-10">
                    {NAV_OTHER_RESOURCES.map((item, i) => {
                      return (
                        <Link href={`/${item.link}`} key={i}>
                          <div className="w-full h-fit px-6 py-2 rounded hover:bg-background-color_800C transition-colors ">
                            <h4 className="text-read_2 font-medium text-text-color_1">
                              {item.label}
                            </h4>
                            <p className="text-read_3 text-text-color_3 mt-1 two_line_ellipsis">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/features" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Features
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
