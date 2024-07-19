import LeftGrid from '../../components/Dashboard/Crypto/LeftGrid'
import Maingrid from '../../components/Dashboard/Crypto/MainGrid'
import RightGrid from '../../components/Dashboard/Crypto/RightGrid'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import React, {useEffect} from 'react'
import { Container, Row } from 'reactstrap'
import { Crypto_text, Dashboard } from 'utils/Constant'
import {addDoc, collection} from "@firebase/firestore";
import {db,auth} from "@/firebase/Firebase";
import {createUserWithEmailAndPassword} from "@firebase/auth";
import {middleware} from "stylis";
import Cookies from "js-cookie";

const Home = () => {

    useEffect(() => {
        console.log(document.cookie)

        // Cookies.set("token", JSON.stringify(true));
        // const aaa = auth.currentUser?.uid
        // console.log(typeof auth.currentUser?.uid)
        // if (aaa!=null){
        //     Cookies.set("token", aaa,{expiresIn:"1d"});
        // }else{
        //     console.log(Cookies.get('token'))
        // }


        // middleware();
    //     createUserWithEmailAndPassword(auth, "email@gmail.com2", "password")
    //         .then((userCredential) => {
    //             // Signed up
    //             const user = userCredential.user;
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             // ..
    //         });
    }, []);

    return (
        <div className='page-body'>
            heheasd
        </div>
    )
}

export default Home