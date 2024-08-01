import { usePathname } from "next/navigation";
import { useState } from "react";
import { ShareUpIcon } from "../icons/Icons";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

const ShareChat = () => {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("https://ui.shadcn.com/docs/installation")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
      {pathname !== "/chat" && (
        <Dialog>
          <DialogTrigger asChild>
            <button
              aria-label="Share chat button"
              className="flex items-center justify-center h-10 rounded-lg px-2 token-text-secondary focus-visible:outline-0 hover:token-surface-secondary focus-visible:token-surface-secondary"
            >
              <ShareUpIcon />
            </button>
          </DialogTrigger>
          <DialogContent className="token-surface-primary token-text-primary rounded-3xl">
            <DialogHeader>
              <DialogTitle className="py-4">
                Share public link to chat
              </DialogTitle>
              <Separator />
              <DialogDescription className="py-4 text-lg token-text-primary">
                Your name, custom instructions, and any messages you add after
                sharing stay private.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <input
                  id="link"
                  defaultValue="https://ui.shadcn.com/docs/installation"
                  className="border border-gray-300 rounded-full px-6 py-3 pr-20"
                />
              </div>
              <Button
                type="button"
                size="sm"
                onClick={copyToClipboard}
                className="flex items-center justify-center text-md relative right-8 px-3 rounded-full"
              >
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ShareChat;
