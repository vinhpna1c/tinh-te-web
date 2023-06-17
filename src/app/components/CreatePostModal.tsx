import { ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Switch, Input, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import GradientButton, { backgroundGradientStyle } from "./GradientButton";
import { FaImage } from 'react-icons/fa'

type CPMProps = {
    onClose?: () => void,
}



export default function CreatePostModal(props: CPMProps) {
    const [isChange, setIsChange] = useState();
    return (
        <>
            <ModalOverlay />
            <ModalContent minWidth={600}>
                <ModalHeader className="bg-gray-100">
                    <div className="">
                        <h3>Tạo bài chia sẻ</h3>
                        <div className="flex flex-row items-center">
                            <h5 className="text-sm mr-2">Chuyển chế độ đăng</h5>
                            <Switch size='sm' colorScheme="blue" />
                        </div>
                    </div>

                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div className="flex flex-col">
                        <div className="flex items-center mb-2">
                            {/* replace with user information later */}
                            <div className="rounded-full w-8 h-8 bg-gray-500"></div>
                            <span>VinhPNA1C</span>
                        </div>
                        <div className="mb-3">
                            <Textarea minHeight={200} className="w-full" placeholder="Viết nội dung muốn chia sẻ tại đây" />
                        </div>
                        <div className="flex flex-row justify-between items-center pb-3 border-b-[1px] border-gray-100">
                            <div className="flex">
                                <GradientButton><img className="w-4 h-4 m-auto" src="./images/link_gradient.png" /></GradientButton>
                                <GradientButton><span className="text-white text-xs font-semibold">Aa</span></GradientButton>
                            </div>
                            <button className="py-1 bg-gray-200 flex items-center justify-center rounded-full">
                                <span
                                    className="w-8 h-8 rounded-full ml-1 mr-3 flex justify-center items-center"
                                    style={backgroundGradientStyle}>
                                    <img className="w-4 h-4 m-auto" src="./images/edit_gradient.png" />
                                </span>
                                <span className="font-semibold mr-4">BÀI DÀI</span>
                            </button>

                        </div>
                        <div className="flex items-center mb-8 mt-2 ">
                            <span>Thêm vào bài viết</span>
                            <button className="mx-3  rounded-full py-2 px-3 flex items-center border-gray-200 border-[1px]">
                                <span className="w-5 h-5 rounded-sm mr-2">
                                    <FaImage className=" w-full h-full" size={16} style={backgroundGradientStyle}/>
                                </span>
                                <span>Hình ảnh</span>
                            </button>
                        </div>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button width={'full'} colorScheme='blue' mr={3} onClick={props.onClose} isDisabled>
                        Đăng bài
                    </Button>
                    {/* <Button variant='ghost'>Secondary Action</Button> */}
                </ModalFooter>
            </ModalContent>
        </>
    )
}