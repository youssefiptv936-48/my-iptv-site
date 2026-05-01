import Image from "next/image";
import HistoryNext from "../heroicons/HistoryNext";

import Tv4k from "../heroicons/Tv4k";

import RocketNext from "../heroicons/RocketNext";
import Hd from "../heroicons/Hd";

import Link from "next/link";

interface Props {
  title: string;
  description: string;
}
export default function DivScreen({ title, description }: Props) {
  return (
    <div className="   relative flex items-center justify-center text-[#ffffff] h-screen w-full bg-black">
      {/* 1. طبقة الصورة (الخلفية) - تبقى في الخلف z-0 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/IptvForja.webp"
          alt="اشتراك IPTV في المغرب 2026"
          fill
          priority
          className="object-center opacity-40 "
        />
      </div>

      <div className=" w-full  relative  bg-amber-700 flex items-center flex-col md:w-1/2   ">
        <h1 className="text-red-600 text-6xl   font-black  text-center   scale-y-122 md:text-7xl ">
          {title}
        </h1>
        <p className="text-center text-2xl">{description}</p>
        <div className=" h-24 w-full flex justify-around items-center">
          <div className="  flex items-center flex-col  ">
            {" "}
            <HistoryNext />
            <h3>بث مباشر</h3>
          </div>
          <div className="w-0.5 h-24 bg-linear-to-b from-transparent via-red-600 to-transparent opacity-80"></div>
          <div className=" flex items-center flex-col  ">
            {" "}
            <Tv4k />
            <h3>جميع الدوريات</h3>
          </div>
          <div className="w-0.5 h-24 bg-linear-to-b from-transparent via-red-600 to-transparent opacity-80"></div>

          <div className=" flex items-center flex-col   ">
            {" "}
            <RocketNext />
            <h3>بدون تقطيع</h3>
          </div>
          <div className="w-0.5 h-24 bg-linear-to-b from-transparent via-red-600 to-transparent opacity-80"></div>
          <div>
            {" "}
            <Hd />
            <h3>جوده ممتازه</h3>
          </div>
        </div>
        <div className=" relative m-2 flex">
          <Link
            href="/"
            className={` md:px-7 py-2 m-1 text-center text-slate-200 min-w-44 inline-block rounded-r-3xl rounded-ee-3xl font-bold text-md bg-linear-to-l from-red-600 to-red-700 hover:scale-105 transition-transform duration-300`}
          >
            جرب  IPTVFORJA مجانا
          </Link>
          <Link
            href="/"
            className={`md:px-7 py-2 m-1 text-center text-slate-200 min-w-44 inline-block font-bold text-md bg-linear-to-l from-red-600 to-red-700 hover:scale-105 transition-transform duration-300 rounded-l-3xl rounded-es-3xl`}
          >
           ابدا المشاهده الان
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
