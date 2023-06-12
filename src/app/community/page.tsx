import Header from "../sections/Header";
import NavBar from "../sections/NavBar";


export default function CommunityPage() {
    return (
        <div>
            <Header />
            <div style={{background:"linear-gradient(to bottom, rgb(123, 8, 255, 0.9), rgb(000, 000, 00,0.87))"}} className="py-2 items-center">
                <span>

                <span className="items-center">
                <img src="https://tinhte.vn/styles/tinhte2018/apple.png" />
                </span>

                <span className="rounded-full px-5 py-2 mx-5 items-center" style={{color:"white",background:"blue"}}>
                    <span>
                    <span>+</span>
                    <button >Tạo Bài Viết</button>
                    </span>
                   
                </span>
                </span>
            </div>
        </div>
    );
} 