const NavButton = (prop) => {
    return (
        <div className="h-9 w-max border rounded border-black">
            <p className="font-inter text-sm text-[#0e0e0e] font-semibold my-2 mx-3.5">{prop.word}</p>
        </div>
    );
};

export default NavButton;