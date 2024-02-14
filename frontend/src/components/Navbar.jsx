import React, { useRef } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import box from '../assets/box.png'
import { NavLink } from "react-router-dom";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const InputRef = useRef(null)
  const expandSearchInput = ()=>{
    console.log(InputRef.current)
    InputRef.classList.add('flex')
    InputRef.classList.add('w-100')
  }
  return (
    <Navbar className="bg-green-2 mb-14 z-40 bg-white static" isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavLink className=" cursor-pointer" to={"/"}>
            <NavbarBrand className="flex gap-2 items-center">
            <img className="w-6 h-6" src={box}/>
            <p className="font-bold text-inherit tracking-wider	"> <span className="text-red-500">Brahimi</span> Store</p>
            </NavbarBrand>
        </NavLink>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 text-lg" justify="center">
        <NavbarItem>
          <NavLink   className={({ isActive, isPending }) =>` hover:text-red-400 transition-all duration-500 ${isActive ? "text-red-400 font-semibold tracking-wider" : "text-"}`
        } to={"/"}>
            الرئيسية
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to={"store"} aria-current="page" className={({ isActive, isPending }) =>` hover:text-red-400 transition-all duration-500 ${isActive ? "text-red-400 font-semibold tracking-wider" : "text-"}`}>
            متجـر
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to={"whoAreWe"} className={({ isActive, isPending }) =>` hover:text-red-400 transition-all duration-500 ${isActive ? "text-red-400 font-semibold tracking-wider" : ""}`}>
            من نحن
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="" justify="end">
        <NavbarItem className="relative md:flex hidden">
        <button onClick={expandSearchInput} className="  absolute top-[50%] right-3 -translate-y-[50%]" type="button">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
                </svg>
        </button>
        <input ref={InputRef} placeholder="...البحـث" className="w-100 border-2 transition-all px-4 py-2 rounded-full" type="text" name="search" id="search" />

        </NavbarItem>

        {/* <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu className="top-32">
        <NavbarItem className="relative ">
            <button onClick={expandSearchInput} className="  absolute top-[50%] right-3 -translate-y-[50%]" type="button">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                    </svg>
            </button>
            <input ref={InputRef} placeholder="...البحـث" className="w-full border-2 transition-all px-4 py-2 rounded-full" type="text" name="search" id="search" />
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="#">
            الرئيسية
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            متجـر
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            من نحن
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
