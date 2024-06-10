import Btn from "./Btn";

function GridContent() {
	return (
		<article className="flex flex-col justify-center items-center text-white">
			<article className="bg-[url('./assets/Img/bulle.png')] flex flex-col justify-center items-center text-center">
				<h2 className="text-3xl w-48">Features that work for your future.</h2>
				<p className="py-5 font-thin">
					Check out our amazing features and experience the <br /> power of
					Vaultflow for yourself.
				</p>
			</article>
			<article className="grid grid-cols-2 grid-row-3 mx-72 my-24">
				<section className="bg-yellow-700">
					<div>
						<img
							src="./assets/Img/icon01.png"
							alt="Analytics' icon"
							className="w-10 py-4"
						/>
						<h4 className="text-3xl">Analytics Dashboard</h4>
						<p className="text-xs font-thin pb-4">
							Our Analytics Dashboard provides a clear and intuitive interface
							for you to easily analyze your data. From customizable graphs to
							real-time data updates, our dashboard offers everything you need
							to gain valuable insights.
						</p>
						<a className="text-sm underline" href="#">
							View dashboard
						</a>
					</div>
				</section>
				<section className="bg-blue-700">
					<div>
						<img
							src="./assets/Img/icon02.png"
							alt="Digital Credit Token's icon"
							className="w-10 py-4"
						/>
						<h4 className="text-3xl">Digital Credit Tokens</h4>
						<p className="text-xs font-thin pb-4">
							Reward your customers and incentivize engagement with our
							innovative digital credit tokens. Our tokens can be customized to
							match your branding, and are a flexible and scalable way to drive
							customer loyalty and encourage repeat business.
						</p>
						<a href="#">View dashboard</a>
					</div>
				</section>
				<section className="col-span-2 bg-green-700">
					<div className="flex items-center">
						<div>
							<img
								src="./assets/Img/icon03.png"
								alt="Code Collaboration's icon"
								className="w-10 py-4"
							/>
							<h4 className="text-3xl">Code collaboration</h4>
							<p>
								Our advanced code synchronization technology ensures that your
								data is always up-to-date and accurate, no matter where it's
								coming from. Whether you're integrating data from multiple
								sources or working with a team of developers, our
								synchronization technology makes it easy to collaborate and
								ensure that your data is consistent and reliable.
							</p>
							<a href="#">View dashboard</a>
						</div>
						<img src="./assets/Img/terminalImg.png" alt="Terminal" />
					</div>
				</section>
				<section className="bg-red-800">
					<div>
						<h2>Our powerful analytics provides invaluable insights.</h2>
						<p className="text-xs font-thin pb-4">
							Unlock the power of data with our cutting-edge analytics product.
							Get instant insights with our user-friendly Analytics Dashboard,
							and take advantage of our innovative digital credit tokens to
							reward your customers and incentivize engagement.
						</p>
						<Btn
							style="px-3 py-2 rounded-2xl text-white border border-white text-xs font-light active:opacity-50"
							text="Download the app"
						/>
					</div>
				</section>
			</article>
		</article>
	);
}

export default GridContent;
