import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Sidebar";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shehryar Portfolio",
  description: "Develope by Shehryar Khan",
  icons: {
    icon: "/S1.png",
    shortcut: "/S2.png",
    apple: "/S3.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorGlow />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
