import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { GPT_KEY, LOGO } from "../utils/constants";
import { addShowGptSearch } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptToggle = () => {
    dispatch(addShowGptSearch());
  };

  return (
    <div className="absolute flex flex-col md:flex-row w-screen px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="Netflix Logo" />
      {user && (
        <div className="flex p-2 justify-between">
          <button
            className="px-4 py-2 mx-4 my-2 bg-[#00ac7f] rounded-lg text-white font-bold"
            onClick={handleGptToggle}
          >
            {showGptSearch ? "Browse Page" : "GPT Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12"
            src={user?.photoURL}
            alt="userIcon"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
