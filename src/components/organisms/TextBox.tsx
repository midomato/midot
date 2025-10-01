"use client";

export default function TextBox() {
  const resizeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto"; // 一度高さをリセット
    e.target.style.height = `${e.target.scrollHeight}px`; // 新しいscrollHeightに基づいて高さを設定
  };
  return (
    <>
      <div className="w-full justify-center flex-col items-center flex">
        <textarea
          className="w-[300px] resize-none overflow-hidden rounded-lg border p-3 text-sm"
          placeholder="テキストを入力してください"
          onChange={(e) => {
            resizeTextArea(e);
          }}
        ></textarea>
      </div>
    </>
  );
}
