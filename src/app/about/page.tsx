const skills = ["React", "Next.js", "C#"];

export default function AboutPage() {
  return (
    <>
      <p className="mt-20 w-[900px]">
        As a Software developer I try to be as flexible as possible. My main focus is on the front-end, but I also have
        experience on the back-end side.
        <br />
        <br />I currently live in Poland and I&apos;m looking for opportunities that will allow me to grow as a
        developer and as a person and contribute to meaningful projects
        <br />
        <br />I am passionate about staying updated with the latest industry trends and technologies, always seeking
        ways to enhance my skill set. Whether it&apos;s exploring new libraries, adopting best practices in software
        architecture, or diving into cloud technologies, I thrive on continuous learning.
        <br />
        <br />
        <b>Tools that I use:</b>
      </p>

      <div className="mt-10 flex flex-wrap gap-5">
        {skills.map((skill, index) => (
          <SkillBubble key={index} name={skill} />
        ))}
      </div>
    </>
  );
}

const SkillBubble = ({ name }: { name: string }) => {
  return <p className="rounded-full bg-[#F6EDE6] px-4 py-2 text-[20px] ">{name}</p>;
};
