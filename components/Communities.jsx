import Image from "next/image";

const Communities = (props) => {
    return (
        <>
            <div className="flex space-y-4 items-center justify-between">
                <div>
                    <Image src={props.url} alt="logo" width={30} height={30} />
                </div>
                <div className="w-[11rem] text-sm pb-4 mr-2 flex items-center">
                    {props.desc}
                </div>
            </div>
        </>
    );
};

export default Communities;