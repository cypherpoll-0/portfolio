import React from "react";
import Link from "next/link";
function Header() {
	return (
		<div className="border-b">
			<nav className="flex flex-row justify-between h-14 gap-x-80 items-center text-xl font-medium">
				<Link href="/about_me">
					<button>About Me</button>
				</Link>
				<Link href="/">
					<button>Home</button>
				</Link>
				<Link href="/projects">
					<button>Portfolio</button>
				</Link>
			</nav>
		</div>
	);
}

export default Header;
