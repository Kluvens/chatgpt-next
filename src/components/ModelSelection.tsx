import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ModelSelection = () => {
  const [selectedModel, setSelectedModel] = useState('4o');

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
  };

  const models = [
    { name: '4o', description: 'Newest and most advanced model' },
    { name: '4', description: 'Advanced model for complex tasks' },
    { name: '3.5', description: 'Great for everyday tasks' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          role="button"
          className="group flex focus-visible:outline-none cursor-pointer items-center gap-1 rounded-xl py-2 px-3 font-semibold hover:token-surface-secondary token-text-secondary rounded-lg py-1.5 overflow-hidden whitespace-nowrap"
        >
          <div className="flex gap-2 token-text-secondary text-xl">
            ChatGPT
            <span className="token-text-secondary">{selectedModel}</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            className="icon-md text-token-text-tertiary"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
          <div
            data-side="bottom"
            data-align="start"
            aria-orientation="vertical"
            data-state="open"
            data-radix-menu-content=""
            aria-labelledby="radix-:ra5:"
            className="max-w-xs rounded-lg popover bg-token-main-surface-primary shadow-lg will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade border border-token-border-light juice:rounded-2xl juice:py-2 min-w-[340px] overflow-hidden"
            data-orientation="vertical"
          >
            <div className="flex items-center justify-between pb-0 pl-5 pr-4 pt-4 juice:mb-1 juice:px-5 juice:pt-2">
              <DropdownMenuLabel className="text-sm token-text-tertiary">
                Model
              </DropdownMenuLabel>
            </div>
            {models.map((model) => (
              <DropdownMenuItem
                key={model.name}
                className="flex items-center m-1.5 p-2.5 text-sm cursor-pointer focus-visible:outline-0 radix-disabled:pointer-events-none radix-disabled:opacity-50 group relative hover:bg-[#f5f5f5] focus-visible:bg-[#f5f5f5] dark:hover:bg-token-main-surface-secondary dark:focus-visible:bg-token-main-surface-secondary rounded-md my-0 px-3 mx-2 radix-state-open:bg-[#f5f5f5] dark:radix-state-open:bg-token-main-surface-secondary gap-2.5 py-3 !pr-3"
                onSelect={() => handleModelSelect(model.name)}
              >
                <div className="flex grow items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-token-main-surface-secondary">
                        <div className="[&amp;_svg]:h-full [&amp;_svg]:w-full h-4 w-4 text-token-text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12.001 1.75c.496 0 .913.373.969.866.306 2.705 1.126 4.66 2.44 6 1.31 1.333 3.223 2.17 5.95 2.412a.976.976 0 0 1-.002 1.945c-2.682.232-4.637 1.067-5.977 2.408-1.34 1.34-2.176 3.295-2.408 5.977a.976.976 0 0 1-1.945.002c-.243-2.727-1.08-4.64-2.412-5.95-1.34-1.314-3.295-2.134-6-2.44a.976.976 0 0 1-.002-1.94c2.75-.317 4.665-1.137 5.972-2.444 1.307-1.307 2.127-3.221 2.444-5.972a.976.976 0 0 1 .971-.864Z"
                            ></path>
                          </svg>
                        </div>
                      </span>
                      <div>
                        ChatGPT-{model.name}
                        <div className="token-text-tertiary text-xs">
                          {model.description}
                        </div>
                      </div>
                    </div>
                  </div>
                  {selectedModel === model.name && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="icon-md"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m14.076-4.068a1 1 0 0 1 .242 1.393l-4.75 6.75a1 1 0 0 1-1.558.098l-2.5-2.75a1 1 0 0 1 1.48-1.346l1.66 1.827 4.032-5.73a1 1 0 0 1 1.394-.242"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  )}
                </div>
              </DropdownMenuItem>
            ))}
          </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModelSelection;
