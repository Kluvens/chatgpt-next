import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  SettingsIcon,
  GeneralIcon,
  PersonalizationIcon,
  SpeechIcon,
  DataControlsIcon,
  BuilderProfileIcon,
  ConnectedIcon,
  SecurityIcon
} from "./icons/Icons";

const Settings = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-2 w-full">
          <div className="flex items-center justify-center token-text-secondary h-5 w-5">
            <SettingsIcon />
          </div>
          Settings
        </div>
      </DialogTrigger>
      <DialogContent className="rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold leading-6 token-text-primary">Settings</DialogTitle>
          <Separator />
        </DialogHeader>
        <div className="flex-grow overflow-y-auto">
          <div dir="ltr" data-orientation="vertical" className="flex flex-col gap-6 md:flex-row">
            <div role="tablist" aria-orientation="vertical" className="m-2 md:m-0 md:px-4 md:pl-6 md:pt-4 flex flex-shrink-0 md:ml-[-8px] md:min-w-[180px] max-w-[200px] flex-col gap-2" data-orientation="vertical">
              <button type="button" role="tab" aria-selected="true" aria-controls="radix-:r4s:-content-General" data-state="active" id="radix-:r4s:-trigger-General" className="group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-token-main-surface-tertiary radix-state-active:text-token-text-primary md:radix-state-active:bg-token-main-surface-secondary" data-orientation="vertical" data-radix-collection-item="">
                <GeneralIcon />
                <div className="text-left">General</div>
              </button>
              <button type="button" role="tab" aria-selected="false" aria-controls="radix-:r4s:-content-Personalization" data-state="inactive" id="radix-:r4s:-trigger-Personalization" className="group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-token-main-surface-tertiary radix-state-active:text-token-text-primary md:radix-state-active:bg-token-main-surface-secondary" data-orientation="vertical" data-radix-collection-item="">
                <PersonalizationIcon />
                <div className="text-left">Personalization</div>
              </button>
              <button type="button" role="tab" aria-selected="false" aria-controls="radix-:r4s:-content-Speech" data-state="inactive" id="radix-:r4s:-trigger-Speech" className="group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-token-main-surface-tertiary radix-state-active:text-token-text-primary md:radix-state-active:bg-token-main-surface-secondary" data-orientation="vertical" data-radix-collection-item="">
                <SpeechIcon />
                <div className="text-left">Speech</div>
              </button>
              <button type="button" role="tab" aria-selected="false" aria-controls="radix-:r4s:-content-DataControls" data-state="inactive" id="radix-:r4s:-trigger-DataControls" className="group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-token-main-surface-tertiary radix-state-active:text-token-text-primary md:radix-state-active:bg-token-main-surface-secondary" data-orientation="vertical" data-radix-collection-item="">
                <DataControlsIcon />
                <div className="text-left">Data controls</div>
              </button>
              <button type="button" role="tab" aria-selected="false" aria-controls="radix-:r4s:-content-BuilderProfile" data-state="inactive" id="radix-:r4s:-trigger-BuilderProfile" className="group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-token-main-surface-tertiary radix-state-active:text-token-text-primary md:radix-state-active:bg-token-main-surface-secondary" data-orientation="vertical" data-radix-collection-item="">
                <BuilderProfileIcon />
                <div className="text-left">Builder profile</div>
              </button>
              <button type="button" role="tab" aria-selected="false" aria-controls="radix-:r4s:-content-ConnectorSettings" data-state="inactive" id="radix-:r4s:-trigger-ConnectorSettings" className="group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-token-main-surface-tertiary radix-state-active:text-token-text-primary md:radix-state-active:bg-token-main-surface-secondary" data-orientation="vertical" data-radix-collection-item="">
                <ConnectedIcon />
                <div className="text-left">Connected apps</div>
              </button>
              <button type="button" role="tab" aria-selected="false" aria-controls="radix-:r4s:-content-Security" data-state="inactive" id="radix-:r4s:-trigger-Security" className="group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-token-main-surface-tertiary radix-state-active:text-token-text-primary md:radix-state-active:bg-token-main-surface-secondary" data-orientation="vertical" data-radix-collection-item="">
                <SecurityIcon />
                <div className="text-left">Security</div>
              </button>
            </div>
            <div data-state="active" data-orientation="vertical" role="tabpanel" aria-labelledby="radix-:r4s:-trigger-General" id="radix-:r4s:-content-General" className="max-h-[calc(100vh-150px)] w-full overflow-y-auto md:min-h-[380px]">
              <div className="flex flex-col gap-3 px-4 pb-1 text-sm text-token-text-primary sm:px-6 sm:pb-2 md:ps-0 md:pt-5">
                <div className="border-b border-token-border-light pb-3 last-of-type:border-b-0">
                  <div className="flex items-center justify-between">
                    <div>Theme</div>
                    <button type="button" role="combobox" aria-controls="radix-:r53:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" className="text-token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm dark:transparent dark:bg-transparent leading-none outline-none cursor-pointer hover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-state-active:text-token-text-secondary radix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent">
                      <span>System</span>
                      <span aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                          <path fill="currentColor" fill-rule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="border-b border-token-border-light pb-3 last-of-type:border-b-0">
                  <div className="flex items-center justify-between">
                    <div>Always show code when using data analyst</div>
                    <button type="button" role="switch" aria-checked="false" data-state="unchecked" value="on" aria-label="Always show code when using data analyst" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-token-text-secondary focus-visible:ring-offset-2 focus-visible:radix-state-checked:ring-black focus-visible:dark:ring-token-main-surface-primary focus-visible:dark:radix-state-checked:ring-green-600 cursor-pointer bg-gray-200 radix-state-checked:bg-black dark:border dark:border-token-border-medium dark:bg-transparent relative shrink-0 rounded-full dark:radix-state-checked:border-green-600 dark:radix-state-checked:bg-green-600 h-[20px] w-[32px]">
                      <span data-state="unchecked" className="flex items-center justify-center rounded-full transition-transform duration-100 will-change-transform ltr:translate-x-0.5 rtl:-translate-x-0.5 bg-white h-[16px] w-[16px] ltr:radix-state-checked:translate-x-[14px] rtl:radix-state-checked:translate-x-[-14px]"></span>
                    </button>
                  </div>
                </div>
                <div className="border-b border-token-border-light pb-3 last-of-type:border-b-0">
                  <div className="flex items-center justify-between">
                    <div>Language</div>
                    <button type="button" role="combobox" aria-controls="radix-:r54:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" className="text-token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm dark:transparent dark:bg-transparent leading-none outline-none cursor-pointer hover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-state-active:text-token-text-secondary radix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent">
                      <span>Auto-detect</span>
                      <span aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                          <path fill="currentColor" fill-rule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="border-b border-token-border-light pb-3 last-of-type:border-b-0">
                  <div className="flex items-center justify-between">
                    <div>Archived chats</div>
                    <button className="btn relative btn-secondary shrink-0">
                      <div className="flex items-center justify-center">Manage</div>
                    </button>
                  </div>
                </div>
                <div className="border-b border-token-border-light pb-3 last-of-type:border-b-0">
                  <div className="flex items-center justify-between">
                    <div>Archive all chats</div>
                    <button className="btn relative btn-secondary shrink-0">
                      <div className="flex items-center justify-center">Archive all</div>
                    </button>
                  </div>
                </div>
                <div className="border-b border-token-border-light pb-3 last-of-type:border-b-0">
                  <div className="flex items-center justify-between">
                    <div>Delete all chats</div>
                    <Button variant="destructive" className='rounded-full'>
                      <div className="flex items-center justify-center">Delete all</div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;