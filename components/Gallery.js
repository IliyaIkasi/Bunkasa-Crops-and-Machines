import Image from "next/image";

const Gallery = ({ gallery }) => {
	return (
		<div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center h-full">
			{gallery.map((item) => (
				<div
					key={item.id}
					className="p-2 group cursor-pointer transition duration-100 ease-in transform hover:scale-105"
				>
					<Image src={item.galleryImg} alt={item.galleryAlt} className="h-60" />
				</div>
			))}
		</div>
	);
};

export default Gallery;
