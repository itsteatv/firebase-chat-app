import GoogleSignInButton from "../components/GoogleSignInButton";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, signInWithGoogleAsync } from "../store/Auth"
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

function SignIn() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSigningIn, setIsSigningIn] = useState(false);
  console.log(currentUser);

  const signInWithGoogle = async function () {
    setIsSigningIn(true);
    try {
      await dispatch(signInWithGoogleAsync());
    }
    catch (error) {
      toast.error("An error occurred: " + error.message);
    }
    setIsSigningIn(false);
  }

  const handleLogin = async function () {
    try {
      if (!isSigningIn) {
        await signInWithGoogle();
      }
    }
    catch (error) {
      toast.error("An error occurred" + error.message);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const userData = user ? { uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL } : null;
      dispatch(setCurrentUser(userData));
    })

    return unsubscribe();

  }, [dispatch])

  useEffect(() => {
    if (currentUser) {
      navigate("/chat")
    }
  }, [currentUser])

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Hello there 👋🏿</h1>
          <p className="mb-5 text-white">  Welcome to our chat app! Connect with friends, colleagues, and loved ones in real-time. Join the chat rooms or start private conversations to stay connected no matter where you are. Let the conversations begin!
          </p>
          <GoogleSignInButton onClick={handleLogin} isDisabled={isSigningIn} />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
