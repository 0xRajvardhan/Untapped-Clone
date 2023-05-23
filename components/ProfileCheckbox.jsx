import { useState } from "react";

function ProfileCheckbox(props) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex w-[18rem] gap-2 items-start mt-3.5">
      <div>
        <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className="h-6 w-6 border-[0.5px] top-2 border-[#dadada] "
      />
      </div>
     
      <div><p className="font-inter text-base">{props.point}</p></div>
    </div>
  );
}

export default ProfileCheckbox;

