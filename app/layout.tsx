import './globals.css'
import { Inter } from 'next/font/google'
import Header from "./components/Header"
import ActiveSectionContextProvider from './context/ActiveSectionContextProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Naoto Abe | Portfolio',
  description: 'Naoto Abe is a full-stack developer with over 5 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-stone-50 text-gray-950 relative pt-26 sm:pt-36`}>
        <div className="bg-[#DAD7CD] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#A3B18A] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
