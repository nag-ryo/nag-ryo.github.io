const getSrc = (name: string, extension: string) => {
    return `/images/${name}.${extension}`;
};

// 表示する項目をまとめた配列
export const Items = [
    {
        title: 'Angular',
        desc: 'Google製のフレームワーク Angular の使い方を学ぼう。',
        imgSrc: getSrc('vercel', 'svg'),
        link: '/angular',
    },
    {
        title: 'React',
        desc: 'Facebook製のフレームワーク React の使い方を学ぼう。',
        imgSrc: getSrc('react', 'svg'),
        link: '/react',
    },
    {
        title: 'Git',
        desc: 'GitやGitHubの使い方など。',
        imgSrc: getSrc('github-original', 'svg'),
        link: '/git',
    },
    {
        title: 'Develop',
        desc: 'その他開発に関する情報。企業アイコンのソースなど。',
        imgSrc: getSrc('develop', 'png'),
        link: '/develop',
    },
];
