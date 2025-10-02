import { FaXTwitter } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

export default function TweetButton() {
  return (
    <a
      href="https://x.com/intent/post?hashtags=midot"
      target="_blank"
      rel="noopener noreferrer"
      className="button group flex justify-center items-center w-30 h-13 bg-gray-900  cursor-pointer select-none hover:bg-white
      active:translate-y-1  active:[box-shadow:0_0px_0_0_#364153,0_0px_0_0_#4A556541]
      active:border-b-[1px]
      hover:[box-shadow:0_1px_2_2_#364153,0_1px_20_8_#4A556541]
      transition-all duration-150 [box-shadow:0_1px_2_2_#364153,0_1px_20_10_#4A556541]
      rounded-full  border-[1px] border-gray-800"
    >
      <FaXTwitter color="white" className="block group-hover:hidden" />
      <FaTwitter color="black" className="hidden group-hover:block" />
      <span className="m-2 text-white font-bold text-lg group-hover:text-black">
        ツイート
      </span>
    </a>
  );
}
