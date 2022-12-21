import { VideoCameraIcon } from "@heroicons/react/24/outline";

const ProductItem = ({ products, selectTab }) => {
	return (
		<div className="flex justify-evenly h-32 items-center">
			{Object.entries(products).map(([key, { title }]) => (
				<div
					key={key}
					id={key}
					className="flex flex-col items-center hover:text-headerGreen cursor-pointer border-x-2 w-full first:border-x-0 last:border-x-0"
					onClick={selectTab}
				>
					<VideoCameraIcon height={40} id={key} />
					<span id={key}>{title}</span>
				</div>
			))}
		</div>
	);
};

export default ProductItem;
