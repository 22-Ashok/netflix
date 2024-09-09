import Header from './Header'
import PopularContainer from "./Popular"
import TopRatedContainer from './TopRatedContainer'
import UpCommingContainer from './UpComming'
import { useSelector } from "react-redux"
import CommanPlayer from "./CommanPlayer"
import Footer from './Footer'

const ThirdRoute = () => {
  const popUp = useSelector((store) => store.current.movieDetail );
 
  return (
  <div className="bg-[#131313]">
    <Header />
    <div className="py-10">
    <UpCommingContainer />
    <TopRatedContainer />
    <PopularContainer />
    { popUp && <CommanPlayer /> }
    </div>
    <Footer />
  </div>
)
 
}

export default ThirdRoute 

