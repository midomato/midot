import TweetButton from "../organisms/TweetButton";

export default function Header() {
  return (
    <header className="flex gap-10 h-20 bg-red-400">
      <span>ホーム</span>
      <span>プロフィール</span>
      <span>ブログ</span>
      <span>成果物</span>
      <TweetButton />
    </header>
  );
}
