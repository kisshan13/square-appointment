import "../globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Fotter from "@/components/ui/Fotter";
import PageContainer from "@/components/container/PageContainer";
import Header from "@/components/shared/Header";
import DashboardSidebar from "@/components/shared/DashboardSidebar";

import { Toaster } from "react-hot-toast";

export const metadata = {
    title: "Square Appointment",
    description: "An appointment booking application.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Theme>
                    <div className={"relative"}>
                        <DashboardSidebar />
                        <div className={"ml-[250px]"}>{children}</div>
                    </div>

                </Theme>
                <Toaster />
            </body>
        </html>
    );
}
