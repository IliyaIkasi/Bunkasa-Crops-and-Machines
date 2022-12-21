import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logoImg from "../public/assets/logo.jpg";
import {
	FaFacebookF,
	FaTwitter,
	FaWhatsapp,
	FaYoutube,
	FaPaperPlane,
	FaEnvelopeOpen,
	FaHeadphones,
	FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div>
			<div className="block h-full sm:flex bg-headerGreen sm:h-96 w-full py-12 px-4 gap-12">
				<div className="w-full sm:w-1/4 h-full">
					<div className={`${styles.footerHeader}`}>
						<Image src={logoImg} alt="" width={100} height={100} />
					</div>
					<div className="mb-4 text-xs sm:text-sm">
						<h2 className="leading-7">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
							maiores ad perferendis aspernatur nostrum autem quae, laborum
							quisquam, assumenda vel nulla, provident nam commodi veniam
							perspiciatis ipsum odit.
						</h2>
					</div>
					<div className="flex w-full justify-around">
						<Link
							href="/facebook"
							className={`${styles.footerHover} border rounded-xl p-2`}
						>
							<FaFacebookF className="w-full h-5" />
						</Link>
						<Link
							href="/twitter"
							className={`${styles.footerHover} border rounded-xl p-2`}
						>
							<FaTwitter className="w-full h-5" />
						</Link>
						<Link
							href="/linkedIn"
							className={`${styles.footerHover} border rounded-xl p-2`}
						>
							<FaLinkedinIn className="w-full h-5" />
						</Link>
						<Link
							href="/youtube"
							className={`${styles.footerHover} border rounded-xl p-2`}
						>
							<FaYoutube className="w-full h-5" />
						</Link>
						<Link
							href="/Whatsapp"
							className={`${styles.footerHover} border rounded-xl p-2`}
						>
							<FaWhatsapp className="w-full h-5" />
						</Link>
					</div>
				</div>
				<div className="w-full sm:w-1/4 h-full">
					<div className={`${styles.footerHeader}`}>
						<h1>Customer Support</h1>
					</div>
					<div className="leading-8 text-xs sm:text-sm">
						<ul>
							<li>Help and Ordering</li>
							<li>Privacy and Policy</li>
							<li>Return & Cancellation</li>
							<li>Delevery Schedule</li>
							<li>Get a Call</li>
							<li>Online Enquiry</li>
						</ul>
					</div>
				</div>
				<div className="w-full sm:w-1/4 h-full">
					<div className={`${styles.footerHeader}`}>
						<h1>Contact Info</h1>
					</div>
					<div className="text-xs sm:text-sm leading-10">
						<div className="flex items-center w-full leading-6">
							<FaPaperPlane className="h-5" />
							<h2 className="pl-2 cursor-pointer">
								Km 31, Kaduna / Abuja Expressway, Kaduna State
							</h2>
						</div>
						<div className="flex items-center w-full">
							<FaEnvelopeOpen className="h-5" />
							<span className="pl-2">cropsandmachines@gmail.com</span>
						</div>
						<div className="flex items-center w-full">
							<FaHeadphones className="h-5" />
							<span className="pl-2">+234 802 358 3974</span>
						</div>
					</div>
				</div>
				<div className="w-full sm:w-1/4 h-full">
					<div className={`${styles.footerHeader}`}>
						<h1>NewsLetters</h1>
					</div>
					<div className="text-xs sm:text-sm">
						<div className="mb-4">
							<span>
								Enter Your Email and We Would Send Our Latest Information Plans.
							</span>
						</div>
						<div className="flex flex-col ">
							<input
								type="text"
								placeholder="Enter Your Email"
								className="w-8/12 sm:w-full h-8 pl-2 mb-2 rounded-md"
							/>
							<button
								type="submit"
								className={`${styles.footerHover} border rounded-md h-12 font-bold w-32`}
							>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="flex w-full border justify-center ">
				<div className="py-4 text-headerGreen cursor-default">
					Copyright @ 2022{" "}
					<Link
						href="https://github.com/IliyaIkasi"
						className="hover:underline text-gray-500 font-bold"
					>
						SalamaDev
					</Link>
					. All Rights Reserved
				</div>
			</div>
		</div>
	);
};

export default Footer;
