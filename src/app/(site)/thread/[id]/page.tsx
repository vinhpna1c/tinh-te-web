import { useRouter } from "next/router"
import "./styles.css"

const mockData = [
    {
        imgURL: "https://photo2.tinhte.vn/data/avatars/m/2389/2389485.jpg?1513472040",
        username: "_Vito_",
        title: "Đại bàng",
        createdat: "Một giờ",
        content: "Bên Mac render 3D bằng phần mềm gì nhỉ? Chứ hiệu năng render blender của m1 max 64 core chỉ bằng 20% 3080 thôi mà."
    },
    {
        imgURL: "https://tinhte.vn/styles/default/TinhteMods/avatars/avatar_4.png",
        username: "tinhdg",
        title: "Cao cấp",
        createdat: "Một giờ",
        content: "Ai đang dùng window với Intel thì cứ nên dùng tiếp đi, chuyển sang Mac nó nhanh chóng mặt lại a sê nôl"
    },
    {
        imgURL: "https://photo2.tinhte.vn/data/avatars/m/92/92078.jpg?1510237757",
        username: "phu_nguyen29",
        title: "Tích cực",
        createdat: "Một giờ",
        content: "Còn iMac mới của tui đâu"
    },
    {
        imgURL: "https://photo2.tinhte.vn/data/avatars/m/2874/2874823.jpg?1637570972",
        username: "nvk_nk",
        title: "Cao cấp",
        createdat: "13 giờ",
        content: "Hóng IMAC"
    },
    {
        imgURL: "https://tinhte.vn/styles/default/TinhteMods/avatars/avatar_male_5.png",
        username: "Tikktok",
        title: "Trứng",
        createdat: "20 giờ",
        content: "Ước gì công việc có thể sử dụng mac, thiết kế nhìn đẹp"
    }
]

const ThreadDetails = () => {
    console.log(useRouter().query.id);
    return (
        <div className="main--container">
            <div className="thread--detail">
                <div className="thread--detail__1">
                    <div className="thread--detail__breadcrum">
                        <ul className="breadcrumb">
                            <li><a href="#">Máy tính</a></li>
                            <li>Ổ lưu trữ (SSD, HDD, ổ cứng ngoài)</li>
                        </ul>
                    </div>

                    <div className="thread--detail__title">
                        <h1>Computex 2023: Trên tay nhanh hub USB-C WFS-U đa năng và SSD di động XS2000 của Kingston</h1>
                    </div>

                    <div className="thread--detail__post">
                        <div className="thread--detail__user">
                            <img src="https://photo2.tinhte.vn/data/avatars/m/1692/1692874.jpg" alt="" />
                            <div className="thread--detail__userInfo">
                                <div className="thread--detail__userInfo_1">
                                    <h6>Pnghuy</h6>
                                </div>
                                <div className="thread--detail__userInfo_2">
                                    <h6>31/05/2023 09:05</h6>
                                    <div className="dot"></div>
                                    <h6>Phản hồi: 15</h6>
                                </div>
                            </div>
                        </div>

                        <div className="thread--detail__content">
                            <img src="https://photo2.tinhte.vn/data/attachment-files/2023/05/6448129_cover-trentay-hub-USB-C-ssd-didong-xs2000-kingston-computex2023-tinhte.jpg" alt="" />
                            <p>Đây là một cái hub USB-C 10Gbps và một SSD di động tốc độ 20Gbps của Kingston, món này thì không phổ biến lắm tại Việt Nam nhưng theo chia sẻ của hãng thì tại Đài Loan, đây là một công cụ rất đắc lực cho những studio, cho các bạn chụp ảnh, ví dụ ảnh cưới chẳng hạn. Cái hub này có thể kết nối cùng lúc 8 thẻ SD vào máy tính cùng một lúc và việc chép file sẽ đỡ căng thẳng hơn.</p>
                        </div>

                        <div className="thread--detail__content">
                            <img src="https://photo2.tinhte.vn/data/attachment-files/2023/05/6448111_trentay-kingston-XS2000-SSD-tinhte-computex2023-pnghuy-01.jpg" alt="" />
                            <p>Đây là một cái hub USB-C 10Gbps và một SSD di động tốc độ 20Gbps của Kingston, món này thì không phổ biến lắm tại Việt Nam nhưng theo chia sẻ của hãng thì tại Đài Loan, đây là một công cụ rất đắc lực cho những studio, cho các bạn chụp ảnh, ví dụ ảnh cưới chẳng hạn. Cái hub này có thể kết nối cùng lúc 8 thẻ SD vào máy tính cùng một lúc và việc chép file sẽ đỡ căng thẳng hơn.</p>
                        </div>

                        <div className="thread--detail__content">
                            <p>Tên gọi chính xác của nó là Kingston WFS-U (Workflow Station Mỗi một cái hub con như vậy sẽ có một tính năng khác nhau, ví dụ nếu anh em chỉ làm về hình ảnh đơn thuần, có rất nhiều thẻ SD thì có thể mua 4 cái hub con khe thẻ SD để sử dụng, mỗi cái hub con như vậy là 2 thẻ, 4 cái là 8 thẻ).</p>
                            <img src="https://photo2.tinhte.vn/data/attachment-files/2023/05/6448112_trentay-kingston-XS2000-SSD-tinhte-computex2023-pnghuy-08.jpg" alt="" />
                            <p>Cả bộ sẽ kết nối qua cổng USB-C 3.2 gen 2 (10Gbps) và một cổng DC cấp nguồn riêng. 4 khu vực để chứa hub con sẽ là 4 cái cổng USB-C đực, anh em chỉ việc mua hub con gắn vào là được.</p>
                        </div>
                    </div>

                    <div className="thread--detail__comments">
                        <div className="thread--detail__addcomment">
                            <img src="https://tinhte.vn/styles/uiflex/xenforo/avatars/avatar_male_m.png" alt="" />
                            <h6>Đăng nhập 1 phát, tha hồ bình luận (^ 3^)</h6>
                        </div>

                        {mockData.map((item, index) => {
                            return (
                                <div className="thread--detail__comment">
                                    <img src={item.imgURL} alt="" />
                                    <div className="thread--detail__cmt">
                                        <div className="thread--detail__cmtor">
                                            <h6 style={{ color: "rgb(7,126,237)" }}>{item.username}</h6>
                                            <h6 style={{ color: "rgb(245,166,69)" }}>{item.title}</h6>
                                            <h6 style={{ color: "rgb(143,179,214)" }}>{item.createdat}</h6>
                                        </div>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="thread--detail__2">
                    <div className="thread--detail__trending">
                        <h5>Xu hướng</h5>
                        <div className="thread--detail__tag">
                            <div className="tag__item" style={{ background: "rgb(152,196,86)" }}>#ios 17</div>
                            <div className="tag__item" style={{ background: "rgb(101,206,207)" }}>#wwdc23</div>
                            <div className="tag__item" style={{ background: "rgb(210,87,53)" }}>#apple store trực tuyến</div>
                            <div className="tag__item" style={{ background: "rgb(243,193,68)" }}>#thủ thuật</div>
                            <div className="tag__item" style={{ background: "rgb(156,46,131)" }}>#computex 2023</div>
                        </div>
                    </div>

                    <div className="thread--detail__newpost">
                        <h5>Bài mới</h5>
                        <div className="thread--detail__newpost_container">
                            <div className="thread--detail__newpost_item">
                                <img src="https://imgproxy7.tinhte.vn/8HtUwU6tDTO0gj8kvUCW1xSM2pdsZp8JKjDNy9RQsjM/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6448742_Cover-Diablo.jpg" alt="" />
                                <p>Tổng hợp đánh giá Diablo IV: Chưa hoàn hảo, nhưng chơi thì vẫn vui</p>
                            </div>

                            <div className="thread--detail__newpost_item">
                                <img src="https://imgproxy7.tinhte.vn/5ACMmmo1A6-GUHBysRzRkJPu85NrIn9WIjeNtZvldog/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6447819_Cover-Ratchet.jpg" alt="" />
                                <p>Ratchet & Clank: Rift Apart - Một trong những game hay nhất trên PS5 sẽ lên PC ngày 26/7</p>
                            </div>

                            <div className="thread--detail__newpost_item">
                                <img src="https://imgproxy7.tinhte.vn/6P1ti8Zo1j-TOzfnFcufst9pwLxAn06cJhAiOr3Ej7Q/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6448538_Cover-Intel.jpg" alt="" />
                                <p>Intel sản xuất card đồ họa cho Nvidia, CEO Jensen Huang: Tại sao lại không?</p>
                            </div>

                            <div className="thread--detail__newpost_item">
                                <img src="https://imgproxy7.tinhte.vn/P0QlUcN9PHNMRLHZ6-JLTcY4Z681DhL6ivGuPrpefZ0/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6448789_ITshop_Khacten.png" alt="" />
                                <p>ITshop - Mua iPhone, tặng Ví SEN 4</p>
                            </div>

                            <div className="thread--detail__newpost_item">
                                <img src="https://imgproxy7.tinhte.vn/C5_O8FffZxuMxdlI22eypQAP9WFyc5N3FL13nsaJHZ8/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6448794_cover_pacman-lego.jpeg" alt="" />
                                <p>Lego ra mắt bộ ghép 2,650 miếng chủ đề Pac-Man, có cả cần gạt chơi như thật</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ThreadDetails