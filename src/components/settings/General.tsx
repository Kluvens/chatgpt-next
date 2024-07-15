import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const General = () => {
  return (
    <div className="w-full overflow-y-auto">
      <div className="flex flex-col gap-3 px-4 pb-1 text-sm token-text-primary sm:px-6 sm:pb-2 md:ps-0">
        <div className="border-b pb-3">
          <div className="flex items-center justify-between pt-1">
            <div>Theme</div>
            <Select defaultValue="system">
              <SelectTrigger className="w-auto focus-visible:outline-none">
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent className="rounded-xl token-text-primary p-1">
                <SelectItem value="system" className="gap-2 cursor-pointer">
                  System
                </SelectItem>
                <SelectItem value="light" className="gap-2 cursor-pointer">
                  Light
                </SelectItem>
                <SelectItem value="dark" className="gap-2 cursor-pointer">
                  Dark
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="border-b pb-3">
          <div className="flex items-center justify-between">
            <div>Always show code when using data analyst</div>
            <Switch />
          </div>
        </div>
        <div className="border-b pb-3">
          <div className="flex items-center justify-between">
            <div>Language</div>
            <Select defaultValue="auto">
              <SelectTrigger className="w-auto focus-visible:outline-none">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent className="rounded-xl token-text-primary p-1">
                <SelectItem value="auto" className="gap-2 cursor-pointer">
                  Auto-detect
                </SelectItem>
                <SelectItem value="english" className="gap-2 cursor-pointer">
                  English
                </SelectItem>
                <SelectItem value="french" className="gap-2 cursor-pointer">
                  French
                </SelectItem>
                <SelectItem value="japanese" className="gap-2 cursor-pointer">
                  Japanese
                </SelectItem>
                <SelectItem value="chinese" className="gap-2 cursor-pointer">
                  Chinese
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="border-b pb-3">
          <div className="flex items-center justify-between">
            <div>Archived chats</div>
            <Button variant="outline" className="rounded-full border">
              <div className="flex items-center justify-center">Manage</div>
            </Button>
          </div>
        </div>
        <div className="border-b pb-3">
          <div className="flex items-center justify-between">
            <div>Archive all chats</div>
            <Button variant="outline" className="rounded-full border">
              <div className="flex items-center justify-center">
                Archive all
              </div>
            </Button>
          </div>
        </div>
        <div className="border-b pb-3 last-of-type:border-b-0">
          <div className="flex items-center justify-between">
            <div>Delete all chats</div>
            <Button variant="destructive" className="rounded-full border">
              <div className="flex items-center justify-center">Delete all</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
