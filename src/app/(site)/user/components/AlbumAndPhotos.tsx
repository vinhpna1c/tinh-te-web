import React from 'react'
import Image from 'next/image'
import {RiEditCircleFill} from 'react-icons/Ri'
import Header from '../sections/Header'
import NavBar from '../sections/NavBar'
import { url } from 'inspector'



export default function AlbumAndPhotos() {
    return (

        <div>
            <div className='flex flex-col items-center max-w-full mb-5'>
                <div className='flex max-h-auto mb-9 w-3/4 justify-start'>
                    <div className='w-auto h-auto align-middle font-extrabold uppercase '>Album và hình ảnh của Vinh Phan</div>
                </div>
                {/* start information user */}
                <div className='flex max-h-max w-3/4 justify-center text-sm'>
                    <div className='flex flex-col w-3/4 bg-gray-100 gap-5'>
                        <div className='flex gap-4 justify-center'>
                            <div className=''>
                                <img className='h-52 w-64 rounded-xl' src="https://imgproxy7.tinhte.vn/s_JyUpY8XRWejy_iF8YRVKkt0Tb_EulcRuQcr7VWww0/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/06/6469957_Nokia-G42-5G.jpg" alt="" />
                            
                            </div>
                            {/* </div> */}
                            <div className=''>
                                <img className='h-52 w-64 rounded-xl' src="https://imgproxy7.tinhte.vn/04UVuHJxDtCEJfgwaLpLYZ40jm5mRd1BYV9hN4UjJQM/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/06/6469605_cover_himalayafossils.jpg" alt="" />
                            </div>
                            <div className=''>
                                <img className='h-52 w-64 rounded-xl' src="https://imgproxy7.tinhte.vn/_MMcV37MH-HkZyiNF2b4ECsoAiSDOsm3E9Iz3sUI6_k/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/06/6469595_Cover-Hacker.jpg" alt="" />
                            </div>
                            <div className='' style={{ position: "relative" }}>
                                <img className='h-52 w-64 rounded-xl' src="https://imgproxy7.tinhte.vn/h-uE8ByMaUywJKDmyo-ESlt5EUikIMvZG8fvBGXos9w/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/06/6465043_Cover-5-ly-do-vi-sao-su-dung-ipad-pro-cho-cong-viec-lan-giai-tri-tinhte-tuanhtran.jpg" alt="" />
                                {/* <h1 style={{ position: "absolute", top: "10px", right: "10px", color: "red" }} onClick={() => console.log("Hello Thuận")}>
                                    <RiEditCircleFill size={30} color='#bfbfbf'/>
                                </h1> */}
                            </div>
                        </div>
                        <div className='flex gap-4 justify-center'>
                            <div className=''>
                                <img className='h-52 w-64 rounded-xl' src="https://imgproxy7.tinhte.vn/s_JyUpY8XRWejy_iF8YRVKkt0Tb_EulcRuQcr7VWww0/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/06/6469957_Nokia-G42-5G.jpg" alt="" />
                            </div>
                            <div className=''>
                                <img className='h-52 w-64 rounded-xl' src="https://imgproxy7.tinhte.vn/04UVuHJxDtCEJfgwaLpLYZ40jm5mRd1BYV9hN4UjJQM/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/06/6469605_cover_himalayafossils.jpg" alt="" />
                            </div>
                            <div className=''>
                                <img className='h-52 w-64 rounded-xl' src="https://imgproxy7.tinhte.vn/_MMcV37MH-HkZyiNF2b4ECsoAiSDOsm3E9Iz3sUI6_k/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/06/6469595_Cover-Hacker.jpg" alt="" />
                            </div>
                            <div className=''>
                                <img className='h-52 w-64 rounded-xl' src="https://imgproxy7.tinhte.vn/h-uE8ByMaUywJKDmyo-ESlt5EUikIMvZG8fvBGXos9w/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/06/6465043_Cover-5-ly-do-vi-sao-su-dung-ipad-pro-cho-cong-viec-lan-giai-tri-tinhte-tuanhtran.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* end information user */}
            </div>

        </div >

    )
}