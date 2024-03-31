import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Hero from "../Hero/Hero"
import Companies from "../Sections/Companies"
import GeeksterWay from "../Sections/GeeksterWay"
import OurTeam from "../Sections/OurTeam"
import VideoSection from "../Sections/VideoSection"


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <VideoSection />
      <GeeksterWay />
      <OurTeam />
      <Companies />
      <Footer />
    </>
  )
}

export default Home
