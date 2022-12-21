import Image from "next/image";

import loginImg from "../../public/assets/tractor01.jpg";

const login = () => {
	return (
		<div className="h-screen flex">
			<div className="hidden sm:flex">
				<Image src={loginImg} alt={"loginImg"} />
			</div>
			<div className="h-full w-full text-gray-500 pt-24 border">
				<div className="flex w-full justify-center">
					<h1 className="text-lg mb-3">
						Crops <span className="text-green-900">&</span> Machines
					</h1>
				</div>
				<div className=""></div>
				<div className=""></div>
			</div>
		</div>
	);
};

export default login;
