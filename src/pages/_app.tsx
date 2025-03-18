import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import '../app/globals.css';
import RootLayout from '../app/layout';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

/** 堅安全のためのロジック */
declare global {
    interface Window {
        gtag: (command: string, trackingId: string, config?: Record<string, string | number | boolean>) => void;
    }
}

/**
 * カスタムAppコンポーネントで、全ページに共通のレイアウトや設定を提供する。
 * Componentは現在表示されているページのコンポーネント
 * pagePropsは現在のページに渡されるプロパティ
 */
function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        /** ページ遷移時にGoogle Analyticsにページビューを送信する */
        const handleRouteChange = (url: string) => {
            if (GA_TRACKING_ID) {
                window.gtag('config', GA_TRACKING_ID, {
                    page_path: url,
                });
            }
        };

        // ページ遷移が完了したときにhandleRouteChangeを実行する
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            // コンポーネントがアンマウントされた時にイベントリスナーを解除する
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Script
                // ページがインタラクティブになった後にスクリプトを読み込む
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_TRACKING_ID}', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />
            <RootLayout>
                {/* 現在表示されているページのコンポーネントをレンダリングする */}
                <Component {...pageProps} />
            </RootLayout>
        </>
    );
}

export default MyApp;
