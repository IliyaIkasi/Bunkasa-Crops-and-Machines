import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import bgImg from "../public/assets/bgImg.jpg";
import Nav from "./Nav";
// import { useRouter } from "next/router";

const Layout = ({ children }) => {
	// const router = useRouter();

	return (
		<div className="opacity-100 bg-bgImg h-screen bg-cover">
			<div className="w-full">
				<Header />
				<Nav />
				<div className="">{children}</div>

				<Footer className={styles}>
					<Footer />
				</Footer>
			</div>
		</div>
	);
};

export default Layout;
