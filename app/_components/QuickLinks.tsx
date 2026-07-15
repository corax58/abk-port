"use client";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/data/socialLinks";
import { Copy, CopyCheck, Link } from "lucide-react";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

const src = "/assets/icons/socialIcons/gmail.svg";
const QuickLinks = () => {
  const [isCopied, setIsCopied] = React.useState(false);
  const email = "AbubekerCorax@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    toast.success("Email copied to clipboard!");
  };
  return (
    <div className="flex flex-col gap-4 md:max-w-sm max-md:items-center max-md:w-full ">
      <p className=" text-sm text-muted-foreground"> Connect with me</p>
      <div className=" border-border border rounded-xs p-2 flex justify-between items-center">
        <div className="relative size-10 sm:size-14 rounded-xs border transition-all overflow-hidden hover:scale-110 ">
          <Image
            src={src}
            className={` size-10 sm:size-14  scale-110  `}
            alt={"gmail"}
            width={54}
            height={54}
          ></Image>
        </div>
        <p className="font-mono text-primary">AbubekerCorax@gmail.com</p>
        <Button
          variant={"ghost"}
          className=" rounded-xs curosr-pointer"
          onClick={handleCopy}
        >
          {isCopied ? <CopyCheck /> : <Copy />}
        </Button>
      </div>

      <div className="flex justify-between gap-2">
        {SOCIAL_LINKS.map((socialLink, index) => (
          <a
            href={socialLink.url}
            target="_blank"
            key={index}
            className="  h-fit w-fit border-border border rounded-xs p-2 overflow-clip"
          >
            <div className="relative rounded-xs overflow-hidden hover:scale-110 transition-all">
              <div className=" w-full h-full flex ">
                <div className="absolute w-5 h-5 blur-md  rounded-full bg-white"></div>
              </div>
              <Image
                src={socialLink.icon}
                className={`size-13.5 rounded-xs  scale-115  `}
                alt={socialLink.platform}
                width={54}
                height={54}
              ></Image>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
