import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FlexProps {
    children?: ReactNode;
    className?: string;
    justify?: JustifyContent;
}


function Card({ children, className }: FlexProps) {
    return (
        <div className={cn('flex items-center justify-center', className)}>
            {children}
        </div>
    );
}


export {Card};