type NavItemProps = {
    title: string,
}
function NavItem(props: NavItemProps) {
    return (
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-bold  text-white mr-4">
            {props.title}
        </a>
    )
}

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-600 p-6">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <NavItem title="TIN MỚI" />
                    <NavItem title="SẢN PHẨM CÔNG NGHỆ MỚI" />
                    <NavItem title="KHUYẾN MÃI" />
                    <NavItem title="SỰ KIỆN" />
                    <NavItem title="VIDEO" />
                </div>
            </div>
        </nav>

    )
}