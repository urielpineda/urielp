import { Section } from "components";
import { useTranslation } from "next-i18next";
import React, { FC, useMemo } from "react";

import { ProjectCard } from "./libs/ProjectCard";

export const Projects: FC = () => {
  const { t } = useTranslation("common");

  const projects = useMemo(
    () => [
      {
        title: "Lexmark",
        subtitle: t("projects.railwayz.subtitle"),
        description: t("projects.railwayz.description"),
        technologies: ["C", "C++", "Java", "QT", "Flash"],
        externalLink: "https://www.lexmark.com/en_us/products/hardware/medium-and-large-workgroups.html",
        githubLink: "",
        imageLink: `/images/railwayz.png`,
      },
      {
        title: "Triveni Digital",
        subtitle: t("projects.laddy.subtitle"),
        description: t("projects.laddy.description"),
        technologies: ["C", "C++", "Java"],
        externalLink: "http://www.trivenidigital.com/products/streamscope-video-quality-monitoring-solutions.php",
        githubLink: "",
        imageLink: `/images/laddy.png`,
      },
      {
        title: "NativeCamp",
        subtitle: t("projects.nuopen.subtitle"),
        description: t("projects.nuopen.description"),
        technologies: ["Java", "Swift", "CakePHP", "AngularJS"],
        externalLink: "https://nativecamp.net/en",
        githubLink: "",
        imageLink: `/images/nuopen.png`,
      },
    ],
    [t]
  );

  return (
    <Section
      className="md:mt-20 mt-14"
      title={t("projects.title")}
      description={t("projects.description")}
    >
      <div className="px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg">
        {projects.map((project, i) => (
          <ProjectCard key={i} rightShift={i % 2 === 0} {...project} />
        ))}
      </div>
    </Section>
  );
};
