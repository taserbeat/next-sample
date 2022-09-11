import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

interface SSGProps {
  message: string;
}

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;

  return (
    <div>
      {/* Headコンポーネントで包んだ要素は<head>タグに配置される */}
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

// getStaticPropsはビルド時に実行される
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timeStamp = new Date().toLocaleString();
  const message = `${timeStamp}にgetStaticProps()が実行されました`;

  console.log(message);

  return {
    props: {
      message,
    },
  };
};

export default SSG;
