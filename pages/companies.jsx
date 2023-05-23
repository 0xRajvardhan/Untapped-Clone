import HomeLayout from "@/layouts/home.layout";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdArrowDropdown } from "react-icons/io";
import NavButton from "@/components/NavButton";
import CompanyCards from "@/components/CompanyCards";


import { AiOutlineSearch } from "react-icons/ai";

const Companies = () => {

    return (
        <>
            <HomeLayout>
                <div className="flex flex-col items-center h-max w-full bg-white border-b border-slate-200 sticky top-0">
                    <div className='ml-[17rem]'>
                        <div className='xl:w-[62.5rem] lg:w-[62rem] align-start flex flex-wrap gap-2 my-1 xl:pl-2 lg:pl-0'>
                            <NavButton word="Location" />
                            <NavButton word="Stage" />
                            <NavButton word="Industry" />
                            <NavButton word="Size" />


                            <div className="flex justify-evenly border w-[10.75rem] rounded border-black items-center ml-auto mr-0">
                                <TfiMenuAlt className="m-1" />
                                <p className="font-semibold text-sm font-inter m-1">Recommended</p>
                                <IoMdArrowDropdown />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center h-max w-max bg-[#fafafa] border-t border-slate-200">

                    <div className="xl:w-[62.5rem] lg:w-[62rem] ml-[17rem]">
                        {/* Search bar */}
                        <div className="bg-white xl:w-[62.5rem] lg:w-[62rem] rounded-lg flex justify-start items-center mt-5 py-1 border border-slate-200">
                            <AiOutlineSearch className="text-xl ml-4 my-2 text-slate-500" />
                            <input type="text" placeholder="Search Jobs" className="bg-white mx-3  my-2 w-[10rem] focus:outline-none" />
                        </div>

                        {/* Cards section  */}
                        <div className="bg-white w-max h-max rounded-lg border mt-4 gap-x-2">
                            <h4 className="text-[13px] font-medium font-inter text-[#666] ml-4 my-3.5">YOUR TOP JOB MATCHES ON UPTAPPED</h4>
                            <div className="my-2 ml-4 xl:pr-4 lg:pr-5 lg:pl-3 xl:w-[61.5rem] lg:w-[60.8rem] grid grid-cols-3 gap-5">
                                <CompanyCards url="/images/Lyft.png" company="Lyft" stage="Publicly Traded" emp="5001-10000" location="Location: San Francisco, CA" eventCount="33" jobCount="4" jobs="Jobs" events="Events" />
                                <CompanyCards url="/images/livenation.jpg" company="Live Nation Entertainment" stage="Publicly Traded" emp="10000+" location="Location: Beverly Hills, CA" eventCount="5" jobCount="154" jobs="Jobs" events="Events" />
                                <CompanyCards url="/images/Ansys.png" company="Ansys" stage="Publicly Traded" emp="5001-10000" location=" " eventCount="9" jobCount="145" jobs="Jobs" events="Events" />
                                <CompanyCards url="/images/qualcomm.jpeg" company="Qualcomm" stage="Publicly Traded" emp="10000+" location="Location: San Diego, CA" eventCount="98" jobCount="26" jobs="Jobs" events="Events" />
                                <CompanyCards url="/images/Samsara.jpg" company="Samsara" stage="Publicly Traded" emp="1001-5000" location="Location: Bay Area" eventCount="32" jobCount="5" jobs="Jobs" events="Events" />
                                <CompanyCards url="/images/PeaceCorp.jpg" company="Peace Corp" stage="Publicly Traded" emp="10000+" location=" " eventCount="36" jobCount="1" jobs="Jobs" events="Events" />
                                <CompanyCards url="/images/Charter.jpg" company="Charter Communications" stage="Publicly Traded" emp="10000+" location="Location: Stamford, CT" eventCount=" " jobCount="46" jobs="Jobs" events=" " />
                                <CompanyCards url="/images/Mongo.png" company="MongoDB" stage="Publicly Traded" emp="1001-5000" location="Location: New York, NY" eventCount="44" jobCount=" " jobs=" " events="Events" />
                                <CompanyCards url="/images/UntappedJob.png" company="Untapped" stage="Established Startup" emp="51-100" location="Location: Los Angeles" eventCount="30" jobCount=" " jobs=" " events="Events" />
                                <CompanyCards url="/images/WillowTree.png" company="WillowTree" stage="Established Startup" emp="501-1000" location=" " eventCount="27" jobCount="2" jobs="Jobs" events="Events" />
                                <CompanyCards url="/images/Toast.png" company="Toast" stage="Unicorn" emp="1001-5000" location="Boston, MA" eventCount="21" jobCount=" " jobs=" " events="Events" />
                                <CompanyCards url="/images/Degreed.png" company="Degreed" stage="Established Startup" emp="501-1000" location="Location: San Francisco, CA" eventCount=" " jobCount="20" jobs="Jobs" events=" " />
                                <CompanyCards url="/images/Verkada.png" company="Verkada" stage="Early Stage" emp="501-1000" location="Location: San Mateo, CA" eventCount="19" jobCount=" " jobs=" " events="Events" />
                            </div>
                        </div>
                    </div>
                </div>
            </HomeLayout>
        </>
    );
};

export default Companies;