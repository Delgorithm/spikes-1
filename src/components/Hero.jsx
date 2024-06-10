import Btn from "./Btn";

function Hero() {
	return (
		<>
			<section className="flex flex-col justify-center items-center pt-10">
				<article className="flex flex-col justify-center items-center text-white mx-32">
					<p className="font-thin">
						We just raised $20M in Series B.{" "}
						<span>
							<a href="#">Learn more</a>
						</span>
					</p>
					<h1 className="text-6xl text-center py-5">
						Modern analytics <br /> for the modern world
					</h1>
					<p className="mx-28 text-xs font-thin py-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						varius enim in eros elementum tristique.{" "}
					</p>
					<div className="flex items-center gap-5">
						<Btn
							style="px-3 py-2 rounded-2xl bg-white text-black text-xs font-light active:opacity-50"
							text="Download the app"
						/>
						<Btn
							style="px-3 py-2 rounded-2xl text-white border border-white text-xs font-light active:opacity-50"
							text="Talk to an expert"
						/>
					</div>
					<img
						src="./assets/Img/heroImg.png"
						alt="VaultFlow's line chart"
						className="py-10 w-7/12"
					/>
				</article>
			</section>
		</>
	);
}

export default Hero;
