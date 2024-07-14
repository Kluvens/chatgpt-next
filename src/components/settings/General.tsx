import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const General = () => {
  return (
    <div className='w-full overflow-y-auto'>
      <div className='flex flex-col gap-3 px-4 pb-1 text-sm token-text-primary sm:px-6 sm:pb-2 md:ps-0'>
        <div className="border-b pb-3">
          <div className="flex items-center justify-between">
            <div>Theme</div>
            <button type="button" className="token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm leading-none outline-none cursor-pointer hover:token-surface-secondary">
              <span>System</span>
              <span aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                  <path fill="currentColor" fillRule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
              </span>
            </button>
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
            <button type="button" className="token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm leading-none outline-none cursor-pointer hover:token-surface-secondary">
              <span>Auto-detect</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                  <path fill="currentColor" fillRule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                </svg>
              </span>
            </button>
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
              <div className="flex items-center justify-center">Archive all</div>
            </Button>
          </div>
        </div>
        <div className="border-b pb-3 last-of-type:border-b-0">
          <div className="flex items-center justify-between">
            <div>Delete all chats</div>
            <Button variant="destructive" className='rounded-full border'>
              <div className="flex items-center justify-center">Delete all</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default General;
