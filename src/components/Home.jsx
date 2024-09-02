import { useState } from "react"
import Header from "./Header"
import PrimaryContainer from "./PrimaryContainer"
import SecondaryContainer from "./SecondaryContainer"
import CommanPlayer from "./CommanPlayer"
import { useSelector } from "react-redux"

const Home = () => {
    const popUp = useSelector((store) => store.current.movieDetail )

    return (
        <div >
          <Header />
          <PrimaryContainer />
          <SecondaryContainer />
          { popUp && <CommanPlayer /> }
        </div>
    )
}

export default Home 