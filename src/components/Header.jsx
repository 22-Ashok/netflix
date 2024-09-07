import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../redux/slices/userSlice';
import useAllMovies from "../hooks/useAllMovies"
import netflixlogo from '../logo/netf.png'
import netflix from '../logo/netflix.svg'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import TvIcon from '@mui/icons-material/Tv';
import TheatersIcon from '@mui/icons-material/Theaters';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import useAllTvShows from '../hooks/useAllTv'

const Header = () => {
    const[search, setSearch] = useState(false);
    const[menuList, setMenuList] = useState(false);
    const[isScroll, setIsScroll] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();
    const auth = getAuth();
    useAllMovies();
    useAllTvShows();
    
    useEffect(() => {
      window.addEventListener('scroll', () => {
        if(window.scrollY != 0) {
           setIsScroll(true)
        } else {
          setIsScroll(false)
        }
      })

      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user);
          const{email,displayName,uid} = user
          console.log(email);
        dispatch(addUser({email,displayName,uid}))
        } 
      });

    },[])

    function logOutFunction() {
      signOut(auth)
      .then(() => {
        dispatch(removeUser());
         navigate('/signin');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
    }

    return (
        <div  className = {isScroll ? 'flex justify-between px-10 text-lg max-lg:text-[17px] max-lg:px-6 w-screen font-semibold bg-[#040505] fixed top-0 z-20' : 'flex justify-between px-10 text-lg max-lg:text-[17px] max-lg:px-6 w-screen font-semibold bg-transparent fixed top-0 z-20'}  >

            {/* lg or above screen visible */}
           <div className="flex cursor-pointer max-md:hidden">
            <img src={netflixlogo} alt='missing' className=" w-28 h-20 max-lg:w-24 max-lg:h-16" />
            <div className="flex items-center cursor-pointer max-md:hidden ">
                <div className="pl-7 text-white text-opacity-95 hover:opacity-70 max-lg:pl-5"> <Link to='/'>Home</Link> </div>
                <div className="pl-7 text-white text-opacity-95 hover:opacity-70  max-lg:pl-5"> <Link to='/tvshow'>TVshows</Link> </div>
                <div className="pl-7 text-white text-opacity-95 hover:opacity-70   max-lg:pl-5"> <Link to='/movie'>Movies</Link> </div>
                <div className="pl-7 text-white text-opacity-95 hover:opacity-70  max-lg:pl-5"> <Link to='/popular'> New&Popular</Link></div>
            </div>
           </div>

                  {/*md screen visible  */}
            <div className="md:hidden flex items-center py-3">
                <img src={netflix} alt="missing" className="h-9 w-7" />
                <div className="text-[20px] font-semibold text-white pl-1" onClick={() => setMenuList(!menuList)}>Menu</div>
            </div>

            {menuList &&
             <div className="flex flex-col absolute left-6 top-16 text-white bg-[#242424] w-44 py-3"> 
                <div className="px-3 py-2">
                    <HomeIcon />
                    <span className="pl-1"><Link to='/'>Home</Link></span>
                </div>

                <div className="px-3 py-2">
                  <TvIcon />
                  <span className="pl-1"><Link to='/tvshow'>TVshows</Link></span>
                </div>

                <div className="px-3 py-2">
                  <TheatersIcon />
                  <span className="pl-1"><Link to='/movie'>Movies</Link></span>
                </div>

                <div className="px-3 py-2">
                    <TrendingUpIcon />
                    <span className="pl-1"><Link to='/popular'> New&Popular</Link></span>
                </div>
             </div> }
            
           <div className="flex items-center cursor-pointer">
            { search ? 
             <div className="border border-white mr-3 rounded-sm">
               <SearchIcon className="text-white" onClick={() => setSearch(!search)} />
               <input type="text" placeholder='search...' className="bg-transparent text-white focus:outline-none text-sm max-lg:w-24" />
             </div> : 
             <SearchIcon className="text-white mr-4 text-opacity-95 hover:opacity-70"  onClick={() => setSearch(!search)} />
            }
            
            { user 
            ? 
             <button className="w-20 h-9 text-white  hover:opacity-85 rounded-md bg-red-800 max-lg:text-sm max-lg:w-16 font-semibold" onClick={logOutFunction}> Sign Out </button> : 
             
             <button className="w-20 h-9 text-white  hover:opacity-85 rounded-md bg-red-800 max-lg:text-sm max-lg:w-16 font-semibold"> <Link to="/signin">Sign In</Link> </button>
             
             }
            
           
           </div>
        </div>
    )
}

export default Header