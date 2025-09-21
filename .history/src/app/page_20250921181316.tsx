import { Center, Column, Row } from "@/components/core";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-full relative bg-[#000A2D] h-[158px]">
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
        <Row className="top-[30px] absolute start-[83px] gap-[18px]" align="start" >
          <Column className="gap-[20px] text-center">
            <span className="text-[22px] text-[#BF4F43]">۵۵</span>
            <span className="text-[#C9C9C9] text-[16px]">ثانیه</span>
          </Column >
          <span className="text-[22px] text-[#BF4F43]">:</span>
          <Column className="gap-[20px] text-center">
            <span className="text-[22px] text-[#BF4F43]">۱۲</span>
            <span className="text-[#C9C9C9] text-[16px]">دقیقه</span>
          </Column >
          <span className="text-[22px] text-[#BF4F43]">:</span>
          <Column className="gap-[20px] text-center">
            <span className="text-[22px] text-[#BF4F43]">۱۲</span>
            <span className="text-[#C9C9C9] text-[16px]">ساعت</span>
          </Column >

        </Row>
        <p className=" absolute top-[29px] end-[170px] text-[#EDEDED] text-[20px]">تا پایان تخفیفات!</p>
        <Center className=" w-[146] absolute bottom-0 text-[18px] text-[#EDEDED]">مشاهده دوره ها</Center>
      </div>
    </div>
  );
}
