import MidotSignature from "../molecules/MidotSignature";

export default function Title() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-orange-300 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-orange-200 rounded-full blur-3xl opacity-40" />
      </div>
      <div className="flex items-center bg-white justify-center h-300">
        <div className="absolute top-1/2 left-1/6 w-[500px] h-[500px] -translate-x-1/2 bg-orange-400 shadow-[0_35px_60px_-15px_rgba(100,0,0,0.7)] rounded-full blur-md opacity-70" />
        <div className="absolute top-1/3 left-1/9 w-[300px] h-[300px] -translate-x-1/2 bg-blue-400 shadow-[0_35px_60px_-15px_rgba(100,0,0,0.3)] rounded-full blur-sm opacity-90" />
        <div className="absolute top-1/3 left-7/8 w-[400px] h-[400px] -translate-x-1/2 bg-green-400 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-full blur-sm opacity-90" />
        <div className="absolute top-1/2 left-6/8 w-[200px] h-[200px] -translate-x-1/2 bg-yellow-400 shadow-[0_35px_60px_-15px_rgba(100,0,0,0.3)] rounded-full blur-sm opacity-90" />
        <h1 className="absolute top-4/10 text-9xl font-bold"></h1>
        <MidotSignature />
      </div>
    </>
  );
}
