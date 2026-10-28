import type { Metadata } from 'next';

const SITE_URL = 'https://09scm.github.io/09SCM-Homepage';
const SHARE_DESCRIPTION = '동네에서 함께 사는 즐거움. 본사와 가맹점의 공동구매 운영을 09SCM에서 한 번에 관리하세요.';
const SHARE_IMAGE = `${SITE_URL}/OGimg_hp.png`;

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${SITE_URL}${path}`;
  const shareTitle = `${title} | 09SCM`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: shareTitle,
      description: SHARE_DESCRIPTION,
      type: 'website',
      url,
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
      title: shareTitle,
      description: SHARE_DESCRIPTION,
      images: [SHARE_IMAGE],
    },
  };
}

