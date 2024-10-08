import { signOut, useSession } from "next-auth/react";
import { AppsIcon, LogoutIcon } from "../icons/Icons";
import MyPlan from "../plan/MyPlan";
import Settings from "../settings/Settings";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import CustomiseGpts from "./CustomiseGpts";

const AvatarDropDown = () => {
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-10 w-10 flex items-center justify-center rounded-full focus-visible:outline-0 focus-visible:token-surface-secondary hover:token-surface-secondary">
        <Avatar className="w-8 h-8">
          <AvatarImage
            src={session?.user.image || ""}
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
          onClick={() => signOut({ callbackUrl: "/chat" })}
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
