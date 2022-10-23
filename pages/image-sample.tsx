import { NextPage } from "next";
import Image from "next/image";
//画像ファイルをインポートする
import RobotImage from "../public/images/robot.png";

/** 画像表示のサンプルページ */
const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>画像表示の比較</h1>

      <p>imgタグで表示した場合</p>
      {/* 通常のimgタグを使用して画像を表示 */}
      <img src="/images/robot.png" />

      <p>Imageコンポーネントで表示した場合</p>
      {/* Imageコンポーネントを使用して画像を表示 */}
      {/*パスを指定する代わりに、インポートした画像を指定*/}
      <Image src={RobotImage} />
      <p>Imageで表示した場合は事前に描画エリアが確保されます</p>
      <p>また、画像のファイルサイズが圧縮されています</p>
    </div>
  );
};

export default ImageSample;
