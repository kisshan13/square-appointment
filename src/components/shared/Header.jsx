import HeaderToolbox from "@/components/shared/HeaderToolbox";
import "../Style/modalLogin.css";
import Login from "../auth/Login";

function Header() {
  return (
    <header className=" py-3">
      <div className="  flex items-center justify-between">
        <h3 className=" font-semibold text-xl ">SquareApps</h3>
        <HeaderToolbox />
        <Login />
      </div>
    </header>
  );
}

export default Header;
