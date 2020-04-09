import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import Members from "react-github-org-members";

function MembersPage() {
  const org_name = "LoRaFlex";
  return (
    <Layout title="Members">
      <div className={styles.membersPage}>
        <h2 style={{ color: "#5d5d5a" }}>Our Team Members</h2>
        <Members org={org_name} token={process.env.REACT_APP_GITHUB_TOKEN} />
      </div>
    </Layout>
  );
}

export default MembersPage;
