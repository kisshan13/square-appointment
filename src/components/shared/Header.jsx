"use client";
import HeaderToolbox from "@/components/shared/HeaderToolbox";
import "../Style/modalLogin.css";
import Login from "../auth/Login";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <header className=" py-3">
      <div className="  flex items-center justify-between">
        <h3
          className="font-semibold text-xl cursor-pointer"
          onClick={handleClick}
        >
          SquareApps
        </h3>
        <HeaderToolbox />
        <Login />
      </div>
    </header>
  );
}

export default Header;
