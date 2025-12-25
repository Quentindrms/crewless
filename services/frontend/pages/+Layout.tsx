
import type { JSX } from "solid-js";
import "./tailwind.css";
import SidebarNavigation from "../components/navigation/SidebarNavigation";
import Header from "../components/Header";

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
        <div class="w-50 h-screen hidden lg:block">
            <SidebarNavigation />
        </div>
    )
}