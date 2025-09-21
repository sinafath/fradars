import React from 'react';

// Define types for alignment and justification
type AlignItems = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
type JustifyContent = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

// Props for Row component
interface FlexProps {
    children: React.ReactNode;
    className?: string;
    align?: AlignItems;
    justify?: JustifyContent;
}

// Props for Column component


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
// Row component
function Row({
    children,
    className = '',
    align = 'center',
    justify = 'start',
    ...props
}:FlexProps) {
    return (
        <div
            className={`flex flex-row ${alignClasses[align]} ${justifyClasses[justify]} ${className}`} {...props}
        >
            {children}
        </div>
    );
};

function Column({
    children,
    className = '',
    align = 'center',
    justify = 'start',
    ...props
}: ColumnProps) {
    return (
        <div
            className={`flex flex-col ${alignClasses[align]} ${justifyClasses[justify]} ${className}`} {...props}
        >
            {children}
        </div>
    );
};
export { Column }