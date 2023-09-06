import Header from "../header";
import Footer from "../footer";
export default function AboutMe() {
	return (
		<main className="flex flex-col justify-between items-center place-content-center gap-x-8">
			<Header />
			<div>About Me</div>
			<div>Section 1</div>
			<div>section 2</div>
			<Footer />
		</main>
	);
}
