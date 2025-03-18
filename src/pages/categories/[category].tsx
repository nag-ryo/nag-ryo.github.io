import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import Button from '@/app/components/ui/button';
import { getBlogData } from '@/lib/blog-service';
import { IBlog } from '@/interfaces/i-blog';
import { CATEGORY } from '@/interfaces/i-category';
import Head from 'next/head';

export const getStaticPaths = async () => {
    const categories = Object.values(CATEGORY);

    /** 各カテゴリに対して動的ルートのパスを生成 */
    const paths = categories.map((category) => ({
        params: { category: category.toLowerCase() },
    }));

    // 生成されたパスの配列を返す
    return { paths, fallback: false };
}

/**
 * データをAPIから取得、テンプレートに受け渡す
 */
export const getStaticProps = async (context: { params: { category: string } }) => {
    const { category } = context.params;

    /** 指定されたカテゴリに絞り込んだ記事 */
    const posts = (await getBlogData())
        .filter(post => post.category.name.toLowerCase() === category.toLowerCase());

    posts.map(post => {
        switch (post.category.name) {
            case CATEGORY.TECH:
                post.tags.unshift({ ...post.category, color: 'blue' });
                break;
            case CATEGORY.IDEA:
                post.tags.unshift({ ...post.category, color: 'red' });
                break;
            case CATEGORY.DIARY:
            default:
                post.tags.unshift({ ...post.category, color: 'green' });
                break;
        }
    });

    return {
        props: {
            blog: posts,
            category,
        },
    };
};

export default function HomePage({ blog, category }: { blog: IBlog[], category: string }) {
    return (
        <>
            <Head>
                <title>{`Nag's Blog - ${category}`}</title>
                <meta name="description" content={`「Nag's Blog」の${category}カテゴリの記事一覧です。`} />
                <meta name="keywords" content={`ブログ, ${category}, 記事`} />
            </Head>
            <main className='pt-8 pb-8'>

                {/* ナビゲーション */}
                <nav className="flex gap-2 mb-8 items-center justify-between">
                    <div className="flex gap-2">
                        <Link href="/">
                            <Button variant="outlined" size="small">すべて</Button>
                        </Link>
                        <Link href={`/categories/${CATEGORY.TECH}`}>
                            <Button variant={category === CATEGORY.TECH ? "contained" : "outlined"} size="small">{CATEGORY.TECH}</Button>
                        </Link>
                        <Link href={`/categories/${CATEGORY.IDEA}`}>
                            <Button variant={category === CATEGORY.IDEA ? "contained" : "outlined"} size="small">{CATEGORY.IDEA}</Button>
                        </Link>
                        <Link href={`/categories/${CATEGORY.DIARY}`}>
                            <Button variant={category === CATEGORY.DIARY ? "contained" : "outlined"} size="small">{CATEGORY.DIARY}</Button>
                        </Link>
                    </div>
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
                                <Link href={`/posts/${id}`} className="font-semibold underline mb-1">
                                    {title}
                                </Link>
                            </div>
                            <div className="flex gap-2">
                                {tags.map((tag, index) => {
                                    if (tag.color == null) {
                                        tag.color = 'blue';
                                    }
                                    return (
                                        <span
                                            key={index}
                                            className={`bg-${tag.color}-100 text-${tag.color}-700 px-2 py-0.5 rounded text-sm`}
                                        >
                                            {tag.name}
                                        </span>
                                    );
                                })}
                            </div>
                        </article>
                    ))}
                </div>

            </main>
        </>
    );
}
