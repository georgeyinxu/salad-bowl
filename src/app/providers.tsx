"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  metamaskWallet,
  ThirdwebProvider,
  walletConnect,
} from "@thirdweb-dev/react";
import { Mumbai } from "@thirdweb-dev/chains";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/components/Navbar";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider
        supportedChains={[Mumbai]}
        clientId="c39b8ec1e949b0b1fa56a439cb8f311c"
        supportedWallets={[metamaskWallet(), walletConnect()]}
      >
        <NextUIProvider>
          <NavBar />
          {children}
        </NextUIProvider>
      </ThirdwebProvider>
    </QueryClientProvider>
  );
}
