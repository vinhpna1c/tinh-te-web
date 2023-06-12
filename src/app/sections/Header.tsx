'useclient'
import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdMenu } from 'react-icons/io';
import AmityAuth from '@/src/services/amity.auth.service';
import { Client } from '@amityco/ts-sdk';
import { useContext } from 'react';
import { AppSessionContext } from '../context';


export default function Header() {
    const context= useContext(AppSessionContext);
    const {amityClient} =context;
    

    return (
        <div className="flex flex-row justify-between p-4">
            <div className="flex flex-row mr-2 items-center w-full">
                <img className="rounded-full mr-3" src="./images/logo.png" style={{ height: 40, }} />
                <div className='mr-8'>
                    <p>TINHTE</p>
                    <p>MẠNG XÃ HỘI</p>
                </div>
                <div className='flex flex-row px-8 py-4 rounded-full items-center h-full md:w-1/4' style={{ backgroundColor: '#e5e6ed' }}>
                <AiOutlineSearch size={24} />
                    <input 
                    className='ml-2 w-full'
                    placeholder="Tìm sản phẩm công nghệ, cộng đồng, bạn bè, ..." 
                    autoFocus={false} 
                    style={{ backgroundColor: '#e5e6ed' , border:'none',outline:'none'}}/>
                        
                    
                </div>

            </div>
            <button className="flex flex-row rounded-full items-center px-2 py-0.5" style={{ backgroundColor: '#E5E6ED', }}
            onClick={()=>{
                AmityAuth.login('99').then((value)=>{
                    if(value){
                        console.log("Login success with: 99");
                        const user=Client.getActiveUser();
                        
                        if(user)
                        {
                            console.log("Current user: "+ JSON.stringify(user));
                            // console.log("Current client: "+JSON.stringify(Client.getActiveClient()));
                            // context.se
                            const CircularJSON = require('circular-json');
                            const json = CircularJSON.stringify(Client.getActiveUser());
                            console.log(json)
                            window.sessionStorage.setItem("AMITY_USER",JSON.stringify(json));
                            context.amitySession=AmityAuth.sessionHandler;
                        }
                        
                        
                    }
                })
            }}>
                <FaRegUserCircle size={32} />
                <IoMdMenu className='ml-4' size={24} />
            </button>

        </div>
    )

}