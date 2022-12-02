import { VideoCameraIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const ProductItem = ({ products }) => {
	const router = useRouter();
	return (
		<div className="flex justify-evenly h-32 items-center">
			{Object.entries(products).map(([key, { title }]) => (
				<div
					key={key}
					className="flex flex-col items-center hover:text-headerGreen cursor-pointer border-x-2 w-full first:border-x-0 last:border-x-0"
					onClick={() => router.push(`/?productQuery=${key}`, "/")}
				>
					<VideoCameraIcon height={40} />
					<span>{title}</span>
				</div>
			))}
		</div>
	);
};

export default ProductItem;
