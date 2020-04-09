import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import JoinUsForm from "../components/JoinUsForm";

function JoinUsPage() {
  return (
    <Layout title="Join Us">
      <div className={styles.joinUsPage}>
        <JoinUsForm />
      </div>
    </Layout>
  );
}

export default JoinUsPage;
