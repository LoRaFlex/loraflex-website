import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

function MembersPage() {
  return (
    <Layout title="Members">
      <div className={styles.membersPage}>
        <h3>
          There is not enough information to display at this time, check back
          later.
        </h3>
      </div>
    </Layout>
  );
}

export default MembersPage;
