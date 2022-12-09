import agric01 from "./public/assets/agric01.jpg";
import agric02 from "./public/assets/agric02.jpg";
import agric03 from "./public/assets/agric03.jpg";
import agric04 from "./public/assets/agric04.jpg";
import agric05 from "./public/assets/agric05.jpg";
import animal01 from "./public/assets/animal01.jpg";
import animal02 from "./public/assets/animal02.jpg";
import animal03 from "./public/assets/animal03.jpg";
import animal04 from "./public/assets/animal04.jpg";
import animal05 from "./public/assets/animal05.jpg";
import machines01 from "./public/assets/tractor01.jpg";
import machines02 from "./public/assets/tractor02.jpg";
import machines03 from "./public/assets/tractor03.jpg";
import machines04 from "./public/assets/tractor04.jpg";
import machines05 from "./public/assets/tractor05.jpg";
import fac01 from "./public/assets/fac01.jpg";
import fac02 from "./public/assets/fac02.jpg";
import fac03 from "./public/assets/fac03.jpg";
import fac04 from "./public/assets/fac04.jpg";
import fac05 from "./public/assets/tractor13.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	featuredData: {
		header: {
			title: "Our Features",
			desc:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam" +
				"maiores ad perferendis aspernatur nostrum autem quae.",
		},
		content: [
			{
				id: 1,
				title: "Natural Food",
				desc:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam" +
					"maiores ad perferendis aspernatur nostrum autem quae, laborum" +
					"quisquam, assumenda vel nulla, provident nam commodi veniam" +
					"perspiciatis ipsum odit? Mollitia, nihil.",
			},
			{
				id: 2,
				title: "Natural Food",
				desc:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam" +
					"maiores ad perferendis aspernatur nostrum autem quae, laborum" +
					"quisquam, assumenda vel nulla, provident nam commodi veniam" +
					"perspiciatis ipsum odit? Mollitia, nihil.",
			},
			{
				id: 3,
				title: "Natural Food",
				desc:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam" +
					"maiores ad perferendis aspernatur nostrum autem quae, laborum" +
					"quisquam, assumenda vel nulla, provident nam commodi veniam" +
					"perspiciatis ipsum odit? Mollitia, nihil.",
			},
		],
	},
	productData: {
		header: {
			title: "Our Products",
			desc:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam" +
				"maiores ad perferendis aspernatur nostrum autem quae.",
		},
		content: {
			fetchVegetables: {
				title: "Vegetables",
				product: [
					{
						id: 1,
						productName: "Natural Vegetables 01",
						prodImg: agric01,
						prodImgAlt: "Vegetables 01",
						ratings: 2,
						price: 14,
					},
					{
						id: 2,
						productName: "Natural Vegetables 02",
						prodImg: agric02,
						prodImgAlt: "Vegetables 02",
						ratings: 4,
						price: 32,
					},
					{
						id: 3,
						productName: "Natural Vegetables 03",
						prodImg: agric03,
						prodImgAlt: "Vegetables 03",
						ratings: 3,
						price: 12,
					},
					{
						id: 4,
						productName: "Natural Vegetables 04",
						prodImg: agric04,
						prodImgAlt: "Vegetables 04",
						ratings: 1,
						price: 51,
					},
					{
						id: 5,
						productName: "Natural Vegetables 05",
						prodImg: agric05,
						prodImgAlt: "Vegetables 05",
						ratings: 5,
						price: 650,
					},
				],
			},
			fetchAnimals: {
				title: "Animals",
				product: [
					{
						id: 1,
						productName: "Animal 01",
						prodImg: animal01,
						prodImgAlt: "Animal 01",
						ratings: 2,
						price: 14,
					},
					{
						id: 2,
						productName: "Animal 02",
						prodImg: animal02,
						prodImgAlt: "Animal 02",
						ratings: 4,
						price: 32,
					},
					{
						id: 3,
						productName: "Animal 03",
						prodImg: animal03,
						prodImgAlt: "Animal 03",
						ratings: 3,
						price: 12,
					},
					{
						id: 4,
						productName: "Animal 04",
						prodImg: animal04,
						prodImgAlt: "Animal 04",
						ratings: 1,
						price: 51,
					},
					{
						id: 5,
						productName: "Animal 05",
						prodImg: animal05,
						prodImgAlt: "Animal 05",
						ratings: 5,
						price: 650,
					},
				],
			},
			fetchMachines: {
				title: "Machines",
				product: [
					{
						id: 1,
						productName: "Natural Machines 01",
						prodImg: machines01,
						prodImgAlt: "Machines 01",
						ratings: 2,
						price: 14,
					},
					{
						id: 2,
						productName: "Natural Machines 02",
						prodImg: machines02,
						prodImgAlt: "Machines 02",
						ratings: 4,
						price: 32,
					},
					{
						id: 3,
						productName: "Natural Machines 03",
						prodImg: machines03,
						prodImgAlt: "Machines 03",
						ratings: 3,
						price: 12,
					},
					{
						id: 4,
						productName: "Natural Machines 04",
						prodImg: machines04,
						prodImgAlt: "Machines 04",
						ratings: 1,
						price: 51,
					},
					{
						id: 5,
						productName: "Natural Machines 05",
						prodImg: machines05,
						prodImgAlt: "Machines 05",
						ratings: 5,
						price: 650,
					},
				],
			},
			fetchFactory: {
				title: "Factory",
				product: [
					{
						id: 1,
						productName: "Natural Factory 01",
						prodImg: fac01,
						prodImgAlt: "Factory 01",
						ratings: 2,
						price: 14,
					},
					{
						id: 2,
						productName: "Natural Factory 02",
						prodImg: fac02,
						prodImgAlt: "Factory 02",
						ratings: 4,
						price: 32,
					},
					{
						id: 3,
						productName: "Natural Factory 03",
						prodImg: fac03,
						prodImgAlt: "Factory 03",
						ratings: 3,
						price: 12,
					},
					{
						id: 4,
						productName: "Natural Factory 04",
						prodImg: fac04,
						prodImgAlt: "Factory 04",
						ratings: 1,
						price: 51,
					},
					{
						id: 5,
						productName: "Natural Factory 05",
						prodImg: fac05,
						prodImgAlt: "Factory 05",
						ratings: 5,
						price: 650,
					},
				],
			},
		},
	},
	GalleryData: {
		header: {
			title: "Bunkasa Gallery",
			desc:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam" +
				"maiores ad perferendis aspernatur nostrum autem quae.",
		},
		content: [
			{ id: 1, galleryImg: agric01, galleryAlt: "image of agric01" },
			{ id: 2, galleryImg: fac01, galleryAlt: "image of fac01" },
			{ id: 3, galleryImg: machines01, galleryAlt: "image of machines01" },
			{ id: 4, galleryImg: animal01, galleryAlt: "image of animal01" },
			{ id: 5, galleryImg: agric02, galleryAlt: "image of agric02" },
			{ id: 6, galleryImg: fac02, galleryAlt: "image of fac02" },
			// { id: 7, galleryImg: agric01, galleryAlt: "image of machines02" },
			// { id: 8, galleryImg: machines01, galleryAlt: "image of animal02" },
			// { id: 9, galleryImg: agric01, galleryAlt: "image of agric03" },
			// { id: 10, galleryImg: machines01, galleryAlt: "image of fac03" },
			// { id: 11, galleryImg: agric01, galleryAlt: "image of machines03" },
			// { id: 12, galleryImg: machines01, galleryAlt: "image of animal03" },
		],
	},
};

// export const productData = [{ header: {title: "Our Products"}, content: [{}, {}, {}] }];
