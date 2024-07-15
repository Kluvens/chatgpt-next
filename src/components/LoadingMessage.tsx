import { Skeleton } from "@/components/ui/skeleton";
import { ChatGptIcon } from "./icons/Icons";

const LoadingMessage = () => {
  return (
    <div
      className="group/conversation-turn w-full token-text-primary"
      dir="auto"
      data-testid="conversation-turn-3"
      data-scroll-anchor="false"
    >
      <div className="py-5 px-3 text-base md:px-4 m-auto md:px-5 lg:px-1 xl:px-5">
        <div className="mx-auto flex flex-1 gap-3 text-base gap-4 md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]">
          <div className="flex-shrink-0 flex flex-col relative items-end">
            <div className="gizmo-bot-avatar flex h-6 w-6 items-center justify-center overflow-hidden rounded-full h-8 w-8">
              <div className="relative p-1 rounded-sm flex items-center justify-center bg-token-main-surface-primary token-text-primary h-8 w-8">
                <ChatGptIcon />
              </div>
            </div>
          </div>
          <div className="relative flex w-full min-w-0 flex-col agent-turn">
            <div className="flex-col gap-1 md:gap-3">
              <div className="flex flex-grow flex-col max-w-full">
                <div
                  data-message-author-role="assistant"
                  data-message-id="567f11bc-63fd-4db4-b3d7-ab608d1777da"
                  dir="auto"
                  className="min-h-[20px] text-message flex flex-col items-start whitespace-pre-wrap break-words [.text-message+&amp;]:mt-5 w-full items-end overflow-x-auto gap-2"
                >
                  <div className="flex w-full flex-col gap-1 empty:hidden first:pt-[3px]">
                    <div className="markdown prose w-full break-words dark:prose-invert light">
                      <Skeleton className="h-6 w-[250px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingMessage;
