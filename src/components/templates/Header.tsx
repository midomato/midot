import TweetButton from "../organisms/TweetButton";

export default function Header() {
  return (
    <header
      className="flex fixed top-3 gap-10 w-full h-25 z-100 p-6 rounded-4xl 
                bg-gradient-to-br from-white/60 via-cyan-800/30 to-gray-400/30
                backdrop-blur-sm shadow-lg shadow-blue-500/10 text-white font-bold"
    >
      <a
        href="/"
        className="shadow-blue-950/90 shadow-lg w-20 rounded-3xl flex items-center justify-center"
      >
        ホーム
      </a>
      <a
        href="/profile"
        className="shadow-blue-950/90 shadow-lg w-20 rounded-3xl flex items-center justify-center"
      >
        プロフィール
      </a>
      <a
        href="/posts"
        className="shadow-blue-950/80 shadow-lg w-20 rounded-3xl flex items-center justify-center"
      >
        ブログ
      </a>
      <a
        href="/projects"
        className="shadow-blue-950/90 shadow-lg w-20 rounded-3xl flex items-center justify-center"
      >
        成果物
      </a>
      <TweetButton />
    </header>
  );
}
