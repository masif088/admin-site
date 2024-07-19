import React, {useContext, useEffect} from 'react'
import { CheckLayoutData } from '../../../../../Data/CustomizerData';
import { ImgPath } from '../../../../../utils/Constant';
import CustomizerContext from 'helper/Customizer';
import Cookies from "js-cookie";
import {doc, setDoc, updateDoc} from "@firebase/firestore";
import {db} from "@/firebase/Firebase";

const CheckLayout = () => {
    useEffect(() => {
        const layout = Cookies.get('layout')
        if (typeof layout!='undefined'){
            handlePageLayouts(layout)
        }else{
            handlePageLayouts('')
        }
    }, []);
    const { setLayoutName } = useContext(CustomizerContext);

    const handlePageLayouts = (type: string) => {
        const layout = type.toLowerCase().replace(' ', '')
        const uid = Cookies.get('token')
        if(uid!==undefined){
            const query = doc(db,'users',uid)
            updateDoc(query,{
                ['layout_preference.layout']:layout
            })
            Cookies.set('layout',layout)
        }

        setLayoutName(layout);

    };
    return (
        <ul className='sidebar-type layout-grid layout-types'>
            {
                CheckLayoutData && CheckLayoutData.map((item, index) => (
                    <li key={index} data-attr={item.attr} className={`${item.class ? item.class : ''}`} onClick={() => { handlePageLayouts(item.title) }}>
                        <div className='layout-img'>
                            <img src={`${ImgPath}${item.image}`} className='img-fluid' alt='layout Type' />
                            <h6>{item.title}</h6>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default CheckLayout