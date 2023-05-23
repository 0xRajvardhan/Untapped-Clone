import Image from "next/image";
import Link from 'next/link';
import { useRouter } from "next/router";

import { CiSettings } from "react-icons/ci";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";

import SidebarProfile from "./SidebarProfile";
import Communities from "./Communities";

import { useState } from "react";

const Sidebar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const navLinks = [
        { name: "Home", route: "/home", logo: <Image src="/images/home.svg" alt="logo" width={24} height={24} className="mx-4 text-[1.6rem] " /> },
        { name: "Jobs", route: "/jobs", logo: <Image src="/images/jobs.svg" alt="logo" width={24} height={24} className="mx-4 text-[1.6rem] " /> },
        { name: "Events", route: "/events", logo: <Image src="/images/events.svg" alt="logo" width={21} height={24} className="mx-4 text-[1.6rem] " /> },
        { name: "Companies", route: "/companies", logo: <Image src="/images/companies.svg" alt="logo" width={18} height={24} className="mx-4 text-[1.6rem] " /> }
    ];

    const handleLinkClick = (link) => {
        setActiveLink(link);
    }

    const router = useRouter();

    return (
        <>
            <div className="fixed overflow-scroll h-full scrollbar-hide border-r shadow-xl w-[17.5rem] bg-white z-10">
                <Link href="/">
                    <div className="flex justify-between h-[4.2rem] w-full border py-3 sticky top-0 bg-white">
                        <Image src="/images/brand-logo.svg" alt="logo" width={100} height={100} className="ml-5 mt-2" />
                        <div className="flex mt-[0.8rem] pl-[5rem] gap-1">
                            <CiSettings className=" text-xl mr-2 text-slate-500" />
                            <AiOutlineBell className=" text-xl text-slate-500" />
                        </div>
                        <hr className="text-black" />
                    </div>
                </Link>
                <div className="mt-3 ">
                    {navLinks.map((link) => {
                        return (
                            <>
                                <Link href={link.route}>
                                    <div className={`flex py-3 text-sm font-inter items-center ${router.asPath === link.route ? "bg-[#FFF9FA] border-l-4 border-black rounded-l pl-2" : "pl-3"}`}
                                        onClick={() => handleLinkClick('home')}>{link.logo}
                                        {link.name}
                                    </div>
                                </Link>
                            </>
                        );
                    })}

                    <Link href="/account">
                        <div className={`flex pl-3 py-3 text-sm font-inter items-center ${activeLink === "account" && "bg-[#FFF9FA] border-l-4 border-black rounded-l"
                            }`} onClick={() => handleLinkClick('accounts')}><Image src="/images/pfp.png" alt="pfp" width={26} height={26} className="text-2xl mx-4 rounded-full" />
                            Sai Teja
                        </div>
                    </Link>

                    <div className="text-xs font-inter font-normal flex flex-start ml-6 text-[#0e0e0e] mt-8 pr-10"><p>DIRECT MESSAGES</p></div>

                    <div className="bg-[#fafafa] flex justify-center items-center mx-5 my-3 rounded-full mt-6 border border-[#ebeaea]">
                        <AiOutlineSearch className="text-lg ml-4 my-2 text-slate-500" />
                        <input type="text" placeholder="Search" className="bg-[#fafafa] mx-3  my-2 w-[10rem] focus:outline-none" />
                    </div>
                </div>

                <div className="flex flex-col ml-2">
                    <SidebarProfile name="Brian @ Untapped" url="/images/Brian.jpeg" />
                    <SidebarProfile name="Emiliano @ AT&T INC" url="/images/Emiliano.jpg" />
                    <SidebarProfile name="Lauren @ KCF Technologies, inc." url="/images/Lauren.jpg" />
                    <SidebarProfile name="Becky @ Bose" url="/images/Becky.jpg" />
                    <SidebarProfile name="Team @ Untapped" url="/images/Untapped.png" />
                </div>

                <div className="flex flex-start ml-7 mt-10 mr-6 justify-between items-center">
                    <div className="text-xs font-inter font-normal ml-0">COMMUNITIES (6)</div>
                    <div className="flex border rounded-full px-2 h-[2rem] items-center w-[4rem]">
                        <BsPlusLg className="text-sm font-extrabold h-3" />
                        <div className="h-3 font-inter text-xs ml-1">JOIN</div>
                    </div>
                </div>

                <div className="flex  flex-col mt-2 px-6 justify-start pb-[5rem]">
                    <Link href="/posts"><Communities url="/images/Posts.svg" desc="All Posts" /></Link>

                    <Communities url="/images/Advice.png" desc="General Advice" />
                    <Communities url="/images/Announcement.png" desc="Recruiter Announcement" />
                    <Communities url="/images/remote-work.png" desc="Remote Work" />
                    <Communities url="/images/sales-marketing.png" desc="Sales and Marketing" />
                    <Communities url="/images/show-more.png" desc="Show More" />
                </div>
            </div>
        </>
    );
};

export default Sidebar;