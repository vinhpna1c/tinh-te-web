import styles from '../home.module.scss';

const tempData = {
    title: "WWDC 2023: Dự đoán những thay đổi lớn trên tính năng Apple Watch",
    imgUrl: "https://imgproxy7.tinhte.vn/vcmtWk7uzaU4gccPM2fLQY15Icp5uI9h6ex7SU1YYKc/rs:fill:312:193:0/plain/https://photo2.tinhte.vn/data/attachment-files/2023/05/6445871_watch-os-9-tinhte-cover-2.jpg",
}

function QuickPostItem() {
    return (
        <div className="grid grid-cols-2 mb-4">
            <h3 className="col text-sm font-bold">{tempData.title}</h3>
            <div className="col flex flex-row justify-end">
                <img className="w-[120px] h-[60px] object-cover rounded" alt={tempData.title} src={tempData.imgUrl} />
            </div>

        </div>
    )
}

export default QuickPostItem;