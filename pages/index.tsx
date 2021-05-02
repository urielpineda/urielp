import {
  Contact,
  Experience,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
} from "components";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";

const IndexPage = () => {
  const [main, setMain] = useState(false);

  useEffect(() => {
    const ids = [
      setTimeout(() => setMain(true), 0),
    ];

    return () => ids.forEach((id) => clearTimeout(id));
  }, [true]);

  return (
    <>
      <Head>
        <title>Uriel Pineda</title>
      </Head>
      <motion.div
        variants={{
          initial: {
            opacity: 0,
            display: "none",
          },
          visible: {
            opacity: 1,
            display: "block",
          },
        }}
        initial="initial"
        animate={main ? "visible" : "initial"}
        transition={{
          duration: 1.0,
        }}
      >
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};

export default IndexPage;
