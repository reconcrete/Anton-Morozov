import Link from "next/link";

type BlogCardProps = {
  title: string;
  date: string;
  description: string;
  href: string;
};

export const BlogPost: React.FC<BlogCardProps> = ({ title, date, description, href }) => {
  return (
    <Link href={href}>
      <h2 className="text-[28px] font-black">{title}</h2>
      <p className="text-[13px] text-gray-700 dark:text-gray-300">{date}</p>
      <p className="mt-1">{description}</p>
    </Link>
  );
};
