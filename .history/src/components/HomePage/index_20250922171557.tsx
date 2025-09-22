import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Row } from "../core";

interface FlexProps {
    children?: ReactNode;
    className?: { title: string, row: string };
}

function Header({ children, className }: FlexProps) {
    const { title, row } = className ?? {}
    return (

        <Row justify="between" className={cn('mt-[44px] mb-[26px] px-[24px]', row)}>
            <h3 className=" " className={cn('mt-[44px] mb-[26px] px-[24px]', row)}>موضوعات آموزشی</h3>
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