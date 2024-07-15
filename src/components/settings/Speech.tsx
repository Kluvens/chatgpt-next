import { DownArrow, SpeechRadioPlayIcon } from "../icons/Icons";
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
                <Button
                  variant={"outline"}
                  className="relative rounded-full border-none shadow-none flex flex-row flex-nowrap items-center gap-1 border-none font-normal"
                >
                  <div className="flex w-full items-center justify-center gap-1.5">
                    <SpeechRadioPlayIcon />
                    Play
                  </div>
                </Button>
                <div className="h-4 border-l"></div>
                <button className="token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm dark:transparent dark:bg-transparent leading-none outline-none cursor-pointer hover:token-surface-secondary dark:hover:token-surface-secondary focus-visible:token-surface-secondary radix-state-active:token-text-secondary radix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:token-text-tertiary dark:radix-disabled:bg-transparent">
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
