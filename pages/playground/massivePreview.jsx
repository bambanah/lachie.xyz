import { useState } from "react";
import Link from "next/link";

import Layout from "../../components/Layout";
import styles from "../../components/styles/playground.module.scss";

export default function MassivePreview() {
  const [preview, setPreview] = useState("");

  const projects = {
    depot: {
      repo_url: "Bambanah/Depot",
      display: "Depot (This site)",
      image_name: "depot.png",
    },
    startpage: {
      repo_url: "Bambanah/startpage",
      display: "Startpage",
      image_name: "startpage.png",
    },
    sentiment_analysis: {
      repo_url: "Bambanah/CAB420-SentimentAnalysis",
      display: "Sentiment Analysis (ML)",
      image_name: "sentiment_analysis.jpg",
    },
  };

  function ProjectList() {
    const listItems = Object.keys(projects).map((projectId) => (
      <li key={projectId}>
        <Link href={`/projects/${projectId}`}>
          <a
            onMouseEnter={() => setPreview(projects[projectId])}
            // onMouseLeave={() => setPreview("")}
          >
            {projects[projectId].display}
          </a>
        </Link>
      </li>
    ));

    return (
      <div className={styles.list}>
        <h1>Projects</h1>
        <ul>{listItems}</ul>
      </div>
    );
  }

  function ProjectPreview() {
    return (
      <div
        className={styles.preview}
        style={{
          backgroundImage: `url(${"/img/" + preview.image_name})`,
        }}
      >
        <h1>{preview.display}</h1>
      </div>
    );
  }

  return (
    <Layout title="Projects">
      <div className={styles.massiveContainer}>
        <ProjectList />

        <ProjectPreview />
      </div>
    </Layout>
  );
}
