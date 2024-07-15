import { Button } from "@/components/ui/button";

const ConnectedApps = () => {
  return (
    <div className="w-full overflow-y-auto">
   <div className="flex flex-col gap-3 px-4 pb-1 text-sm token-text-primary sm:px-6 sm:pb-2 md:ps-0">
      <div className="flex flex-col">
         <div className="border-b pb-3 last-of-type:border-b-0">
            <div className="my-2">Connect apps to access their information in ChatGPT.</div>
         </div>
         <div className="border-b pb-3 last-of-type:border-b-0">
            <div className="flex flex-col gap-2 pb-1 pt-3">
               <div className="flex flex-row items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-lg">
                     <path fill="#0066DA" d="m3.511 18.427.882 1.535c.183.323.447.576.756.761l3.15-5.492H2c0 .357.092.715.275 1.038z"></path>
                     <path fill="#00AC47" d="M12 8.77 8.85 3.276c-.31.184-.574.438-.757.761L2.274 14.192c-.18.316-.275.674-.275 1.039h6.3z"></path>
                     <path fill="#EA4335" d="M18.85 20.723c.308-.185.572-.438.755-.761l.367-.635 1.752-3.058c.184-.323.275-.68.275-1.038h-6.3l1.34 2.654z"></path>
                     <path fill="#00832D" d="m11.998 8.77 3.15-5.493A2 2 0 0 0 14.118 3H9.878c-.367 0-.722.104-1.03.277z"></path>
                     <path fill="#2684FC" d="M15.698 15.23h-7.4l-3.15 5.493c.31.185.665.277 1.031.277h11.638a2.1 2.1 0 0 0 1.031-.277z"></path>
                     <path fill="#FFBA00" d="m18.815 9.115-2.91-5.077a2.1 2.1 0 0 0-.756-.761L12 8.769l3.7 6.462h6.289c0-.358-.092-.716-.275-1.039z"></path>
                  </svg>
                  <p className="text-md flex-1 font-semibold token-text-primary">Google Drive</p>
                  <Button variant={"outline"} className="rounded-full border">
                     <div className="flex items-center justify-center">Connect</div>
                  </Button>
               </div>
               <p className="token-text-secondary">Upload Google Docs, Sheets, Slides and other files.</p>
            </div>
         </div>
         <div className="border-b pb-3 last-of-type:border-b-0">
            <div className="flex flex-col gap-2 pb-1 pt-3">
               <div className="flex flex-row items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className="icon-lg">
                     <path fill="#0364B8" d="m7.824 7.353 3.849 2.305 2.293-.965a3.7 3.7 0 0 1 1.728-.295A5.73 5.73 0 0 0 5.358 6.67l.058-.001a4.56 4.56 0 0 1 2.408.683"></path>
                     <path fill="#0078D4" d="M7.824 7.353a4.56 4.56 0 0 0-2.407-.683l-.059.001a4.582 4.582 0 0 0-3.701 7.202l3.394-1.428 1.508-.635 3.36-1.414 1.754-.738z"></path>
                     <path fill="#1490DF" d="M15.694 8.398a3.71 3.71 0 0 0-1.727.295l-2.294.965.665.398 2.18 1.306.95.57 3.253 1.947a3.725 3.725 0 0 0-3.027-5.481"></path>
                     <path fill="#28A8EA" d="m15.47 11.932-.952-.57-2.18-1.306-.665-.398-1.754.738-3.36 1.414-1.508.634-3.394 1.429a4.58 4.58 0 0 0 3.76 1.963h10.026a3.72 3.72 0 0 0 3.278-1.957z"></path>
                  </svg>
                  <p className="text-md flex-1 font-semibold token-text-primary">Microsoft OneDrive (personal)</p>
                  <Button variant={"outline"} className="rounded-full border">
                     <div className="flex items-center justify-center">Connect</div>
                  </Button>
               </div>
               <p className="token-text-secondary">Upload Microsoft Word, Excel, PowerPoint and other files.</p>
            </div>
         </div>
         <div className="border-b pb-3 last-of-type:border-b-0">
            <div className="flex flex-col gap-2 pb-1 pt-3">
               <div className="flex flex-row items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className="icon-lg">
                     <path fill="#0364B8" d="m7.824 7.353 3.849 2.305 2.293-.965a3.7 3.7 0 0 1 1.728-.295A5.73 5.73 0 0 0 5.358 6.67l.058-.001a4.56 4.56 0 0 1 2.408.683"></path>
                     <path fill="#0078D4" d="M7.824 7.353a4.56 4.56 0 0 0-2.407-.683l-.059.001a4.582 4.582 0 0 0-3.701 7.202l3.394-1.428 1.508-.635 3.36-1.414 1.754-.738z"></path>
                     <path fill="#1490DF" d="M15.694 8.398a3.71 3.71 0 0 0-1.727.295l-2.294.965.665.398 2.18 1.306.95.57 3.253 1.947a3.725 3.725 0 0 0-3.027-5.481"></path>
                     <path fill="#28A8EA" d="m15.47 11.932-.952-.57-2.18-1.306-.665-.398-1.754.738-3.36 1.414-1.508.634-3.394 1.429a4.58 4.58 0 0 0 3.76 1.963h10.026a3.72 3.72 0 0 0 3.278-1.957z"></path>
                  </svg>
                  <p className="text-md flex-1 font-semibold token-text-primary">Microsoft OneDrive (work/school)</p>
                  <Button variant={"outline"} className="rounded-full border">
                     <div className="flex items-center justify-center">Connect</div>
                  </Button>
               </div>
               <p className="token-text-secondary">Upload Microsoft Word, Excel, PowerPoint, and other files, including those from SharePoint sites.</p>
            </div>
         </div>
      </div>
   </div>
</div>
  )
}

export default ConnectedApps;
