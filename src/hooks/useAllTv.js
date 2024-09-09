import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { listOne, listTwo, listThree, listFour, listFive, listSix } from '../redux/slices/tvSlice'
const useAllTvShows = () => {
    const dispatch = useDispatch();
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTYwNDJiMjRlNDkwODcxYzdhYjc1MWQ3OWFlNWY0NSIsIm5iZiI6MTcyNDkwNDE5MS4yNTk4NzksInN1YiI6IjY2YmEwNTdkM2UyZWU5ZTdhY2I3NjFlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ptb8EOOoaCaTd6unYMm7UxBmaraFqIZsh9CQJRAoVQQ'
        }
};

async function tvShows2(){
    const fetchData = await fetch("https://api.themoviedb.org/3/discover/tv?page=2&api_key=396042b24e490871c7ab751d79ae5f45");
    const json = await fetchData.json();
    dispatch(listOne(json.results));
 }

 async function tvShows3(){
    const fetchData = await fetch("https://api.themoviedb.org/3/discover/tv?page=3&api_key=396042b24e490871c7ab751d79ae5f45");
    const json = await fetchData.json();
    dispatch(listTwo(json.results));
 }
 async function tvShows4(){
    const fetchData = await fetch("https://api.themoviedb.org/3/discover/tv?page=4&api_key=396042b24e490871c7ab751d79ae5f45");
    const json = await fetchData.json();
    dispatch(listThree(json.results));
 }

 async function tvShows5(){
    const fetchData = await fetch("https://api.themoviedb.org/3/discover/tv?page=5&api_key=396042b24e490871c7ab751d79ae5f45");
    const json = await fetchData.json();
    dispatch(listFour(json.results));
 }


     
    useEffect(() => {
        tvShows2();
        tvShows3();
        tvShows4();
        tvShows5();
    }, [])

}

export default useAllTvShows