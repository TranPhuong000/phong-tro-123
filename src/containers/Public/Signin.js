import React from "react";
import { InputForm, Button} from "../../components";
import { InputFormPass } from '../../components'



const Signin = () => {
    return (
        <div className=' mw-[500] pl-[100px] pb-[100px]'> 
            <h3 className='font-semibold text-3xl mb-3 uppercase pl-[190px]'>Đăng ký</h3>
            <div className='w=full flex flex-col gap-3' >
                    <InputForm label={'Tài khoản / Email'}></InputForm>
                    <InputFormPass label={'Mật khẩu'}></InputFormPass>
                    <InputFormPass label={'Nhập lại mật khẩu'}></InputFormPass>
                    <InputForm label={'Tên đầy đủ'}></InputForm>
                    <label className='text-base uppercase font-semibold text-stone-400 pl-1'>Loại Tài Khoản</label>
                    <form className="uppercase text-xl p-2 justify-center">
                        <input checked="checked" name="gender" type="radio" value="Nam" className="m-6" />Tìm kiếm
                        <input name="gender" type="radio" value="Nữ" className="m-6"/>Chính chủ
                        <input name="gender" type="radio" value="Khác" className="m-6"/>Môi giới
                    </form>

                    
                    <div className="text-center">
                        <h6 className="">Bằng cách nhấp vào Đăng ký, bạn đồng ý với bạn đã đồng ý với</h6>
                        <a href="#" className="hover:text-[blue] hover:underline text-blue-600 cursor-pointer display: inline-block">Điều khoản sử dụng</a>
                    </div>  
                    <Button 
                            text={'Đăng ký'} 
                            fontSize='text-xl'
                            textColor='text-white' 
                            fontWeight='font-bold'
                            textTransform='uppercase' 
                            cursor='cursor-pointer'
                            gradientColorStops='bg-gradient-to-r from-blue-800 via-sky-600 to-blue-300 hover:from-blue-300 hover:via-sky-600 hover:to-blue-800'
                            Width='w-50'
                            />          
            </div>
 
        </div>
        
   )
}


export default Signin