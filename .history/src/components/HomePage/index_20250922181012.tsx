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
function Card({ className }: CardProps) {
    return (
        <Row>
            <Column className={cn('py-[18px] px-[20px] rounded-[20px] border-b-[1px] border-solid border-[#D4D4D4]', className)}>
                <Image
                    aria-hidden
                    src="/5.png"
                    alt="File icon"
                    width={357}
                    height={254}
                />
            </Column>
            <Row justify="around" className="mt-[24px]">
                <Row></Row>
                <Row></Row>
            </Row>
        </Row>
    );
}


export { Card, Header };