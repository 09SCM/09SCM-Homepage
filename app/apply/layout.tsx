import type { ReactNode } from 'react';
import { createPageMetadata } from '../metadata-config';

export const metadata = createPageMetadata(
  '솔루션 도입신청',
  '09SCM 솔루션 도입을 위한 사업자정보를 입력하고 신청할 수 있습니다.',
  '/apply/',
);

export default function ApplyLayout({ children }: { children: ReactNode }) {
  return children;
}

