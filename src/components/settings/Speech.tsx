import { DownArrow } from "../icons/Icons";
import { Button } from "../ui/button";

const Speech = () => {
  return (
    <div className="w-full overflow-y-auto p-0">
      <div className="flex flex-col gap-3 px-4 pb-1 text-sm token-text-primary sm:px-6 sm:pb-2 md:ps-0">
        <div className="border-b pb-3 last-of-type:border-b-0">
          <div className="flex flex-col flex-nowrap gap-2">
            <div className="flex items-center justify-between">
              <div>Voice</div>
              <div className="flex flex-row flex-nowrap items-center gap-1">
                <Button variant={"outline"} className="relative rounded-full border-none shadow-none flex flex-row flex-nowrap items-center gap-1 border-none font-normal">
                  <div className="flex w-full items-center justify-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                      <path fill="currentcolor" fill-rule="evenodd" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12" clip-rule="evenodd"></path>
                      <path fill="currentcolor" d="M9.5 14.668V9.332a1 1 0 0 1 1.54-.842l4.152 2.669a1 1 0 0 1 0 1.682L11.04 15.51a1 1 0 0 1-1.541-.842"></path>
                    </svg>
                    Play
                  </div>
                </Button>
                <div className="h-4 border-l"></div>
                <button type="button" role="combobox" aria-controls="radix-:r1b0:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" className="token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm dark:transparent dark:bg-transparent leading-none outline-none cursor-pointer hover:token-surface-secondary dark:hover:token-surface-secondary focus-visible:token-surface-secondary radix-state-active:token-text-secondary radix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:token-text-tertiary dark:radix-disabled:bg-transparent">
                  <span>Cove</span>
                  <span aria-hidden="true">
                    <DownArrow />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speech;
