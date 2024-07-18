import { MENU } from "@/utils/data";
import Link from "next/link";

export default function Menu() {
  const renderMenu = () => {
    return (
      <ul>
        {MENU.map((menu) => (
          <li
            key={menu.id}
            className={`${
              menu.submenu ? "has-dropdown" : ""
            } ${menu.active ? "active" : ""}`}
          >
            <Link href={menu.link}>
              {menu.submenu ? (
                <>
                  {menu.name}
                  <i className="fas fa-angle-down ps-1" />
                </>
              ) : (
                menu.name
              )}
            </Link>
            {menu.submenu && (
              <ul className="submenu">
                {menu.submenu.map((sub) => (
                  <li key={sub.id}>
                    <Link href={sub.link}>{sub.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  };
  return <>{renderMenu()}</>;
}
