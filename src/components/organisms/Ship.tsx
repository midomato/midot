export default function Ship() {
  return (
    <div className="relative bg-amber-100">
      {/* 二等辺三角形 */}
      <svg className="z-10" viewBox="0 0 100 5" preserveAspectRatio="none">
        <polygon points="0,5 100,0 100,10" fill="#1E2939" />
      </svg>
    </div>
  );
}
