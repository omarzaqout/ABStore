import { useCallback, useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { menuItems } from "./menuItems";
import MobileMenu from "./MobileMenu";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartSelector } from "../../app/features/cart/cartSlice";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { cartItems } = useSelector(cartSelector);

    const handleNavigation = (path: string, name: string) => {
        setSelected(name);
        navigate(path);
    };

    const getSelectedPage = useCallback(() => {

        const currentItem = menuItems.find(item => location.pathname === item.path);
        return currentItem ? currentItem.name : "PRODUCTS";
    }, [location.pathname]);

    const [selected, setSelected] = useState(getSelectedPage());

    useEffect(() => {
        setSelected(getSelectedPage());
    }, [location.pathname, getSelectedPage]);

    return (

        <nav className="h-[80px]  flex justify-center bg-[#333333] max-[768px]:px-5">
            <div className="flex items-center justify-between w-full max-w-[940px] mx-auto lg:px-0">
                <Link to="/" className="text-white text-2xl font-bold tracking-[4px]">AB<span className="font-normal">STORE</span></Link>
                <div className="min-[991px]:hidden text-white text-3xl cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? "✕" : "☰"}
                </div>

                <div className="hidden min-[991px]:flex items-center gap-10">
                    {menuItems.map((item) => (
                        <NavLinks
                            key={item.name}
                            name={item.name}
                            path={item.path}
                            selected={selected}
                            count={item.countable ? cartItems.length : undefined}
                            onClick={() => {
                                setSelected(item.name);
                                handleNavigation(item.path, item.name)
                            }}
                        />
                    ))}
                </div>

                {isMobileMenuOpen && (
                    <MobileMenu
                        selected={selected}
                        setSelected={setSelected}
                        cartCount={cartItems.length}
                        closeMenu={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </div>
        </nav>
    );
}

export default Navbar;
