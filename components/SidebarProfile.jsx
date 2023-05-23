import Image from "next/image";

const SidebarProfile = (props) => {
    return (
        <>
            <div className="flex space-y-2 items-center justify-evenly">
                <Image src={props.url} alt="profile" width={24} height={24} className="rounded-full" />
                <p className="w-[12rem] text-sm font-inter font-normal pb-4 mr-2">{props.name}</p>
            </div>
        </>
    );
};

export default SidebarProfile;
