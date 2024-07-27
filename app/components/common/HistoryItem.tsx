import Link from "next/link";
import React from "react";

interface HistoryItemProps {
  chat: string;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ chat }) => {
  return (
    <li className="relative z-[15] group">
      <div className="relative rounded-lg active:opacity-90 group-hover:sidebar-surface-secondary">
        <Link href={`/chat/${chat}`} className="flex items-center gap-2 p-2">
          <div className="relative grow overflow-hidden whitespace-nowrap">
            {chat}
            <div className="absolute bottom-0 top-0 right-0 bg-gradient-to-l from-[#f9f9f9] dark:from-[#171717] to-transparent w-8 group-hover:from-[#ececec] dark:group-hover:from-[#212121] group-hover:w-20 group-hover:from-[30%] rtl:left-0 rtl:bg-gradient-to-r rtl:right-auto"></div>
          </div>
        </Link>
        <div className="absolute bottom-0 top-0 items-center gap-1.5 right-1 flex opacity-0 group-hover:opacity-100 transition-opacity">
          <span>
            <button className="flex items-center justify-center transition token-text-secondary hover:token-text-primary">
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
                  d="M3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </span>
        </div>
      </div>
    </li>
  );
};

export default HistoryItem;
