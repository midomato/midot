import Waves from "../organisms/Waves";
import LinksButton from "../organisms/LinksButton";

export default function Footer() {
  return (
    <footer className="flex flex-col h-100 bg-gray-800">
      <div className="flex">
        <div className="md:flex-3 bg-amber-300"></div>
        <div className="md:flex-3 bg-amber-200"></div>
        <div className="flex-3 bg-red-300"></div>
        <LinksButton />
      </div>
      <div className="mt-auto w-full">
        <Waves />
      </div>
    </footer>
  );
}
