import type { ReactNode } from 'react';
import { createPageMetadata } from '../metadata-config';

export const metadata = createPageMetadata(
  '개인정보처리방침',
  '09SCM 솔루션 개인정보처리방침을 확인하세요.',
  '/privacy/',
);

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return children;
}

