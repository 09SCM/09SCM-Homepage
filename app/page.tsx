import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import LandingPage from './components/LandingPage';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const FEATURES = [
  { number: '01', title: '소매상품·주문 관리', description: '상품 진열부터 소비자 주문과 수령 처리까지 소매 운영 흐름을 관리합니다.' },
  { number: '02', title: '도매상품·발주 관리', description: '본사와 가맹점이 도매상품을 공급하고 발주·수령 내역을 확인합니다.' },
  { number: '03', title: '결제·정산 현황', description: '소매·도매 거래와 이용료 결제·정산 현황을 운영 주체별로 확인합니다.' },
  { number: '04', title: '본사·가맹점 운영 관리', description: '본사의 가맹점 신청 승인과 계정·운영 정보를 한곳에서 관리합니다.' },
];

const FLOW = ['상품 등록', '주문 수집', '결제 확인', '발주·배송', '정산 완료'];
const JOURNEY = [
  { step: 'STEP 1', title: '도입신청', description: '신청 접수 후 본사 상태는 승인대기가 됩니다. 계정과 소매몰은 아직 생성되지 않습니다.' },
  { step: 'STEP 2', title: '신청심사', description: 'UDID 담당자가 신청 내용을 심사하고 PayApp 연동정보를 입력·검증합니다.' },
  { step: 'STEP 3', title: '결제연동', description: 'PayApp 연동 검증이 완료돼야 운영승인이 가능합니다.' },
  { step: 'STEP 4', title: '계정승인', description: '운영승인 시 운영중으로 전환되며 09SCM 본사 계정과 소매몰이 생성됩니다.' },
  { step: 'STEP 5', title: '이용시작', description: '계정 안내를 받은 뒤 09SCM 서비스를 이용합니다.' },
];

function LegacyHome() {
  return (
    <div className="site-shell">
      <SiteHeader isHome />

      <main id="top">
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">0SCM이 제공하는 공동구매 운영 솔루션</p>
            <h1>프랜차이즈 본사와 가맹점의<br />공동구매 운영을 <span>하나로</span></h1>
            <p className="hero-description">
              09SCM은 상품 등록부터 주문·결제·발주·정산까지<br />
              본사와 가맹점의 공동구매 운영 업무를 연결합니다.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href={`${BASE_PATH}/apply/`}>솔루션 도입신청</a>
              <a className="secondary-button" href="#features">핵심 기능 보기</a>
            </div>
            <div className="value-strip" aria-label="서비스 주요 가치">
              <span><strong>01</strong> 공동구매 운영 통합</span>
              <span><strong>02</strong> 본사·가맹점 연결</span>
              <span><strong>03</strong> 승인 후 본사 계정 발급</span>
            </div>
          </div>
        </section>

        <section className="section" id="service-intro">
          <div className="section-inner intro-grid">
            <div className="section-heading">
              <p className="eyebrow">SERVICE</p>
              <h2>공동구매 운영의<br />기준을 정리합니다</h2>
            </div>
            <div className="intro-copy">
              <p>
                0SCM은 프랜차이즈 본사의 도입신청을 검토하고 09SCM 이용을 지원합니다. 09SCM에서는 본사와 가맹점이 상품, 주문, 결제, 발주, 정산 정보를 같은 흐름에서 확인할 수 있습니다.
              </p>
              <div className="intro-points">
                <div><strong>통합 관리</strong><span>분산된 운영 정보를 한곳에서 확인</span></div>
                <div><strong>업무 연결</strong><span>상품부터 정산까지 단계별 흐름 연결</span></div>
                <div><strong>운영 확장</strong><span>본사와 가맹점 구조에 맞춘 관리 환경</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="features">
          <div className="section-inner">
            <div className="section-heading centered">
              <p className="eyebrow">CORE FEATURES</p>
              <h2>운영에 필요한 핵심 기능</h2>
              <p>복잡한 기능을 늘리기보다 실제 공동구매 운영에 필요한 흐름을 우선합니다.</p>
            </div>
            <div className="feature-grid">
              {FEATURES.map((feature) => (
                <article className="feature-card" key={feature.number}>
                  <span>{feature.number}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="flow">
          <div className="section-inner">
            <div className="section-heading centered">
              <p className="eyebrow">WORKFLOW</p>
              <h2>하나로 이어지는 이용 흐름</h2>
            </div>
            <ol className="flow-list">
              {FLOW.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item}</strong>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section-dark" id="journey">
          <div className="section-inner">
            <div className="section-heading journey-heading">
              <p className="eyebrow">ONBOARDING</p>
              <h2>09SCM 도입 절차</h2>
              <p>신청 심사와 PayApp 연동 확인 후 운영승인이 완료되면 본사 계정과 소매몰이 생성됩니다.</p>
            </div>
            <div className="journey-grid">
              {JOURNEY.map((item) => (
                <article key={item.step}>
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-inner faq-grid">
            <div className="section-heading">
              <p className="eyebrow">FAQ</p>
              <h2>자주 묻는 질문</h2>
              <p>09SCM 도입 전 자주 확인하는 내용을 정리했습니다.</p>
            </div>
            <div className="faq-list">
              <details>
                <summary>09SCM은 어떤 솔루션인가요?</summary>
                <p>0SCM이 제공하며, 공동구매 운영 과정의 상품, 주문, 결제, 발주, 정산을 하나의 흐름으로 관리하도록 돕는 SCM 솔루션입니다.</p>
              </details>
              <details>
                <summary>누가 사용할 수 있나요?</summary>
                <p>본사와 가맹점 등 공동구매 운영 주체를 대상으로 설계되어 있습니다.</p>
              </details>
              <details>
                <summary>도입 비용이 있나요?</summary>
                <p>도입 조건과 적용 범위는 신청정보 확인 후 담당자가 안내합니다.</p>
              </details>
              <details>
                <summary>도입 신청 후에는 어떻게 진행되나요?</summary>
                <p>신청 접수 후 승인대기 상태에서 UDID 담당자가 신청 내용과 PayApp 연동정보를 심사·검증합니다. 검증 후 운영승인되면 본사 계정과 소매몰이 생성되며, 계정 안내를 받은 뒤 서비스를 이용할 수 있습니다.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="closing-cta">
          <div className="section-inner">
            <p className="eyebrow">GET STARTED</p>
            <h2>09SCM으로 공동구매 운영을 시작하세요</h2>
            <p>신청서를 접수하면 담당자가 심사와 PayApp 연동 확인을 진행하고, 운영승인 후 계정 이용을 안내합니다.</p>
            <a className="primary-button light-button" href={`${BASE_PATH}/apply/`}>솔루션 도입신청</a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

export default LandingPage;
