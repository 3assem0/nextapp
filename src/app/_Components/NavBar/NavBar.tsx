"use client"; // This tells Next.js this is a Client Component
import { link as ILink } from "@/Interfaces/LinkInterface";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  let pathName = usePathname();
  let links : ILink[] = [
    {path:"/",navLink:"Home"},
    {path:"/About",navLink:"About"},
    {path:"/Services",navLink:"Services"},
    {path:"/Projects",navLink:"Projects"}
  ];

  return (

    <div className="navbar">
      <ul>
     {links.map((link:ILink,index:number) => {
      return <li key={index}>
        <Link className={pathName == link.path ? "active" : ""} href={link.path}>
        {link.navLink}
        </Link>
      </li>
     })}
      </ul>
    </div>
  )
}
