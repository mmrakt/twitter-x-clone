import React from "react";
import Image from "next/image";

type IProps = {
  innerList: {
    image: string;
    text: string;
  }[];
};

const Item: React.FC<IProps> = ({ innerList }) => {
  return (
    <ul className="dropdownInner">
      {innerList.map((item) => (
        <>
          <li className="dropdownInnerItem" key={item.text}>
            <a href="">
              <Image
                src={`/images/${item.image}`}
                alt="Twitter Proのアイコン"
                width={20}
                height={20}
              />
              <span>{item.text}</span>
            </a>
          </li>
        </>
      ))}
    </ul>
  );
};

export default Item;
