import type { Metadata } from "next";
import { Geist, Geist_Mono, Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "رحلة الحج - حملة المحمل",
  description:
    "منصة رقمية لمتابعة رحلة الحجاج ضمن حملة المحمل خطوة بخطوة بسهولة وتنظيم",
  openGraph: {
    title: "رحلة الحج - حملة المحمل",
    description: "تابع رحلتك في الحج مع حملة المحمل بكل سهولة وطمأنينة",
    url: "https://hajj-tracker-qased.vercel.app",
    siteName: "حملة المحمل",
    images: [
      {
        url: "/Almahmal.png",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div className="app-shell mx-auto flex w-full max-w-md flex-1 flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <footer
            dir="ltr"
            className="px-5 py-6 text-center text-[14px] font-semibold text-stone-600"
          >
            Made with <span className="text-[#c9a263]">♡</span> by Sara Fawaz
            Alsubaie
          </footer>
        </div>
      </body>
    </html>
  );
}
