"use client";

import { useTheme } from "next-themes";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface SettingsType {
  general: {
    theme: "system" | "light" | "dark";
    showCodeUsingDataAnalyst: boolean;
    language: string;
  };
  personalisation: {
    customInstructions: "on" | "off";
    memory: boolean;
  };
  speech: {
    voice: string;
  };
}

const initialSettings: SettingsType = {
  general: {
    theme: "system",
    showCodeUsingDataAnalyst: false,
    language: "auto",
  },
  personalisation: {
    customInstructions: "on",
    memory: true,
  },
  speech: {
    voice: "alloy",
  },
};

interface SettingsContextType {
  settings: SettingsType;
  setSettings: React.Dispatch<React.SetStateAction<SettingsType>>;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [settings, setSettings] = useState<SettingsType>(initialSettings);
  const { setTheme } = useTheme();

  useEffect(() => {
    const savedSettings = localStorage.getItem("appSettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("appSettings", JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    applyTheme(settings.general.theme);
  }, [settings.general.theme]);

  const applyTheme = (theme: "system" | "light" | "dark") => {
    setTheme(theme);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
