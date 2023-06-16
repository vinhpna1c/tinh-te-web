'use client'

import Header from "../../sections/Header";
import PostItem from "../community/components/PostItem";

function FactPage() {
    return (
        <div >
            <Header />
            {/* List of fact */}
            <div className="w-full flex jus">
                <div className=" max-w-[600px]">
                    <PostItem />
                </div>
            </div>

        </div>)
}

export default FactPage;