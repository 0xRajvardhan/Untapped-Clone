import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import HomeLayout from '@/layouts/home.layout';
import OpportunityCards from '@/components/OpportunityCards';
import ProfileCheckbox from '@/components/ProfileCheckbox';
import ExploreCard from '@/components/ExploreCards';

const Home = () => {
    const [isContentVisible, setIsContentVisible] = useState(false);


    return (
        <>
            <HomeLayout >
                <div className=' ml-[18rem] mt-[3rem] '>
                    <div className='mb-[3rem]'><h1 className='text-[3rem] font-semibold title_font py-2'>Welcome, Sai!</h1></div>
                    <div>
                        <div className='flex '>
                            <p className='font-semibold text-2xl font-inter'>Your job search status</p>
                            <div className={`bg-[#a94dca] text-white rounded p-1 ml-2 ${isContentVisible ? 'hidden' : ''}`}><p className='font-semibold text-base font-poppins'>NEW & IMPROVED</p></div>
                        </div>
                    </div>
                    <div className='flex'>
                        <p className='font-semibold text-base font-inter mt-2.5'>👀 Open to Opportunities</p>
                        <button className='mx-2 mt-3 text-2xl' onClick={() => setIsContentVisible(prev => !prev)}>
                            {isContentVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>

                    </div>
                    <div className='max-w-5xl'>
                        {isContentVisible && (
                            <div className="flex mt-4 justify-between w-[52rem]">
                                <OpportunityCards heading="🚀 Supercharged" para="Be featured to recruiters for 2 weeks to supercharge your job search." />
                                <OpportunityCards heading="👀 Open to Opportunities" para="You’re actively looking and/or open to new opportunities. Your profile is visibile to recruiters." />
                                <OpportunityCards heading="🚫 Closed to Opportunities" para="You are not looking for new opportunities. Your profile is deprioritized to recruiters." />
                            </div>
                        )}
                    </div>

                    <div className='flex mt-[6.2rem] justify-between pr-10'>
                        <div>
                            <h1 className='font-semibold font-inter text-2xl'>Complete your profile</h1>
                            <p className='text-base font-inter mt-2'>Having a complete profile increases your chances of your profile being recognized by recruiters.</p>
                        </div>
                        <div><Image src="/images/stats.png" alt="profile" width={80} height={80} className="rounded-full" /></div>
                    </div>
                    <div className='rounded border p-2 flex mt-7 shadow-lg w-[52.5rem]'>
                        <div className='bg-[#23a59b] rounded-2xl h-[30rem] w-[7px]'></div>
                        <div className='px-6 mt-6'>
                            <h3 className='font-semibold text-lg font-inter'>Do you identify as any of the following?</h3>
                            <p className='text-base text-slate-600 mt-2 font-inter'>Select all that apply.</p>
                            <div className='grid grid-cols-2 gap-x-8'>
                                <ProfileCheckbox point="LGBTQIA+" />
                                <ProfileCheckbox point="Disabled" />
                                <ProfileCheckbox point="Veteran" />
                                <ProfileCheckbox point="Over 40 years of age" />
                                <ProfileCheckbox point="I don't identify as any of these" />
                                <ProfileCheckbox point="First generation college graduate" />
                                <ProfileCheckbox point="First generation immigrant" />
                                <ProfileCheckbox point="Low socio-economic status" />
                                <ProfileCheckbox point="Caregiver" />
                                <ProfileCheckbox point="Non-traditional education / self taught" />
                                <ProfileCheckbox point="Neurodivergent (Autism, ADHD, Bipolar, Dyslexia, etc" />
                                <ProfileCheckbox point="Prefer not to answer" />
                            </div>
                            <div className='flex space-x-5 mt-8'>
                                <div className='bg-[#C9F270] text-base font-semibold rounded flex px-2 py-3'>Save <IoIosArrowForward className='my-auto ml-5 font-semibold text-2xl' /></div>
                                <div className='bg-slate-200 text-base font-semibold rounded px-4 py-3'>Skip</div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-[5rem]'>
                        <h2 className='text-2xl font-semibold font-inter'>Explore Untapped</h2>
                        <div className='flex space-x-7 mt-9 w-[53rem]'>
                            <ExploreCard url="/images/jobs.png" title="Jobs" desc="from top tech and finance companies" />
                            <ExploreCard url="/images/communities.png" title="Communities" desc="with like minded peers, mentors and recruiters" />
                            <ExploreCard url="/images/events.png" title="Events" desc="to spark and continue your interests" />
                            <ExploreCard url="/images/companies.png" title="Companies" desc="that value diverse backgrounds" />
                        </div>
                    </div>

                    <div className='mt-[5.7rem] mb-[5rem]'>
                        <h1 className='text-2xl font-semibold'>Applications <span className='text-slate-600'>(1)</span></h1>
                        <p className='text-base font-semibold text-[#3365E6] mt-2'>See all applications</p>
                        <div className='border mt-4 rounded-xl w-[53rem]'>
                            <div className='flex border rounded-t-xl justify-between py-5'>
                                <p className='text-base font-semibold ml-6'>Position</p>
                                <p className='text-base font-semibold mr-6'>Date applied</p>
                            </div>
                            <div className='flex mx-6 my-6'>
                                <Image src="/images/specs.png" alt="airbnb" width={40} height={40} className="" />
                                <div className='ml-4'>
                                    <h3 className='text-base font-semibold'>Talent Acquisition Coordinator</h3>
                                    <p className='text-base'>Degreed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </HomeLayout >
        </>
    );
};

export default Home;