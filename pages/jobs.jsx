import HomeLayout from "@/layouts/home.layout";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdArrowDropdown } from "react-icons/io";
import NavButton from "@/components/NavButton";
import JobCard from "@/components/JobCard";
import Modal from "@/components/Modal";

import { AiOutlineSearch } from "react-icons/ai";

import { useState } from "react";

const Jobs = () => {

    const [isContentVisible, setIsContentVisible] = useState(false);

    const onOpen = () => {
        setIsContentVisible(true);
    }

    const onClose = () => {
        setIsContentVisible(false);
    }

    return (
        <>
            <HomeLayout>
                <div className="flex flex-col items-center h-max w-full bg-white border-b border-slate-200 sticky top-0">
                    <div className='ml-[17rem]'>
                        <div className='xl:w-[62.5rem] lg:w-[62rem] align-start flex flex-wrap gap-2 my-1 xl:pl-2 lg:pl-0'>
                            <NavButton word="Location" />
                            <NavButton word="Stage" />
                            <NavButton word="Industry" />
                            <NavButton word="Company" />
                            <NavButton word="Job Title" />
                            <NavButton word="Experience Level" />
                            <NavButton word="ERGs" />
                            <NavButton word="Values" />
                            <NavButton word="Remote Culture" />
                            <NavButton word="Benefits" />
                            <NavButton word="Salary" />

                            <div className="flex justify-evenly border w-[10.75rem] rounded border-black items-center ml-auto mr-0">
                                <TfiMenuAlt className="m-1" />
                                <p className="font-semibold text-sm font-inter m-1">Recommended</p>
                                <IoMdArrowDropdown />
                            </div>
                        </div>
                    </div>
                </div>
                {!isContentVisible ? (
                    <>

                        <div className="flex flex-col items-center h-max w-max bg-[#fafafa] border-t border-slate-200">

                            <div className="xl:w-[62.5rem] lg:w-[62rem] ml-[17rem]">
                                {/* Search bar */}
                                <div className="bg-white xl:w-[62.5rem] lg:w-[62rem] rounded-lg flex justify-start items-center mt-5 py-1 border border-slate-200">
                                    <AiOutlineSearch className="text-xl ml-4 my-2 text-slate-500" />
                                    <input type="text" placeholder="Search Jobs" className="bg-white mx-3  my-2 w-[10rem] focus:outline-none" />
                                </div>

                                {/* Cards section  */}
                                <div className="bg-white w-max h-max rounded-lg border mt-4">
                                    <h4 className="text-[13px] font-medium font-inter text-[#666] ml-3 my-3.5">YOUR TOP JOB MATCHES ON UPTAPPED</h4>
                                    <div className="my-2 ml-4 xl:pr-4 lg:pr-3 xl:w-[61.5rem] lg:w-[60.8rem] grid grid-cols-3 gap-4 gap-x-2">
                                        <JobCard onOpen={onOpen} url="/images/livenation.jpg" applicants=" " title="LN Concerts, Regional Latin Marketing Director" company="Live Nation Entertainment" type="Full Time" location="Austin, TX" />
                                        <JobCard onOpen={onOpen} url="/images/livenation.jpg" applicants="67 applicants" title="Ticket Master Coordinator- Marketing Operations, North America" company="Live Nation Entertainment" type="Internship" location="West Hollywood, CA, Remote" />
                                        <JobCard onOpen={onOpen} url="/images/livenation.jpg" applicants=" " title="LN Concerts, Regional Marketing Director" company="Live Nation Entertainment" type="Full Time" location="Beverly Hills, CA" />
                                        <JobCard onOpen={onOpen} url="/images/vercel.png" applicants="70 applicants" title="Enterprise Account Executive" company="Vercel" type="Full Time" location="Remote" />
                                        <JobCard onOpen={onOpen} url="/images/qualcomm.jpeg" applicants="174 applicants" title="Campus Recruitment Inter (Marketing/Communications)" company="Qualcomm" type="Internship" location="San Diego, CA" />
                                        <JobCard onOpen={onOpen} url="/images/livenation.jpg" applicants="26 applicants" title="Lifecycle Marketing Manager" company="Live Nation Entertainment" type="Full Time" location="Beverly Hills, CA, Remote" />
                                        <JobCard onOpen={onOpen} url="/images/livenation.jpg" applicants=" " title="Marketing Analytics Manager, Test & Learn" company="Live Nation Entertainment" type="Full Time" location="Beverly Hills, CA, Remote" />
                                        <JobCard onOpen={onOpen} url="/images/livenation.jpg" applicants=" " title="LN Concerts, Communications Manager" company="Live Nation Entertainment" type="Full Time" location="Beverly Hills, CA, Remote" />
                                        <JobCard onOpen={onOpen} url="/images/livenation.jpg" applicants="58 applicants" title="LN Concerts, Marketing & Social Coordinator" company="Live Nation Entertainment" type="Full Time" location="Beverly Hills, CA, Remote" />
                                        <JobCard onOpen={onOpen} url="/images/livenation.jpg" applicants="58 applicants" title="LN Concerts, Marketing & Social Coordinator" company="Live Nation Entertainment" type="Full Time" location="Beverly Hills, CA, Remote" />
                                        <JobCard onOpen={onOpen} url="/images/livenation.jpg" applicants="58 applicants" title="LN Concerts, Marketing & Social Coordinator" company="Live Nation Entertainment" type="Full Time" location="Beverly Hills, CA, Remote" />
                                        <JobCard onOpen={onOpen} url="/images/livenation.jpg" applicants="58 applicants" title="LN Concerts, Marketing & Social Coordinator" company="Live Nation Entertainment" type="Full Time" location="Beverly Hills, CA, Remote" />
                                        <JobCard onOpen={onOpen} url="/images/livenation.jpg" applicants="58 applicants" title="LN Concerts, Marketing & Social Coordinator" company="Live Nation Entertainment" type="Full Time" location="Beverly Hills, CA, Remote" />
                                        <JobCard onOpen={onOpen} url="/images/livenation.jpg" applicants="58 applicants" title="LN Concerts, Marketing & Social Coordinator" company="Live Nation Entertainment" type="Full Time" location="Beverly Hills, CA, Remote" />
                                        <JobCard onOpen={onOpen} url="/images/livenation.jpg" applicants="58 applicants" title="LN Concerts, Marketing & Social Coordinator" company="Live Nation Entertainment" type="Full Time" location="Beverly Hills, CA, Remote" />
                                        <JobCard onOpen={onOpen} url="/images/livenation.jpg" applicants="58 applicants" title="LN Concerts, Marketing & Social Coordinator" company="Live Nation Entertainment" type="Full Time" location="Beverly Hills, CA, Remote" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Modal onClose={onClose} />
                    </>
                )}



            </HomeLayout>
        </>
    );
};

export default Jobs;