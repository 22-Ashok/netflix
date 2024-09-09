import Footer from './Footer'
import { ShimmerButton } from "react-shimmer-effects";

const Shimmer = () => {

    return (
        <div className='bg-[#131313] w-screen h-screen'>
           <div className='py-20 px-32'>
             <ShimmerButton />
           </div>
            <Footer />
        </div>
      
    )
}

export default Shimmer