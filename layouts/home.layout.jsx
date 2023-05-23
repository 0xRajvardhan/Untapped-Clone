import Link from 'next/link';

import Sidebar from '@/components/Sidebar';

const HomeLayout = (props) => {
    return (
        <div className='flex w-full relative justify-start h-screen'>
            <div className=' w-[17rem]'>
                <Sidebar />
            </div>

            <div className='flex flex-col items-center h-screen w-full'>
                {props.children}
            </div>
        </div>
    );
};

export default HomeLayout;
