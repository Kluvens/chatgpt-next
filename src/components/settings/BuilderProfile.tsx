import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const BuilderProfile = () => {
  return (
    <div className="w-full overflow-y-auto">
      <div className="flex flex-col gap-3 px-4 pb-1 text-sm token-text-primary sm:px-6 sm:pb-2 md:ps-0">
        <div className="flex flex-col items-stretch">
          <div className="mb-2">
            Personalize your builder profile to connect with users of your GPTs.
            These settings apply to publicly shared GPTs.
          </div>
          <div className="relative flex w-full flex-col items-center justify-stretch rounded-lg bg-token-main-surface-primary p-4">
            <div className="h-8 w-8">
              <div className="gizmo-shadow-stroke relative flex h-full items-center justify-center rounded-full bg-token-main-surface-primary token-text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-2/3 w-2/3 text-gray-400"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12.5 3.444a1 1 0 0 0-1 0l-6.253 3.61 6.768 3.807 6.955-3.682zm7.16 5.632L13 12.602v7.666l6.16-3.556a1 1 0 0 0 .5-.867zM11 20.268v-7.683L4.34 8.839v7.006a1 1 0 0 0 .5.867zm-.5-18.557a3 3 0 0 1 3 0l6.66 3.846a3 3 0 0 1 1.5 2.598v7.69a3 3 0 0 1-1.5 2.598L13.5 22.29a3 3 0 0 1-3 0l-6.66-3.846a3 3 0 0 1-1.5-2.598v-7.69a3 3 0 0 1 1.5-2.598z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-1 text-center text-sm font-semibold token-text-primary">
              PlaceholderGPT
            </div>
            <div className="flex flex-row items-center space-x-1">
              <div className="token-text-tertiary text-xs">By Jiapeng Yang</div>
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="icon-xs token-text-secondary"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7m5 8c-3.656 0-6.5 2.75-6.5 6a1 1 0 1 1-2 0c0-4.482 3.872-8 8.5-8s8.5 3.518 8.5 8a1 1 0 1 1-2 0c0-3.25-2.844-6-6.5-6"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute right-4 top-3 text-xs token-text-tertiary">
              Preview
            </div>
          </div>
          <div className="border-b border-token-border-light pb-3 last-of-type:border-b-0">
            <div className="flex flex-col">
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                  <b>Name</b>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <span>Jiapeng Yang</span>
                  <span className="ml-auto flex items-center">
                    <TooltipProvider>
                      <Tooltip delayDuration={300}>
                        <TooltipTrigger>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="icon-sm token-text-tertiary"
                          >
                            <path
                              fill="currentColor"
                              d="M13 12a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zM12 9.5A1.25 1.25 0 1 0 12 7a1.25 1.25 0 0 0 0 2.5"
                            ></path>
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Name is from your billing details</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </span>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex flex-col justify-center gap-2">
                <div className="flex flex-row justify-between">
                  <b>Links</b>
                </div>
                <div className="flex flex-row items-center justify-between space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="icon-sm"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m9.985-7.997a.3.3 0 0 0-.064.03c-.13.08-.347.291-.596.744-.241.438-.473 1.028-.674 1.756-.336 1.22-.567 2.759-.632 4.467h3.962c-.065-1.708-.296-3.247-.632-4.467-.201-.728-.433-1.318-.674-1.756-.25-.453-.466-.665-.596-.743a.3.3 0 0 0-.064-.031L12 4q-.003 0-.015.003M8.018 11c.066-1.867.316-3.588.705-5 .15-.544.325-1.054.522-1.513A8.01 8.01 0 0 0 4.062 11zm-3.956 2h3.956c.077 2.174.404 4.156.912 5.68q.144.435.315.833A8.01 8.01 0 0 1 4.062 13m5.957 0c.076 1.997.378 3.757.808 5.048.252.756.53 1.296.79 1.626.128.162.232.248.302.29q.049.03.066.033L12 20l.015-.003a.3.3 0 0 0 .066-.032c.07-.043.174-.13.301-.291.26-.33.539-.87.79-1.626.43-1.29.732-3.05.809-5.048zm5.963 0c-.077 2.174-.404 4.156-.912 5.68q-.144.435-.315.833A8.01 8.01 0 0 0 19.938 13zm3.956-2a8.01 8.01 0 0 0-5.183-6.513c.197.46.371.969.522 1.514.389 1.41.639 3.132.705 4.999z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-normal">
                      <button>
                        <span className="flex items-center gap-2 py-2">
                          Select a domain
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="icon-md"
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="none"
                      viewBox="0 0 12 12"
                      className="icon-sm"
                    >
                      <path
                        fill="currentColor"
                        d="M11.1 0H.9a.9.9 0 0 0-.9.9v10.2a.9.9 0 0 0 .9.9h10.2a.9.9 0 0 0 .9-.9V.9a.9.9 0 0 0-.9-.9M3.6 10.2H1.8V4.8h1.8zm-.9-6.45A1.05 1.05 0 1 1 3.78 2.7 1.07 1.07 0 0 1 2.7 3.75m7.5 6.45H8.4V7.356c0-.852-.36-1.158-.828-1.158A1.044 1.044 0 0 0 6.6 7.314a.4.4 0 0 0 0 .084V10.2H4.8V4.8h1.74v.78a1.87 1.87 0 0 1 1.62-.84c.93 0 2.016.516 2.016 2.196z"
                      ></path>
                    </svg>
                    <span>LinkedIn</span>
                  </div>
                  <Button
                    variant={"outline"}
                    size={"sm"}
                    className="relative rounded-full border"
                  >
                    <div className="flex items-center justify-center">Add</div>
                  </Button>
                </div>
                <div className="flex flex-row items-center justify-between space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="none"
                      viewBox="0 0 14 14"
                      className="icon-sm"
                    >
                      <path
                        fill="currentColor"
                        d="M7 .3a6.665 6.665 0 0 1 6.667 6.667 6.68 6.68 0 0 1-4.542 6.325c-.333.067-.458-.142-.458-.316 0-.226.008-.942.008-1.834 0-.625-.208-1.025-.45-1.233 1.484-.167 3.042-.733 3.042-3.292a2.58 2.58 0 0 0-.683-1.791c.066-.167.3-.85-.067-1.767 0 0-.558-.183-1.833.683a6.2 6.2 0 0 0-1.667-.225c-.567 0-1.134.075-1.667.225-1.275-.858-1.833-.683-1.833-.683-.367.917-.133 1.6-.067 1.767a2.6 2.6 0 0 0-.683 1.791c0 2.55 1.55 3.125 3.033 3.292-.191.166-.366.458-.425.891-.383.175-1.341.459-1.941-.55-.126-.2-.5-.691-1.025-.683-.559.009-.225.317.008.442.283.158.608.75.683.941.133.376.567 1.092 2.242.784 0 .558.008 1.083.008 1.242 0 .174-.125.374-.458.316A6.66 6.66 0 0 1 .333 6.967 6.665 6.665 0 0 1 7 .301"
                      ></path>
                    </svg>
                    <span>GitHub</span>
                  </div>
                  <Button
                    variant={"outline"}
                    size={"sm"}
                    className="relative rounded-full border"
                  >
                    <div className="flex items-center justify-center">Add</div>
                  </Button>
                </div>
                <div className="flex flex-row items-center justify-between space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="12"
                      fill="none"
                      viewBox="0 0 14 12"
                      className="icon-sm"
                    >
                      <path
                        fill="currentColor"
                        d="M10.819 0h2.035L8.407 5.083 13.639 12H9.542L6.334 7.805 2.662 12H.625l4.757-5.437L.363 0h4.2l2.901 3.834zm-.715 10.782h1.128L3.951 1.153h-1.21z"
                      ></path>
                    </svg>
                    <span>X</span>
                  </div>
                  <Button
                    variant={"outline"}
                    size={"sm"}
                    className="relative rounded-full border"
                  >
                    <div className="flex items-center justify-center">Add</div>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <div className="flex flex-row justify-between">
                  <b>Email</b>
                </div>
                <div className="my-1 flex flex-row items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="icon-sm"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm2.268-.682 7.155 5.05a1 1 0 0 0 1.154 0l7.155-5.05A1 1 0 0 0 19 6H5a1 1 0 0 0-.732.318M20 8.577l-6.27 4.426a3 3 0 0 1-3.46 0L4 8.577V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>yangjiapeng6888@gmail.com</span>
                </div>
                <span className="" data-state="closed">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="email"
                      className="float-left h-4 w-4 appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-black checked:bg-blue-600 focus:outline-none cursor-pointer rounded-xl"
                    />
                    <Label htmlFor="email" className="token-text-primary">
                      Receive feedback emails
                    </Label>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderProfile;
