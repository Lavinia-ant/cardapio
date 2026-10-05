import { Outlet } from "react-router";

export default function CenteredLayout() {
    return (
        <main className="font-figtree flex mx-50 items-center
justify-center">
            <Outlet />
        </main>
    );
}