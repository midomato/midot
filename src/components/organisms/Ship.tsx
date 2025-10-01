export default function Ship() {
  return (
    <div className="relative">
      {/* 二等辺三角形 */}
      <svg className="z-10" viewBox="0 0 100 9" preserveAspectRatio="none">
        <polygon points="0,9 100,4 100,10" fill="#1E2939" />
      </svg>
    </div>
  );
}
