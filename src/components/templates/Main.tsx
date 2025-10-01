import TweetButton from "../atoms/TweetButton";
import TextBox from "../atoms/TextBox";

export default function Main() {
  return (
    <main>
      <div className="flex items-center justify-center h-screen">
        <TweetButton />
        <TextBox />
      </div>
    </main>
  );
}
