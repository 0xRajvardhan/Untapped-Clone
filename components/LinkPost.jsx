import Image from 'next/image';
import Link from 'next/link';

const LinkPost = (props) => {

    return (
        <>
            <div className="flex-auto flex flex-col flex-basis-66% h-max bg-white px-4 xl:w-[44rem] lg:w-[40rem] mx-4 rounded-t-xl border-l border-t border-r ">
                <div className="flex justify-between mt-[22px] ml-4">
                    <div className="flex">
                        <Image src="/images/postProfile.jpg" alt="DP" width={36} height={36} object-fit="cover" className="mr-2 mb-2 rounded-full" />
                        <div>
                            <p className="font-inter font-semibold text-xs">{props.name} <span className="text-xs">in</span> 💡 General Advice</p>
                            <p className="font-inter text-[#666666] text-xs">16 days ago · 446 views</p>
                        </div>
                    </div>
                    <div className="font-bold text-base"><p>...</p></div>
                </div>

                <div className="xl:w-[36.6rem] lg:w-[32.6rem] my-4 ml-[3.8rem]">
                    <h1 className="font-inter text-base font-semibold">{props.title}</h1>
                    <p className="font-inter text-sm mt-1 text-[#0E0E0E] leading-[22.4px]">Joint Surgery Specialist has equipped with world class infrastructure and follow advanced technologies like minimally invasive surgery and computer navigation assisted surgeries. We are well equipped to provide all kinds of emergency and trauma care related to orthopedic injuries like sports injury, bone fractures, and joint dislocations. <span className="font-semibold underline">Dr. Naveen Palla</span> has an excellent team of pain management, rehabilitation, and home care. Visit <span className="font-semibold underline">jointsurgeryspecialist.com</span> for best orthopedic treatment in Visakhapatnam.</p>
                </div>

            </div>
            <div className="flex h-[36px] xl:w-[44rem] lg:w-[40rem] pl-[3.8rem] pb-8 pt-7 items-center flex-auto flex-basis-66% bg-white mx-4">
            <div className="flex border border-[#666666] rounded-full font-inter text-[11px] text-[#666666] hover:transform scale-110 mr-5 py-[7px] px-2.5"><Image src="/images/like.svg" alt="post" width={14} height={11.66} object-fit="cover" /> <p className="mx-1">Like</p></div>
                <div className="flex border border-[#666666] rounded-full font-inter text-[11px] text-[#666666] hover:transform scale-110 mr-5 py-[7px] px-2.5"><Image src="/images/comment.svg" alt="post" width={14} height={12} object-fit="cover" /> <p className="mx-1">Comment</p></div>
                <div className="flex border border-[#666666] rounded-full font-inter text-[11px] text-[#666666] hover:transform scale-110 mr-5 py-[7px] px-2.5"><Image src="/images/follow.svg" alt="post" width={12} height={14} object-fit="cover" /> <p className="mx-1">Follow</p></div>
            </div>

            <Link href="https://www.erikabaty.com/">
                <div className='flex flex-col h-[68px] xl:w-[44rem] lg:w-[40rem] pl-5 justify-center flex-auto flex-basis-66% bg-[#f2f2f2] mx-4'>
                    <p className='font-inter font-bold text-sm text-[#666666]'>ERIKABATY | BOOKS | Creator of Chocolates | Book Chocolatier</p>
                    <p className='font-inter font-light text-[#A6A6A6] text-xs'>www.ErikaBaty.com</p>
                </div>
            </Link>

            <div className='bg-white flex border rounded-b-xl mb-4 flex-auto flex-basis-66% h-max px-4 xl:w-[44rem] lg:w-[40rem] mx-4 items-center'>
                <Image src="/images/saiDp.png" alt="line" width={32} height={32} object-fit="cover" className='rounded-full border mx-4' />
                <input type="text" placeholder="     Add a comment" className="bg-[#f2f2f2] w-full h-[2.7rem] my-4 focus:outline-none" />
            </div>
        </>
    )
};

export default LinkPost;