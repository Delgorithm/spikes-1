import Btn from "./Btn";

function Navbar() {
	return (
		<nav className="p-6 ">
			<article className="py-3 px-5 rounded-2xl m-2 flex items-center justify-between text-white bg-[#0B081C]/50">
				<section className="flex items-center gap-3">
					<img
						src="./assets/Img/logo.png"
						alt="VaultFlow's logo"
						className="w-6"
					/>
					<h1>VaultFlow</h1>
				</section>
				<ul className="flex gap-8 font-thin text-xs">
					<li>
						<a href="">Features</a>
					</li>
					<li>
						<a href="">Pricing</a>
					</li>
					<li>
						<a href="">About us</a>
					</li>
				</ul>
				<Btn
					style="px-3 py-1.5 rounded-2xl bg-white text-black text-xs font-light active:opacity-50"
					text="Download the app"
				/>
			</article>
		</nav>
	);
}

export default Navbar;
