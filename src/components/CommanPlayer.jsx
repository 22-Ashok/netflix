import { useRef, useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux";
import { removeMovie, removeYtDetail } from '../redux/slices/currentMovei'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import CancelIcon from '@mui/icons-material/Cancel';
import PauseIcon from '@mui/icons-material/Pause';
import useVideoPlayer from "../hooks/useVideoPlayer";

const CommanPlayer = () => {
    useVideoPlayer();
    const playerRef = useRef(null);
    const[player, setPlayer] = useState(null);
    const[playIcon, setPlayIcon] = useState(false);
    const[muteIcon, setMuteIcon] = useState(true);
    const dispatch = useDispatch();
    const trailer = useSelector((store) => store.current.ytDetail);
    const movie = useSelector((store) => store.current.movieDetail);
    const {original_title,overview,vote_average,release_date} = movie;

      useEffect(() => {
        if (trailer && trailer.key) {
          const Player = new window.YT.Player(playerRef.current, {
            height: '390',
            width: '700',
            videoId: trailer.key,  
            playerVars: {
              playsinline: 1,
              rel: 0,
              controls: 0,
              mute: 1,
            },
            events: {
              onReady: (event) => {
                setPlayer(Player);
              },
            },
          });
        }
      }, [trailer]);

    function playVideo() {
      if(player) {
        if(!playIcon){
          player.playVideo();
        }  else {
          player.pauseVideo();
        }
    
        setPlayIcon(!playIcon);
      }
    } 

    function videoSound(){
       if(player) {
        if(player.isMuted()) {
          player.unMute();
        } else {
          player.mute();
        }
        setMuteIcon(!muteIcon);
       }
    }

    function cancelTrailer() {
       dispatch(removeMovie());
       dispatch(removeYtDetail());
    }

    if(!trailer) {
      return <div className='loading'> Loading... </div>
    }
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 w-screen h-screen flex justify-center items-center z-50 backdrop-blur-sm" onClick={cancelTrailer}>
        <div className="pb-5 bg-[#1F2020] w-[700px] rounded-md relative" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            <div ref={playerRef}></div>
            <div className="absolute right-0 text-white top-0 p-3 cursor-pointer" onClick={cancelTrailer}>
              <CancelIcon sx={{ fontSize: 30 }} />
            </div>
            <div className="flex justify-between items-center absolute bottom-0 w-full px-4 py-3 bg-gradient-to-t from-black to-transparent">
              <div className="flex items-center">
                {playIcon ? (
                  <button
                    className="text-black w-24 h-9 bg-white rounded-md mx-3 font-semibold flex items-center justify-center"
                    onClick={playVideo}
                  >
                    <PauseIcon sx={{ fontSize: 35 }} /> Pause
                  </button>
                ) : (
                  <button
                    className="text-black w-24 h-9 bg-white rounded-md mx-3 font-semibold flex items-center justify-center"
                    onClick={playVideo}
                  >
                    <PlayArrowIcon sx={{ fontSize: 35 }} /> Play
                  </button>
                )}
                <button className="text-white rounded-full bg-[#3D3E3E] p-1 text-sm border-white border flex items-center justify-center">
                  <AddIcon />
                </button>
              </div>
              {/* Mute/Unmute Button */}
              <div
                className="text-white rounded-full bg-[#3D3E3E] p-1 text-[12px] border-white border cursor-pointer flex items-center justify-center"
                onClick={videoSound}
              >
                {muteIcon ? (
                  <VolumeDownIcon sx={{ fontSize: 20 }} />
                ) : (
                  <VolumeOffIcon sx={{ fontSize: 20 }} />
                )}
              </div>
            </div>
          </div>
    
          <div className="px-6 py-3 gap-y-4">
            <h1 className="text-lg font-semibold text-white">{original_title}</h1>
            <h3 className="text-[17px] text-green-500">{vote_average}</h3>
            <p className="text-white">{overview}</p>
          </div>
        </div>
      </div>
    );
  };

export default CommanPlayer 

