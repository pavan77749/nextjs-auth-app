import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import {
  ClerkProvider, ClerkLoaded, ClerkLoading
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next auth",
  description: "Next auth with clerk and mongodb",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ClerkLoading>
          <p>Loading</p>
        </ClerkLoading>
        <ClerkLoaded>

        <Header/>
        
        {children}
        </ClerkLoaded>
     
        </body>
    </html>
    </ClerkProvider>
  );
}
