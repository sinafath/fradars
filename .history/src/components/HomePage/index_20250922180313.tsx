import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Row } from "../core";

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
    title: string
}
function Card({ className }: CardProps) {
    return (
        <div className={cn('flex items-center justify-center', className)}>
           
        </div>
    );
}


export { Card,Header };