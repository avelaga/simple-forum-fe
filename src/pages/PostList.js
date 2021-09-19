import Post from "../components/Post";
import Header from "../components/Header";
import './pages.css';

export default function PostList() {
  return (
    <div className="post-list">
      <Header />
      <a href="/posts/1"><Post /></a>
      <a href="/posts/2"><Post /></a>
      <a href="/posts/3"><Post /></a>
    </div>
  );
}
