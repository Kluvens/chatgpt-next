import { GoogleDriveIcon, OneDriveIcon } from "../icons/Icons";
import { Button } from "../ui/button";

const ConnectedApps = () => {
  return (
    <div className="w-full overflow-y-auto">
      <div className="flex flex-col gap-3 px-4 pb-1 text-sm token-text-primary sm:px-6 sm:pb-2 md:ps-0">
        <div className="flex flex-col">
          <div className="border-b pb-3 last-of-type:border-b-0">
            <div className="my-2">
              Connect apps to access their information in ChatGPT.
            </div>
          </div>
          <div className="border-b pb-3 last-of-type:border-b-0">
            <div className="flex flex-col gap-2 pb-1 pt-3">
              <div className="flex flex-row items-center gap-2">
                <GoogleDriveIcon />
                <p className="text-md flex-1 font-semibold token-text-primary">
                  Google Drive
                </p>
                <Button variant={"outline"} className="rounded-full border">
                  <div className="flex items-center justify-center">
                    Connect
                  </div>
                </Button>
              </div>
              <p className="token-text-secondary">
                Upload Google Docs, Sheets, Slides and other files.
              </p>
            </div>
          </div>
          <div className="border-b pb-3 last-of-type:border-b-0">
            <div className="flex flex-col gap-2 pb-1 pt-3">
              <div className="flex flex-row items-center gap-2">
                <OneDriveIcon />
                <p className="text-md flex-1 font-semibold token-text-primary">
                  Microsoft OneDrive (personal)
                </p>
                <Button variant={"outline"} className="rounded-full border">
                  <div className="flex items-center justify-center">
                    Connect
                  </div>
                </Button>
              </div>
              <p className="token-text-secondary">
                Upload Microsoft Word, Excel, PowerPoint and other files.
              </p>
            </div>
          </div>
          <div className="border-b pb-3 last-of-type:border-b-0">
            <div className="flex flex-col gap-2 pb-1 pt-3">
              <div className="flex flex-row items-center gap-2">
                <OneDriveIcon />
                <p className="text-md flex-1 font-semibold token-text-primary">
                  Microsoft OneDrive (work/school)
                </p>
                <Button variant={"outline"} className="rounded-full border">
                  <div className="flex items-center justify-center">
                    Connect
                  </div>
                </Button>
              </div>
              <p className="token-text-secondary">
                Upload Microsoft Word, Excel, PowerPoint, and other files,
                including those from SharePoint sites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectedApps;
