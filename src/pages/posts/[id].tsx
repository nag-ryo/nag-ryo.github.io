import { client } from '@/lib/microcms';
import { format } from 'date-fns';
import { IBlog } from '@/interfaces/i-blog';
import { getBlogData } from '@/lib/blog-service';
import Link from 'next/link';
import Head from 'next/head';
import { CATEGORY } from '@/interfaces/i-category';
import { Box } from '@mui/material';

export default function BlogId({ blog }: { blog: IBlog; isPreview: boolean }) {

    return (
        <article className='pt-16 pb-16'>
            <Head>
                <title>{blog.title} | 炉辺にて、炎と記憶のあいだを旅する</title>
                <meta name="description" content="「炉辺にて、炎と記憶のあいだを旅する」の各記事の画面です。" />
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
                        {blog.tags.map((tag, index) => {
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
                </section>
                <div>
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

        return {
            props: {
                blog: post,
            },
        };
    }
};
