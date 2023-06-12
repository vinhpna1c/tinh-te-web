

export default function ForgotPassword(){
    return(
      
            <div className="w-full h-screen bg-gray-400">
    
                <div className="flex h-full flex-row justify-center items-center">
                    <div className="rounded-2xl bg-white" style={{ maxWidth: 500, flexGrow: 0, flexShrink: 0, flexBasis: '50%' }}>
                        <div className="flex flex-row justify-between border-b-[1px] border-b-gray-300 px-6 py-4">
                            <span className="font-semibold text-base" style={{color:"black"}}>Mất mật khẩu</span>
                            <button className="rounded-full border w-8 h-8 border-gray-500" style={{color:"black"}}>X</button>
                        </div>
                        <div className="flex flex-col items-center px-6 py-4">
                             <p style={{color:"black"}}>Nếu bạn quên mật khẩu, bạn có thể dùng mẫu sau để thiết lập lại mật khẩu. Bạn sẽ nhận được một email với nội dung hướng dẫn đặt lại mật khẩu.</p>                   
                            <input className="w-full rounded border border-gray-300 px-3 py-2 mb-5 mt-2" placeholder="Nhập Email của bạn" />
                            <button className="w-full rounded-xl bg-blue-700 py-2 px-3">
                                <span className="text-white font-bold text-sm">Đặt lại mật khẩu</span>
                            </button>
                        </div>
                    </div>
                </div>   
            </div>

    );
}