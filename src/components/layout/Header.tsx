import { motion } from "framer-motion";
import { CollapseIcon, NewChatIcon } from "../icons/Icons";
import ModelSelection from "../common/ModelSelection";
import ShareChat from "../common/ShareChat";
import AvatarDropDown from "../common/AvatarDropDown";

const Header: React.FC<{
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}> = ({ isSidebarOpen, toggleSidebar }) => (
  <div className="sticky bg-white top-0 p-3 mb-1.5 flex items-center justify-between z-10 h-14 p-2 font-semibold token-surface-primary">
    <div className="flex items-center gap-2 overflow-hidden gap-0">
      {!isSidebarOpen && (
        <motion.div className="flex items-center" layout>
          <button
            className="h-10 rounded-lg px-2 token-text-secondary focus-visible:outline-0 hover:token-surface-secondary focus-visible:token-surface-secondary"
            onClick={toggleSidebar}
          >
            <CollapseIcon />
          </button>
          <div
            role="button"
            tabIndex={0}
            className="flex items-center justify-center h-10 rounded-lg px-2 token-text-secondary focus-visible:outline-0 hover:token-surface-secondary focus-visible:token-surface-secondary"
          >
            <NewChatIcon />
          </div>
        </motion.div>
      )}

      <ModelSelection />
    </div>
    <div className="flex gap-2 pr-1">
      {/* Share link */}
      <ShareChat />
      {/* Profile Avatar */}
      <AvatarDropDown />
    </div>
  </div>
);

export default Header;
