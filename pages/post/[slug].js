import ReadersNav from "../../components/ReadersNav";
import Recommendatons from "../../components/Recommendatons";
import ArticleMain from "../../components/ArticleMain";

const styles = {
    content:`flex`,
}
const Post = () => {
  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain />
      <Recommendatons />
    </div>
  );
};

export default Post;
