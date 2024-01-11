import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Column from "@/components/common/Column";
import Row from "@/components/common/Row";

const ProjectItem = ({ project }) => {
  return (
    <Column classes="w-full bg-[var(--textColor10)] p-4 rounded-[var(--borderRadius)] items-center justify-between text-center">
      <Column classes="w-full items-center justify-center">
        <Row classes="w-[4rem] aspect-square bg-[var(--textColor10)] rounded-full p-[1rem] items-center justify-center">
          <Image
            src={project.logo.url}
            alt={`project-${project.title}`}
            width={100}
            height={100}
            sizes="100%"
            loading="lazy"
            placeholder="blur"
            blurDataURL={project.logo.url}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              aspectRatio: "1 / 1",
            }}
          />
        </Row>

        <h4 className="font-bold mt-4">{project.title}</h4>

        <small
          className="rounded-lg py-[0.15rem] px-[0.5rem] mt-2 font-normal capitalize text-center"
          style={{
            backgroundColor:
              project.visibility.toLowerCase() === "private"
                ? "var(--errorColor30)"
                : "var(--successColor30)",
            border: `1px solid ${
              project.visibility.toLowerCase() === "private"
                ? "var(--errorColor50)"
                : "var(--successColor50)"
            }`,
            color:
              project.visibility.toLowerCase() === "private"
                ? "var(--errorColor)"
                : "var(--successColor)",
          }}
        >
          {project.visibility}
        </small>

        <Row classes="w-full items-center justify-center mt-4 gap-2">
          {project.links.github.title != '' ? (
            <Link
              href={project.links.github.href}
              aria-label={`${project.title} GitHub URL`}
              target="_blank"
              className="app__icon_btn"
              style={{
                padding: "0.5rem",
              }}
            >
              <FontAwesomeIcon icon={faGithub} className="text-md" />
            </Link>
          ) : null}

          {project.links.demo.title != '' ? (
            <Link
              href={project.links.demo.href}
              aria-label={`${project.title} Project URL`}
              target="_blank"
              className="app__icon_btn"
              style={{
                padding: "0.5rem",
              }}
            >
              <FontAwesomeIcon icon={faEye} className="text-md" />
            </Link>
          ) : null}
        </Row>
      </Column>

      <Column classes="w-full mt-8 items-center">
        <p className="text-center">{project.description}</p>

        <Row classes="w-full items-center justify-center flex-wrap mt-4">
          {project.tags_block.map((tag) => {
            return (
              <small
                key={`tag-${tag.tag.position}`}
                className="bg-[var(--textColor10)] rounded-lg py-[0.45rem] px-[0.75rem] mr-2 mb-2 font-medium"
              >
                {tag.tag.name}
              </small>
            );
          })}
        </Row>
      </Column>
    </Column>
  );
};

export default ProjectItem;
