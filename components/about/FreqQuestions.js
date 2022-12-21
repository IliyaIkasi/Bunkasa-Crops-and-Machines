import { ArrowRightIcon, FolderPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

const FreqQuestions = ({ freqQuestions, selectTab }) => {
	const [ans, setAns] = useState();

	return (
		<div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3">
			{freqQuestions.map((item) => (
				<div
					key={item.id}
					onClick={selectTab}
					className="border h-full my-5 cursor-pointer mx-5 p-5 flex flex-col text-center hover:scale-y-105 hover:shadow-xl bg-white"
				>
					<div className="py-2 text-3xl">
						{item.topic}
					</div>
					<div
						id={`toggleAsnwer${item.id}`}
						className={`${styles.toggleAnswer} text-sm`}
					>
						{item.answer}
					</div>
				</div>
			))}
		</div>
	);
};

export default FreqQuestions;
