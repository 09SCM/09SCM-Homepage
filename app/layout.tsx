import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '0SCM | 공동구매 운영 솔루션 09SCM',
  description: '0SCM이 제공하는 공동구매 운영 솔루션 09SCM. 상품, 주문, 결제, 발주, 정산을 하나로 연결합니다.',
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
