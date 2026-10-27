import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import RevealArticle from './RevealArticle';
import type { ReactNode } from 'react';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

type IconName = 'building' | 'store' | 'users' | 'box' | 'cart' | 'layout' | 'message' | 'truck' | 'chart';

function LineIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    building: <><path d="M4 21V5l8-3 8 3v16" /><path d="M8 9h1M8 13h1M8 17h1M15 9h1M15 13h1M15 17h1M2 21h20" /></>,
    store: <><path d="M3 10h18l-2-6H5l-2 6Z" /><path d="M5 10v10h14V10M9 20v-6h6v6" /><path d="M3 10c0 2 3 2 4 0 1 2 4 2 5 0 1 2 4 2 5 0 1 2 4 2 4 0" /></>,
    users: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-4 2.5-6 6-6s6 2 6 6M14 15c3.5-.5 7 1 7 5" /></>,
    box: <><path d="m4 7 8-4 8 4-8 4-8-4Z" /><path d="M4 7v10l8 4 8-4V7M12 11v10" /></>,
    cart: <><path d="M3 4h2l2 11h10l3-7H7" /><circle cx="9" cy="19" r="1.5" /><circle cx="17" cy="19" r="1.5" /></>,
    layout: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></>,
    message: <><path d="M4 5h16v11H9l-5 4V5Z" /><path d="M8 9h8M8 12h5" /></>,
    truck: <><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></>,
    chart: <><path d="M4 20V10M10 20V5M16 20v-7M22 20H2" /><path d="m4 7 6-4 6 6 5-5" /></>,
  };

  return <svg className="line-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

const FLOW: { icon: IconName; title: string; description: string }[] = [
  { icon: 'box', title: '상품 준비', description: '본사 또는 가맹점이 판매할 상품을 등록해요.' },
  { icon: 'cart', title: '가맹점 주문', description: '가맹점이 필요한 도매상품을 확인하고 주문해요.' },
  { icon: 'layout', title: '소매몰 판매', description: '판매할 상품을 골라 소매몰에 진열해요.' },
  { icon: 'message', title: '고객 주문', description: '고객이 링크 또는 채팅으로 상품을 주문해요.' },
  { icon: 'truck', title: '픽업·배달', description: '결제를 확인하고 픽업이나 배달로 전달해요.' },
  { icon: 'chart', title: '매출 확인', description: '판매 결과와 매출 흐름을 한눈에 확인해요.' },
];

const JOURNEY = [
  { step: 'STEP 1', title: '도입신청', description: '간단한 정보와 사업자 정보를 입력해 주세요.' },
  { step: 'STEP 2', title: '신청심사', description: '담당자가 신청 내용을 확인해요.' },
  { step: 'STEP 3', title: '결제연동', description: '솔루션 이용에 필요한 결제 연동 정보를 확인해요.' },
  { step: 'STEP 4', title: '계정승인', description: '승인이 완료되면 본사 계정과 소매몰이 생성돼요.' },
  { step: 'STEP 5', title: '이용시작', description: '계정 안내를 받은 뒤 09SCM을 시작할 수 있어요.' },
];

function WindowBar({ title }: { title: string }) {
  return <div className="demo-window-bar"><span className="demo-dots"><i /><i /><i /></span><strong>{title}</strong></div>;
}

function ProductThumb({ tone = 'orange' }: { tone?: 'orange' | 'green' | 'yellow' }) {
  return <span className={`product-thumb ${tone}`} aria-hidden="true"><i /><b /></span>;
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="09SCM 관리자와 소매몰 화면 예시">
      <div className="admin-demo hero-admin-demo">
        <WindowBar title="09SCM 관리자" />
        <div className="admin-demo-body">
          <aside className="demo-lnb"><b>소매관리</b><span className="active">매출조회</span><span>주문관리</span><span>상품관리</span></aside>
          <div className="demo-content">
            <div className="demo-title-row"><strong>이번 달 매출</strong><span>최근 30일</span></div>
            <div className="demo-summary-row"><div><small>총 매출</small><strong>12,480,000원</strong></div><div><small>주문</small><strong>328건</strong></div><div><small>결제완료</small><strong>294건</strong></div></div>
            <div className="demo-chart"><i /><i /><i /><i /><i /><i /><i /></div>
            <div className="demo-chart-label"><span>10/01</span><span>10/15</span><span>10/31</span></div>
          </div>
        </div>
      </div>
      <div className="phone-demo hero-phone-demo">
        <div className="phone-speaker" /><div className="phone-head"><b>온마을 공동구매</b><span>장바구니</span></div><p>오늘 픽업 가능상품</p>
        <div className="phone-products"><div><ProductThumb /><b>햇양파 3kg</b><strong>9,900원</strong></div><div><ProductThumb tone="yellow" /><b>성주 참외</b><strong>12,900원</strong></div></div>
        <button type="button">픽업상품 보기</button>
      </div>
      <span className="floating-stat"><small>오늘 주문</small><strong>24건</strong><em>+18%</em></span>
    </div>
  );
}

function ServiceMap() {
  return (
    <div className="service-map" aria-label="본사, 가맹점, 동네 고객의 솔루션 이용 구조">
      <div className="service-node headquarters"><span className="node-icon"><LineIcon name="building" /></span><div><small>상품을 준비하는</small><strong>본사</strong></div></div>
      <span className="map-arrow"><b>도매상품 공유</b>→</span>
      <div className="service-node store"><span className="node-icon"><LineIcon name="store" /></span><div><small>주문하고 판매하는</small><strong>가맹점</strong></div></div>
      <span className="map-arrow"><b>소매몰 판매</b>→</span>
      <div className="service-node customer"><span className="node-icon"><LineIcon name="users" /></span><div><small>픽업·배달로 만나는</small><strong>동네 고객</strong></div></div>
    </div>
  );
}

function ProductFeatureVisual() {
  return (
    <div className="feature-visual product-feature-visual">
      <div className="admin-demo compact-admin"><WindowBar title="상품목록" /><div className="mini-table"><div className="mini-table-head"><span>상품</span><span>상품출처</span><span>보유수량</span><span>관리</span></div><div className="mini-table-row"><span className="product-cell"><ProductThumb /><b>햇양파 10kg</b></span><span>도매주문상품</span><strong>20</strong><button type="button">소매상품 등록</button></div><div className="mini-table-row"><span className="product-cell"><ProductThumb tone="yellow" /><b>성주 참외</b></span><span>내소매상품</span><strong>34</strong><button type="button" className="subtle">상세</button></div></div></div>
      <div className="phone-demo mini-phone product-phone product-status-phone"><div className="phone-speaker" /><small>주문번호 RO1027-001</small><h4>상품을 준비하고 있어요</h4><span className="status-pill">픽업대기</span><div className="pickup-card"><small>픽업가능일</small><b>10/27~10/28</b></div></div>
    </div>
  );
}

function ChatFeatureVisual() {
  return (
    <div className="feature-visual chat-feature-visual">
      <div className="phone-demo mini-phone chat-phone"><div className="phone-speaker" /><div className="chat-head">공동구매 주문방</div><div className="chat-bubble customer-chat"><b>1830</b> 사과 2박스 주문할게요</div><div className="chat-bubble bot-chat">주문이 접수되었습니다.<br />주문 내역을 확인해 주세요.</div></div>
      <div className="admin-demo compact-admin order-receipt-demo"><WindowBar title="주문접수" /><div className="receipt-title"><span>채팅주문</span><b>주문접수</b></div><dl><div><dt>주문자</dt><dd>요리조아</dd></div><div><dt>회원주문 코드</dt><dd>1830</dd></div><div><dt>주문상품</dt><dd>사과 2박스</dd></div><div><dt>수령방식</dt><dd>픽업</dd></div></dl></div>
    </div>
  );
}

function MallFeatureVisual() {
  const tones = ['orange', 'yellow', 'green', 'orange'] as const;
  return (
    <div className="feature-visual mall-feature-visual">
      <div className="desktop-mall-demo"><div className="mall-head"><b>온마을 공동구매</b><span>로그인　장바구니　마이페이지</span></div><div className="mall-section-title"><b>오늘 픽업 가능상품</b><span>픽업상품 보기 →</span></div><div className="mall-product-grid">{tones.map((tone, index) => <div key={index}><ProductThumb tone={tone} /><small>{index % 2 ? '과일' : '채소'}</small><b>{index % 2 ? '성주 참외' : '햇양파 3kg'}</b><strong>{index % 2 ? '12,900원' : '9,900원'}</strong></div>)}</div></div>
      <div className="phone-demo mini-phone mall-phone"><div className="phone-speaker" /><b className="mall-mobile-title">온마을 공동구매</b><p>오늘 픽업 가능상품</p><div className="phone-products"><div><ProductThumb /><b>햇양파</b><strong>9,900원</strong></div><div><ProductThumb tone="yellow" /><b>성주 참외</b><strong>12,900원</strong></div></div></div>
    </div>
  );
}

function PaymentFeatureVisual() {
  return (
    <div className="feature-visual payment-feature-visual">
      <div className="admin-demo compact-admin payment-admin"><WindowBar title="결제현황" /><div className="payment-summary"><div><small>오늘 카드결제</small><strong>326,000원</strong></div><span>10건</span></div><div className="payment-method-list"><span><b>카드결제</b><em>사용중</em></span><span><b>계좌이체</b><em>사용중</em></span><span><b>현장결제</b><em>사용중</em></span></div></div>
      <div className="phone-demo mini-phone checkout-phone"><div className="phone-speaker" /><small>총 결제금액</small><strong>32,700원</strong><p>결제수단</p><label><i className="selected" />카드결제</label><label><i />계좌이체</label><label><i />현장결제</label><button type="button">주문하기</button></div>
    </div>
  );
}

function FeeFeatureVisual() {
  return (
    <div className="feature-visual fee-feature-visual">
      <div className="admin-demo compact-admin fee-admin"><WindowBar title="가맹점 이용료 관리" /><div className="fee-summary"><span><small>운영중 가맹점</small><b>24곳</b></span><span><small>납부완료</small><b>21곳</b></span><span><small>확인필요</small><b>1곳</b></span></div><div className="fee-row"><span>온마을 1호점</span><b>운영중</b><em>납부완료</em></div><div className="fee-row"><span>우리마켓</span><b>운영중</b><em className="scheduled">결제예정</em></div></div>
      <div className="phone-demo mini-phone fee-phone"><div className="phone-speaker" /><small>이번 달 이용료</small><strong>납부 현황</strong><div><span>납부완료</span><b>21곳</b></div><div><span>결제예정</span><b>2곳</b></div><div><span>확인필요</span><b>1곳</b></div></div>
    </div>
  );
}

function SalesFeatureVisual() {
  return (
    <div className="feature-visual sales-feature-visual">
      <div className="admin-demo compact-admin sales-admin"><WindowBar title="매출조회" /><div className="sales-head"><div><small>이번 달 매출</small><strong>12,480,000원</strong></div><em>지난달보다 18% ↑</em></div><div className="sales-chart"><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="payment-ratio"><span><b>68%</b> 카드결제</span><span><b>22%</b> 계좌이체</span><span><b>10%</b> 현장결제</span></div></div>
      <div className="phone-demo mini-phone sales-phone"><div className="phone-speaker" /><small>오늘 매출</small><strong>426,000원</strong><div><span>주문</span><b>12건</b></div><div><span>결제완료</span><b>10건</b></div></div>
    </div>
  );
}

const FEATURES = [
  { number: '01', title: '상품 등록부터 픽업·배달까지', copy: '상품을 등록하고 판매한 뒤, 들어온 주문의 픽업·배달 상태까지 이어서 관리해요. 도매상품을 소매상품으로 전환하거나 가맹점 상품을 직접 등록할 수도 있어요.', points: ['상품 등록', '소매상품 전환', '픽업·배달 관리'], visual: <ProductFeatureVisual /> },
  { number: '02', title: '링크주문과 채팅주문', copy: '소매몰에서 들어온 주문과 채팅으로 받은 주문을 한곳에서 확인해요. 주문 경로가 달라도 같은 주문목록에서 관리할 수 있어요.', points: ['링크주문', '채팅주문', '주문내역 관리'], visual: <ChatFeatureVisual /> },
  { number: '03', title: '가맹점별 소매몰', copy: '가맹점마다 상품을 판매할 수 있는 개별 소매몰을 제공해요. 고객은 앱 설치 없이 모바일이나 PC에서 바로 주문할 수 있어요.', points: ['개별 소매몰', '픽업상품', '배달상품'], visual: <MallFeatureVisual /> },
  { number: '04', title: '카드결제 기본 제공', copy: '복잡한 PG 개발 연동 없이 간단한 가입 절차로 카드결제를 시작할 수 있어요. 카드결제부터 계좌이체, 현장결제까지 주문에 맞게 사용할 수 있어요.', points: ['카드결제 기본 제공', '별도 개발 불필요', '다양한 결제수단'], visual: <PaymentFeatureVisual /> },
  { number: '05', title: '가맹점 운영과 이용료 관리', copy: '가맹점별 이용 상태와 본사의 운영 정책에 따른 이용료를 관리해요. 정기결제와 납부 현황도 한곳에서 확인할 수 있어요.', points: ['가맹점 이용상태', '이용료 설정', '납부 관리'], visual: <FeeFeatureVisual /> },
  { number: '06', title: '매출 흐름 확인', copy: '소매와 도매 거래를 구분하고 기간별 매출을 한눈에 확인해요. 결제수단별 판매 현황도 간편하게 살펴볼 수 있어요.', points: ['기간별 매출', '결제수단별 현황', '소매·도매 구분'], visual: <SalesFeatureVisual /> },
];

export default function LandingPage() {
  return (
    <div className="site-shell"><SiteHeader isHome /><main id="top">
      <section className="hero"><div className="hero-inner hero-layout"><div className="hero-copy"><p className="eyebrow">09SCM 공동구매 운영 솔루션</p><h1>동네에서 함께 사는{' '}<br /><span>즐거움</span></h1><p className="hero-description">본사와 가맹점이 함께 상품을 준비하고{' '}<br />우리 동네 고객과 공동구매를 시작해 보세요.</p><p className="hero-subcopy">상품 등록부터 주문, 결제, 픽업·배달, 매출 확인까지{' '}<br />09SCM에서 한 번에 관리할 수 있어요.</p><div className="hero-actions"><a className="primary-button" href={`${BASE_PATH}/apply/`}>솔루션 도입신청</a><a className="secondary-button" href="#service-intro">솔루션 살펴보기</a></div></div><HeroVisual /></div><div className="hero-fee-banner section-inner"><div><span>09SCM 솔루션 이용료</span><strong>0원</strong></div><p><b>이용료 부담 없이 공동구매를 시작하세요.</b>{' '}상품 등록부터 주문·결제·매출 관리까지 필요한 기능을 함께 제공해요.</p><a className="primary-button" href={`${BASE_PATH}/apply/`}>솔루션 도입신청</a></div></section>

      <section className="section" id="service-intro"><div className="section-inner"><div className="section-heading centered narrow-heading"><p className="eyebrow">SERVICE</p><h2>공동구매 운영,{' '}<br />이제 한곳에서 시작하세요</h2><p>09SCM은 본사와 가맹점이 함께 사용하는 공동구매 운영 솔루션이에요.</p></div><ServiceMap /><div className="service-benefits"><article><span>01</span><h3>본사와 가맹점이 함께</h3><p>상품과 주문 정보를 같은 흐름에서 확인해요.</p></article><article><span>02</span><h3>도매와 소매를 한곳에서</h3><p>상품 공급부터 소비자 판매까지 이어서 관리해요.</p></article><article><span>03</span><h3>우리 동네 고객과 가깝게</h3><p>가맹점별 소매몰에서 픽업·배달 주문을 받아요.</p></article></div></div></section>

      <section className="section section-muted" id="features"><div className="section-inner"><div className="section-heading centered narrow-heading"><p className="eyebrow">CORE FEATURES</p><h2>공동구매에 필요한 기능을{' '}<br />하나로 연결했어요</h2><p>상품을 준비하는 순간부터 고객이 상품을 받는 순간까지, 09SCM이 공동구매 운영의 흐름을 이어드려요.</p></div><div className="feature-showcases">{FEATURES.map((feature, index) => <RevealArticle className={`feature-showcase${index % 2 ? ' visual-first' : ''}`} key={feature.number}><div className="feature-copy"><span className="feature-number">{feature.number}</span><h3>{feature.title}</h3><p>{feature.copy}</p><ul>{feature.points.map((point) => <li key={point}>{point}</li>)}</ul></div>{feature.visual}</RevealArticle>)}</div></div></section>

      <section className="section" id="flow"><div className="section-inner"><div className="section-heading centered narrow-heading"><p className="eyebrow">WORKFLOW</p><h2>상품 등록부터 매출 확인까지{' '}<br />하나의 흐름으로 이어져요</h2><p>본사에서 준비한 상품이 가맹점을 거쳐 우리 동네 고객에게 전달되는 과정을 확인해 보세요.</p></div><ol className="flow-list detailed-flow">{FLOW.map((item, index) => <li key={item.title}><i><LineIcon name={item.icon} /></i><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{item.title}</strong><p>{item.description}</p></div></li>)}</ol></div></section>

      <section className="section section-dark" id="journey"><div className="section-inner"><div className="section-heading journey-heading"><p className="eyebrow">ONBOARDING</p><h2>신청부터 이용까지{' '}<br />차근차근 안내해 드려요</h2><p>복잡하게 준비할 필요 없어요.{' '}<br />신청 내용을 확인한 뒤 필요한 절차를 안내해 드립니다.</p></div><div className="journey-grid">{JOURNEY.map((item) => <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div><div className="journey-action"><p>우리 가게 공동구매를 더 편하게 운영해 보세요.</p><a className="primary-button light-button" href={`${BASE_PATH}/apply/`}>솔루션 도입신청</a></div></div></section>

      <section className="section" id="faq"><div className="section-inner faq-grid"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>궁금한 내용을{' '}<br />확인해 보세요</h2><p>도입 전 자주 묻는 내용을 간단하게 정리했어요.</p><div className="faq-topics"><span>도입 방법</span><span>소매몰</span><span>주문</span><span>결제</span></div></div><div className="faq-list"><details><summary>09SCM은 어떤 솔루션인가요?</summary><p>본사와 가맹점이 상품, 주문, 결제, 발주와 매출 정보를 함께 관리할 수 있는 공동구매 운영 솔루션이에요.</p></details><details><summary>누가 이용할 수 있나요?</summary><p>공동구매 상품을 공급하고 가맹점과 함께 운영하려는 본사를 대상으로 해요. 승인 후 본사와 가맹점이 함께 사용할 수 있습니다.</p></details><details><summary>가맹점마다 별도의 소매몰이 제공되나요?</summary><p>네. 승인이 완료되면 본사 계정과 소매몰이 생성되며, 가맹점도 각자의 소매몰에서 상품을 판매할 수 있어요.</p></details><details><summary>소비자가 별도의 앱을 설치해야 하나요?</summary><p>아니요. 전달받은 소매몰 링크에 접속해 모바일이나 PC에서 바로 상품을 확인하고 주문할 수 있어요.</p></details><details><summary>온라인 주문과 채팅주문을 함께 관리할 수 있나요?</summary><p>소매몰을 통한 링크주문과 판매자가 접수하는 채팅주문을 한곳에서 확인할 수 있어요.</p></details><details><summary>어떤 결제수단을 사용할 수 있나요?</summary><p>카드결제, 계좌이체, 현장결제를 주문 방식에 맞게 사용할 수 있어요.</p></details><details><summary>도입 신청 후에는 어떻게 진행되나요?</summary><p>신청 내용을 심사하고 결제 연동 정보를 확인한 뒤 운영승인을 진행해요. 승인이 완료되면 본사 계정과 소매몰이 생성되며 이용 방법을 안내해 드립니다.</p></details></div></div></section>

      <section className="closing-cta"><div className="section-inner"><p className="eyebrow">GET STARTED</p><h2>동네에서 함께 사는 즐거움,{' '}<br />09SCM으로 시작해 보세요</h2><p>본사와 가맹점의 상품, 주문, 결제 흐름을 한곳에서 이어서 관리할 수 있어요.</p><a className="primary-button light-button" href={`${BASE_PATH}/apply/`}>솔루션 도입신청</a></div></section>
    </main><SiteFooter /></div>
  );
}
