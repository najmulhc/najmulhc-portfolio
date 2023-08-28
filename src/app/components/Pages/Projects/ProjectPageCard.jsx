import Card, { CardInner } from "../../Cards/Card";
import { Badge, H2, H4, P } from "../../Typography/Typography";
import Button from "../../Buttons/button";
import { MdPreview } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const ProjectPageCard = () => {
  const project = {
    name: "MireHouse",
    time: "a long time ago",
    type: "Full Stack Project",
    link: "https://www.google.com",
    repo: "https://www.github.com/najmulhc/najmulhc-portfolio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    image: "https://placehold.co/1600x900.png",
    description:
      "A captivating journey through code, crafting a dynamic Full Stack Project that echoes 'a long time ago'.",
    techstack: ["HTML", "CSS", "JavaScript"],
  };
  return (
    <Card>
      <CardInner>
        <div className="flex justify-start gap-4 items-end">
          <Image src={project.logo} alt={project.name} width={64} height={64} />
          <div className="flex justify-between items-center w-full">
            <H2>{project.name}</H2>
            <H4>{project.time}</H4>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techstack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <P classname="my-4">{project.description}</P>
        <div className="flex justify-between items-center gap-2">
          <Button classname="w-full">Project Details</Button>
          <Button
            link={project.link}
            classname="text-2xl py-2 px-4 rounded-full bg-black text-white dark:bg-white dark:text-black"
          >
            <MdPreview />
          </Button>
          <Button
            classname="text-2xl py-2 px-4 rounded-full bg-[#2b3035] text-[#fafbfc] dark:bg-[#fafbfc] dark:text-[#2b3035]"
            link={project.repo}
          >
            {" "}
            <FaGithub />{" "}
          </Button>
        </div>
      </CardInner>
    </Card>
  );
};

export default ProjectPageCard;
