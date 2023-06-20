'use client'
import Link from "next/link";

export default function SignUpPage() {
    return (
        <div className="w-full py-8 bg-gray-400">

            <div className="flex h-full flex-row justify-center ">
                <div className="rounded-2xl bg-white" style={{ maxWidth: 500, flexGrow: 0, flexShrink: 0, flexBasis: '50%' }}>
                    <div className="flex flex-row justify-between border-b-[1px] border-b-gray-300 px-6 py-4">
                        <span className="font-semibold text-base">Đăng kí tài khoản</span>
                        <button className="rounded-full border w-8 h-8 border-gray-500">X</button>
                    </div>
                    <div className="flex flex-col items-center px-6 py-4">
                        <img src='./images/logo_colored.png' />
                        <input className="w-full rounded border border-gray-300 mt-8 px-3 py-2" placeholder="Tên" onChange={(e)=>{console.log("Data change: "+e.target.value)}} />
                        <p className="text-sm">Đây là tên sẽ xuất hiện trong các bài viết của bạn. Bạn có thể sử dụng tên thật hoặc nick. Bạn không thể thay đổi tên này về sau.</p>

                        <input type='email' className="w-full rounded border border-gray-300 mt-4 px-3 py-2 mb-5" placeholder="Email" />
                        <input type='datew'  className="w-full rounded border border-gray-300 px-3 py-2 mb-5" placeholder="Sinh nhật" />
                        <input type='password' className="w-full rounded border border-gray-300 mt-4 px-3 py-2 mb-5" placeholder="Mật Khẩu" />
                        <input type='password' className="w-full rounded border border-gray-300 px-3 py-2 mb-5" placeholder="Xác nhận mật khẩu" />

                        <dl className="w-full mb-3">
                            <dt className="">
                                <label>Số điện thoại:</label>
                            </dt>
                            <dd>  <input className="w-full rounded border border-gray-300 px-3 py-2" placeholder="" /></dd>
                        </dl>

                        <dl className="w-full mb-3">
                            <dt className="">
                                <label>Số CMND/Hộ chiếu:</label>
                                {/* <dfn>bắt buộc</dfn> */}
                            </dt>
                            <dd> <input className="w-full rounded border border-gray-300 px-3 py-2" placeholder="" /></dd>
                        </dl>

                        <dl className="w-full mb-3">
                            <dt className="">
                                <label>Ngày cấp:</label>
                            </dt>
                            <dd>  <input className="w-full rounded border border-gray-300 px-3 py-2" placeholder="" /></dd>
                        </dl>

                        <dl className="w-full mb-5">
                            <dt className="">
                                <label>Nơi cấp:</label>
                            </dt>
                            <dd>  <input className="w-full rounded border border-gray-300 px-3 py-2" placeholder="" /></dd>
                        </dl>

                        <span style={{ fontSize: "8" }} className=" text-sm text-left mb-5">
                            Tôi đồng ý với <span style={{ color: "blue" }}>điều khoản dịch vụ</span> và <span style={{ color: "blue" }}>chính sách quyền riêng tư</span>.
                        </span>

                        <button className="w-full rounded-xl bg-blue-700 py-2 px-3 mb-3">
                            <span className="text-white font-bold text-sm">Đăng kí</span>
                        </button>


                        <span>Bạn đã có tài khoản? <Link href={"/login"}><span style={{ color: "blue" }}>Đăng nhập</span></Link>
                        </span>

                    </div>
                </div>

            </div>
        </div>
    );
}