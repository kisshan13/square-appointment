import "../globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Fotter from "@/components/ui/Fotter";
import PageContainer from "@/components/container/PageContainer";
import Header from "@/components/shared/Header";
import { Provider } from "react-redux";
import store from "../../components/redux/store.js";

export const metadata = {
  title: "Square Appointment",
  description: "An appointment booking application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme>
              <div className="border-b">
                <PageContainer>
                  <Header />
                </PageContainer>
              </div>
              {children}
              <div className="bg-[#F5F5F5] mt-6">
                <Fotter />
              </div>
        </Theme>
      </body>
    </html>
  );
}
