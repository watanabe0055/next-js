export type ButtonProps = {
  /**ボタンの文字色 */
  color: string;
  /**ボタンの文字 */
  text: string;
};

/**ボタンコンポーネント
 * @params color　ボタン内のテキストの色
 * @params text ボタン内のテキスト
 */
export const Button = (Props: ButtonProps) => {
  const { color, text } = Props;
  return (
    <button
      type="button"
      className={`py-3 px-14 text-${color}-600 bg-custom-gray rounded-custom shadow-custom w-full`}
    >
      {text}
    </button>
  );
};
