// import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
// import Header from "@/components/shared/Header";

export const metadata = {
  title: "Square Appointment",
  description: "An appointment booking application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}