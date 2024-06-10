import GridContent from "../components/GridContent";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SocialProof from "../components/SocialProof";

function Home() {
	return (
		<section className="bg-[url('./assets/Img/backgroundImg.jpeg')] h-full bg-origin-padding bg-top bg-no-repeat bg-cover">
			<Navbar />
			<Hero />
			<SocialProof />
			<GridContent />
		</section>
	);
}

export default Home;
