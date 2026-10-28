import type { Metadata } from 'next';
import './globals.css';

const SITE_URL = 'https://09scm.github.io/09SCM-Homepage/';
const SITE_TITLE = '09SCM | 공동구매 운영 솔루션';
const SITE_DESCRIPTION = '상품 등록부터 주문, 결제, 픽업·배달, 매출 확인까지 한곳에서 관리하는 공동구매 운영 솔루션 09SCM입니다.';
const SHARE_DESCRIPTION = '동네에서 함께 사는 즐거움. 본사와 가맹점의 공동구매 운영을 09SCM에서 한 번에 관리하세요.';
const SHARE_IMAGE = `${SITE_URL}OGimg_hp.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: '09SCM',
  title: {
    default: SITE_TITLE,
    template: '%s | 09SCM',
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: `${SITE_URL}favicon_hp.png`,
    apple: `${SITE_URL}favicon_hp.png`,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SHARE_DESCRIPTION,
    type: 'website',
    url: SITE_URL,
    siteName: '09SCM',
    locale: 'ko_KR',
    images: [
      {
        url: SHARE_IMAGE,
        width: 1200,
        height: 630,
        alt: '09SCM 공동구매 운영 솔루션',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SHARE_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

