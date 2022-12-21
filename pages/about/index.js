import { useState } from "react";
import Image from "next/image";
import aboutImg from "../../public/assets/tractor01.jpg";
import { FaAngleRight } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Link from "next/link";
import dummyData from "../../dummyData";
import FreqQuestions from "../../components/about/FreqQuestions";
import WhatWeDo from "../../components/about/WhatWeDo";

export default function index({ freqQuestions, whatWeDoData }) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [qId, setQId] = useState();

	function selectTab(e) {
		e.preventDefault();
		const ansId = e.target?.children[1]?.id;

		var toggleAnswer = document.getElementById(ansId);
		if (toggleAnswer.style.display === "none") {
			toggleAnswer.style.display = "flex";
		} else if (toggleAnswer.style.display === "flex") {
			toggleAnswer.style.display = "none";
		} else {
			toggleAnswer.style.display = "none";
		}
	}

	return (
		<div className="bg-white w-full h-full">
			{/* Landing Section */}
			<div className="flex flex-col font-bold text-center justify-center h-screen sm:h-[80vh] text-gray-500 bg-lime-50 leading-10">
				<h1 className="text-3xl">About Us</h1>
				<div className="flex justify-center items-center">
					<span className="text-headerGreen">Home</span>
					<IconContext.Provider value={{ size: "1.5rem" }}>
						<FaAngleRight className="" />
					</IconContext.Provider>
					<span>About Us</span>
				</div>
			</div>

			{/* About Welcome Section */}
			<div className="flex flex-col lg:flex-row text-gray-500 h-screen py-4 lg:h-full lg:py-20">
				<div className="flex flex-col px-4 py-4 h-3/5 lg:w-1/2 lg:justify-center">
					<div className="py-2">
						<h1 className="text-3xl lg:w-80">Welcome to Crops and Machines</h1>
						<h2 className="text-xl lg:w-40">Know Agriculture at Its Best </h2>
					</div>
					<p className="text-sm leading-6">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
						maiores ad perferendis aspernatur nostrum autem quae, laborum
						quisquam, assumenda vel nulla, provident nam commodi veniam
						perspiciatis ipsum odit? Mollitia, nihil. Lorem ipsum dolor sit,
						amet consectetur adipisicing elit. Aliquam maiores ad perferendis
						aspernatur nostrum autem quae, laborum quisquam, assumenda vel
						nulla, provident nam commodi veniam perspiciatis ipsum odit?
						Mollitia, nihil.
					</p>
					{/* <div className="pt-4 w-full">
						<Link href="">
							<h1 className="w-fit px-4 py-2 text-white bg-headerGreen hover:bg-white hover:text-headerGreen hover:border-2 hover:border-headerGreen">
								Learn More
							</h1>
						</Link>
					</div> */}
				</div>
				<div className="flex h-2/5 w-11/12 lg:h-full lg:w-1/2 self-center lg:justify-center">
					<Image
						src={aboutImg}
						alt=""
						width={200}
						height={100}
						className="h-full w-full lg:h-1/2 lg:w-11/12 rounded-3xl"
					/>
				</div>
			</div>
			{/* Frequently Asked Questions Section */}
			<div className="text-gray-500 h-full py-10 bg-lime-50">
				<div className="flex flex-col justify-center text-center px-10 h-60">
					<div className="">
						<h1 className="text-3xl">{freqQuestions.header.title}</h1>
					</div>
					{/* <div className="pt-4 px-8">
						<p className="text-sm">{freqQuestions.header.desc}</p>
					</div> */}
				</div>
				<div className="">
					<FreqQuestions
						freqQuestions={freqQuestions.content}
						selectTab={selectTab}
					/>
				</div>
			</div>

			{/* What We Do Section */}
			<div className="text-gray-500 h-full py-10 bg-lime-50">
				<div className="flex flex-col justify-center text-center px-10 h-60">
					<div className="">
						<h1 className="text-3xl">{whatWeDoData.header.title}</h1>
					</div>
					<div className="pt-4 px-8">
						<p className="text-sm">{whatWeDoData.header.desc}</p>
					</div>
				</div>
				<div className="">
					<WhatWeDo whatWeDo={whatWeDoData.content} />
				</div>
			</div>
		</div>
	);
}

export function getServerSideProps() {
	const request = dummyData;

	return {
		props: {
			freqQuestions: request.freqQuestions,
			whatWeDoData: request.whatWeDoData,
		},
	};
}
