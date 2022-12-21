import styles from "../../styles/Home.module.css";
import { MapIcon } from "@heroicons/react/24/outline";
import {
	FaAddressBook,
	FaFacebookF,
	FaInstagram,
	FaWhatsapp,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

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
			<div className={"flex pl-12 justify-between"}>
				<div className={`flex cursor-pointer ${styles.hover}`}>
					<MapIcon className="h-5" />
					<h2 className="pl-2 cursor-pointer">
						Km 31, Kaduna / Abuja Expressway, Kaduna State
					</h2>
				</div>
				<div className={`flex ml-12 gap-2 cursor-pointer ${styles.hover}`}>
					<FaAddressBook className="h-5" />
					<span>cropsandmachines@gmail.com</span>
				</div>
			</div>
			<div className="flex pr-12 v">
				<Link href="/facebook">
					<FaFacebookF
						className={`${styles.hover} w-full h-5 ml-2 cursor-pointer`}
					/>
				</Link>
				<Link href="/twitter">
					<FaInstagram
						className={`${styles.hover} w-full h-5 ml-2 cursor-pointer`}
					/>
				</Link>
				<Link href="/linkedIn">
					<FaWhatsapp
						className={`${styles.hover} w-full h-5 ml-2 cursor-pointer`}
					/>
				</Link>
				<Link href="/youtube">
					<FaTwitter
						className={`${styles.hover} w-full h-5 ml-2 cursor-pointer`}
					/>
				</Link>
				<Link href="/Be">
					<FaYoutube
						className={`${styles.hover} w-full h-5 ml-2 cursor-pointer`}
					/>
				</Link>
			</div>
		</div>
	);
};

export default Header;
