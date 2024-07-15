import { Button } from "../ui/button";

const DataControl = () => {
  return (
    <div className="max-h-[calc(100vh-150px)] w-full overflow-y-auto">
   <div className="flex flex-col gap-3 px-4 pb-1 text-sm token-text-primary sm:px-6 sm:pb-2 md:ps-0">
      <div className="border-b border-token-border-light pb-3 last-of-type:border-b-0">
         <button className="w-full">
            <div className="flex items-center justify-between">
               <div>Improve the model for everyone</div>
               <div className="flex items-center token-text-secondary">
                  <div className="-mt-0.5 me-1">On</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm rtl:-scale-x-100">
                     <path fill="currentColor" fill-rule="evenodd" d="M9.293 18.707a1 1 0 0 1 0-1.414L14.586 12 9.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0" clip-rule="evenodd"></path>
                  </svg>
               </div>
            </div>
         </button>
      </div>
      <div className="border-b border-token-border-light pb-3 last-of-type:border-b-0">
         <div className="flex items-center justify-between">
            <div>
               <div>Shared links</div>
            </div>
            <Button variant={"outline"} className="relative rounded-full border shrink-0">
               <div className="flex items-center justify-center">Manage</div>
            </Button>
         </div>
      </div>
      <div className="border-b border-token-border-light pb-3 last-of-type:border-b-0">
         <div className="flex items-center justify-between">
            <div>
               <div>Export data</div>
            </div>
            <Button variant={"outline"} className="relative rounded-full border shrink-0">
               <div className="flex items-center justify-center">Export</div>
            </Button>
         </div>
      </div>
      <div className="border-b border-token-border-light pb-3 last-of-type:border-b-0">
         <div className="flex items-center justify-between">
            <div>
               <div>Delete account</div>
            </div>
            <Button variant={"destructive"} className="relative rounded-full border shrink-0">
               <div className="flex items-center justify-center">Delete</div>
            </Button>
         </div>
      </div>
   </div>
</div>
  )
}

export default DataControl;
