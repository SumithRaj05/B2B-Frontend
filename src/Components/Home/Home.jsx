import Container2 from "./components/Container2";
import Container1 from "./components/Container1";
import Scrollcat from "./components/Scrollcat";
import Recommend from "./components/Recommend";
import Trends from "./components/Trends";
import Explore from "./components/Explore";
import Join from "./components/Join";
import Footer from "./components/Footer";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
// import Recommend2 from "./components/Recommend2";


export default function Home(){
  return(
    <>
    <Navbar />
    <Container1 />
    <Container2 />
    <Scrollcat />
    <Recommend />
    {/* <Recommend /> */}
    <Trends />
    <Explore />
    <Join />
    <Footer />
    <Post />
    </>
  )
}