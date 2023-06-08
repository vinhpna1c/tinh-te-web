import Link from "next/link";

export default function LoginScreen() {
    return (
        <div className="w-full h-screen bg-gray-400">

            <div className="flex h-full flex-row justify-center items-center">
                <div className="rounded-2xl bg-white" style={{ maxWidth: 500, flexGrow: 0, flexShrink: 0, flexBasis: '50%' }}>
                    <div className="flex flex-row justify-between border-b-[1px] border-b-gray-300 px-6 py-4">
                        <span className="font-semibold text-base">Đăng nhập tài khoản</span>
                        <button className="rounded-full border w-8 h-8 border-gray-500">X</button>
                    </div>
                    <div className="flex flex-col items-center px-6 py-4">
                        <img src='./images/logo_colored.png' />
                        <input className="w-full rounded border border-gray-300 mt-8 px-3 py-2" placeholder="Tên tài khoản hoặc Email" />
                        <input className="w-full rounded border border-gray-300 mt-4 px-3 py-2" placeholder="Mật khẩu" />
                        <div className="flex flex-row w-full justify-end py-3">
                           <Link href="/login/forgot_password"><span style={{color:"blue"}}>Quên mật khẩu?</span></Link> 
                        </div>
                        <button className="w-full rounded-xl bg-blue-700 py-2 px-3">
                            <span className="text-white font-bold text-sm">Đăng nhập</span>
                        </button>
                        <div className="py-3">Hoặc</div>

                        <button className="w-full rounded-xl bg-gray-100 border border-gray-400 mb-5" style={{ color: "black", background: "#F9F9FB" }}>
                            <span className="flex justify-center py-2">
                                <img src="https://tinhte.vn/styles/tinhte2018/google.png" />
                                <span className="ml-2">  Đăng nhập bằng Google </span>
                            </span>
                        </button>

                        <button className="w-full rounded-xl bg-gray-100 border border-gray-400 mb-5" style={{ color: "black", background: "#F9F9FB" }}>
                            <span className="flex justify-center py-2">
                                <img src="https://tinhte.vn/styles/tinhte2018/facebook.png" />
                                <span className="ml-2">  Đăng nhập bằng Facebook </span>
                            </span>
                        </button>

                        <button className="w-full rounded-xl bg-gray-100 border border-gray-400 mb-5" style={{ color: "black", background: "#F9F9FB" }}>
                            <span className="flex justify-center py-2">
                                <img src="https://tinhte.vn/styles/tinhte2018/apple.png" />
                                <span className="ml-2">  Đăng nhập bằng Apple </span>
                            </span>
                        </button>

                        <span>Chưa có tài khoản? <Link href={"/sign_up"}><span style={{ color: "blue" }}>Đăng kí</span></Link>
                        </span>

                    </div>
                </div>

            </div>
           
        </div>
    );
}