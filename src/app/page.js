import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col justify-between items-center place-content-center h-screen gap-x-8 font-thin">
			<Header />
			<div className="flex flex-row items-center place-content-center gap-x-8 text-2xl">
				<div>
					<Image
						src="/images/portfolioPic.jpg"
						width={500}
						height={500}
						className="border-2 bg-blend-normal rounded-full"
					/>
				</div>
				<div className="flex flex-col gap-y-8">
					<div className="font-mono font-extrabold text-3xl">
						<h1>Hello, I am Ayush, welcome to my world!!</h1>
					</div>
					<div className="font-mono font-bold text-2xl">
						Freelancer and Ex-Associate 2 @ PwC
					</div>
					<ul className="flex flex-col gap-y-2 font-light font-mono">
						<li>👨‍💻 Tech Enthusiast</li>
						<li>🌏 Based in India</li>
						<li>☕️ Coffee Lover</li>
						<li>📧 ayushkedia1990@gmail.com</li>
					</ul>
					<div className="flex flex-row gap-x-4">
						<Link href="https://www.linkedin.com/in/cypherpoll0/">
							<Image
								src="/images/linkedin.png"
								width={50}
								height={50}
								alt={"linkedin logo"}
							/>
						</Link>
						<Link href="https://github.com/cypherpoll-0">
							<Image
								src="/images/github.png"
								width={50}
								height={50}
								alt={"github logo"}
							/>
						</Link>
						<Link href="https://leetcode.com/ayushkedia1990">
							<Image
								src="/images/leetcode.png"
								width={50}
								height={50}
								alt={"leetcode logo"}
							/>
						</Link>
						<Link href="https://www.instagram.com/the_d.i.s.t.r.a.c.t.e.d_one/">
							<Image
								src="/images/instagram.png"
								width={50}
								height={50}
								alt={"instagram logo"}
							/>
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
}
