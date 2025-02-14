"use client";

import { SubscriptionLevel } from "@/lib/subscription";
import React, { createContext, useContext } from "react";

const SubscriptionLevelContext = createContext<SubscriptionLevel | undefined>(
  undefined,
);

interface SubscriptionLevelProviderProps {
  children: React.ReactNode;
  userSubscriptionLevel: SubscriptionLevel;
}

export default function SubscriptionLevelProvider({
  children,
  userSubscriptionLevel,
}: SubscriptionLevelProviderProps) {
  return (
    <SubscriptionLevelContext.Provider value={userSubscriptionLevel}>
      {children}
    </SubscriptionLevelContext.Provider>
  );
}

// hook to handle case when context is undefined (developer mistake)
export function useSubscriptionLevel() {
  const context = useContext(SubscriptionLevelContext);
  if (context === undefined) {
    throw new Error(
      "useSubsctiptionLevel must be used within a SubscriptionLevelProvider",
    );
  }
  return context;
}
