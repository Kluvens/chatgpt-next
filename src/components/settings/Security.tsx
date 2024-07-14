const Security = () => {
  return (
    <div data-state="active" data-orientation="vertical" role="tabpanel" className="max-h-[calc(100vh-150px)] w-full overflow-y-auto">
   <div className="flex flex-col gap-3 px-4 pb-1 text-sm token-text-primary sm:px-6 sm:pb-2 md:ps-0 md:pt-5">
      <div className="border-b border-token-border-light pb-3 last-of-type:border-b-0">
         <div className="flex items-start justify-between">
            <div>
               <div>Multi-factor authentication</div>
               <div className="text-xs token-text-secondary pr-12 mt-3">Require an extra security challenge when logging in. If you are unable to pass this challenge, you will have the option to recover your account via email.</div>
            </div>
            <button className="btn relative btn-secondary shrink-0">
               <div className="flex items-center justify-center">Enable</div>
            </button>
         </div>
      </div>
      <div className="border-b border-token-border-light pb-3 last-of-type:border-b-0">
         <div className="flex items-start justify-between">
            <div>
               <div>Log out of all devices</div>
               <div className="text-xs token-text-secondary pr-12 mt-3">Log out of all active sessions across all devices, including your current session. It may take up to 30 minutes for other devices to be logged out.</div>
            </div>
            <button className="btn relative btn-secondary shrink-0">
               <div className="flex items-center justify-center">
                  <div>Log out all</div>
               </div>
            </button>
         </div>
      </div>
   </div>
</div>
  )
}

export default Security;
