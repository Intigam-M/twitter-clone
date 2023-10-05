import Menu from "../menu";
import Logo from "./logo";

export default function Sidebar() {
    return (
        <aside className="w-[275px] min-h-screen px-2">
            <Logo />
            <Menu />
        </aside>
    )
}