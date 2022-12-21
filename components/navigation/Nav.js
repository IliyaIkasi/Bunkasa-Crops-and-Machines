import Image from "next/image";
import Link from "next/link";
import logoImg from "../../public/assets/logo.jpg";
import styles from "../../styles/Home.module.css";
import {
	MagnifyingGlassIcon,
	UserIcon,
	ShoppingCartIcon,
	Bars3Icon,
} from "@heroicons/react/24/outline";
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";

const Nav = () => {
	const toggleNavData = [
		{
			link: "",
			name: "Home",
		},
		{
			link: "about",
			name: "About",
		},
		{
			link: "service",
			name: "Service",
		},
		{
			link: "shop",
			name: "Shop",
		},
		{
			link: "blog",
			name: "Blog",
		},
		{
			link: "contact",
			name: "Contact",
		},
		{
			link: "login",
			name: "Login",
		},
		{
			link: "signup",
			name: "SignUp",
		},
	];
	const [isToggled, setIsToggled] = useState(false);

	const toggleStyles =
		"border bg-green-700 hover:bg-white hover:text-headerGreen hover:border-headerGreen py-3";

	const toggleDropDown = () => {
		var toggle = document.getElementById("collapseToggle");
		if (toggle.style.display === "none") {
			toggle.style.display = "flex";
			setIsToggled(true);
		} else {
			toggle.style.display = "none";
			setIsToggled(false);
		}
	};

	useEffect(() => {
		var previous = window.pageYOffset;
		var toggleCollapse = document.getElementById("collapseToggle");
		window.onscroll = function () {
			var current = window.pageYOffset;
			if (previous > current) {
				document.getElementById("navbar").style.top = "0px";
			} else {
				document.getElementById("navbar").style.top = "-115px";
				document.getElementById("navbar").style.transition = "ease-in-out";
				setIsToggled(false);1
				toggleCollapse.style.display = "none";
			}
			previous = current;
		};
	}, []);

	return (
		<div className="flex flex-col w-full fixed sm:static z-50" id="navbar">
			<div className="flex justify-between w-full py-4 sm:py-2 px-10 bg-headerGreen  z-50">
				<div className="flex w-2/4 sm:w-4/5 justify-between text-center">
					<div className="cursor-pointer">
						<Image src={logoImg} alt="" width={100} height={100} />
					</div>
					<div className="hidden sm:flex justify-around w-3/4">
						<Link
							href="/"
							className={`${styles.hover} border-b-2 hover:border-headerGreen`}
						>
							Home
						</Link>
						<Link
							href="/about"
							className={`${styles.hover} border-b-2 hover:border-headerGreen`}
						>
							About
						</Link>
						<Link
							href="/services"
							className={`${styles.hover} border-b-2 hover:border-headerGreen`}
						>
							Services
						</Link>
						<Link
							href="/shop"
							className={`${styles.hover} border-b-2 hover:border-headerGreen`}
						>
							Shop
						</Link>
						<Link
							href="/blog"
							className={`${styles.hover} border-b-2 hover:border-headerGreen`}
						>
							Blog
						</Link>
						<Link
							href="/contact"
							className={`${styles.hover} border-b-2 hover:border-headerGreen`}
						>
							Contact
						</Link>
					</div>
				</div>
				<div className="flex w-2/4 sm:w-1/5 justify-between items-center">
					<Link href="/userAcoount">
						<UserIcon
							className={` ${styles.hover} h-7 cursor-pointer border hover:border-2 rounded-lg hover:bg-white px-2 sm:border-none sm:hover:bg-transparent hover:text-headerGreen`}
						/>
					</Link>
					<Link href="/search" className="hidden sm:flex">
						<MagnifyingGlassIcon
							className={` ${styles.hover} h-7 cursor-pointer border hover:border-2 rounded-lg hover:bg-white px-2 sm:border-none sm:hover:bg-transparent hover:text-headerGreen`}
						/>
					</Link>
					<Link href="cart">
						<ShoppingCartIcon
							className={` ${styles.hover} h-7 cursor-pointer border hover:border-2 rounded-lg hover:bg-white px-2 sm:border-none sm:hover:bg-transparent hover:text-headerGreen`}
						/>
					</Link>
					{isToggled ? (
						<IconContext.Provider value={{ size: "2.5rem" }}>
							<MdOutlineClose
								className={` ${styles.hover} h-7 cursor-pointer border hover:border-2 rounded-lg hover:bg-white px-2 sm:hidden sm:border-none sm:hover:bg-transparent hover:text-headerGreen`}
								onClick={toggleDropDown}
							/>
						</IconContext.Provider>
					) : (
						<Bars3Icon
							className={` ${styles.hover} h-7 cursor-pointer border hover:border-2 rounded-lg hover:bg-white px-2 sm:hidden sm:border-none sm:hover:bg-transparent hover:text-headerGreen`}
							onClick={toggleDropDown}
						/>
					)}
				</div>
			</div>
			<div
				id="collapseToggle"
				className={`${styles.toggle} hidden sm:hidden w-full h-1/2 text-center`}
			>
				{Object.entries(toggleNavData).map(([index, { link, name }]) => (
					<Link key={index} href={`/${link}`} className={`${toggleStyles}`}>
						{name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Nav;
