export default function LoginScreen() {
    return (
        <div className="container w-full h-full  bg-gray-400">


            <div className="flex flex-row justify-center ">
                <div className="rounded-2xl bg-white" style={{ maxWidth: 500 ,flexGrow:0,flexShrink:0, flexBasis:'50%'}}>
                    <div className="flex flex-row justify-between border-b-[1px] border-b-gray-300 px-6 py-4">
                        <span className="font-semibold text-base">Đăng nhập tài khoản</span>
                        <button className="rounded-full border w-8 h-8 border-gray-500">X</button>
                    </div>
                    <div className="flex flex-col items-center px-6 py-4">
                        <img src='./images/logo_colored.png' />
                        <input className="w-full rounded border border-gray-300 mt-8 px-3 py-2" placeholder="Tên tài khoản hoặc Email" />
                        <input className="w-full rounded border border-gray-300 mt-4 px-3 py-2" placeholder="Mật khẩu" />
                        <div className="flex flex-row w-full justify-end py-3">
                            <span>Quên mật khẩu?</span>
                        </div>
                        <button className="w-full rounded-xl bg-blue-700 py-2 px-3">
                            <span className="text-white font-bold text-sm">Đăng nhập</span>
                            </button>
                        <div className="py-3">Hoặc</div>
                        <button className="w-full rounded-xl bg-gray-100 border border-gray-400">
                            Đăng nhập bằng Google
                        </button>
                        <button className="w-full rounded-xl bg-gray-100 border border-gray-400">
                            Đăng nhập bằng Facebook
                        </button>
                        <button className="w-full rounded-xl bg-gray-100 border border-gray-400">
                            Đăng nhập bằng Apple
                        </button>
                        <span>Chưa có tài khoản? <span>Đăng kí</span></span>

                    </div>
                </div>

            </div>
            <div style={{height:1024}}>

            </div>
        </div>
    );
}