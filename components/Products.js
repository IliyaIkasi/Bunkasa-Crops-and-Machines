import { useEffect, useState } from "react";
import ProductItem from "./products/ProductItem";
import ProductsTab from "./products/ProductsTab";
import dummyData from "../dummyData";

export default function Products({ products }) {
	const [activeTabValue, setActiveTabValue] = useState("fetchVegetables");
	const [activeTab, setActiveTab] = useState([]);

	const selectTab = (e) => {
		e.preventDefault();
		const value = e.target.id;

		setActiveTabValue(value);
	};

	useEffect(() => {
		const productReq =
			dummyData.productData.content[activeTabValue]?.product ||
			dummyData.productData.content.fetchVegetables.product;
		setActiveTab(productReq);
	}, [activeTabValue]);

	return (
		<div>
			<div className="py-8">
				<ProductItem products={products} selectTab={selectTab} />
			</div>
			<div className="">
				<ProductsTab products={activeTab} />
			</div>
		</div>
	);
}
