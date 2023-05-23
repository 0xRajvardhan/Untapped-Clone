import Image from 'next/image';

const JobCard = (props) => {

    return (
        <>
            <div onClick={props.onOpen} className="border rounded-md cursor-pointer xl:w-[19.5rem] lg:w-[19.3rem] flex flex-col justify-between hover:shadow-xl transition duration-500" >
                <div className='pt-6 px-4 w-full h-[15rem]'>
                    <div className='flex justify-between'>
                        <Image src={props.url} alt="card" width={88} height={89} object-fit="cover" className="my-1" />
                        <p className='mb-auto mt-0 text-xs text-[#a6a6a6]'>{props.applicants}</p>
                    </div>

                    <div>
                        <h4 className='font-medium font-inter text-base my-1.5 line-clamp-2'>{props.title}</h4>
                        <p className='text-sm font-inter'>{props.company}</p>
                        <div className='my-2'>
                            <p className='text-xs font-inter'>{props.type} • {props.location}</p>
                        </div>
                    </div>
                </div>

                <div className="border-t flex justify-between w-full mt-auto mb-0">
                    <div className='border border-black my-4 ml-4 h-[2.5rem] flex rounded items-center hover:-translate-y-1'>
                        <Image src="/images/save.svg" alt="save" width={10.5} height={14} className='ml-4 mr-2'/>
                        <p className='text-sm font-inter font-semibold mr-4'>Save</p>
                    </div>
                    <div className='border border-black my-4 mr-3 rounded flex items-center hover:-translate-y-1'>
                        <p className='text-sm font-inter font-semibold mx-4'>Learn More</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default JobCard;