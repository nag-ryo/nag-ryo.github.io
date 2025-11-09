import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import Button from '@/app/components/ui/button';
import { getBlogData, getTagData } from '@/lib/blog-service';
import { IBlog } from '@/interfaces/i-blog';
import { CATEGORY } from '@/interfaces/i-category';
import Head from 'next/head';
import { ITag } from '@/interfaces/i-tag';

export const getStaticPaths = async () => {
    /** APIからタグデータを取得 */
    const tags = await getTagData();

    /** 各タグに対して動的ルートのパスを生成 */
    const paths = tags.map(tag => ({
        params: { tag: tag.urlName.toLowerCase()},
    }));

    // 生成されたパスの配列を返す
    return { paths, fallback: false };
};

/**
 * データをAPIから取得、テンプレートに受け渡す
 */
export const getStaticProps = async (context: { params: { tag: string } }) => {
    const { tag } = context.params;
    const posts = (await getBlogData())
        .filter(post => post.tags.some(t => t.urlName.toLowerCase() === tag.toLowerCase()));

    posts.map(post => {
        switch (post.category.name) {
            case CATEGORY.TECH:
                post.tags.unshift({ ...post.category, color: 'blue', urlName: 'tech' });
                break;
            case CATEGORY.IDEA:
                post.tags.unshift({ ...post.category, color: 'red', urlName: 'idea' });
                break;
            case CATEGORY.DIARY:
            default:
                post.tags.unshift({ ...post.category, color: 'green', urlName: 'diary' });
                break;
        }
    });

    const tagData = (await getTagData()).find(t => t.urlName.toLowerCase() === tag.toLowerCase());

    return {
        props: {
            blog: posts,
            tag: tagData,
        },
    };
};

export default function TagPage({ blog, tag }: { blog: IBlog[], tag: ITag }) {
    return (
        <>
            <Head>
                <title>{`炉辺にて、炎と記憶のあいだを旅する - Tag: ${tag.name}`}</title>
                <meta name="description" content={`「炉辺にて、炎と記憶のあいだを旅する」の${tag.name}タグの記事一覧です。`} />
                <meta name="keywords" content={`ブログ, ${tag.name}, 記事`} />
            </Head>
            <main className='pt-8 pb-8'>

                {/* ナビゲーション */}
                <nav className="flex gap-2 mb-8 items-center justify-between">
                    <h1>{`# ${tag.name}`}</h1>
                    <Button variant="outlined" size="small">
                        <FontAwesomeIcon icon={faRss} className="h-4 w-4" />
                    </Button>
                </nav>

                {/* ブログ記事 */}
                <div className="space-y-8">
                {blog.map(({ id, title, tags: tags, createdAt }) => (
                        <article key={id}>
                            <time className="text-sm text-gray-500 block">{format(new Date(createdAt), 'yyyy/MM/dd')}</time>
                            <div className="text-lg font-medium">
                                <Link href={`/posts/${id}`} className="post-title">
                                    {title}
                                </Link>
                            </div>
                            <div className="flex gap-2">
                                {tags.map((tag, index) => {
                                    if (tag.color == null) {
                                        tag.color = 'blue';
                                    }

                                    // 最初のタグはカテゴリーとして表示
                                    if (index === 0) {
                                        return (
                                            <Link href={`/categories/${tag.urlName}`} key={index}>
                                                <span
                                                    className={`bg-${tag.color}-100 text-${tag.color}-700 px-2 py-0.5 rounded text-sm`}
                                                >
                                                    {tag.name}
                                                </span>
                                            </Link>
                                        );
                                    } else {
                                        return (
                                            <Link href={`/tags/${tag.urlName}`} key={index}>
                                                <span
                                                    className={`bg-${tag.color}-100 text-${tag.color}-700 px-2 py-0.5 rounded text-sm`}
                                                >
                                                    {tag.name}
                                                </span>
                                            </Link>
                                        );
                                    }
                                })}
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </>
    );
}
