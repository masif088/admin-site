import React, {useContext, useEffect, useState} from 'react'
import { Layout_Type } from '../../../../../../utils/Constant';
import LTR from './LTR';
import RTL from './RTL';
import BoxLayout from './BoxLayout';
import ConfigDB from 'config/ThemeConfig';
import Cookies from "js-cookie";
import {doc, updateDoc} from "@firebase/firestore";
import {db} from "@/firebase/Firebase";

const LayoutType = () => {
    
    const localStorageLayout = ConfigDB.data.settings.layout_type;
    const [layout_type, setLayout_type] = useState(localStorageLayout);

    useEffect(() => {
        const layout = Cookies.get('type')
        if (typeof layout!='undefined'){
            handleLayout(layout)
        }else{
            handleLayout('ltr')
            Cookies.set('type','ltr')
        }
    }, []);

    const handleLayout = (layout: string) => {
        setLayout_type(layout);

        const uid = Cookies.get('token')
        if(uid!==undefined){
            const query = doc(db,'users',uid)
            updateDoc(query,{
                ['layout_preference.layout_type']:layout
            })
            Cookies.set('layout_type',layout)
        }


        if (layout === 'rtl') {
            document.body.classList.add('rtl');
            document.body.classList.remove('ltr');
            document.body.classList.remove('box-layout');
            document.documentElement.dir = 'rtl';
        } else if (layout === 'ltr') {
            document.body.classList.add('ltr');
            document.body.classList.remove('rtl');
            document.body.classList.remove('box-layout');
            document.documentElement.dir = 'ltr';
        } else if (layout === 'box-layout') {
            document.body.classList.remove('ltr');
            document.body.classList.remove('rtl');
            document.body.classList.add('box-layout');
            document.body.classList.remove('offcanvas');
            document.documentElement.dir = 'ltr';
        }
    };
    return (
        <div>
            <h6 className='mt-0 pt-0'>{Layout_Type}</h6>
            <ul className='main-layout layout-grid flex-row'>
                <LTR handleLayout={handleLayout} layout_type={layout_type} />
                <RTL handleLayout={handleLayout} layout_type={layout_type} />
                <BoxLayout handleLayout={handleLayout} layout_type={layout_type} />
            </ul>
        </div>
    )
}

export default LayoutType