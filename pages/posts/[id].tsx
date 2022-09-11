import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

interface PostProps {
  id: string;
}

const Post: NextPage<PostProps> = (props) => {
  const { id } = props;
  const router = useRouter();

  if (router.isFallback) {
    // フォールバックページ向けの表示を返す
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
        <p>{`/posts/${id}に対応するページです`}</p>
      </main>
    </div>
  );
};

// getStaticPathsは生成したいページのパスパラメータの組み合わせを返す
// このファイルはpages/posts/[id].tsxなので、パスパラメータとしてidの値を返す必要がある
export const getStaticPaths: GetStaticPaths = async () => {
  // それぞれのページのパスパラメータをまとめたもの
  const paths = [
    {
      params: {
        id: "1",
      },
    },
    {
      params: {
        id: "2",
      },
    },
    {
      params: {
        id: "3",
      },
    },
  ];

  // fallbackをfalseにすると、pathsに定義されたページ以外は404ページを表示する
  //
  // fallbackをtrueにすると、存在しないidのページに初めてアクセスされた場合はフォールバックページを表示し、サーバー側でページを追加生成する
  // ページの追加生成が完了したら、フォールバックページが表示されているクライアントで再レンダリングされて追加生成されたページが表示される
  // 追加生成されたページはサーバー側で保存されるので、以降は対応するidのページがそのまま表示される
  return { paths, fallback: false };
};

// getStaticPaths実行後にそれぞれのパスに対してgetStaticPropsが実行される
export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  const paramId = context.params?.id;

  const id =
    paramId === undefined ? "1" : Array.isArray(paramId) ? paramId[0] : paramId;

  const timeStamp = new Date().toLocaleString();

  console.log(
    `${timeStamp}にgetStaticProps()が実行されました。 id: ${paramId}`
  );

  return {
    props: {
      id,
    },
  };
};

export default Post;
