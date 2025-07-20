import { Link } from "react-router-dom";

type NavLinksProps = {
    name: string;
    path: string;
    selected: string;
    count?: number;
    onClick: () => void;
}

const NavLinks = ({ name, path, count, selected, onClick }: NavLinksProps) => {
    const isActive = selected === name;

    return (
        <Link
            to={path}
            onClick={onClick}
            className={`cursor-pointer  text-lg font-medium  ${isActive ? "text-[#3a9a1f]" : "text-[#d6d6d6]"
                }`}
        >{name}{typeof count === "number" && <span>({count})</span>}</Link>

    )
}

export default NavLinks