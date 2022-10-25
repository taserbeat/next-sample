import { NextPage, GetStaticProps } from "next";
import Head from "next/head";

/**
 * .envファイルを読み込んだ時の動作を確認するページ
 *
 * http://localhost:3000/EnvSample
 */
const EnvSample: NextPage = (props) => {
  // サーバーサイドで描画する時は'test1'と表示される
  // クライアントサイドで最描画する時はundefinedと表示される
  console.log("process.env.TEST", process.env.TEST);

  // 'test2'と表示される
  console.log("process.env.NEXT_PUBLIC_TEST", process.env.NEXT_PUBLIC_TEST);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* サーバーサイド描画時は'test1'と表示され、クライアントサイドで再描画されると何も表示されない */}
        <p>{process.env.TEST}</p>

        {/* test2が表示される */}
        <p>{process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </div>
  );
};

// getStaticPropsは常にサーバーサイドで実行されるので、すべての環境変数を参照できる
export const getStaticProps: GetStaticProps = async (context) => {
  // 'test1'が表示される
  console.log("process.env.TEST", process.env.TEST);

  // 'test2'が表示される
  console.log("process.env.NEXT_PUBLIC_TEST", process.env.NEXT_PUBLIC_TEST);
  return { props: {} };
};

export default EnvSample;
