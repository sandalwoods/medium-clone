import ReadersNav from "../../components/ReadersNav";
import Recommendatons from "../../components/Recommendatons";
import ArticleMain from "../../components/ArticleMain";
import { MediumContext } from "../../context/MediumContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const styles = {
  content: `flex`,
};
const Post = () => {
  const router = useRouter();
  const { posts, users } = useContext(MediumContext);
  const [author, setAuthor] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    if (posts.length === 0 || users.length === 0) {
      return;
    }
    setPost(posts.find((post) => post.id === router.query.slug));
    setAuthor(users.find((user) => user.id === post.data?.author));
    // console.log(post, "post");
  }, [post]);

  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain post={post} author={author} />
      <Recommendatons />
    </div>
  );
};

export default Post;
