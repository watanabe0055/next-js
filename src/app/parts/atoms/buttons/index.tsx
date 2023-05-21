export type ButtonProps = {
  /**ボタンの文字色 */
  color: string;
  /**ボタンの文字 */
  label1: string;
  /**ボタンの文字 */
  label2?: string;
  /**ボタンタイプ */
  type?: boolean;
};

/**ボタンコンポーネント
 * @params color　ボタン内のテキストの色
 * @params label1 ボタン内のテキスト
 * @params label2 ボタン内のテキスト
 * @params type ボタン内のテキスト
 */
export const Buttons = ({
  color = "black",
  label1,
  label2,
  type,
}: ButtonProps) => {
  switch (type) {
    case false:
      return (
        <div className="flex justify-center p-6 space-x-4 bg-gray-200 shadow-2xl rounded-xl">
          <button className="px-4 py-2 transition-shadow duration-300 bg-gray-300 shadow-inner rounded-xl hover:shadow-none">
            {label1}
          </button>
          <button className="px-4 py-2 transition-shadow duration-300 bg-gray-300 shadow-inner rounded-xl hover:shadow-none">
            {label2}
          </button>
        </div>
      );

    default:
      return (
        <button
          type="button"
          className={`w-full py-3 text-red-600 px-14 bg-custom-gray rounded-custom shadow-custom`}
        >
          {label1}
        </button>
      );
      break;
  }
};
