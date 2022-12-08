import { useState } from "react";
import ProductItem from "./products/ProductItem";
import ProductsTab from "./products/ProductsTab";

export default function Products({ products, productTitle }) {
	const [activeTab, setActiveTab] = useState(products);

	return (
		<div>
			<div className="py-8">
				<ProductItem
					productTitle={productTitle}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
			</div>
			<div className="">
				<ProductsTab
					products={products}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
			</div>
		</div>
	);
}
