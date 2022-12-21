import Footer from "./Footer";
import styles from "../styles/Home.module.css";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
	return (
		<div className="opacity-100 bg-white h-screen">
			<div className="w-full">
				<Navigation />
				<div className="">{children}</div>
				<Footer className={styles}>
					<Footer />
				</Footer>
			</div>
		</div>
	);
};

export default Layout;
