import { RightArrow } from "../icons/Icons";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";

const Personalisation = () => {
  return (
    <div className="w-full overflow-y-auto">
      <div className="flex flex-col gap-3 px-4 pb-1 text-sm token-text-primary sm:px-6 sm:pb-2 md:ps-0">
        <div className="border-b pb-3">
          <button className="w-full">
            <div className="flex items-center justify-between">
              <div>Custom instructions</div>
              <div className="flex items-center token-text-secondary">
                <div className="-mt-0.5 me-1">On</div>
                <RightArrow />
              </div>
            </div>
          </button>
        </div>
        <div className="border-b pb-3 last-of-type:border-b-0">
          <div className="flex items-center justify-between">
            <div>Memory</div>
            <Switch defaultChecked />
          </div>
          <div className="text-xs token-text-secondary pr-12 mt-3">
            <p>
              ChatGPT will become more helpful as you chat, picking up on
              details and preferences to tailor its responses to you.{" "}
              <a
                href="https://help.openai.com/en/articles/8590148-memory-in-chatgpt-faq"
                className="underline"
              >
                Learn more
              </a>
            </p>
            <p className="mt-3">
              To understand what ChatGPT remembers or teach it something new,
              just chat with it:
            </p>
            <ul className="my-2 flex list-disc flex-col gap-1 pl-5">
              <li>“Remember that I like concise responses.”</li>
              <li>“I just got a puppy!”</li>
              <li>“What do you remember about me?”</li>
              <li>“Where did we leave off on my last project?”</li>
            </ul>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Button variant={"outline"} className="rounded-full border">
              <div className="flex items-center justify-center">Manage</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalisation;
