// import { Inter } from "next/font/google";
import "../globals.css";
import "@radix-ui/themes/styles.css";
import { Providers } from "../provider";
import { Theme } from "@radix-ui/themes";
import Fotter from "@/components/ui/Fotter";
import PageContainer from "@/components/container/PageContainer";
import Header from "@/components/shared/Header";
// import Header from "@/components/shared/Header";

export const metadata = {
  title: "Square Appointment",
  description: "An appointment booking application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Providers>
            <div className="border-b">
              <PageContainer>
                <Header />
              </PageContainer>
            </div>
            {children}
            <div className="bg-[#F5F5F5] mt-6">
              <Fotter />
            </div>
          </Providers>
        </Theme>
      </body>
    </html>
  );
}
