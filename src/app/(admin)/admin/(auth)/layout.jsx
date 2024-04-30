import "../../../globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export const metadata = {
    title: "Square Appointment",
    description: "An appointment booking application.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Theme>

                    {children}

                </Theme>
            </body>
        </html>
    );
}
