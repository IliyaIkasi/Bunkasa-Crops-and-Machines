import { ArrowRightIcon, FolderPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const WhatWeDo = ({ whatWeDo }) => {
	return (
		<div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3">
			{whatWeDo.map((item) => (
				<div
					key={item.id}
					className="border my-5 mx-5 p-5 flex flex-col text-center hover:scale-y-105 hover:shadow-xl cursor-pointer bg-white"
				>
					<div>
						<div className="flex justify-center">
							<FolderPlusIcon height={50} />
						</div>
						<div className="py-2 text-3xl">{item.title}</div>
						<div className="text-sm">{item.desc}</div>
					</div>
					<Link href="" className="flex w-full justify-center py-4 text-white">
						<div className="flex w-fit justify-center px-4 py-2 bg-headerGreen items-center hover:border hover:border-headerGreen hover:text-headerGreen hover:bg-white">
							<h1>Read More</h1>
							<ArrowRightIcon height={20} className="pl-2" />
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};

export default WhatWeDo;
