import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiQiita } from "react-icons/si";
import { SiZenn } from "react-icons/si";
import { FaRssSquare } from "react-icons/fa";

export default function LinksButton() {
  return (
    <div className="group flex rounded-2xl bg-gray-900 p-3 gap-4">
      <a
        href="https://x.com/botjanaiyoda"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter color="white" size="2em" />
      </a>
      <a
        href="https://github.com/midomato"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub color="white" size="2em" />
      </a>
      <a
        href="https://qiita.com/midomato"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiQiita color="white" size="2em" />
      </a>
      <a
        href="https://zenn.dev/midomato"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiZenn color="white" size="2em" />
      </a>
      <a>
        <FaRssSquare color="white" size="2em" />
      </a>
    </div>
  );
}
