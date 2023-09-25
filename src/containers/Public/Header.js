import React from "react";
import logo from '../../assets/logo-removebg-preview.png'
import { Button } from "../../components";

const Header = () => {
    return (
        <div className="w-1500 flex items-center justify-bewteen bg-red-300">
            <img src={logo} alt="logo" className="w-[100px] h-[80px] object-contain "/>
            
            <div>
                <ul>
                    <li>
                        
                    </li>
                </ul>
                <Button 
                    text={'đăng tin'} 
                    fontSize='text-xl'
                    textColor='text-white' 
                    fontWeight='font-bold'
                    textTransform='uppercase' 
                    cursor='cursor-pointer'
                    gradientColorStops='bg-gradient-to-r from-blue-800 via-sky-600 to-blue-300'/>
            </div>
            
        </div>
   )
}


export default Header