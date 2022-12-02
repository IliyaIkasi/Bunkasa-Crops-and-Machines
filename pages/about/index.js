import Image from "next/image";
import aboutImg from "../../public/assets/tractor01.jpg";

const index = () => {
	return (
		<div>
			<div>
				<Image src={aboutImg} alt="" width={200} height={100} />
			</div>
			<div>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
					maiores ad perferendis aspernatur nostrum autem quae, laborum
					quisquam, assumenda vel nulla, provident nam commodi veniam
					perspiciatis ipsum odit? Mollitia, nihil.
				</p>
			</div>
		</div>
	);
};

export default index;
