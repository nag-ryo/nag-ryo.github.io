import { client } from '@/lib/microcms';
import { IBlog } from '@/interfaces/i-blog';

/**
 * APIを叩いてブログデータの全てを取得する
 * @returns
 */
export const getBlogData = async (): Promise<IBlog[]> => {
    const data = await client.get({ endpoint: process.env.MICRO_CMS_ENDPOINT_BLOG as string });
    return data.contents || [];
};
