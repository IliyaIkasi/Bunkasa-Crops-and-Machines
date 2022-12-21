import { useEffect } from "react";
import Header from "./navigation/Header";
import Nav from "./navigation/Nav";

const Navigation = () => {
	useEffect(() => {
		var previous = window.pageYOffset;

		window.onscroll = function () {
			var current = window.pageYOffset;
			if (previous > current) {
				document.getElementById("nav").style.top = "0px";
			} else {
				document.getElementById("nav").style.top = "-115px";
			}
			previous = current;
		};
	}, []);
	return (
		<div id="nav" className="bg-headerGreen fixed w-full top-0">
			<Header />
			<Nav />
		</div>
	);
};

export default Navigation;
