import HomeLayout from "@/layouts/home.layout";


import ImagePost from "@/components/ImagePost";
import TextPost from "@/components/TextPost";
import LinkPost from "@/components/LinkPost";


import { AiOutlineSearch } from "react-icons/ai";


const Posts = () => {

    return (
        <>
            <HomeLayout>
                <div className="flex flex-col items-center h-max w-full bg-white border-b border-slate-200 pb-5">
                    <div className=' ml-[25rem] mr-[8rem]'>
                        <div className='xl:w-[62rem] lg:w-[50rem] align-start flex my-1 pl-2'>
                            <h1 className="title_font text-[32px] my-[3rem]">All Posts</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center h-max xl:w-full lg-[110%] bg-[#fafafa] border-t border-slate-200">

                    <div className="xl:w-[68rem] lg:w-[62rem] ml-[25rem] mr-[5.2rem]">

                        {/* Body */}
                        <div className="xl:w-[62.5rem] lg:w-[58rem] flex mt-5">
                            <div className="flex flex-col">
                                {/* Search bar */}
                                <div className="bg-white xl:w-[44rem] lg:w-[40rem] rounded-full ml-4 flex justify-start items-center py-1 border border-slate-200 mb-4">
                                    <AiOutlineSearch className="text-xl ml-4 my-2 text-slate-500" />
                                    <input type="text" placeholder="Search Jobs" className="bg-white mx-3  my-2 w-[10rem] focus:outline-none" />
                                </div>
                                <div className="flex flex-col">

                                    <ImagePost name="Palla Naveen" title="Orthopedic Surgeon in Vizag - Dr. Naveen Palla" url="/images/post.jpg" />
                                    <LinkPost name="Palla Naveen" title="Orthopedic Surgeon in Vizag - Dr. Naveen Palla" />
                                    <TextPost name="Palla Naveen" title="Orthopedic Surgeon in Vizag - Dr. Naveen Palla" />
                                    <ImagePost name="Palla Naveen" title="Orthopedic Surgeon in Vizag - Dr. Naveen Palla" url="/images/post.jpg" />
                                    <TextPost name="Palla Naveen" title="Orthopedic Surgeon in Vizag - Dr. Naveen Palla" />

                                </div>
                            </div>
                            {/* Side Div  */}
                            <div className="flex flex-col h-max">
                                <div className="rounded border border-[#dadada] px-[14px] bg-white w-[18.8rem] rounded-t-xl">
                                    <h3 className="text-sm font-normal font-inter py-4 text-[#666666]">Trending</h3>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </HomeLayout>
        </>
    )
};

export default Posts;