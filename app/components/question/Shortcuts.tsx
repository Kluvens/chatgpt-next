import { CrossIcon, ShortCutsIcon } from "../icons/Icons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import ShortcutBox from "./ShortcutBox";
import ShortcutTitle from "./ShortcutTitle";

const Shortcuts = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem
          className="flex items-center cursor-pointer hover:token-surface-secondary rounded-xl text-md p-3 m-1.5 gap-2"
          onSelect={(e) => e.preventDefault()}
        >
          <div className="flex items-center justify-center token-text-secondary h-5 w-5">
            <ShortCutsIcon />
          </div>
          Keyboard shortcuts
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="rounded-3xl p-0 max-w-[900px]">
        <DialogHeader>
          <div className="px-4 pb-4 pt-5 sm:p-6 flex items-center justify-between border-b border-black/10 dark:border-white/10">
            <DialogTitle className="text-xl font-semibold leading-6 token-text-primary">
              Keyboard shortcuts
            </DialogTitle>
            <DialogClose asChild>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent hover:token-surface-secondary focus-visible:outline-none dark:hover:token-surface-tertiary sm:mt-0">
                <CrossIcon />
              </button>
            </DialogClose>
          </div>
        </DialogHeader>
        <div className="flex-grow overflow-y-auto p-4 sm:p-6">
          <div className="grid grid-flow-row gap-x-9 sm:grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col overflow-hidden text-md">
              <div className="flex items-center justify-between overflow-hidden token-text-primary">
                <ShortcutTitle title="Open new chat" />
                <div className="ml-3 flex flex-row gap-2 token-text-secondary">
                  <ShortcutBox shortcut="Ctrl" />
                  <ShortcutBox shortcut="Shift" />
                  <ShortcutBox shortcut="o" />
                </div>
              </div>
              <div className="flex items-center justify-between overflow-hidden token-text-primary">
                <ShortcutTitle title="Focus chat input" />
                <div className="ml-3 flex flex-row gap-2">
                  <ShortcutBox shortcut="Shift" />
                  <ShortcutBox shortcut="Esc" />
                </div>
              </div>
              <div className="flex items-center justify-between overflow-hidden token-text-primary">
                <ShortcutTitle title="Copy last code block" />
                <div className="ml-3 flex flex-row gap-2">
                  <ShortcutBox shortcut="Ctrl" />
                  <ShortcutBox shortcut="Shift" />
                  <ShortcutBox shortcut=";" />
                </div>
              </div>
              <div className="flex items-center justify-between overflow-hidden token-text-primary">
                <ShortcutTitle title="Copy last response" />
                <div className="ml-3 flex flex-row gap-2">
                  <ShortcutBox shortcut="Ctrl" />
                  <ShortcutBox shortcut="Shift" />
                  <ShortcutBox shortcut="c" />
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden">
              <div className="flex items-center justify-between overflow-hidden token-text-primary">
                <ShortcutTitle title="Set custom instructions" />
                <div className="ml-3 flex flex-row gap-2">
                  <ShortcutBox shortcut="Ctrl" />
                  <ShortcutBox shortcut="Shift" />
                  <ShortcutBox shortcut="i" />
                </div>
              </div>
              <div className="flex items-center justify-between overflow-hidden token-text-primary">
                <ShortcutTitle title="Toggle sidebar" />
                <div className="ml-3 flex flex-row gap-2">
                  <ShortcutBox shortcut="Ctrl" />
                  <ShortcutBox shortcut="Shift" />
                  <ShortcutBox shortcut="s" />
                </div>
              </div>
              <div className="flex items-center justify-between overflow-hidden token-text-primary">
                <ShortcutTitle title="Delete chat" />
                <div className="ml-3 flex flex-row gap-2">
                  <ShortcutBox shortcut="Ctrl" />
                  <ShortcutBox shortcut="Shift" />
                  <ShortcutBox shortcut="⌫" />
                </div>
              </div>
              <div className="flex items-center justify-between overflow-hidden token-text-primary">
                <ShortcutTitle title="Show shortcuts" />
                <div className="ml-3 flex flex-row gap-2">
                  <ShortcutBox shortcut="Ctrl" />
                  <ShortcutBox shortcut="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Shortcuts;
