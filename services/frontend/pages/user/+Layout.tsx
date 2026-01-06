import type { JSX } from "solid-js";
import "../tailwind.css";
import SidebarNavigation from "../../components/navigation/SidebarNavigation";
import CreateIcon from "../../components/icons/Create";
import BottomButton from "../../components/BottomButton";
import HeaderUser from "../../components/HeaderUser";

export default function LayoutUser(props: { children?: JSX.Element }) {
  return (
    <div>
      <HeaderUser />
      <div class="flex flex-row">
        <Sidebar />
        <div class="flex flex-col grow bg-background-dark">
          {props.children}
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

function Sidebar() {
  return (
    <div class="w-50 h-screen hidden flex-col items-center justify-between pb-35 pt-10 lg:flex">
      <SidebarNavigation />
      <CreateIcon />
    </div>
  );
}

function BottomBar() {
  return (
    <div class="fixed bottom-0 flex justify-center w-screen lg:hidden">
      <BottomButton onClick={() => console.log("")} />
    </div>
  );
}
