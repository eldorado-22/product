import React from 'react';
import OurClients from "./Our Clinets/ourClients";
import ChooseProduct from "./Choose-Product";

const ThirdPages = ({dark, getDark}) => {
    return (
        <div style={{
            background: dark ? '#1F2E35' : '',
            color: dark ? '#848a8d' : '#000'
        }}>
            <OurClients getDark={getDark} dark={dark}/>
            <ChooseProduct getDark={getDark} dark={dark}/>
        </div>
    );
};

export default ThirdPages;