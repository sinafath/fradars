import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type AlignItems = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
type JustifyContent = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

interface FlexProps {
    children?: ReactNode;
    className?: string;
    align?: AlignItems;
    justify?: JustifyContent;
}

const alignClasses: Record<AlignItems, string> = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    baseline: 'items-baseline',
    stretch: 'items-stretch',
};

function Card({ children, className }: CenterProps) {
    return (
        <div className={cn('flex items-center justify-center', className)}>
            {children}
        </div>
    );
}


export {Card};