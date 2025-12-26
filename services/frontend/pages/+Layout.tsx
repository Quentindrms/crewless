
import type { JSX } from "solid-js";
import "./tailwind.css";
import SidebarNavigation from "../components/navigation/SidebarNavigation";
import Header from "../components/Header";
import CreateIcon from "../components/icons/Create";

export default function Layout(props: { children?: JSX.Element }) {
    return (
        <div>
            <Header />
            <div class="flex flex-row">
                <Sidebar />
                <div class="flex flex-col grow bg-background-dark">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

function Sidebar() {

    return (
        <div class="w-50 h-screen hidden flex-col items-center justify-between pb-35 pt-10 lg:flex">
            <SidebarNavigation />
            <CreateIcon />
        </div>
    )
}