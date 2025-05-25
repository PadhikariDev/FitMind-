import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // your navbar component

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
