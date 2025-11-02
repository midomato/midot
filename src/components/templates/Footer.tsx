import Waves from "../organisms/Waves";
import LinksButton from "../organisms/LinksButton";
import Ship from "../organisms/Ship";

export default function Footer() {
  return (
    <>
      <Ship />
      <footer className="flex flex-col h-100 bg-gray-800">
        <div className="flex p-3">
          <div className="md:flex-3 "></div>
          <div className="md:flex-3 "></div>
          <div className="flex-3"></div>
          <LinksButton />
        </div>
        <div className="relative mt-auto w-full">
          <Waves />
          <small className="absolute inset-0 flex justify-center items-center text-white text-sm sm:text-base md:text-lg lg:text-xl">
            &copy; 2025 Midot. All rights reserved.
          </small>
        </div>
      </footer>
    </>
  );
}
