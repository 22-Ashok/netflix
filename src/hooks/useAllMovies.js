import { useEffect } from "react"
import { useDispatch } from "react-redux";
import {listOne, listTwo, listThree, listFour} from '../redux/slices/moviesSlice'

const useAllMovies = () => {
    const dispatch = useDispatch();
    
const options = {
        method: 'GET',
        mode:'cors',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTYwNDJiMjRlNDkwODcxYzdhYjc1MWQ3OWFlNWY0NSIsIm5iZiI6MTcyNDkwNDE5MS4yNTk4NzksInN1YiI6IjY2YmEwNTdkM2UyZWU5ZTdhY2I3NjFlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ptb8EOOoaCaTd6unYMm7UxBmaraFqIZsh9CQJRAoVQQ'
        }
};

async function playNow(){
       const fetchData = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=396042b24e490871c7ab751d79ae5f45");
       const json = await fetchData.json();
       dispatch(listOne(json.results));
 }

 async function popular(){
        const fetchData = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=2&api_key=396042b24e490871c7ab751d79ae5f45");
        const json = await fetchData.json();
        dispatch(listTwo(json.results));
 }

 async function topRated(){
    const fetchData = await fetch("https://api.themoviedb.org/3/movie/top_rated&api_key=396042b24e490871c7ab751d79ae5f45");
    const json = await fetchData.json();
    dispatch(listThree(json.results));
 }

 async function upComming(){
    const fetchData = await fetch("https://api.themoviedb.org/3/movie/upcoming?&api_key=396042b24e490871c7ab751d79ae5f45");
    const json = await fetchData.json();
    dispatch(listFour(json.results));
 }

    useEffect(() => {
        playNow();
        popular();
        topRated();
        upComming();
    },[])
   
}

export default useAllMovies
