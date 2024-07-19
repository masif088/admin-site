import SvgIcon from "CommonElements/Icons/SvgIcon";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {doc, setDoc, updateDoc} from "@firebase/firestore";
import {db,auth} from "@/firebase/Firebase";
import firebase from "firebase/compat";

import {getAuth} from "@firebase/auth";



const MoonLight = () => {
  const [darkMode, setDarkMode] = useState(Cookies.get('light_mode')==="true");

  useEffect(() => {
    const theme  = Cookies.get('light_mode')==="true";
    setDark(theme);
  }, []);

  const DarkModeHandler = (name: boolean) => {
    const uid = Cookies.get('token')
    if(uid!==undefined){
      const query = doc(db,'users',uid)
      updateDoc(query,{
        ['layout_preference.light_mode']:name
      })
      Cookies.set('light_mode',name.toString())
    }
    setDark(name)
  };

  function setDark(name:boolean){
    console.log(name)

    if (name) {
      document.body.classList.remove("dark-only");
      document.body.classList.add("light-only");
      setDarkMode(!darkMode);
    } else {
      document.body.classList.remove("light-only");
      document.body.classList.add("dark-only");
      setDarkMode(!darkMode);
    }
  }
  return (
    <li>
      <div
        className={`mode ${darkMode ? "active" : ""}`}
        onClick={() => DarkModeHandler(darkMode)}
      >
        <SvgIcon iconId="moon" />
      </div>
    </li>
  );
};

export default MoonLight;