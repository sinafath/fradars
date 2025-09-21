import { Center, Column, Row } from "@/components/core";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-full relative flex justify-center bg-[#000A2D] h-[158px] ">
        <Image
          aria-hidden
          className="absolute left-0"
          src="/1.png"
          alt="File icon"
          width={163}
          height={157}
        />
        <Image
          aria-hidden
          className="absolute top-[28px] start-[28px]"
          src="/2.png"
          alt="File icon"
          width={15}
          height={15}
        />
        <Row className="top-[30px] absolute start-[83px] gap-[18px] h-[58px]" align="start" >
          <Column className="gap-[20px] text-center">
            <span className="text-[22px]  h-[22px]  text-[#BF4F43]">۵۵</span>
            <span className="text-[#C9C9C9] text-[16px]">ثانیه</span>
          </Column >
          <span className="text-[22px] text-[#BF4F43]">:</span>
          <Column className="gap-[20px] text-center">
            <span className="text-[22px] h-[22px]  text-[#BF4F43]">۱۲</span>
            <span className="text-[#C9C9C9] text-[16px]">دقیقه</span>
          </Column >
          <span className="text-[22px] text-[#BF4F43]">:</span>
          <Column className="gap-[20px] text-center">
            <span className="text-[22px] h-[22px]  text-[#BF4F43]">۱۲</span>
            <span className="text-[#C9C9C9] text-[16px]">ساعت</span>
          </Column >

        </Row>
        <p className=" absolute top-[29px] end-[170px] text-[#EDEDED] text-[20px]">تا پایان تخفیفات!</p>
        <button className=" w-[146px] h-[45px] bg-[#8590B8] rounded-[18px] absolute bottom-[13px] text-[18px] text-[#EDEDED]">مشاهده دوره ها</button>
      </div>
      <Column className="relative text-center">
        <h1 className="text-[28px] text-white pt-[30px] px-[62px]"> با هزاران  آموزش‌  کاربردی، همین امروز شروع کن،
          یاد بگیر و آینده رو بساز.</h1>
          <Row  className="mt-[30px] w-[calc(100%-52px)] bg-white p-[8px] gap-[14px] h-[71px] mx-[26px] rounded-[10px]" >
            <input type="text" className="bg-[#F5F5F5] flex-1 h-full rounded-[8px] px-[24px] " placeholder="چی میخوای یاد بگیری؟" />
            <Center className="bg-[#1D4ED8] w-[56px] h-full rounded-[14px]">
              <img src="/4.svg"/>
            </Center>
            </Row>
            <div className="flex flex-row"></div>
        <Image
          aria-hidden
          className="absolute top-0 start-0 w-full z-[-1]"
          src="/3.png"
          alt="File icon"
          width={560}
          height={377}
        />
      </Column>
    </div>
  );
}
