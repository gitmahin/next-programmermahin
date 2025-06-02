"use client";
import {
  Checkbox,
  FacebookIcon,
  GithubSVG,
  Input,
  LUCIDE_DEFAULT_ICON_SIZE,
  PMButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
  TwitterSVG,
  WhatsAppIcon,
  PMLogo,
  StatusBox,
} from "@programmer/ui";
import { ArrowLeft, MessageCircleQuestion, PlusIcon, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

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

interface QuestionType {
  label: string;
}

const QUESTIONS: QuestionType[] = [
  {
    label: "How can I get started with your tutorials?",
  },
  {
    label: "Can I contribute to your platform?",
  },
  {
    label: "Where can I report a bug or technical issue?",
  },
  {
    label: "Do you have any premium or paid content?",
  },
];

export default function ContactPage() {
  const [userQuestions, setUserQuestions] = useState<QuestionType[]>([]);
  const [openQuestionPopUp, setOpenQuestionPopUp] = useState<boolean>(false);
  const [isActiveTab, setIsActiveTab] = useState<Record<ContactType, boolean>>({
    contact: true,
    question: false,
    support: false,
  });
  const router = useRouter();

  const [isNoneOfAbove, setIsNoNoneOfAbove] = useState<boolean>(false);

  const handleAddQuestions = (item: QuestionType) => {
    setUserQuestions((prev) => {
      const isAlreadyAdded = prev.some((q) => q.label === item.label);
      if (isAlreadyAdded) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const handleRemoveQuestion = (item: QuestionType) => {
    setUserQuestions((prev) => prev.filter((q) => q.label !== item.label));
  };

  const handleActiveTab = (type: ContactType) => {
    setIsActiveTab({
      contact: false,
      question: false,
      support: false,
      [type]: true,
    });
  };

  return (
    <div className="w-full h-screen fixed top-0 left-0 z-[50] overflow-hidden bg-background-color_950C flex justify-center items-center">
      <PMButton
        onClick={() => router.back()}
        variant="silent"
        className="fixed top-5 z-50 transition-all left-5 gap-2 px-3 w-fit h-[30px] flex justify-center items-center group rounded-full"
      >
        <ArrowLeft
          size={LUCIDE_DEFAULT_ICON_SIZE}
          className="text-text-svg_default_color transition-all group-hover:text-text-color_1"
        />
        <span className="text-text-color_3 group-hover:text-text-color_1 font-medium transition-colors text-read_2">
          Back
        </span>
      </PMButton>
      <div className="w-full relative h-full flex justify-center items-center  ">
        <div className="absolute w-full h-full bg-gradient-to-r from-background-color_950C via-background-color_950C to-transparent z-[2]"></div>

        <div className="overflow-y-auto custom_scrollbar w-full h-full py-24 relative z-30">
          <div className="relative z-20 max-w-[350px] w-full h-fit mx-auto ">
            <div className="flex justify-center items-center w-full gap-3">
              {CONTACT_OPTIONS.map((item, i) => {
                return (
                  <label key={i} className="w-full select-none ">
                    <input
                      type="radio"
                      name="contactType"
                      value={item.type}
                      className="hidden peer"
                      id={item.type}
                      defaultValue={"contact"}
                      defaultChecked={item.type === "contact"}
                      onChange={() => handleActiveTab(item.type)}
                    />
                    <div
                      className={`text-text-color_2 peer-checked:bg-[var(--surface-purple-bg)] border-border-color_800C peer-checked:border-[var(--surface-purple-border)] peer-checked:text-[var(--surface-purple-fg)] hover:bg-[var(--surface-purple-bg)] w-full px-3 py-1.5 text-read_2 font-medium rounded border flex justify-center items-center hover:border-[var(--surface-purple-bg)] hover:text-[var(--surface-purple-fg)] cursor-pointer transition-colors `}
                    >
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

            {isActiveTab.question && (
              <div className="mt-3">
                <h4 className="font-medium text-text-color_4 text-read_2">
                  Add your questions
                </h4>
                <p className="text-read_3 text-text-color_3 mt-1">
                  Choose from the common questions below so we can help you
                  faster.
                </p>

                <Popover
                  open={openQuestionPopUp}
                  onOpenChange={setOpenQuestionPopUp}
                >
                  <PopoverTrigger asChild>
                    <PMButton
                      variant="secondary"
                      className="w-full rounded transition-colors mt-3 flex justify-center items-center px-3 group py-1.5 gap-2"
                    >
                      <PlusIcon
                        size={LUCIDE_DEFAULT_ICON_SIZE}
                        className="text-text-svg_default_color transition-colors  group-hover:text-text-color_1"
                      />
                      <span className="text-text-color_2 group-hover:text-text-color_1 font-medium text-read_2 transition-colors">
                        Add Questions
                      </span>
                    </PMButton>
                  </PopoverTrigger>
                  <PopoverContent
                    align="start"
                    className="w-[350px] border-border-color_800C bg-background-color_900C p-1"
                  >
                    {QUESTIONS.map((item, i) => {
                      return (
                        <div
                          key={i}
                          onClick={() => {
                            handleAddQuestions(item);
                            setOpenQuestionPopUp(false);
                          }}
                          className="text-text-color_4 cursor-pointer py-1.5 px-3 rounded-tiny  transition-colors hover:bg-background-color_800C text-read_2 font-medium hover:text-text-color_1"
                        >
                          {item.label}
                        </div>
                      );
                    })}
                  </PopoverContent>
                </Popover>

                {userQuestions.length > 0 && (
                  <div className="mt-3 border  rounded border-border-color_800C overflow-hidden">
                    <div className="py-1 px-3 text-[11px] font-medium text-text-color_3 border-b border-border-color_800C bg-background-color_925C">
                      My Questions
                    </div>
                    <div className="p-2 flex flex-col gap-2">
                      {userQuestions.map((item, i) => {
                        return (
                          <div
                            key={i}
                            className="bg-[var(--accent-surface-info-bg)] z-10 py-1.5 px-3 rounded-tiny flex justify-between items-center"
                          >
                            <div className="flex justify-start items-center gap-2.5">
                              <MessageCircleQuestion
                                size={LUCIDE_DEFAULT_ICON_SIZE}
                                className={``}
                                color="var(--accent-surface-info-fg)"
                              />
                              <p className="text-[var(--accent-surface-info-fg)] font-medium text-read_2">
                                {item.label}
                              </p>
                            </div>
                            <X
                              onClick={() => handleRemoveQuestion(item)}
                              size={LUCIDE_DEFAULT_ICON_SIZE}
                              className="text-text-svg_default_color transition-colors cursor-pointer hover:text-text-color_1"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="flex justify-start items-center gap-2 mt-3">
                  <Checkbox
                    id="noneoftheavobe"
                    onCheckedChange={(checked: boolean) => {
                      setIsNoNoneOfAbove(checked);
                      setUserQuestions([]);
                    }}
                  />
                  <label
                    htmlFor="noneoftheavobe"
                    className="text-read_2 text-text-color_2"
                  >
                    None of the avobe
                  </label>
                </div>

                {isNoneOfAbove && (
                  <div>
                    <p className="text-read_3 text-text-color_3 mt-3">
                      Share your question clearly so we can respond with the
                      most helpful information.
                    </p>
                    <Textarea
                      placeholder="Type your question here..."
                      className="text-read_2 h-[100px] mt-1 bg-background-color_925C custom_scrollbar"
                      name="message"
                    />
                  </div>
                )}
              </div>
            )}

            {(isActiveTab.contact || isActiveTab.support) && (
              <div className="mt-3">
                <p className="text-read_2 font-medium text-text-color_4">
                  Message
                </p>
                <Textarea
                  placeholder="Your messsage here..."
                  className="text-read_2 h-[100px] mt-1 bg-background-color_925C custom_scrollbar"
                  name="message"
                />
              </div>
            )}

            <PMButton className="w-full py-1.5 rounded px-3 transition-colors mt-5">
              <span className="text-read_2 font-medium text-text-zinc_white">
                Submit
              </span>
            </PMButton>
            <div className="mt-5">
              <StatusBox
                status={"warning"}
                statusCode={503}
                tag="Under Development"
                message={
                  "Contact page is currently under development. Please check back later! You can still use contact page of v2.programmermahin.com"
                }
              />
            </div>
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
          <div className=" w-full h-[50px] mt-5 flex justify-between items-center ">
            <div className="flex justify-start items-center gap-3 w-full ">
              {SOCIAL_LINKS.map((item, i) => {
                const SocialIcon = item.icon;
                return (
                  <Link href={`${item.url}`} key={i} target="_blank">
                    <SocialIcon width={25} height={25} />
                  </Link>
                );
              })}
            </div>
            <div className="pr-5">
              <PMLogo size="sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
