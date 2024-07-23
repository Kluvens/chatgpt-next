"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CopyIcon, ShareRightIcon, ToastTickIcon } from "../icons/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Toaster } from "../ui/toaster";
import { useToast } from "../ui/use-toast";
import Shortcuts from "./Shortcuts";

const QuestionButton = () => {
  const { toast } = useToast();
  const { data: session } = useSession();

  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="hidden md:fixed group bottom-3 end-3 z-10 gap-1 bottom-2 end-2 md:flex lg:bottom-3 lg:end-3">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus-visible:outline-0">
          <div
            className="flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs token-text-secondary"
            id="radix-:r3:"
          >
            ?
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="token-surface-primary w-80 rounded-3xl mr-4">
          {session && (
            <DropdownMenuItem
              className="flex items-center cursor-pointer hover:token-surface-secondary rounded-xl text-md p-3 m-1.5 gap-2"
              onClick={(e) => {
                e.preventDefault();
                toast({
                  description: (
                    <div className="mt-1 flex-shrink-0 flex-grow-0 flex items-center">
                      <ToastTickIcon />
                      <span className="ml-2">
                        Copied your User ID to clipboard
                      </span>
                    </div>
                  ),
                });
              }}
            >
              <div className="flex items-center justify-center token-text-secondary h-5 w-5">
                <CopyIcon />
              </div>
              {session?.user?.email}
            </DropdownMenuItem>
          )}

          <DropdownMenuItem
            className="flex items-center cursor-pointer hover:token-surface-secondary rounded-xl text-md p-3 m-1.5 gap-2"
            onClick={() => handleNavigate("/qa")}
          >
            <div className="flex items-center justify-center token-text-secondary h-5 w-5">
              <ShareRightIcon />
            </div>
            Help & FAQ
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center cursor-pointer hover:token-surface-secondary rounded-xl text-md p-3 m-1.5 gap-2"
            onClick={() => handleNavigate("/release")}
          >
            <div className="flex items-center justify-center token-text-secondary h-5 w-5">
              <ShareRightIcon />
            </div>
            Release notes
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center cursor-pointer hover:token-surface-secondary rounded-xl text-md p-3 m-1.5 gap-2"
            onClick={() => handleNavigate("/policies")}
          >
            <div className="flex items-center justify-center token-text-secondary h-5 w-5">
              <ShareRightIcon />
            </div>
            Terms & policies
          </DropdownMenuItem>
          <Shortcuts />
        </DropdownMenuContent>
      </DropdownMenu>
      <Toaster />
    </div>
  );
};

export default QuestionButton;
