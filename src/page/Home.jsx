import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
	return (
		<section className="bg-[url('./assets/Img/backgroundImg.jpeg')] h-screen bg-center bg-no-repeat bg-cover">
			<Navbar />
			<Hero />
		</section>
	);
}

export default Home;
