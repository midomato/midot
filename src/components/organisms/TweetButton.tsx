import { FaXTwitter } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

export default function TweetButton() {
  return (
    <a
      href="https://x.com/intent/post?hashtags=midot"
      target="_blank"
      rel="noopener noreferrer"
      className="button group flex justify-center items-center w-30 h-13 bg-white  cursor-pointer select-none hover:bg-gray-900
      active:translate-y-2  active:[box-shadow:0_0px_0_0_#364153,0_0px_0_0_#4A556541]
      active:border-b-[0px]
      transition-all duration-150 [box-shadow:0_10px_0_0_#364153,0_15px_0_0_#4A556541]
      rounded-full  border-[1px] border-gray-800"
    >
      <FaXTwitter color="black" className="block group-hover:hidden" />
      <FaTwitter color="white" className="hidden group-hover:block" />
      <span className="m-2 text-black font-bold text-lg group-hover:text-white">
        ツイート
      </span>
    </a>
  );
}
