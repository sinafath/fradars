import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-[#000A2D]"></div>
             <Image
            aria-hidden
            src="/1.png"
            alt="File icon"
            width={163}
            height={157}
          />
    </div>
  );
}
