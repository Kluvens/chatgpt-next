import { usePathname } from "next/navigation";
import { useChat } from "../../../contexts/ChatContext";
import {
  DownArrow,
  Gpt3Icon,
  Gpt4Icon,
  Gpt4oIcon,
  ModelSelectionTick,
} from "../icons/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ModelSelection = () => {
  const pathname = usePathname();
  const { model, setModel } = useChat();

  const handleModelSelect = (model: string) => {
    setModel(model);
  };

  const getModelNameByIndicator = (indicator: string) =>
    models.find((m) => m.indicator === indicator)?.name ?? null;

  const models = [
    {
      indicator: "GPT_4O",
      name: "4o",
      description: "Newest and most advanced model",
      icon: <Gpt4oIcon />,
    },
    {
      indicator: "GPT_4",
      name: "4",
      description: "Advanced model for complex tasks",
      icon: <Gpt4Icon />,
    },
    {
      indicator: "GPT_3_5",
      name: "3.5",
      description: "Great for everyday tasks",
      icon: <Gpt3Icon />,
    },
  ];

  return (
    <>
      {pathname !== "/chat" ? (
        <div className="group flex items-center gap-1 py-2 px-3 font-semibold overflow-hidden whitespace-nowrap">
          <div className="flex gap-2 token-text-secondary text-xl">
            ChatGPT
            <span className="token-text-secondary">
              {getModelNameByIndicator(model)}
            </span>
          </div>
        </div>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-xl focus-visible:outline-none focus-visible:token-surface-secondary hover:token-surface-secondary token-text-secondary">
            <div className="group flex cursor-pointer items-center gap-1 py-2 px-3 font-semibold overflow-hidden whitespace-nowrap">
              <div className="flex gap-2 token-text-secondary text-xl">
                ChatGPT
                <span className="token-text-secondary">
                  {getModelNameByIndicator(model)}
                </span>
              </div>
              <DownArrow />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="token-surface-primary rounded-3xl w-96 py-2"
          >
            <div className="flex items-center justify-between pb-0 pl-5 pr-4 pt-2">
              <DropdownMenuLabel className="text-sm font-normal token-surface-primary token-text-secondary">
                Model
              </DropdownMenuLabel>
            </div>
            {models.map((m) => (
              <DropdownMenuItem
                key={m.indicator}
                className="flex items-center m-1.5 p-2.5 text-sm cursor-pointer focus-visible:outline-0 group relative hover:token-surface-secondary focus-visible:token-surface-secondary dark:hover:token-surface-secondary dark:focus-visible:bg-token-main-surface-secondary rounded-md my-0 px-3 mx-2 gap-2.5 py-3 !pr-3"
                onSelect={() => handleModelSelect(m.indicator)}
              >
                <div className="flex grow items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center token-surface-secondary rounded-full p-1.5">
                      {m.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      GPT-{m.name}
                      <div className="token-text-secondary bg-transparent text-sm">
                        {m.description}
                      </div>
                    </div>
                  </div>
                  {model === m.indicator && <ModelSelectionTick />}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};

export default ModelSelection;
