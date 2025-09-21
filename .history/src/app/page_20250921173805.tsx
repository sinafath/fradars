import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-f"></div>
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
