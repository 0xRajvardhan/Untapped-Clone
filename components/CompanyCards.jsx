import Image from 'next/image'

const CompanyCards = (props) => {
    return (
        <>
            <div className="border rounded-md cursor-pointer xl:w-[19.5rem] lg:w-[19.3rem] h-[16rem] flex flex-col justify-between hover:shadow-xl transition duration-500">
                <div className='p-4 w-full h-[15rem]'>
                    <div className='flex justify-between'>
                        <Image src={props.url} alt="company" width={88} height={89} object-fit="cover" className="my-1" />

                        <div className='mb-auto mt-0 text-xs bg-[#edebeb] border h-[5.5rem] w-[7.7rem] rounded'>
                            <div className='flex justify-evenly my-2'>
                                <Image src="/images/star.svg" alt="star" width={12.37} height={12} object-fit="cover" className="my-1" />
                                <h4 className='text-xs font-inter font-medium mt-1'>Jobs & Events:</h4>
                            </div>
                            <div className='flex justify-evenly pb-2'>
                                <div>
                                    <h2 className='text-xl font-medium'>{props.eventCount}</h2>
                                    <p className='font-sm'>{props.events}</p>
                                </div>
                                <div>
                                    <h2 className='text-xl font-medium'>{props.jobCount}</h2>
                                    <p className='font-sm'>{props.jobs}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className='font-medium text-base my-1.5 font-inter'>{props.company}</h4>
                        <p className='text-xs font-inter leading-5'>Stage:{props.stage} • Employees:{props.emp} • {props.location} </p>

                    </div>
                </div>

                <div className="border-t flex justify-between w-full h-8 mt-auto mb-0">

                </div>

            </div>
        </>
    );
};

export default CompanyCards;