import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Row } from "../core";

interface HeaderProps {
    className?: { title: string, row: string };
    title:string
}

function Header({ title, className }: HeaderProps) {
    const { title, row } = className ?? {}
    return (

        <Row justify="between" className={cn('mt-[44px] mb-[26px] px-[24px]', row)}>
            <h3 className={cn('text-[22px]', title)}>موضوعات آموزشی title}</h3>
            <p className="text-[20px] text-[#7894CE]"> مشاهده همه</p>
        </Row>
    );
}

function Card({ children, className }: FlexProps) {
    return (
        <div className={cn('flex items-center justify-center', className)}>
            {children}
        </div>
    );
}


export { Card };