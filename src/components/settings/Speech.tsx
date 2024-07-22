import { useSettings } from "@/contexts/SettingsContext";
import { SpeechRadioPlayIcon } from "../icons/Icons";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Speech = () => {
  const { settings, setSettings } = useSettings();

  const handleVoiceChange = (value: string) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      speech: {
        ...prevSettings.speech,
        voice: value,
      },
    }));
  };
  return (
    <div className="w-full overflow-y-auto p-0">
      <div className="flex flex-col gap-3 px-4 pb-1 text-sm token-text-primary sm:px-6 sm:pb-2 md:ps-0">
        <div className="border-b pb-3 last-of-type:border-b-0">
          <div className="flex flex-col flex-nowrap gap-2">
            <div className="flex items-center justify-between">
              <div>Voice</div>
              <div className="flex flex-row flex-nowrap items-center gap-1">
                <Button
                  variant={"outline"}
                  className="relative rounded-full border-none shadow-none flex flex-row flex-nowrap items-center gap-1 border-none font-normal"
                >
                  <div className="flex w-full items-center justify-center gap-1.5">
                    <SpeechRadioPlayIcon />
                    Play
                  </div>
                </Button>
                <div className="h-4 border-l"></div>
                <Select
                  defaultValue={settings.speech.voice}
                  onValueChange={handleVoiceChange}
                >
                  <SelectTrigger className="w-auto border-none shadow-none outline-none hover:token-surface-secondary focus-visible:outline-none ring-0 focus:ring-0">
                    <SelectValue placeholder="Select a theme" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl token-text-primary p-1">
                    <SelectItem value="alloy" className="gap-2 cursor-pointer">
                      Alloy
                    </SelectItem>
                    <SelectItem value="echo" className="gap-2 cursor-pointer">
                      Echo
                    </SelectItem>
                    <SelectItem value="fable" className="gap-2 cursor-pointer">
                      Fable
                    </SelectItem>
                    <SelectItem value="onyx" className="gap-2 cursor-pointer">
                      Onyx
                    </SelectItem>
                    <SelectItem value="nova" className="gap-2 cursor-pointer">
                      Nova
                    </SelectItem>
                    <SelectItem
                      value="shimmer"
                      className="gap-2 cursor-pointer"
                    >
                      Shimmer
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speech;
