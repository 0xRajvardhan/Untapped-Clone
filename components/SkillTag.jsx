const SkillTag = (props) => {

    return (
        <>
            <div className="bg-[#F0E6FF] h-[1.8rem] w-max rounded-lg items-center justify-center flex px-2">
                <h3 className="text-sm font-medium font-inter">{props.word}</h3>
            </div>
        </>
    );
};

export default SkillTag;