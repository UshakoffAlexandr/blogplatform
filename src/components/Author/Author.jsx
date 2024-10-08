import { Typography } from "antd";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import logo from "../../Img/785336.svg";

import styles from "./Author.module.scss";

const { Title } = Typography;

export default function Author({ author, createdAt, toOpen }) {
  const openProfile = (bool, component) => {
    if (bool) return <Link to="/profile">{component}</Link>;
    return component;
  };

  const handleImageError = (e) => {
    e.target.src = logo;
  };

  return (
    <Title
      level={4}
      style={{ margin: 0 }}
      className={styles["author-container"]}
    >
      <div className={styles["author-name"]}>
        {openProfile(
          toOpen,
          <span style={{ color: "black" }}>{author.username}</span>
        )}
        <span className={styles["article-createdAt"]}>
          {createdAt && format(new Date(createdAt), "MMMM d, yyyy")}
        </span>
      </div>
      {openProfile(
        toOpen,
        <img
          src={author.image ? author.image : logo}
          alt="author profile icon"
          className={styles["author-icon"]}
          onError={handleImageError}
        />
      )}
    </Title>
  );
}
