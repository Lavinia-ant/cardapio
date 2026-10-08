import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex items-center justify-between gap-10 px-50 bg-orange-100 text-orange-500">
                <NavLink to="/">

                    <img src="/logo.png" alt="Logo" className="h-20 w-20" />
                </NavLink>

                <div className="flex gap-4">
                    <NavLink to="/" className="font-playfair text-xl" style={({ isActive }) => ({
                        color: isActive ? "green" : "orange",
                    })}>início</NavLink>
                    <NavLink to="/cardapio" className="font-playfair text-xl" style={({ isActive }) => ({
                        color: isActive ? "green" : "orange",
                    })}>cardápio</NavLink>
                </div>
        </header>
    )
}