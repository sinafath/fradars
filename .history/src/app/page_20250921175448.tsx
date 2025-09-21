import { Column, Row } from "@/components/core";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-[#000A2D] h-[158px]"></div>
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
        className="absolute top-[28px] right-[28px]"
        src="/2.svg"
        alt="File icon"
        width={15}
        height={15}
      />
      <Row className="top-[30px] right=[83px] gap-[18px]" >
        <Column className="gap-[20px] text-center">
          <span className="text-[22px] text-[rgba(191, 79, 67, 1)]">۵۵</span>
          <span className="text-[#C9C9C9] text-[16px]">ثانیه</span>
        </Column >
        <Column className="gap-[20px] text-center">
          <span className="text-[22px] text-[rgba(191, 79, 67, 1)]">۱۲</span>
          <span className="text-[#C9C9C9] text-[16px]">دقیقه</span>
        </Column >
        <Column className="gap-[20px] text-center">
          <span className="text-[22px] text-[rgba(191, 79, 67, 1)]">۱۲</span>
          <span className="text-[#C9C9C9] text-[16px]">ساعت</span>
        </Column >

      </Row>
    </div>
  );
}
