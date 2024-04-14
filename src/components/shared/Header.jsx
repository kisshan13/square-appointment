import { Button } from "@radix-ui/themes";

import HeaderToolbox from "@/components/shared/HeaderToolbox"

function Header({ isLoggedIn }) {
    return (
        <header className=" py-3">
            <div className="  flex items-center justify-between">
                <h3 className=" font-semibold text-xl ">SquareApps</h3>

               <HeaderToolbox />

                <Button variant="outline" >Login</Button>
            </div>
        </header>
    );
}

export default Header;