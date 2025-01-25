import React from "react";
import colors from "../../colors/colors";

export default function Card({
  image,
  heading,
  background,
  noOfStudent,
  price,
}) {
  return (
    <div className="w-full mx-auto flex items-center justify-center cursor-pointer">
      <div
        className="w-4/5 h-fit  sm:w-[400px] md:w-[430px] lg:w-[400px] lg:space-y-3 rounded-2xl pb-4 space-y-2  lg:space-x-0"
        style={{
          backgroundColor: colors.header,
        }}
      >
        <div>
          <img className="rounded-t-2xl" src={image} alt="Couse Thumbnail" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-medium px-2.5">{heading}</h2>
          <p className="px-2.5">{background}</p>
          <div className="flex items-center justify-between px-5">
            <p>
              Students <span className="text-green-500">{noOfStudent}+</span>
            </p>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
