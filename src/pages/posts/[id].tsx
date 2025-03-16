import { client } from '@/lib/microcms';
import { format } from 'date-fns';
import { IBlog } from '@/interfaces/i-blog';
import { getBlogData } from '@/lib/blog-service';
import { Box, Link } from '@mui/material';
import Head from 'next/head';
import { CATEGORY } from '@/interfaces/i-category';

export default function BlogId({ blog, isPreview }: { blog: IBlog; isPreview: boolean }) {

    return (
        <article className='pt-16 pb-16'>
            <Head>
                <title>Post</title>
                <meta name="description" content="「Nag's Blog」の各記事の画面です。" />
                <meta name="keywords" content="ブログ, 詳細, 記事" />
            </Head>
            <div>
                <section>
                    <div className='flex justify-left gap-4 mb-1'>
                        <time className="text-sm text-gray-500 block">作成日時：{format(new Date(blog.createdAt), 'yyyy/MM/dd')}</time>
                        <time className="text-sm text-gray-500 block">更新日時：{format(new Date(blog.updatedAt), 'yyyy/MM/dd')}</time>
                    </div>
                    <h1 className='mb-1'>{blog.title}</h1>
                    <div className="flex gap-2">
                        {blog.tags.map(({ id, name, color }) => {
                            if (color == null) {
                                color = 'blue';
                            }
                            return(
                                <span key={id} className={`bg-${color}-50 text-${color}-700 px-2 py-0.5 rounded text-sm`}>
                                    {name}
                                </span>
                            );
                        })}
                    </div>
                </section>
                <div>
                    {isPreview && (
                        <>
                            <p>Preview Mode</p>
                            <Link href={'/api/clear-preview'}>
                                <p>プレビュー解除</p>
                            </Link>
                        </>
                    )}
                    <Box sx={{ width: '100%', marginTop: '32px' }}>
                        <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }} />
                    </Box>
                </div>

            </div>
        </article>
    );
}

/**
 * 静的生成のためのパスを指定
 * 全ての記事で実行
 * @returns
 */
export const getStaticPaths = async () => {
    const blog = await getBlogData();

    const paths: string[] = blog.map((content: IBlog) => `/posts/${content.id}`);
    return { paths, fallback: false };
};

/**
 * データをテンプレートに受け渡す処理
 * @param context
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps = async (context: any) => {
    // previewMode
    const isPreview = context.preview && process.env.ENV !== 'development';

    if (isPreview) {
        const slug = context.previewData?.slug;
        const draftKey = context.previewData?.draftKey;
        const content = await fetch(
            `https://${process.env.MICRO_CMS_SERVICE_DOMAIN}.microcms.io/api/v1/blog/${slug}${draftKey !== undefined ? `?draftKey=${draftKey}` : ''
            }`,
            {
                headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY || '' },
            }
        ).then((res) => res.json());
        return {
            props: {
                blog: content,
                isPreview: true,
            },
        };
    } else {
        const id = context.params.id;
        const post: IBlog = await client.get({ endpoint: 'blog', contentId: id });

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

        return {
            props: {
                blog: post,
            },
        };
    }
};
