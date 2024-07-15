import { PlanIcon } from "../icons/Icons";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PlanDialog from "./PlanDialog";

const MyPlan = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem
          className="flex items-center cursor-pointer hover:bg-[#f5f5f5] rounded-xl text-sm p-3 m-1.5 gap-2"
          onSelect={(e) => e.preventDefault()}
        >
          <div className="flex items-center justify-center token-text-secondary h-5 w-5">
            <PlanIcon />
          </div>
          My plan
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="flex flex-col rounded-3xl p-0 min-w-[750px] min-h-[500px] gap-0">
        <PlanDialog />
      </DialogContent>
    </Dialog>
  );
};

export default MyPlan;
