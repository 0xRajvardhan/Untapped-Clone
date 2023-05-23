import Image from "next/image";

const ExploreCard = (props) => {
    return (
        <div className="rounded-lg hover:shadow-xl flex flex-col justify-center items-center border-2 transition duration-500 w-[12.5rem]">
            <Image src={props.url} alt="card" height={112} width={80} className="my-6" />
            <div className="mx-4 mb-5">
                <h3 className="text-lg font-inter font-semibold">{props.title}</h3>
                <p className="text-sm">{props.desc}</p>
            </div>
        </div>
    );
};

export default ExploreCard;