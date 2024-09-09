import Header from './Header'
import PopularContainer from "./Popular"
import TopRatedContainer from './TopRatedContainer'
import UpCommingContainer from './UpComming'
import { useSelector } from "react-redux"
import CommanPlayer from "./CommanPlayer"
import Footer from './Footer'

const ForthRoute = () => {
  const popUp = useSelector((store) => store.current.movieDetail )
  return (
    <div className="bg-[#131313] w-screen min-h-screen">
      <Header />
      <div className="py-10">
      <PopularContainer />
      <TopRatedContainer />
      <UpCommingContainer />
      { popUp && <CommanPlayer /> }
      </div>
     <Footer />
    </div>
)
}

export default ForthRoute