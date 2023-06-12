
"use client"
import dynamic from 'next/dynamic';
import './globals.css';


import { Inter } from 'next/font/google'
import { AppContextProvider } from './context';
import Footer from './sections/Footer';
import { AuthContextProvider } from '@/context/AuthContext';


// import { AmityUiKitProvider, AmityUiKitSocial } from "@amityco/ui-kit-open-source";
const inter = Inter({ subsets: ['latin'] })

// const DynamicContainer=({children}:{children:React.ReactNode})=>dynamic(() => Promise.resolve(RootLayout), { ssr: false, });

export const metadata = {
  title: 'Tinh te',
  description: 'Generated by create next app',
}

const userId = "99";
const apiKey = "b0e8ee0f6ed3f0311f628c1c5b5c1f89d7088fe4bb33667d";
function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <meta name='metadata' />
      </head>
      <body className={inter.className}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
        <Footer />
      </body>

    </html>
  )
}

export default RootLayout;
