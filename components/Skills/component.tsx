import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { FC, useEffect } from "react";
import { SiGraphql, SiJava, SiKotlin, SiSwift, SiDart, SiPython, SiJavascript, SiPhp, SiHtml5, SiGit, SiLinux, SiAmazonaws, SiFirebase, SiJenkins} from "react-icons/si";
import { useInView } from "react-intersection-observer";

import { EthereumIcon} from "./libs/Icons";
import { Skill } from "./libs/Skill";

const skills = [
  {
    name: "C/C++",
    href: "https://www.cplusplus.com/",
    icon: <EthereumIcon/>,
    imageLink: `/images/logo/cpp.svg`,
  },
  {
    name: "Java",
    href: "https://www.java.com/en/",
    icon: <SiJava/>,
    imageLink: `/images/logo/java.svg`,
  },
  {
    name: "Kotlin",
    href: "https://kotlinlang.org/",
    icon: <SiKotlin/>,
    imageLink: `/images/logo/kotlin.svg`,
  },
  {
    name: "Swift",
    href: "https://swift.org/",
    icon: <SiSwift/>,
    imageLink: `/images/logo/swift.svg`,
  },
  {
    name: "Dart",
    href: "https://dart.dev/",
    icon: <SiDart/>,
    imageLink: `/images/logo/dart.svg`,
  },
  {
    name: "Python",
    href: "https://www.python.org/",
    icon: <SiPython/>,
    imageLink: `/images/logo/python.svg`,
  },
  {
    name: "JavaScript",
    href: "https://www.javascript.com/",
    icon: <SiJavascript/>,
    imageLink: `/images/logo/javascript.svg`,
  },
  {
    name: "PHP",
    href: "https://www.php.net/",
    icon: <SiPhp/>,
    imageLink: `/images/logo/php.svg`,
  },
  {
    name: "HTML/CSS",
    href: "https://www.w3.org/TR/html52/",
    icon: <SiHtml5/>,
    imageLink: `/images/logo/html.svg`,
  },
  {
    name: "Git",
    href: "https://git-scm.com/doc",
    icon: <SiGit/>,
    imageLink: `/images/logo/git.svg`,
  },
  {
    name: "Linux",
    href: "https://www.linux.org/",
    icon: <SiLinux/>,
    imageLink: `/images/logo/tux.svg`,
  },
  {
    name: "AWS",
    href: "https://aws.amazon.com/",
    icon: <SiAmazonaws/>,
    imageLink: `/images/logo/aws.svg`,
  },
  {
    name: "Firebase",
    href: "https://firebase.google.com/",
    icon: <SiFirebase/>,
    imageLink: `/images/logo/firebase.svg`,
  },
  {
    name: "Jenkins",
    href: "https://www.jenkins.io/",
    icon: <SiJenkins/>,
    imageLink: `/images/logo/jenkins.svg`,
  },
  {
    name: "Selenium",
    href: "https://www.selenium.dev/",
    icon: <SiGraphql/>,
    imageLink: `/images/logo/selenium.svg`,
  },
];

export const Skills: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { t } = useTranslation("common");

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title={t("skills.title")}
      description={t("skills.description")}
    >
      <Container>
        <div
          className="mt-8 grid grid-cols-3 sm:grid-cols-5 gap-6"
          ref={ref}
        >
          {skills.map((skill, i) => (
            <Skill {...skill} key={i} custom={i} controls={controls} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
