import "./styles.css"

const mockData = [
    {
        postCover: "https://photo2.tinhte.vn/data/attachment-files/2023/06/6450108_Cover-concept-thu-vi-cua-ios17-tinhte-tuanhtran.jpg",
        postTitle: "WWDC23: Một số concept thú vị của iOS 17, anh em thích cái nào?",
        postContent: "Chỉ còn một vài ngày nữa là sự kiện WWDC23 sẽ diễn ra, cụ thể diễn ra vào lúc 0:00 ngày 6/6 theo giờ Việt Nam. Tại sự kiện này, Apple sẽ giới thiệu những bản cập nhật phần mềm mới bao gồm iOS 17, iPadOS 17, macOS 14, watchOS 10…",
        user: {
            avatar: "https://photo2.tinhte.vn/data/avatars/m/2315/2315872.jpg?1683220825",
            username: "Tuanhtran"
        }
    },
    {
        postCover: "https://photo2.tinhte.vn/data/attachment-files/2023/05/6448546_Cover-trai-nghiem-ar-chu-de-wwdc23-tinhte-tuanhtran.jpg",
        postTitle: "Mời anh em trải nghiệm AR chủ đề WWDC23",
        postContent: "Trước sự kiện WWDC23 chính của Apple diễn ra vào ngày 6 tháng 6 (theo giờ Việt Nam), Apple đã tung ra 'trải nghiệm AR' như một truyền thống mỗi năm của họ. Cụ thể, sẽ có một logo chính của sự kiện WWDC23 dưới dạng AR để anh em có thể trải nghiệm…",
        user: {
            avatar: "https://photo2.tinhte.vn/data/avatars/m/2315/2315872.jpg?1683220825",
            username: "Tuanhtran"
        }
    },
    {
        postCover: "https://photo2.tinhte.vn/data/attachment-files/2023/05/6448312_Cover-wwdc23-thiet-bi-arvr-cua-apple-se-co-man-hinh-rat-cao-cap-tinhte-tuanhtran.jpg",
        postTitle: "WWDC23: Kính thực tế ảo của Apple sẽ được trang bị màn hình rất cao cấp?",
        postContent: "Ross Young, một chuyên gia có uy tín về việc tiết lộ thông tin về sản phẩm của Apple, đã tweet rằng thiết bị AR/VR của Apple sẽ có hai màn hình Micro OLED 1,41 inch với mật độ điểm ảnh cực cao là 4.000 ppi cho mỗi màn hình.",
        user: {
            avatar: "https://photo2.tinhte.vn/data/avatars/m/2315/2315872.jpg?1683220825",
            username: "Tuanhtran"
        }
    },
    {
        postCover: "https://photo2.tinhte.vn/data/attachment-files/2023/05/6447908_Cover-ios-17-bien-man-hinh-iphone-thanh-man-hinh-smarthome-tinhte-tuanhntran.jpg",
        postTitle: "iOS 17: biến màn hình iPhone thành màn hình smarthome?",
        postContent: "Còn khoảng một tuần nữa là sự kiện WWDC23 sẽ diễn ra, và dự kiến rằng Apple sẽ giới thiệu những phiên bản cập nhật phần mềm mới như mỗi năm, bao gồm iOS 17, iPadOS 17, macOS 14, watchOS 10,… Trong iOS 17 có thể có một tính năng mà mình thấy khá…",
        user: {
            avatar: "https://photo2.tinhte.vn/data/avatars/m/2315/2315872.jpg?1683220825",
            username: "Tuanhtran"
        }
    },
    {
        postCover: "https://photo2.tinhte.vn/data/attachment-files/2023/05/6446978_Cover-wwdc23-se-co-nhung-gi-tinhte-tuanhtran.jpg",
        postTitle: "WWDC23 sẽ có những gì?",
        postContent: "Vậy là còn khoảng 1 tuần nữa thôi thì WWDC23 sẽ diễn ra, trong sự kiện WWDC này thì gần như chắc chắn Apple sẽ giới thiệu những phiên bản cập nhật phần mềm mới như mọi năm bao gồm: iOS 17, iPadOS 17, macOS 14, watchOS 10…",
        user: {
            avatar: "https://photo2.tinhte.vn/data/avatars/m/2315/2315872.jpg?1683220825",
            username: "Tuanhtran"
        }
    }
]

function TagDetail()  {

    return (
        <div className="tags--container">
            <div className="tags--wrapper">
                <div className="tags--tagsname">
                    <h6 className="tags--name">IOS 17</h6>
                    <button className="tags--button">Theo dõi</button>
                </div>
                <div className="tags--posts">
                    {
                        mockData.map((item, index) => {
                            return (
                                <div className="tags--post_item">
                                    <img src={item.postCover} alt="" />
                                    <div className="tags--item_content">
                                        <h1>{item.postTitle}</h1>
                                        <p>{item.postContent}</p>
                                        <div className="tags--item_user">
                                            <img src={item.user.avatar} alt="" />
                                            <h6>{item.user.username}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default TagDetail