'use client';

import { useState } from 'react';

const GNB = [
  { label: '서비스 소개', href: '#service-intro' },
  { label: '핵심 기능', href: '#features' },
  { label: '이용 흐름', href: '#flow' },
  { label: '도입 절차', href: '#journey' },
  { label: 'FAQ', href: '#faq' },
];

const LOGIN_URL = 'https://09scm.github.io/09SCM/mock/partner.html';

type SiteHeaderProps = {
  isHome?: boolean;
  showApply?: boolean;
};

export default function SiteHeader({ isHome = false, showApply = true }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefix = isHome ? '' : '/';

  return (
    <header className="site-header">
      <a className="brand" href={isHome ? '#top' : '/'} aria-label="09SCM 홈">09SCM</a>

      <nav className={'gnb ' + (mobileOpen ? 'is-open' : '')} aria-label="주요 메뉴">
        {GNB.map((item) => (
          <a key={item.href} href={prefix + item.href} onClick={() => setMobileOpen(false)}>{item.label}</a>
        ))}
        {showApply && (
          <a className="mobile-apply" href="/apply" onClick={() => setMobileOpen(false)}>솔루션 도입신청</a>
        )}
      </nav>

      <div className="header-actions">
        <a className="login-button" href={LOGIN_URL}>09SCM 로그인</a>
        {showApply && <a className="primary-button header-cta" href="/apply">솔루션 도입신청</a>}
      </div>

      <button
        type="button"
        className="mobile-menu-button"
        aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
