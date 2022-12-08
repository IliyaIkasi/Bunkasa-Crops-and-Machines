import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

const ProductsTab = ({ products, activeTab, setActiveTab }) => {
	return (
		<div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 justify-between">
			{products.map((product) => (
				<div
					key={product.id}
					className="flex flex-col items-center my-5 mx-5 h-96 sm:h-60 border border-headerGreen overflow-hidden hover:scale-y-105 hover:shadow-xl cursor-pointer "
				>
					<div className="h-4/5 sm:h-44 w-full flex flex-col text-center object-cover">
						<Image
							src={product.prodImg}
							alt={product.prodImgAlt}
							className="h-full object-cover"
						/>
					</div>
					<div className="flex h-1/5 sm:h-16 flex-col items-center border w-full">
						<div className="text-sm">{product.productName}</div>
						<div className="text-sm flex text-headerGreen">
							<StarIconSolid height={20} />
							<StarIconSolid height={20} />
							<StarIconSolid height={20} />
							<StarIcon height={20} />
							<StarIcon height={20} />
						</div>
						<div className="text-sm">{`$${product.price}`}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductsTab;
