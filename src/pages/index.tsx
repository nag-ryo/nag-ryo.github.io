import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import Button from '@/app/components/ui/button';
import { getBlogData } from '@/lib/blog-service';
import { IBlog } from '@/interfaces/i-blog';

/**
 * データをAPIから取得、テンプレートに受け渡す
 */
export const getStaticProps = async () => {
    const blog = await getBlogData();

    return {
        props: {
            blog,
        },
    };
};

export default function HomePage({ blog }: { blog: IBlog[] }) {
    return (
        <main className='pt-8 pb-8'>

            {/* ナビゲーション */}
            <nav className="flex gap-2 mb-8 items-center justify-between">
                <div className="flex gap-2">
                    <Button variant="outlined" size="small">すべて</Button>
                    <Button variant="outlined" size="small">Tech</Button>
                    <Button variant="outlined" size="small">Idea</Button>
                    <Button variant="outlined" size="small">Diary</Button>
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
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-sm"
                                >
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>

        </main>
    );
}
