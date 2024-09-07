import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { app } from '../utils/firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import userAuthentication from '../hooks/isValid'
import Header from './Header';

const SignInPage = () => {

  const [isSignInPage, setIsSignInPage] = useState(true);
  const [isError, setIsError] = useState(null);
  const email = useRef();
  const password = useRef();
  const userName = useRef();
  const navigate = useNavigate();
  const auth = getAuth(app);
  const doAction = () => {
    const isValid = userAuthentication(email.current.value, password.current.value);
    if (isValid) {
      setIsError(isValid);
    } else {
      setIsError(null);

      // Sign Up user
      if (!isSignInPage) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            if(user) {
              if(userName.current.value.length < 3) return setIsError('name must be greater then 3 letter.');
              updateProfile(user, {
                displayName:userName.current.value
              }).then(() => {
                 navigate('/');
              }).catch((error) => {
                 setIsError(error);
              })
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setIsError(errorMessage);
          });
      }

      // signin user 
      else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate('/');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorMessage == ' Error (auth/invalid-credential).' )
            console.log('user not found');
          setIsError('user not found');
          });
      }
    }
  }

  return (

<div
  className='w-screen h-screen bg-cover flex justify-center items-center bg-no-repeat text-white relative'
  style={{
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg)',
  }}
>
  <Header />
  <div className='bg-black bg-opacity-80 w-1/4 px-4 leading-6 pb-8 pt-4 rounded-md z-30'>
    <h1 className='py-4 text-xl font-bold'>
      {isSignInPage ? 'Sign In' : 'Sign Up'}
    </h1>
    
    {!isSignInPage &&  
     <input
      type='text'
      placeholder='name'
      className='w-full my-2 h-10 rounded-md px-2 text-[16px] text-black font-semibold outline-none'
      ref={userName}
    /> }
  

    <input
      type='email'
      placeholder='email'
      className='w-full my-2 h-10 rounded-md px-2 text-[16px] text-black font-semibold outline-none'
      ref={email}
    />
    <br />
    <input
      type='password'
      placeholder='password'
      className='w-full my-2 h-10 rounded-md px-2 text-[16px] text-black font-semibold outline-none'
      ref={password}
    />
    <button
      className='w-full my-1 h-9 rounded-md px-2 text-[16px] bg-red-900 text-white text-lg font-bold'
      onClick={doAction}
    >
     {isSignInPage ? 'Sign In' : 'Sign Up'}
    </button>
    {isError && (
      <div className='py-1 text-red-800 font-semibold text-lg'>*{isError}</div>
    )}
    <div className='pt-4 pb-2'>
      <span className='pr-2'>
        {isSignInPage ? 'New to Netflix?' : 'Already SignUp?'}
      </span>
      <span
        className='hover:underline cursor-pointer'
        onClick={() => {
          setIsSignInPage(!isSignInPage);
          setIsError(null);
        }}
      >
        {isSignInPage ? 'Sign Up now' : 'Sign In now'}
      </span>
    </div>
  </div>
</div>


  )
}

export default SignInPage  