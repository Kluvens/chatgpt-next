import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlanIcon, AppsIcon, CustomizeIcon, SettingsIcon, LogoutIcon } from "./icons/Icons";
import Settings from "./settings/Settings";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomiseGpts from "./CustomiseGpts";
import MyPlan from "./plan/MyPlan";
import Link from "next/link";

const AvatarDropDown = () => {
  const handleClick = (e: any) => {
    e.preventDefault();
    // Additional actions
    console.log('DialogTrigger clicked!');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-10 w-10 flex items-center justify-center rounded-full focus-visible:outline-0 focus-visible:token-surface-secondary hover:token-surface-secondary">
        <Avatar className="w-8 h-8">
          <AvatarImage
            src="https://lh3.googleusercontent.com/a/AEdFTp7GohtCTuOxye4y1c9F_BD4P6svNv7398pMSiLS=s96-c"
            loading="lazy"
            decoding="async"
          />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 rounded-3xl mr-4">
        <MyPlan/>
        <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-[#f5f5f5] rounded-xl text-sm p-3 m-1.5 gap-2" disabled>
          <div className="flex items-center justify-center token-text-secondary h-5 w-5">
            <AppsIcon />
          </div>
          My GPTs
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-[#f5f5f5] rounded-xl text-sm p-3 m-1.5 gap-2" onSelect={(e) => e.preventDefault()}>
            <CustomiseGpts />
        </DropdownMenuItem>
        <Settings />
        <DropdownMenuSeparator />
        <Link href={"/"}>
        <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-[#f5f5f5] rounded-xl text-sm p-3 m-1.5 gap-2">
          <div className="flex items-center justify-center token-text-secondary h-5 w-5">
            <LogoutIcon />
          </div>
          Log out
        </DropdownMenuItem>
        </Link>
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropDown;
