import { getPostData, getSortedPostsData } from '@/lib/posts';

export async function getStaticPaths() {
    const allPostsData = getSortedPostsData();
    const paths = allPostsData.map(({ slug }) => ({
        params: { slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const postData = await getPostData(params.slug, 'tailwindcss');
    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }: { postData: { title: string; contentHtml: string } }) {
    return (
        <>
            <h1 className="text-4xl font-bold">{postData.title}</h1>
            <div
                className="markdown"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
        </>
    );
}
