import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FlexProps {
    children?: ReactNode;
    className?: string;
}

function Card({ children, className }: FlexProps) {
    return (
        <div className={cn('flex items-center justify-center', className)}>
            {children}
        </div>
    );
}

function Card({ children, className }: FlexProps) {
    return (
        <div className={cn('flex items-center justify-center', className)}>
            {children}
        </div>
    );
}


export {Card};