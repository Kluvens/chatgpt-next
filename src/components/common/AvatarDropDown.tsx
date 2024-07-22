import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { AppsIcon, LogoutIcon } from "../icons/Icons";
import MyPlan from "../plan/MyPlan";
import Settings from "../settings/Settings";
import CustomiseGpts from "./CustomiseGpts";

const AvatarDropDown = () => {
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
      <DropdownMenuContent className="token-surface-primary w-80 rounded-3xl mr-4">
        <MyPlan />
        <DropdownMenuItem
          className="flex items-center cursor-pointer hover:token-surface-secondary rounded-xl text-sm p-3 m-1.5 gap-2"
          disabled
        >
          <div className="flex items-center justify-center token-text-secondary h-5 w-5">
            <AppsIcon />
          </div>
          My GPTs
        </DropdownMenuItem>
        <CustomiseGpts />
        <Settings />
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex items-center cursor-pointer hover:token-surface-secondary rounded-xl text-sm p-3 m-1.5 gap-2"
          onClick={() =>
            signOut({ callbackUrl: process.env.NEXT_PUBLIC_NEXTAUTH_URL })
          }
        >
          <div className="flex items-center justify-center token-text-secondary h-5 w-5">
            <LogoutIcon />
          </div>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropDown;
