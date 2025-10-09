import articles from "../data/articles.json";
import ArticlePage from "../components/ArticlePage";
import { useParams } from "react-router-dom";

const ArticleWrapper = () => {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) return <p>Article not found.</p>;

  return <ArticlePage {...article} />;
};

export default ArticleWrapper;
