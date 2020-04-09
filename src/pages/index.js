import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Feature from "../components/Feature";

const features = [
  {
    title: <>Who we are</>,
    imageUrl: "img/who-we-are.svg",
    description: (
      <>
        We are a group of hardware and software enthusiasts with the willingness
        and desire to create great devices that communicate with LoRa
        technology.
      </>
    ),
  },
  {
    title: <>Our mission</>,
    imageUrl: "img/our-mission.svg",
    description: (
      <>
        Our mission is to use our skills and knowledge to build devices and
        tools focused on LoRa communication.
      </>
    ),
  },
  {
    title: <>Join us</>,
    imageUrl: "img/join-us.svg",
    description: (
      <>
        Do you want to be part of this group of LoRa lovers?
        <Link to="/join"> Join us here</Link> and we will add you as a member.
      </>
    ),
  },
];

function HomePage() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Where collaborative LoRa projects are taking place"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("/join")}
            >
              Join us
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default HomePage;
