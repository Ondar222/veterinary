import { useState } from "react";
import MobileMenuItem from "../MobileMenuItem";

const MobileMenuItemList = (params) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="">
      <p
        className="text-white font-semibold tracking-wider mb-3"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {params.title}
      </p>
      <ul className="flex flex-col gap-3">
        {isOpen &&
          params?.items?.map((item) => (
            <MobileMenuItem
              key={item.title}
              title={item.title}
              url={`${params.url}/${item.title}`}
            />
          ))}
      </ul>
    </li>
  );
};

export default MobileMenuItemList;
