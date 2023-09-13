import Image from "next/image";
import Header from "../header";
import Footer from "../footer";
export default function Projects() {
	const project_list = [
		{
			img: "/../public/project1.png",
			name: "Paanika",
			desc: "A Freelance E-commerce website I made for a client using React.",
			link: "http://www.paanika.com/#/",
		},
		{
			img: "/../public/project2.png",
			name: "Amazone Clone",
			desc: "A simple Amazon clone with auth and cart features i built during my college days to learn about React.",
			link: "https://a-clone-486cd.web.app/",
		},
		{
			img: "/../public/project3.png",
			name: "Whatsapp Clone",
			desc: "A simple Whatsapp clone with auth and live messaging features i built during my college days to learn about React and dynamic databases.",
			link: "https://whatsappf-7753e.web.app/",
		},
	];

	return (
		<main className="flex flex-col justify-start items-center place-content-center gap-y-8">
			<Header />
			<div className="flex flex-col gap-y-6 justify-start h-full place-content-center">
				<div className="text-3xl place-content-center">
					<p className="text-center">
						Some of my personal works, please do check them out! Will keep
						adding more of these here...
					</p>
				</div>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
					{project_list.map((value, index) => {
						return (
							<div
								key={index}
								className="flex flex-col p-2 border-2 gap-y-10 border-white rounded-2xl border-opacity-100"
							>
								<Image
									src={value.img}
									width={500}
									height={500}
									className="border-white rounded-xl"
								/>
								<p className="text-center text-2xl">{value.name}</p>
								<p className="text-center">{value.desc}</p>
								<a
									className="text-center border-white rounded-xl bg-gray-500"
									href={value.link}
								>
									Check it Out
								</a>
							</div>
						);
					})}
				</div>
			</div>
			<Footer />
		</main>
	);
}
