"use client";

import ClientOnly from "@/components/ClientOnly";
import { createContext, useState } from "react";
import TestProvider from "../providers/TestProvider";

export const TestContext = createContext();

export default function TestContextProvider({ children }) {
  const name = "John Doe";
  const phoneNumber = "+261 34 30 684 78";
  const [message, setMessage] = useState(null);
  const setShowMessage = (value) => {
    setMessage(value);
  };
  return (
    <ClientOnly>
      <TestContext.Provider value={{ name, phoneNumber, setShowMessage }}>
        <TestProvider message={message}>{children}</TestProvider>
      </TestContext.Provider>
    </ClientOnly>
  );
}
