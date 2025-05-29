"use client";
import React, { useState } from "react";
import {
  cn,
  DiscordIcon,
  FacebookIcon,
  GithubSVG,
  LUCIDE_DEFAULT_ICON_SIZE,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  PMButton,
} from "@programmer/ui";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, CodeXml, UsersRound } from "lucide-react";

const NAV_FEATURED_BLOGS: { label: string; desc: string; link: string }[] = [
  {
    label: "Where to Start?",
    desc: "Begin your journey with the right foundation - step-by-step paths built for absolute beginners",
    link: "",
  },
  {
    label: "A Roadmap to Software Engineering",
    desc: "This roadmap breaks down the essential steps, skills, and tools you need to become a successful software engineer - from the basics of coding to real-world projects and career paths.",
    link: "",
  },
];

export const MainNav = () => {
  const [isBlogNavHover, setIsBlogNavHover] = useState(false);
  return (
    <nav>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[720px] h-[300px] p-2">
                <div className="w-full h-full grid grid-cols-[220px_220px_1fr] gap-2">
                  <div className="w-full h-full border border-border-color_800C rounded overflow-hidden bg-background-color_900C group">
                    <div className="w-full h-[calc(100%-90px)] px-3 py-3 relative">
                      <CodeXml size={30} className="text-text-color_1" />
                      <div className="absolute bottom-0 left-0 px-3 py-3 flex justify-start items-center gap-1">
                        <span className="text-read_2 text-text-color_2 group-hover:text-text-color_1 transition-colors">
                          Explore
                        </span>
                        <ChevronRight
                          size={16}
                          className="text-text-svg_default_color group-hover:text-text-color_1 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="h-[90px] border-t border-border-color_800C p-3 flex-shrink-0 bg-background-color_850C">
                      <h3 className="text-text-color_1 text-read_1 font-medium">
                        Developer Docs
                      </h3>
                      <p className="mt-1 text-read_3 text-text-color_2 two_line_ellipsis">
                        Build, contribute, and explore the core of
                        ProgrammerMahin.
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-full border border-border-color_800C rounded overflow-hidden bg-background-color_900C group">
                    <div className="w-full h-[calc(100%-90px)] px-3 py-3 relative">
                      <UsersRound size={30} className="text-text-color_1" />
                      <div className="absolute bottom-0 left-0 px-3 py-3 w-full flex justify-between items-center">
                        <div className="flex justify-start items-center gap-1">
                          <span className="text-read_2 text-text-color_2 group-hover:text-text-color_1 transition-colors">
                            Explore
                          </span>
                          <ChevronRight
                            size={16}
                            className="text-text-svg_default_color group-hover:text-text-color_1 transition-colors"
                          />
                        </div>

                        <PMButton className="px-2 py-0 rounded-tiny transition-colors">
                          <span className="font-medium text-read_2 text-text-zinc_white ">Join</span>
                        </PMButton>
                      </div>
                    </div>
                    <div className="h-[90px] border-t border-border-color_800C p-3 flex-shrink-0 bg-background-color_850C">
                      <h3 className="text-text-color_1 text-read_1 font-medium">
                        Community
                      </h3>
                      <p className="mt-1 text-read_3 text-text-color_2 two_line_ellipsis">
                        Connect with like-minded developers to exchange
                        knowledge, collaborate, and grow together.
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full grid grid-rows-3 gap-2">
                    <Link
                      href={"https://github.com/gitmahin/next-programmermahin"}
                      target="_blank"
                    >
                      <button className="w-full h-full py-2 rounded transition-colors  bg-[#24292E] hover:bg-[#1b1f23]">
                        <div className="flex justify-between items-center px-4">
                          <GithubSVG
                            color={"#ffffff"}
                            width={28}
                            height={28}
                            className={"flex-shrink-0"}
                          />
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
                            color={"#ffffff"}
                            width={28}
                            height={28}
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

                    <button className="w-full h-full py-2 rounded transition-colors  bg-[#1772E8] hover:bg-[#1772e8e0]">
                      <div className="flex justify-between items-center px-4">
                        <FacebookIcon
                          color={"#ffffff"}
                          width={28}
                          height={28}
                          className={"flex-shrink-0"}
                        />
                        <h4 className="text-text-zinc_white font-medium text-read_2">
                          Connect With Facebook
                        </h4>
                      </div>
                      <div className="w-full px-4 p-1">
                        <p className="text-left text-[12px] mt-1 leading-[0.9rem] two_line_ellipsis text-pm_zinc-200">
                          Learn, Build, and Stay Updated
                        </p>
                      </div>
                    </button>
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
                  <div className="w-[250px] border-r h-full border-border-color_800C relative">
                    <Image
                      src={"/images/dark/tutorial_menu.png"}
                      width={500}
                      height={600}
                      alt="Tutorial"
                      className="w-full h-full object-cover object-left-top hidden dark:block"
                    />
                    <Image
                      src={"/images/light/tutorial_menu.png"}
                      width={500}
                      height={600}
                      alt="Tutorial"
                      className="w-full h-full object-cover object-left-top dark:hidden block"
                    />
                    <div className="absolute bottom-0 h-[200px] w-full bg-gradient-to-b from-transparent to-background-color_925C flex justify-start items-end">
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
                <div className="w-full border-r border-border-color_800C h-full p-2">
                  <Link
                    href={"https://tutorial.programmermahin.com/quick-learn"}
                    target="_blank"
                  >
                    <div className="w-full h-full bg-background-color_900C rounded relative overflow-hidden">
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
                            className="w-full h-full object-left-top object-cover hidden dark:block"
                          />
                          <Image
                            src={"/images/light/quick_learn.png"}
                            width={500}
                            height={500}
                            alt="quick-learn"
                            className="w-full h-full object-left-top object-cover dark:hidden block"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="w-full relative h-full ">
                  <div className="w-full h-full absolute left-0 top-0  box-border border-x border-x-border-color_800C bg-[image:repeating-linear-gradient(315deg,_var(--border-color-800C)_0,_var(--border-color-800C)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-800C)]/5 md:block dark:[--pattern-fg:var(--border-color-800C)]/10"></div>
                  <div className="w-full h-full p-2  relative z-10 backdrop-blur-[2px]">
                    <div
                      onMouseEnter={() => {
                        setIsBlogNavHover(true);
                      }}
                      onMouseLeave={() => {
                        setIsBlogNavHover(false);
                      }}
                      className="w-full h-full bg-background-color_925C rounded border border-border-color_800C relative"
                    >
                      <h3 className="text-read_1 font-medium px-5 pt-4 pb-2">
                        Blogs
                      </h3>
                      <div>
                        {NAV_FEATURED_BLOGS.map((item, i) => {
                          return (
                            <Link key={i} href={`${item.link}`}>
                              <button
                                className={`px-5 py-2 hover:bg-background-color_800C transition-colors ${!isBlogNavHover && i === 0 ? "bg-background-color_800C" : ""} flex flex-col justify-start items-start group`}
                              >
                                <h4 className="text-text-color_4 two_line_ellipsis w-full group-hover:text-text-color_1 text-read_3 font-medium text-left">
                                  {item.label}
                                </h4>
                                <p className="text-[11px] two_line_ellipsis text-text-color_2 w-full mt-1 text-left">
                                  {item.desc}
                                </p>
                              </button>
                            </Link>
                          );
                        })}
                      </div>
                      <div className=" w-full px-2 pb-2 absolute bottom-0 left-0">
                        <button className="w-full bg-background-color_900C py-[5px] hover:bg-background-color_850C   transition-colors font-medium text-read_3 rounded group flex justify-center items-center gap-1">
                          <span className="text-text-color_2 group-hover:text-text-color_1 transition-colors">
                            Explore more blogs
                          </span>

                          <ArrowUpRight
                            size={16}
                            className="text-text-svg_default_color transition-colors group-hover:text-text-color_1"
                          />
                        </button>
                      </div>
                    </div>
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
