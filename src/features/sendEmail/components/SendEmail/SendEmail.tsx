import Link from "next/link";

export const SendEmail = () => {
  return (
    <Link
      href={"mailto:ad.morozov64@gmail.com"}
      className="hidden items-center gap-x-2 rounded-[15px] bg-white px-5 py-2.5 text-black lg:flex"
    >
      <div className="h-[8px] w-[8px] animate-pulse rounded-full bg-[#A129FF]"></div>
      <p className="text-[18px]">Let&apos;s Connect</p>
    </Link>
  );
};
