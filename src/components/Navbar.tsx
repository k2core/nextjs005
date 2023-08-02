"use client";

import Link from "next/link";
import HomeIcon from "./ui/icon/HomeIcon";
import HomeFillIcon from "./ui/icon/HomeFillIcon";
import SearchIcon from "./ui/icon/SearchIcon";
import SearchFillIcon from "./ui/icon/SearchFillIcon";
import NewIcon from "./ui/icon/NewIcon";
import NewFillIcon from "./ui/icon/NewFillIcon";
import { usePathname } from "next/navigation";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: "/new",
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];
export default function Navbar() {
  const pathName = usePathname();
  return (
    <div>
      <Link href="/">
        <h1>Instantgram</h1>
        <nav>
          <ul>
            {menu.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  {pathName === item.href ? item.clickedIcon : item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Link>
    </div>
  );
}
