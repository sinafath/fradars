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

const justifyClasses: Record<JustifyContent, string> = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
};

interface CenterProps {
    children: ReactNode;
    className?: string;
}

function Card({ children, className }: CenterProps) {
    return (
        <div className={cn('flex items-center justify-center', className)}>
            {children}
        </div>
    );
}


export {Card};