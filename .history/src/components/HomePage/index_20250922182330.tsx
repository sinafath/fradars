import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Column, Row } from "../core";
import Image from "next/image";

interface HeaderProps {
    className?: { title: string, row: string };
    title: string
}

function Header({ title, className }: HeaderProps) {
    const { title: titleClass, row } = className ?? {}
    return (

        <Row justify="between" className={cn('mt-[44px] mb-[26px] px-[24px]', row)}>
            <h3 className={cn('text-[22px]', titleClass)}>{title}</h3>
            <p className="text-[20px] text-[#7894CE]"> مشاهده همه</p>
        </Row>
    );
}
interface CardProps {
    className?: { title: string, row: string };
}
function Card({ }: CardProps) {
    return (
        <Row className="mt-[22px] gap-[20px] ms-[24px] overflow-y-auto">
            <Column className={'py-[18px] px-[20px] rounded-[20px] border-[1px] border-solid border-[#D4D4D4]'}>
                <Image
                    aria-hidden
                    src="/5.png"
                    alt="File icon"
                    width={357}
                    height={254}
                />
                <Row justify="between" className="mt-[24px] w-full">
                    <Row className="gap-[12px] text-[16px] text-[#808080]">
                        <img src="/6.svg" />
                        <div>۵۳ ساعت</div>
                    </Row>
                    <Row className="gap-[12px] flex-row-reverse text-[16px] text-[#808080]">
                        <img src="/7.svg" />
                        <div>HTML</div>
                    </Row>
                </Row>
                <h6 className="mt-[12px] text-[#000A2D] text-[27px]">مجموعه آموزش HTML و CSS برای طراحی سایت</h6>
                                <p className="mt-[12px] text-[#A4A4A4] text-[23px]">برای  </p>

            </Column>

        </Row>
    );
}


export { Card, Header };