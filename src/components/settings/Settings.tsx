import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import {
  SettingsIcon,
  GeneralIcon,
  PersonalizationIcon,
  SpeechIcon,
  DataControlsIcon,
  BuilderProfileIcon,
  ConnectedIcon,
  SecurityIcon,
  CrossIcon,
} from "../icons/Icons";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from '../ui/separator';
import BuilderProfile from './BuilderProfile';
import General from './General';
import Personalisation from './Personalisation';
import Security from './Security';
import DataControl from './DataControls';
import Speech from './Speech';
import ConnectedApps from './ConnectedApps';

const Settings = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem
          className="flex items-center cursor-pointer hover:bg-[#f5f5f5] rounded-xl text-sm p-3 m-1.5 gap-2"
          onSelect={(e) => e.preventDefault()}
        >
          <div className="flex items-center gap-2 w-full token-text-primary">
            <div className='token-text-secondary'>
              <SettingsIcon />
            </div>
            Settings
          </div>
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="flex flex-col rounded-3xl p-0 min-w-[750px] min-h-[500px] gap-0">
        <DialogHeader className='flex-grow-0 px-8 pt-8 pb-6 justify-center'>
          <div className='flex justify-between items-center'>
            <DialogTitle className="text-xl font-semibold leading-6 token-text-primary h-full">
              Settings
            </DialogTitle>
            <DialogClose asChild>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent hover:token-surface-secondary focus-visible:outline-none dark:hover:bg-token-main-surface-tertiary sm:mt-0">
                <CrossIcon />
              </button>
            </DialogClose>
          </div>
        </DialogHeader>
        <Separator />
        <Tabs defaultValue="general" orientation="vertical" className="flex-grow flex flex-row">
          <TabsList className="flex flex-col justify-start w-auto h-auto p-4">
            <TabsTrigger value="general" className="flex w-full items-center justify-start gap-2 p-2">
              <GeneralIcon />
              <div className="text-left">General</div>
            </TabsTrigger>
            <TabsTrigger value="personalization" className="flex w-full items-center justify-start gap-2 p-2">
              <PersonalizationIcon />
              <div className="text-left">Personalization</div>
            </TabsTrigger>
            <TabsTrigger value="speech" className="flex w-full items-center justify-start gap-2 p-2">
              <SpeechIcon />
              <div className="text-left">Speech</div>
            </TabsTrigger>
            <TabsTrigger value="data-controls" className="flex w-full items-center justify-start gap-2 p-2">
              <DataControlsIcon />
              <div className="text-left">Data controls</div>
            </TabsTrigger>
            <TabsTrigger value="builder-profile" className="flex w-full items-center justify-start gap-2 p-2">
              <BuilderProfileIcon />
              <div className="text-left">Builder profile</div>
            </TabsTrigger>
            <TabsTrigger value="connected-apps" className="flex w-full items-center justify-start gap-2 p-2">
              <ConnectedIcon />
              <div className="text-left">Connected apps</div>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex w-full items-center justify-start gap-2 p-2">
              <SecurityIcon />
              <div className="text-left">Security</div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="flex-grow p-4 mt-0">
            <General />
          </TabsContent>
          
          <TabsContent value="personalization" className="flex-grow p-4 mt-0">
          <Personalisation />
          </TabsContent>
          
          <TabsContent value="speech" className="flex-grow p-4 mt-0">
          <Speech />
          </TabsContent>
          
          <TabsContent value="data-controls" className="flex-grow p-4 mt-0">
          <DataControl />
          </TabsContent>
          
          <TabsContent value="builder-profile" className="flex-grow p-4 mt-0">
          <BuilderProfile />
          </TabsContent>
          
          <TabsContent value="connected-apps" className="flex-grow p-4 mt-0">
          <ConnectedApps />
          </TabsContent>
          
          <TabsContent value="security" className="flex-grow p-4 mt-0">
          <Security />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;
