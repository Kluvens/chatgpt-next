import React from 'react';
import HistoryItem from './HistoryItem';

const Sidebar = () => {
  const chatHistory = {
    today: [
      'Interact Next js with the backend',
      'This is second for today',
      'This is third for today',
    ],
    yesterday: [
      'This is first for yesterday',
      'This is second for yesterday',
      'This is third for yesterday',
      'This is fourth for yesterday',
      'This is first for yesterday',
      'This is second for yesterday',
      'This is third for yesterday',
      'This is fourth for yesterday',
      'This is first for yesterday',
      'This is second for yesterday',
      'This is third for yesterday',
      'This is fourth for yesterday',
      'This is first for yesterday',
      'This is second for yesterday',
      'This is third for yesterday',
      'This is fourth for yesterday',
      'This is first for yesterday',
      'This is second for yesterday',
      'This is third for yesterday',
      'This is fourth for yesterday',
      'This is first for yesterday',
      'This is second for yesterday',
      'This is third for yesterday',
      'This is fourth for yesterday',
    ],
  };

  return (
    <div className="hidden md:flex flex-shrink-0 bg-gray-50 overflow-x-hidden w-[260px]">
      <div className="h-full w-full">
        <div className="flex h-full min-h-0 flex-col">
          <div className="relative h-full w-full flex-1 items-start border-white/20">
            <nav className="flex h-full w-full flex-col px-3 pb-3.5">
              <div className="flex justify-between flex h-14 items-center">
                <span className="" data-state="closed">
                  <button className="h-10 rounded-lg px-2 token-text-secondary focus-visible:outline-0 hover:bg-gray-200 focus-visible:bg-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="icon-xl-heavy"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M8.857 3h6.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961.058.708.058 1.582.058 2.666v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.1 21 16.227 21 15.143 21H8.857c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C1.5 15.6 1.5 14.727 1.5 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.23 3.544c.592-.302 1.233-.428 1.961-.487C6.9 3 7.773 3 8.857 3M6.354 5.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.05.617-.051 1.41-.051 2.546v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h.6V5h-.6c-1.137 0-1.929 0-2.546.051M11.5 5v14h3.6c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C17.029 5.001 16.236 5 15.1 5zM5 8.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </span>
                <span className="" data-state="closed">
                  <button className="h-10 rounded-lg px-2 token-text-secondary focus-visible:outline-0 hover:bg-gray-200 focus-visible:bg-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="icon-xl-heavy"
                    >
                      <path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path>
                    </svg>
                  </button>
                </span>
              </div>

              <div className="flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2 overflow-y-auto">
                <div></div>

                {/* Chat History */}
                <div className="flex flex-col gap-2 pb-2 text-md mt-5">
                  <div>
                    {/* Chat History Today */}
                    <div className="relative mt-5">
                      <div>
                        <span className="flex h-9 items-center">
                          <h3 className="pb-2 pt-3 px-2 text-sm font-semibold text-ellipsis overflow-hidden break-all token-text-secondary">
                            Today
                          </h3>
                        </span>
                      </div>
                      <ol className="text-gray-950">
                        {chatHistory.today.map((message, index) => (
                          <HistoryItem key={index} message={message} />
                        ))}
                      </ol>
                    </div>

                    {/* Chat History Yesterday */}
                    <div className="relative mt-5">
                      <div>
                        <span className="flex h-9 items-center">
                          <h3 className="pb-2 pt-3 px-2 text-sm font-semibold text-ellipsis overflow-hidden break-all token-text-secondary">
                            Yesterday
                          </h3>
                        </span>
                      </div>
                      <ol className="text-gray-950">
                        {chatHistory.yesterday.map((message, index) => (
                          <HistoryItem key={index} message={message} />
                        ))}
                      </ol>
                    </div>

                    {/* Placeholder for Previous 7 Days */}
                    <div></div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
