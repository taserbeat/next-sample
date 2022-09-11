import { NextPage } from "next";
import Head from "next/head";

interface SSGProps {}

const SSG: NextPage<SSGProps> = () => {
  return (
    <div>
      {/* Headコンポーネントで包んだ要素は<head>タグに配置される */}
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
      </main>
    </div>
  );
};

export default SSG;
