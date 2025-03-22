import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import Button from '@/app/components/ui/button';
import { getBlogData } from '@/lib/blog-service';
import { IBlog } from '@/interfaces/i-blog';
import { CATEGORY } from '@/interfaces/i-category';
import Head from 'next/head';

/**
 * データをAPIから取得、テンプレートに受け渡す
 */
export const getStaticProps = async () => {
    const posts = await getBlogData();

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

    return {
        props: {
            blog: posts,
        },
    };
};

export default function HomePage({ blog }: { blog: IBlog[] }) {
    return (
        <>
            <Head>
                <title>Nag&apos;s Blog</title>
                <meta name="description" content="「Nag's Blog」の各記事の画面です。" />
                <meta name="keywords" content="ブログ, 詳細, 記事" />
            </Head>
            <main className='pt-8 pb-8'>

                {/* ナビゲーション */}
                <nav className="flex gap-2 mb-8 items-center justify-between">
                    <div className="flex gap-2">
                        {/* 選択済みだけをcontainedにする。 */}
                        <Link href="/"><Button variant="contained" size="small">すべて</Button></Link>
                        <Link href="/categories/tech"><Button variant="outlined" size="small">{CATEGORY.TECH}</Button></Link>
                        <Link href="/categories/idea"><Button variant="outlined" size="small">{CATEGORY.IDEA}</Button></Link>
                        <Link href="/categories/diary"><Button variant="outlined" size="small">{CATEGORY.DIARY}</Button></Link>
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
                                <Link href={`/posts/${id}`} className='post-title'>
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
                                            <li className='tag' key={index}>
                                                <Link href={`/categories/${tag.urlName}`} className={`bg-${tag.color}-100 text-${tag.color}-700 px-2 py-0.5 rounded text-sm`}>
                                                    {tag.name}
                                                </Link>
                                            </li>
                                        );
                                    } else {
                                        return (
                                            <li className='tag' key={index}>
                                                <Link href={`/tags/${tag.urlName}`} className={`bg-${tag.color}-100 text-${tag.color}-700 px-2 py-0.5 rounded text-sm`}>
                                                    {tag.name}
                                                </Link>
                                            </li>
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
