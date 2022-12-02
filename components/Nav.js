import Image from "next/image";
import Link from "next/link";
import logoImg from "../public/assets/logo.jpg";
import styles from "../styles/Home.module.css";
import {
	MagnifyingGlassIcon,
	UserIcon,
	ShoppingCartIcon,
	Bars3Icon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";

const Nav = () => {
	const toggleNavBar = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		var previous = window.pageYOffset;
		window.onscroll = function () {
			var current = window.pageYOffset;
			if (previous > current) {
				document.getElementById("navbar").style.top = "0";
			}

			previous = current;
		};
	}, []);

	return (
		<div
			className="flex justify-between w-full py-8 sm:py-2 px-10 fixed sm:static bg-green-700 sm:bg-transparent z-50"
			id="navbar"
		>
			<div className="flex w-3/5 sm:w-4/5 justify-between text-center">
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
			<div className="flex w-2/5 sm:w-1/5 justify-between items-center">
				<Link href="/userAcoount">
					<UserIcon
						className={` ${styles.hover} h-7 cursor-pointer border hover:border-2 rounded-lg hover:border-headerGreen px-2 hover:text-white sm:border-none sm:hover:text-headerGreen`}
					/>
				</Link>

				<Link href="/search">
					<MagnifyingGlassIcon
						className={` ${styles.hover} hidden sm:flex h-7 cursor-pointer border hover:border-2 rounded-lg hover:border-headerGreen px-2 hover:text-white  sm:border-none sm:hover:text-headerGreen`}
					/>
				</Link>

				<Link href="cart">
					<ShoppingCartIcon
						className={` ${styles.hover} h-7 cursor-pointer border hover:border-2 rounded-lg hover:border-headerGreen px-2 hover:text-white  sm:border-none sm:hover:text-headerGreen`}
					/>
				</Link>

				<Bars3Icon
					className={` ${styles.hover} h-7 cursor-pointer border hover:border-2 rounded-lg hover:border-headerGreen px-2 hover:text-white sm:hidden sm:border-none sm:hover:text-headerGreen`}
				/>
			</div>
		</div>
	);
};

export default Nav;
