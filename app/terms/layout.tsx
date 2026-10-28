import type { ReactNode } from 'react';
import { createPageMetadata } from '../metadata-config';

export const metadata = createPageMetadata(
  '이용약관',
  '09SCM 솔루션 이용약관을 확인하세요.',
  '/terms/',
);

export default function TermsLayout({ children }: { children: ReactNode }) {
  return children;
}

