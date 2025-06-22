import {
  DiscordIcon,
  FacebookIcon,
  GithubSVG,
  LUCIDE_DEFAULT_ICON_SIZE,
  PMButton,
  Sheet,
  SheetContent,
} from "@programmer/ui";
import {
  CodeXml,
  GraduationCap,
  Layers2,
  LucideIcon,
  OctagonAlert,
  Puzzle,
  Rss,
  UserRound,
} from "lucide-react";
import Link from "next/link";

const DeveloperListItem = ({
  title,
  desc,
  icon,
  link,
}: {
  title: string;
  desc: string;
  icon: LucideIcon;
  link?: string;
}) => {
  const Icon = icon;
  return (
    <div className="w-full flex justify-start items-start gap-2">
      <div className="w-[30px] mt-0.5 h-[30px] rounded-tiny flex-shrink-0 bg-background-color_900C flex justify-center items-center">
        <Icon
          size={LUCIDE_DEFAULT_ICON_SIZE}
          className="text-text-svg_default_color"
        />
      </div>
      <Link href={`${link}`}>
        <div>
          <p className="one_line_ellipsis text-read_2 text-text-color_4 font-medium">
            {title}
          </p>
          <p className=" text-read_3 text-text-color_3 one_line_ellipsis">
            {desc}
          </p>
        </div>
      </Link>
    </div>
  );
};

export const MobileMenu = ({
  open,
  handleOpen,
}: {
  open: boolean;
  handleOpen: () => void;
}) => {
  return (
    <div>
      <Sheet open={open} onOpenChange={handleOpen}>
        <SheetContent className="w-[300px] !overflow-y-auto bg-background-color_950C border-border-color_800C">
          <div className="w-full border-b border-border-color_800C h-fit p-3 flex justify-start items-center gap-3">
            <Link href={"/login"}>
              <PMButton
                variant="secondary"
                className="px-3 py-1 rounded text-read_1 font-medium transition-colors"
              >
                Log in
              </PMButton>
            </Link>

            <Link href={"/signup"}>
              <PMButton
                variant="primary"
                className="px-3 py-1 rounded text-read_1 font-medium transition-colors"
              >
                <span className="text-text-zinc_white">Sign up</span>
              </PMButton>
            </Link>
          </div>
          <div className="w-full ">
            <div className="p-3">
                <div className="flex justify-start items-center gap-2">
                    <div className="w-[30px] h-[30px] flex-shrink-0  bg-[var(--surface-purple-bg)] rounded-tiny border border-[var(--surface-purple-border)] flex justify-center items-center">
<Puzzle size={LUCIDE_DEFAULT_ICON_SIZE} className="text-[var(--surface-purple-fg)]" />
                    </div>
                    <p className="text-read_1 font-medium text-text-color_4">Features</p>
                </div>
            </div>
            <div className="p-3 border-t border-border-color_800C">
              <p className="text-read_2 uppercase font-medium text-text-color_3">
                Resources
              </p>
              <div className="mt-3 pl-5 flex flex-col gap-3">
                <DeveloperListItem
                  title="Tutorials"
                  desc="Free, In-Depth Tutorials That Actually Teach You
                          Something"
                  icon={GraduationCap}
                  link="https://tutorial.programmermahin.com/?tutoTab=1"
                />
                <DeveloperListItem
                  title="Quick Learn"
                  desc="Learn the essentials in minutes - not hours."
                  icon={Layers2}
                  link="https://tutorial.programmermahin.com/quick-learn"
                />
                <DeveloperListItem
                  title="Blogs"
                  desc="Learn the essentials in minutes - not hours."
                  icon={Rss}
                  link="/blog"
                />
                <DeveloperListItem
                  title="Error Resolving"
                  desc="Learn the essentials in minutes - not hours."
                  icon={OctagonAlert}
                  link="/error-resolving"
                />
              </div>
            </div>
            <div className="p-3 mt-3">
              <p className="text-read_2 uppercase font-medium text-text-color_3">
                Developers
              </p>
              <div className="mt-3 pl-5 flex flex-col gap-3">
                <DeveloperListItem
                  title="Developer Docs"
                  desc="Build, contribute, and explore the core of
                            ProgrammerMahin."
                  icon={CodeXml}
                  link="https://developer.programmermahin.com"
                />
                <DeveloperListItem
                  title="Community"
                  desc="Connect with like-minded developers to exchange
                          knowledge, collaborate, and grow together."
                  icon={UserRound}
                  link="/community"
                />
              </div>
              <div className="flex flex-col gap-3 mt-10">
                <Link
                  href={"https://github.com/gitmahin/next-programmermahin"}
                  target="_blank"
                >
                  <button className="w-full h-full flex justify-start items-start gap-3  group">
                    <div className="flex flex-shrink-0 w-[50px] h-[50px] justify-center items-center rounded bg-[#24292E]  transition-colors group-hover:bg-[#1b1f23]">
                      <GithubSVG width={20} height={20} />
                    </div>
                    <div className="w-full">
                      <h4 className="text-text-color_1 font-medium text-left text-read_2">
                        Github
                      </h4>
                      <p className="text-left text-[12px] leading-[0.9rem] two_line_ellipsis text-text-color_3">
                        Learn by coding. Contribute to programmermahin.com
                      </p>
                    </div>
                  </button>
                </Link>

                <Link
                  href={"https://discord.com/invite/yDjXa9hu2P"}
                  target="_blank"
                >
                  <button className="w-full h-full flex justify-start items-start gap-3  group">
                    <div className="flex flex-shrink-0 w-[50px] h-[50px] justify-center items-center rounded bg-indigo-600 group-hover:bg-indigo-700  transition-colors ">
                      <DiscordIcon color={"#ffffff"} width={24} height={24} />
                    </div>
                    <div className="w-full">
                      <h4 className="text-text-color_1 font-medium text-left text-read_2">
                        Join On Discord
                      </h4>
                      <p className="text-left text-[12px] leading-[0.9rem] two_line_ellipsis text-text-color_3">
                        Be part of our developer circle - collaborate, learn,
                        and grow on Discord.
                      </p>
                    </div>
                  </button>
                </Link>
                <Link
                  href={"https://www.facebook.com/groups/1269302621096148"}
                  target="_blank"
                >
                  <button className="w-full h-full flex justify-start items-start gap-3  group">
                    <div className="flex flex-shrink-0 w-[50px] h-[50px] justify-center items-center rounded bg-[#1772E8] group-hover:bg-[#1772e8e0]  transition-colors ">
                      <FacebookIcon color={"#ffffff"} width={24} height={24} />
                    </div>
                    <div className="w-full">
                      <h4 className="text-text-color_1 font-medium text-left text-read_2">
                        Connect With Facebook
                      </h4>
                      <p className="text-left text-[12px] leading-[0.9rem] two_line_ellipsis text-text-color_3">
                        Learn, Build, and Stay Updated. Join group chats and
                        share your projects on social.
                      </p>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
