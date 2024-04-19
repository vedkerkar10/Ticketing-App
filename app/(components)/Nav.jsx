// import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Nav = () => {
    return <nav className="flex justify-between bg-nav p-4">
        <div className="flex items-center space-x-4">
            <Link href={'/'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" /></svg>
            </Link>
            <Link href={"/TicketPage/new"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 19H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h13m0 14h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-3m0 14v-1m0-13v1M7 12h6m-6 3h3" /></svg>
            </Link>
        </div>
        <div>
            <p className="text-default-text">hitman@gmail.com</p>
        </div>
    </nav >
}

export default Nav