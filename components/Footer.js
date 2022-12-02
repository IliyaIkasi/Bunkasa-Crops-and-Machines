import Link from "next/link";

const Footer = () => {
	return (
		<div className="flex w-full border justify-center">
			<div className="py-4 text-headerGreen cursor-default">
				Copyright @ 2022{" "}
				<Link href="https://github.com/IliyaIkasi" className="hover:underline">
					SalamaDev
				</Link>
				. All Rights Reserved
			</div>
		</div>
	);
};

export default Footer;
