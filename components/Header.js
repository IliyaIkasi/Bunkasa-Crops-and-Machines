import styles from "../styles/Home.module.css";
import { MapIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect } from "react";

const Header = () => {
	// useEffect(() => {
	// 	var previous = window.pageYOffset;
	// 	window.onscroll = function () {
	// 		var current = window.pageYOffset;
	// 		if (previous > current) {
	// 			document.getElementById("headerbar").style.top = "0";
	// 		} else {
	// 			document.getElementById("headerBar").style.display = "none";
	// 		}

	// 		console.log(previous);
	// 		console.log(current);

	// 		previous = current;
	// 	};
	// }, []);

	return (
		<div
			className="hidden sm:flex w-full justify-between sm:pt-2 sm:pb-2 border-b border-b-green-900 text-sm"
			id="headerBar"
		>
			<div className={`flex pl-12 ${styles.hover}`}>
				<MapIcon className="h-5 cursor-pointer" />
				<h2 className="pl-2 cursor-pointer">
					Km 31, Kaduna / Abuja Expressway, Kaduna State
				</h2>
			</div>
			<div className="flex pr-12">
				<Link href="/facebook">
					<MapIcon className={`${styles.hover} h-5 ml-2 cursor-pointer`} />
				</Link>

				<Link href="/twitter">
					<MapIcon className={`${styles.hover} h-5 ml-2 cursor-pointer`} />
				</Link>

				<Link href="/linkedIn">
					<MapIcon className={`${styles.hover} h-5 ml-2 cursor-pointer`} />
				</Link>

				<Link href="/youtube">
					<MapIcon className={`${styles.hover} h-5 ml-2 cursor-pointer`} />
				</Link>

				<Link href="/Be">
					<MapIcon className={`${styles.hover} h-5 ml-2 cursor-pointer`} />
				</Link>

				<Link href=""></Link>
			</div>
		</div>
	);
};

export default Header;
