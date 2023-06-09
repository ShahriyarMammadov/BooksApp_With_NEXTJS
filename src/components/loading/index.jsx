import React from "react";
import styles from "../../styles/loading.module.css";

const Loading = () => {
  return (
    <div className={styles.spinParent}>
      <div className={styles.spin}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
