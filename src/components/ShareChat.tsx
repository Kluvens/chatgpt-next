import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShareUpIcon } from "./icons/Icons";

const ShareChat = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="flex items-center justify-center h-10 rounded-lg px-2 text-gray-500 focus-visible:outline-0 hover:bg-gray-200 focus-visible:bg-gray-200"
        >
          <ShareUpIcon />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <label htmlFor="link" className="sr-only">
              Link
            </label>
            <input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
              className="border border-gray-300 rounded-md px-2 py-1"
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            Copy
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShareChat;
