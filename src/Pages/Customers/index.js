import React from 'react';
import OurClients from "./Our Clinets/ourClients";
import ChooseProduct from "./Choose-Product";

const ThirdPages = ({dark, getDark}) => {
    return (
        <div>
            <OurClients getDark={getDark} dark={dark}/>
            <ChooseProduct getDark={getDark} dark={dark}/>
        </div>
    );
};

export default ThirdPages;