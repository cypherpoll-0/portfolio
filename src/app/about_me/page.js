import Header from "../header";
import Footer from "../footer";
export default function AboutMe() {
	return (
		<main className="flex flex-col justify-between items-center place-content-center gap-x-8 h-screen">
			<Header />
			<div className="grid grid-cols-1 gap-4 text-center text-2xl p-12">
				<div>
					<p>
						Passionate Frontend Developer with a strong foundation in JavaScript
						and React.js. 1+ year of hands-on experience at PwC, creating
						dynamic web portals using React. Proficient in CSS for visually
						appealing interfaces. Skilled in Python and Node.js for versatile
						development. Data Structures and Algorithms enthusiast, ensuring
						efficient code solutions. Rest API and JSON proficiency for robust
						applications. Freelancer with a penchant for innovation and
						problem-solving. Eager to contribute my skills to cutting-edge
						projects. Let's connect and explore opportunities for creating
						impactful digital solutions.
					</p>
				</div>
				<br />
				<div>
					<p>
						This is supposed to be section 2 but I have barely experienced
						anything in life having enterd the professional world for around 2
						years, so I will keep updating this section let's see where life
						takes me......
					</p>
				</div>
			</div>
			<Footer />
		</main>
	);
}
