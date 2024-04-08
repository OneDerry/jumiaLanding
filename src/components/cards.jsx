import React from "react";
import { cardData } from "../utils/dataArray";

export default function Cards() {
  return (
    <div className="w-full h-[70vh] p-5 bg-slate-200 mt-20">
      {cardData.map((data) => (
        <div>
          <div>
            <div>{data.name}</div>
            <div>{data.surname}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
