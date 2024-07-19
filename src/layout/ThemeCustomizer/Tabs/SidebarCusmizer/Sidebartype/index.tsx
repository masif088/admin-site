import React, { useContext } from 'react'
import Vertical from './Vertical'
import Horizontal from './Horizontal';
import CustomizerContext from 'helper/Customizer';
import { Sidebar_Type } from 'utils/Constant';
import Cookies from "js-cookie";
import {doc, updateDoc} from "@firebase/firestore";
import {db} from "@/firebase/Firebase";

const SidebarType = () => {
    const { addSidebarLayouts, layout } = useContext(CustomizerContext);

    const handleSidebarType = (type: string) => {
        addSidebarLayouts(type);

        const uid = Cookies.get('token')
        if (uid !== undefined) {
            const query1 = doc(db, 'users', uid)
            updateDoc(query1, {
                ['layout_preference.sidebar_type']: type
            })
            Cookies.set('sidebar_type', type)
        }
    };
    return (
        <div>
            <h6>{Sidebar_Type}</h6>
            <ul className='sidebar-type layout-grid'>
                <Vertical handleSidebarType={handleSidebarType} layout={layout} />
                <Horizontal handleSidebarType={handleSidebarType} layout={layout} />
            </ul>
        </div>
    )
}

export default SidebarType