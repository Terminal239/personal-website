"use client";
import { navigation } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();

  return (
    <nav className="rounded bg-orange-200 p-2 md:px-4 md:py-2">
      <ul className="flex items-center gap-8">
        {navigation.map((navItem) => (
          <Link href={navItem.link}>
            <li className={`pr-4 md:pr-6 ${path === navItem.link ? "active" : ""}`}>
              <navItem.icon />
              {navItem.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
