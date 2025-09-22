import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FlexProps {
    children?: ReactNode;
    className?: {title:string};
}

function Header({ children, className }: FlexProps) {
    return (
  
          <Row justify="between" className="mt-[44px] mb-[26px] px-[24px]" className={cn('flex items-center justify-center', className)}>
        <h3 className="text-[22px] ">موضوعات آموزشی</h3>
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


export {Card};