import React from 'react'
import { menuItems } from './menuItems';
import NavLink from './NavLinks';
type MobileMenuProps = {
    selected: string;
    setSelected: (val: string) => void;
    cartCount: number;
    closeMenu: () => void;
};

const MobileMenu = ({ selected, setSelected, cartCount, closeMenu }: MobileMenuProps) => {
    return (
        <div className="min-[992px]:hidden absolute top-[70px] left-0 w-full bg-[#444] flex flex-col items-center gap-6 py-4 z-50">
            {menuItems.map((item) => (
                <NavLink
                    key={item.name}
                    name={item.name}
                    path={item.path}
                    selected={selected}
                    count={item.countable ? cartCount : undefined}
                    onClick={() => {
                        setSelected(item.name);
                        closeMenu();
                    }}
                />
            ))}
        </div>
    )
}

export default MobileMenu
