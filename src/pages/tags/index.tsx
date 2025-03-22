import Link from 'next/link';
import Head from 'next/head';
import { getTagData } from '@/lib/blog-service';
import { ITag } from '@/interfaces/i-tag';
import styles from './tags.module.css';

export const getStaticProps = async () => {
    const tags = await getTagData();

    return {
        props: {
            tags,
        },
    };
};

export default function TagsPage({ tags }: { tags: ITag[] }) {
    return (
        <>
            <Head>
                <title>Tags - Nag&apos;s Blog</title>
                <meta name="description" content="「Nag's Blog」のタグ一覧ページです。" />
            </Head>
            <main className="pt-8 pb-8">
                <h1 className="text-2xl font-bold mb-4">Tags</h1>
                <ul className={styles['tag-list']}>
                    {tags.map((tag, index) => (
                        <li className={styles.tag} key={index}>
                            <Link href={`/tags/${tag.urlName}`}>
                                <span className={`bg-${tag.color}-100 text-${tag.color}-700 px-2 py-0.5 rounded text-sm`}>
                                    {tag.name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}
