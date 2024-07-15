import { CrossIcon } from "../icons/Icons";
import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";

const PlanDialog = () => {
  return (
   <div className="rounded-3xl flex-grow overflow-y-auto">
      <div className="popover relative flex grow flex-col items-start justify-center overflow-hidden rounded-md border border-token-border-light token-surface-primary shadow-md">
         <div className="flex w-full flex-row items-center justify-between border-b border-token-border-light px-8 py-6">
            <span className="text-xl font-semibold">Upgrade your plan</span>
            <DialogClose asChild>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent hover:token-surface-secondary focus-visible:outline-none dark:hover:token-surface-tertiary sm:mt-0">
                <CrossIcon />
              </button>
            </DialogClose>
         </div>
         <div className="flex w-full flex-col md:flex-row">
            <div className="text-sm relative flex-1 flex gap-5 flex-col border-token-border-light md:border-r last:border-r-0 md:border-t-0 border-t py-4 px-6">
               <div className="relative flex flex-col token-surface-primary">
                  <div className="flex flex-col gap-1">
                     <p className="flex items-center gap-2 text-xl font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-md text-green-600">
                           <path fill="currentColor" d="M6.394 4.444c.188-.592 1.024-.592 1.212 0C8.4 8.9 9.1 9.6 13.556 10.394c.592.188.592 1.024 0 1.212C9.1 12.4 8.4 13.1 7.606 17.556c-.188.592-1.024.592-1.212 0C5.6 13.1 4.9 12.4.444 11.606c-.592-.188-.592-1.024 0-1.212C4.9 9.6 5.6 8.9 6.394 4.444m8.716 9.841a.41.41 0 0 1 .78 0c.51 2.865.96 3.315 3.825 3.826.38.12.38.658 0 .778-2.865.511-3.315.961-3.826 3.826a.408.408 0 0 1-.778 0c-.511-2.865-.961-3.315-3.826-3.826a.408.408 0 0 1 0-.778c2.865-.511 3.315-.961 3.826-3.826Zm2.457-12.968a.454.454 0 0 1 .866 0C19 4.5 19.5 5 22.683 5.567a.454.454 0 0 1 0 .866C19.5 7 19 7.5 18.433 10.683a.454.454 0 0 1-.866 0C17 7.5 16.5 7 13.317 6.433a.454.454 0 0 1 0-.866C16.5 5 17 4.5 17.567 1.317"></path>
                        </svg>
                        Plus
                     </p>
                     <div className="flex items-baseline gap-1.5">
                        <p className="text-base token-text-tertiary">USD $20/month</p>
                     </div>
                  </div>
               </div>
               <div className="relative flex flex-col token-surface-primary">
                     <Button className="bg-white border-none shadow-none opacity-50 hover:bg-white hover:border-none hover:shadow-none cursor-not-allowed relative w-full">
                        <div className="flex items-center justify-center token-text-secondary">Your current plan</div>
                     </Button>
               </div>
               <div className="flex flex-col flex-grow gap-2">
                  <div className="relative token-surface-primary">
                     <div className="text-l flex justify-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0">
                           <path fill="currentColor" fill-rule="evenodd" d="M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.647 6.82-10.003a1 1 0 0 1 1.39-.263" clip-rule="evenodd"></path>
                        </svg>
                        <span>Early access to new features</span>
                     </div>
                  </div>
                  <div className="relative token-surface-primary">
                     <div className="text-l flex justify-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0">
                           <path fill="currentColor" fill-rule="evenodd" d="M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.647 6.82-10.003a1 1 0 0 1 1.39-.263" clip-rule="evenodd"></path>
                        </svg>
                        <span>Access to GPT-4, GPT‑4o, GPT-3.5</span>
                     </div>
                  </div>
                  <div className="relative token-surface-primary">
                     <div className="text-l flex justify-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0">
                           <path fill="currentColor" fill-rule="evenodd" d="M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.647 6.82-10.003a1 1 0 0 1 1.39-.263" clip-rule="evenodd"></path>
                        </svg>
                        <span>Access to advanced data analysis, file uploads, vision, and web browsing</span>
                     </div>
                  </div>
                  <div className="relative token-surface-primary">
                     <div className="text-l flex justify-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0">
                           <path fill="currentColor" fill-rule="evenodd" d="M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.647 6.82-10.003a1 1 0 0 1 1.39-.263" clip-rule="evenodd"></path>
                        </svg>
                        <span>DALL·E image generation</span>
                     </div>
                  </div>
                  <div className="relative token-surface-primary">
                     <div className="text-l flex justify-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0">
                           <path fill="currentColor" fill-rule="evenodd" d="M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.647 6.82-10.003a1 1 0 0 1 1.39-.263" clip-rule="evenodd"></path>
                        </svg>
                        <span>Create and use custom GPTs</span>
                     </div>
                  </div>
               </div>
               <div className="relative flex flex-col token-surface-primary text-xs token-text-secondary">
                  <div><a className="px-2 underline" href="/c/1e09d966-9c40-46dc-9553-fc0c0059baae#">Manage my subscription</a></div>
                  <div><a target="_blank" className="px-2 underline" href="https://help.openai.com/en/collections/3943089-billing">I need help with a billing issue</a></div>
               </div>
            </div>
            <div className="text-sm relative flex-1 flex gap-5 flex-col border-token-border-light md:border-r last:border-r-0 md:border-t-0 border-t py-4 px-6">
               <div className="relative flex flex-col token-surface-primary">
                  <div className="flex flex-col gap-1">
                     <p className="flex items-center gap-2 text-xl font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-md text-brand-blue-800">
                           <path fill="currentColor" fill-rule="evenodd" d="M2.222 20A1.22 1.22 0 0 1 1 18.786c0-2.055.992-3.622 2.424-4.633 1.395-.985 3.185-1.439 4.91-1.439 1.724 0 3.514.454 4.909 1.44 1.431 1.01 2.424 2.577 2.424 4.632 0 .67-.547 1.214-1.223 1.214z" clip-rule="evenodd"></path>
                           <path fill="currentColor" d="M17.5 18.786c0-2.36-1.013-4.253-2.502-5.57a6.4 6.4 0 0 1 2.502-.502c1.293 0 2.636.378 3.682 1.2 1.074.842 1.818 2.147 1.818 3.86 0 .559-.41 1.012-.917 1.012zM8.333 3C5.971 3 4.056 4.903 4.056 7.25S5.97 11.5 8.333 11.5s4.278-1.903 4.278-4.25S10.696 3 8.333 3M17.5 5.429a3.046 3.046 0 0 0-3.056 3.035A3.046 3.046 0 0 0 17.5 11.5a3.046 3.046 0 0 0 3.056-3.036A3.046 3.046 0 0 0 17.5 5.43"></path>
                        </svg>
                        Team
                     </p>
                     <div className="flex items-baseline gap-1.5">
                        <p className="text-base token-text-tertiary">USD $25 per person/month*</p>
                     </div>
                  </div>
               </div>
               <div className="relative flex flex-col token-surface-primary">
                  <div className="flex flex-col gap-2">
                     <div className="w-full">
                        <Button size={"lg"} className="relative w-full hover:opacity-90">
                           <div className="flex items-center justify-center">Add Team workspace</div>
                        </Button>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col flex-grow gap-2">
                  <div className="relative flex flex-col token-surface-primary">
                     <p className="text-l font-semibold">Everything in Plus, and:</p>
                  </div>
                  <div className="relative token-surface-primary">
                     <div className="text-l flex justify-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0">
                           <path fill="currentColor" fill-rule="evenodd" d="M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.647 6.82-10.003a1 1 0 0 1 1.39-.263" clip-rule="evenodd"></path>
                        </svg>
                        <span>Higher limits for GPT-4, GPT‑4o, and tools like DALL·E image generation, advanced data analysis, web browsing, and more</span>
                     </div>
                  </div>
                  <div className="relative token-surface-primary">
                     <div className="text-l flex justify-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0">
                           <path fill="currentColor" fill-rule="evenodd" d="M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.647 6.82-10.003a1 1 0 0 1 1.39-.263" clip-rule="evenodd"></path>
                        </svg>
                        <span>Create and share GPTs with your workspace</span>
                     </div>
                  </div>
                  <div className="relative token-surface-primary">
                     <div className="text-l flex justify-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0">
                           <path fill="currentColor" fill-rule="evenodd" d="M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.647 6.82-10.003a1 1 0 0 1 1.39-.263" clip-rule="evenodd"></path>
                        </svg>
                        <span>Admin console for workspace management</span>
                     </div>
                  </div>
                  <div className="relative token-surface-primary">
                     <div className="text-l flex justify-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0">
                           <path fill="currentColor" fill-rule="evenodd" d="M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.647 6.82-10.003a1 1 0 0 1 1.39-.263" clip-rule="evenodd"></path>
                        </svg>
                        <span>Team data excluded from training by default. <a className="underline" target="_blank" rel="noreferrer" href="https://openai.com/enterprise-privacy">Learn more</a></span>
                     </div>
                  </div>
               </div>
               <div className="relative flex flex-col token-surface-primary text-xs token-text-secondary">* Price billed annually, minimum 2 users</div>
            </div>
         </div>
         <div className="flex w-full items-center justify-center border-t border-token-border-light px-8 py-6">
            <div className="text-sm token-text-primary sm:flex sm:items-center">Need more capabilities? See <a target="_blank" className="mx-1 underline" href="https://openai.com/enterprise"> ChatGPT Enterprise </a></div>
         </div>
      </div>
   </div>
  )
}

export default PlanDialog;
