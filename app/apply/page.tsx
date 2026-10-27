'use client';

import { FormEvent, useMemo, useState } from 'react';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

type Agreement = 'service' | 'privacy' | 'marketing';
type MockFeedback = { type: 'success' | 'error'; message: string } | null;

const AGREEMENT_COPY: Record<Agreement, { title: string; sections: { heading: string; text: string }[] }> = {
  service: {
    title: '이용약관',
    sections: [
      { heading: '목적과 적용 범위', text: '이 약관은 09SCM 공동구매 운영 솔루션의 이용 신청과 서비스 제공에 관한 기본 사항을 안내합니다. 09SCM은 본사와 가맹점이 상품, 주문, 소매몰 등의 운영 정보를 관리할 수 있도록 지원하는 서비스입니다.' },
      { heading: '도입신청과 심사', text: '신청자는 정확한 회원정보와 사업자 정보를 입력해야 합니다. 도입신청 접수는 서비스 이용 승인을 뜻하지 않습니다. 운영자는 신청 내용을 심사하고 PayApp 연동정보의 입력 및 검증을 거친 뒤 승인 여부를 결정합니다.' },
      { heading: '계정 발급과 이용 시작', text: '운영승인이 완료되면 본사 계정과 소매몰이 생성되며, 신청자에게 계정 이용 방법을 안내합니다. 승인 전에는 본사 관리자와 소매몰을 사용할 수 없습니다. 승인되지 않은 신청에 대해서는 담당자가 필요한 경우 개별적으로 연락할 수 있습니다.' },
      { heading: '계정 관리', text: '이용자는 본인 계정의 로그인 정보를 안전하게 관리하고, 계정으로 이루어진 활동을 확인해야 합니다. 아이디와 연락처 등 신청 정보에 변경이 생기면 운영자에게 알려야 합니다. 타인의 계정을 사용하거나 접근 권한을 공유하여 발생한 문제는 확인 절차가 필요할 수 있습니다.' },
      { heading: '서비스 이용과 운영', text: '이용자는 상품 및 주문 정보를 정확하게 등록하고, 구매자에게 안내한 거래 조건을 지켜야 합니다. 다른 이용자의 권리를 침해하거나 서비스 운영을 방해하는 행위가 확인되면 이용이 제한될 수 있습니다. 제공 기능과 운영 절차는 서비스 화면 및 별도 안내에 따릅니다.' },
      { heading: '결제 연동과 비용', text: '온라인 결제 기능은 별도의 결제 연동 확인을 거쳐 제공됩니다. 결제수수료, 유료 부가서비스 또는 이용료가 적용되는 경우 해당 조건을 확인할 수 있도록 별도로 안내합니다. 이 예시 문구만으로 특정 요금이나 결제 의무가 확정되지는 않습니다.' },
      { heading: '서비스 변경과 문의', text: '안정적인 운영을 위해 기능이나 제공 범위가 변경될 수 있습니다. 이용에 중요한 변경 사항은 서비스 화면이나 등록된 연락처로 안내합니다. 서비스 이용 중 문의가 필요한 경우 홈페이지에 표시된 고객지원 이메일로 연락할 수 있습니다.' },
    ],
  },
  privacy: {
    title: '개인정보처리방침',
    sections: [
      { heading: '처리하는 정보', text: '솔루션 도입신청 과정에서 아이디, 이름, 휴대폰번호, 이메일, 사업자 유형, 본사명, 대표자명, 사업자등록번호, 사업장 주소, 예상 가맹점 수와 문의 내용을 입력받습니다. 법인사업자는 법인등록번호를 추가로 입력할 수 있습니다.' },
      { heading: '이용 목적', text: '입력 정보는 신청 접수와 심사, 사업자 정보 확인, 결제 연동 검토, 신청자와의 연락, 승인 후 계정 안내 및 서비스 운영을 위해 사용합니다. 선택적으로 입력한 문의 내용은 요청 사항을 확인하고 답변하는 데 사용합니다.' },
      { heading: '보유 기간', text: '개인정보는 수집 목적을 달성하는 데 필요한 기간 동안 보유합니다. 신청이 승인되지 않거나 서비스 이용이 종료된 경우에는 관련 법령에 따라 보존할 필요가 있는 정보를 제외하고 지체 없이 파기하는 것을 원칙으로 합니다. 실제 보유 기간은 최종 방침에서 명확히 안내합니다.' },
      { heading: '제공 및 처리 위탁', text: '서비스 제공에 필요한 경우 결제 연동 확인이나 메시지 발송 등을 담당하는 업체에 필요한 범위의 정보 처리를 맡길 수 있습니다. 실제 제공 또는 위탁 대상, 항목과 목적은 적용 전 최종 방침에 명시합니다. 목적과 무관한 용도로 정보를 제공하지 않습니다.' },
      { heading: '보호 조치', text: '개인정보에 접근할 수 있는 사람을 업무상 필요한 범위로 제한하고, 접근 기록과 권한을 관리하는 등 안전한 처리를 위한 조치를 적용합니다. 이용자에게도 계정 정보와 인증 수단을 타인에게 알려주지 않도록 권장합니다.' },
      { heading: '이용자의 권리', text: '이용자는 본인의 개인정보에 대해 열람, 정정, 삭제 또는 처리 정지를 요청할 수 있습니다. 요청은 홈페이지에 표시된 고객지원 이메일을 통해 접수할 수 있습니다. 필수 정보 제공을 거부할 수 있으나, 이 경우 도입신청 접수가 어려울 수 있습니다.' },
    ],
  },
  marketing: {
    title: '마케팅정보 수신동의',
    sections: [
      { heading: '수신 목적', text: '09SCM의 새로운 기능, 활용 방법, 이벤트와 프로모션 등 서비스 운영에 도움이 될 수 있는 선택적 정보를 안내하기 위한 동의입니다. 도입신청 심사 결과나 계정 이용에 필요한 필수 안내와는 구분됩니다.' },
      { heading: '이용 정보와 발송 채널', text: '신청서에 입력한 이메일 또는 휴대폰번호를 사용하여 소식을 전달할 수 있습니다. 실제 발송 채널과 빈도는 서비스 운영 방식에 따라 달라질 수 있으며, 신청 내용과 무관한 제3자의 광고를 임의로 발송하지 않습니다.' },
      { heading: '선택 동의', text: '마케팅정보 수신동의는 선택 사항입니다. 동의하지 않아도 솔루션 도입신청을 제출할 수 있으며, 신청 심사나 기본 서비스 이용에 불이익을 주지 않습니다.' },
      { heading: '동의 철회', text: '동의 후에도 수신한 안내의 거부 방법이나 고객지원 이메일을 통해 언제든 수신을 중단할 수 있습니다. 철회 이후에는 처리에 필요한 시간을 제외하고 선택적 마케팅 안내를 발송하지 않습니다.' },
    ],
  },
};

const digitsOnly = (value: string, length: number) => value.replace(/\D/g, '').slice(0, length);
const formatPhone = (value: string) => {
  const digits = digitsOnly(value, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
};
const formatBusinessNumber = (value: string) => {
  const digits = digitsOnly(value, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 5) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5)}`;
};
const formatCorporateNumber = (value: string) => {
  const digits = digitsOnly(value, 13);
  return digits.length <= 6 ? digits : `${digits.slice(0, 6)}-${digits.slice(6)}`;
};

export default function ApplicationPage() {
  const [businessType, setBusinessType] = useState<'individual' | 'corporate'>('individual');
  const [submitted, setSubmitted] = useState(false);
  const [postcode, setPostcode] = useState('');
  const [baseAddress, setBaseAddress] = useState('');
  const [userId, setUserId] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');
  const [corporateNumber, setCorporateNumber] = useState('');
  const [idFeedback, setIdFeedback] = useState<MockFeedback>(null);
  const [smsFeedback, setSmsFeedback] = useState<MockFeedback>(null);
  const [codeFeedback, setCodeFeedback] = useState<MockFeedback>(null);
  const [businessFeedback, setBusinessFeedback] = useState<MockFeedback>(null);
  const [mockSmsSent, setMockSmsSent] = useState(false);
  const [agreementModal, setAgreementModal] = useState<Agreement | null>(null);
  const [checks, setChecks] = useState({ service: false, privacy: false, marketing: false });
  const allChecked = useMemo(() => Object.values(checks).every(Boolean), [checks]);

  const toggleAll = (checked: boolean) => {
    setChecks({ service: checked, privacy: checked, marketing: checked });
  };

  const submitApplication = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const findMockAddress = () => {
    setPostcode('06134');
    setBaseAddress('서울특별시 강남구 테헤란로 123');
  };

  const checkUserId = () => {
    const value = userId.trim();
    if (!/^[a-z][a-z0-9]{2,19}$/.test(value)) {
      setIdFeedback({ type: 'error', message: '영문 소문자로 시작하는 영문·숫자 3~20자로 입력해 주세요.' });
    } else if (value.toLowerCase() === 'test') {
      setIdFeedback({ type: 'error', message: '이미 사용 중인 아이디입니다. 다른 아이디를 입력해 주세요.' });
    } else {
      setIdFeedback({ type: 'success', message: '사용 가능한 아이디입니다.' });
    }
  };

  const sendMockSms = () => {
    if (digitsOnly(phone, 11).length !== 11) {
      setMockSmsSent(false);
      setSmsFeedback({ type: 'error', message: '휴대폰번호 숫자 11자리를 입력해 주세요.' });
      return;
    }
    setMockSmsSent(true);
    setVerificationCode('');
    setCodeFeedback(null);
    setSmsFeedback({ type: 'success', message: '인증번호: 123456' });
  };

  const confirmMockCode = () => {
    if (!mockSmsSent) {
      setCodeFeedback({ type: 'error', message: '먼저 인증번호 발송을 눌러 주세요.' });
    } else if (verificationCode.trim() === '123456') {
      setCodeFeedback({ type: 'success', message: '휴대폰번호 인증이 완료되었습니다.' });
    } else {
      setCodeFeedback({ type: 'error', message: '인증번호가 일치하지 않습니다.' });
    }
  };

  const checkBusinessNumber = () => {
    if (digitsOnly(businessNumber, 10).length !== 10) {
      setBusinessFeedback({ type: 'error', message: '사업자등록번호 10자리를 입력해 주세요.' });
    } else {
      setBusinessFeedback({ type: 'success', message: '사업자등록번호 형식이 확인되었습니다.' });
    }
  };

  return (
    <div className="site-shell application-shell">
      <SiteHeader showApply={false} />

      <main className="application-main">
        <section className="application-intro">
          <p className="eyebrow">APPLICATION</p>
          <h1>09SCM 솔루션 도입신청</h1>
          <p>프랜차이즈 본사의 09SCM 이용을 신청합니다.</p>
          <ol className="application-steps" aria-label="도입 절차">
            <li><strong>1</strong><span>도입신청</span></li>
            <li><strong>2</strong><span>신청심사</span></li>
            <li><strong>3</strong><span>결제연동</span></li>
            <li><strong>4</strong><span>계정승인</span></li>
            <li><strong>5</strong><span>이용시작</span></li>
          </ol>
        </section>

        <form className="application-form" onSubmit={submitApplication}>
          <section className="form-section">
            <div className="form-section-heading">
              <span>01</span>
              <div><h2>회원정보</h2><p>계정 생성과 신청 결과 안내에 필요한 정보를 입력해 주세요.</p></div>
            </div>
            <div className="field-grid">
              <div className="field field-full">
                <span>아이디 <em>*</em></span>
                <div className="field-action"><input required value={userId} onChange={(event) => { setUserId(event.target.value.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 20)); setIdFeedback(null); }} minLength={3} maxLength={20} pattern="[a-z][a-z0-9]{2,19}" title="영문 소문자로 시작하는 영문·숫자 3~20자로 입력해 주세요." placeholder="영문 소문자로 시작하는 영문·숫자 3~20자" /><button type="button" onClick={checkUserId}>중복확인</button></div>
                {idFeedback && <p className={'mock-feedback ' + idFeedback.type} role="status">{idFeedback.message}</p>}
                <small>※ 아이디는 소매몰 주소(아이디.09scm.com)와 관리자 로그인에 사용되며, 승인 후 변경할 수 없습니다.</small>
              </div>
              <label className="field"><span>이름 <em>*</em></span><input required placeholder="이름 입력" /></label>
              <div className="field">
                <span>휴대폰번호 <em>*</em></span>
                <div className="field-action"><input required value={phone} onChange={(event) => { setPhone(formatPhone(event.target.value)); setMockSmsSent(false); setSmsFeedback(null); setCodeFeedback(null); }} type="tel" inputMode="numeric" maxLength={13} pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" title="휴대폰번호 11자리를 입력해 주세요." placeholder="010-1234-5678" /><button type="button" onClick={sendMockSms}>인증번호 발송</button></div>
                {smsFeedback && <p className={'mock-feedback ' + smsFeedback.type} role="status">{smsFeedback.message}</p>}
                <div className="field-action verification-action"><input required value={verificationCode} onChange={(event) => { setVerificationCode(event.target.value.replace(/\D/g, '').slice(0, 6)); setCodeFeedback(null); }} inputMode="numeric" maxLength={6} pattern="[0-9]{6}" aria-label="인증번호" placeholder="인증번호 입력" /><button type="button" onClick={confirmMockCode}>확인</button></div>
                {codeFeedback && <p className={'mock-feedback ' + codeFeedback.type} role="status">{codeFeedback.message}</p>}
              </div>
              <label className="field field-full"><span>이메일 <em>*</em></span><input required type="email" inputMode="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value.replace(/\s/g, ''))} pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="이메일 주소 형식으로 입력해 주세요." placeholder="name@example.com" /></label>
            </div>
          </section>

          <section className="form-section">
            <div className="form-section-heading">
              <span>02</span>
              <div><h2>본사 사업자 정보</h2><p>프랜차이즈 본사의 사업자 정보를 입력해 주세요.</p></div>
            </div>
            <div className="field-grid">
              <fieldset className="field field-full radio-field">
                <legend>사업자 유형 <em>*</em></legend>
                <label><input type="radio" name="businessType" checked={businessType === 'individual'} onChange={() => setBusinessType('individual')} /> 개인사업자</label>
                <label><input type="radio" name="businessType" checked={businessType === 'corporate'} onChange={() => setBusinessType('corporate')} /> 법인사업자</label>
              </fieldset>
              <label className="field"><span>본사명(상호/법인명) <em>*</em></span><input required placeholder="본사명 입력" /></label>
              <label className="field"><span>대표자명 <em>*</em></span><input required placeholder="대표자명 입력" /></label>
              <div className="field">
                <span>사업자등록번호 <em>*</em></span>
                <div className="field-action"><input required value={businessNumber} onChange={(event) => { setBusinessNumber(formatBusinessNumber(event.target.value)); setBusinessFeedback(null); }} inputMode="numeric" maxLength={12} pattern="[0-9]{3}-[0-9]{2}-[0-9]{5}" title="사업자등록번호 10자리를 입력해 주세요." placeholder="123-45-67890" /><button type="button" onClick={checkBusinessNumber}>사업자인증</button></div>
                {businessFeedback && <p className={'mock-feedback ' + businessFeedback.type} role="status">{businessFeedback.message}</p>}
              </div>
              {businessType === 'corporate' && (
                <label className="field"><span>법인등록번호 <em>*</em></span><input required value={corporateNumber} onChange={(event) => setCorporateNumber(formatCorporateNumber(event.target.value))} inputMode="numeric" maxLength={14} pattern="[0-9]{6}-[0-9]{7}" title="법인등록번호 13자리를 입력해 주세요." placeholder="123456-1234567" /></label>
              )}
              <div className="classification-grid field-full">
                <label className="field"><span>업태</span><input placeholder="업태 입력" /></label>
                <label className="field"><span>업종</span><input placeholder="업종 입력" /></label>
              </div>
              <div className="field field-full">
                <span>사업장 주소 <em>*</em></span>
                <div className="field-action"><input disabled aria-label="우편번호" value={postcode} placeholder="우편번호" /><button type="button" onClick={findMockAddress}>주소찾기</button></div>
                <input disabled className="base-address" aria-label="기본주소" value={baseAddress} placeholder="기본주소" />
                <input required className="detail-address" aria-label="상세주소" placeholder="상세주소 입력" />
              </div>
            </div>
          </section>

          <section className="form-section">
            <div className="form-section-heading">
              <span>03</span>
              <div><h2>솔루션 도입 정보</h2><p>도입 상담 시 참고할 정보를 입력해 주세요.</p></div>
            </div>
            <div className="field-grid">
              <label className="field"><span>현재 또는 예상 가맹점 수</span><div className="unit-input"><input type="number" min="0" placeholder="0" /><b>개</b></div></label>
              <label className="field field-full"><span>문의 및 요청사항</span><textarea rows={5} placeholder="문의하거나 사전에 전달할 내용을 입력해 주세요." /></label>
            </div>
          </section>

          <section className="form-section agreement-section">
            <div className="form-section-heading">
              <span>04</span>
              <div><h2>서비스 이용 및 약관 동의</h2><p>필수 약관에 동의해야 신청할 수 있습니다.</p></div>
            </div>
            <label className="agreement-all"><input type="checkbox" checked={allChecked} onChange={(event) => toggleAll(event.target.checked)} /> 전체 동의</label>
            <div className="agreement-list">
              <label><input required type="checkbox" checked={checks.service} onChange={(event) => setChecks({ ...checks, service: event.target.checked })} /><span><b>[필수]</b> 이용약관</span><button type="button" onClick={() => setAgreementModal('service')}>보기</button></label>
              <label><input required type="checkbox" checked={checks.privacy} onChange={(event) => setChecks({ ...checks, privacy: event.target.checked })} /><span><b>[필수]</b> 개인정보처리방침</span><button type="button" onClick={() => setAgreementModal('privacy')}>보기</button></label>
              <label><input type="checkbox" checked={checks.marketing} onChange={(event) => setChecks({ ...checks, marketing: event.target.checked })} /><span>[선택] 마케팅정보 수신동의</span><button type="button" onClick={() => setAgreementModal('marketing')}>보기</button></label>
            </div>
          </section>

          <div className="application-actions">
            <a className="secondary-button" href={`${BASE_PATH}/`}>메인으로</a>
            <button className="primary-button" type="submit">솔루션 도입신청</button>
          </div>
        </form>
      </main>

      <SiteFooter />

      {agreementModal && (
        <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setAgreementModal(null)}>
          <section className="modal agreement-modal" role="dialog" aria-modal="true" aria-labelledby="agreement-title">
            <button type="button" className="modal-close" aria-label="닫기" onClick={() => setAgreementModal(null)}>×</button>
            <p className="eyebrow">TERMS</p>
            <h2 id="agreement-title">{AGREEMENT_COPY[agreementModal].title}</h2>
            <div className="agreement-copy" tabIndex={0} aria-label={`${AGREEMENT_COPY[agreementModal].title} 내용`}>{`예시 약관입니다. 실제 적용 전 운영 정책과 법률 검토를 거쳐 확정됩니다.\n\n${AGREEMENT_COPY[agreementModal].sections.map((section, index) => `${index + 1}. ${section.heading}\n${section.text}`).join('\n\n')}`}</div>
            <button type="button" className="primary-button agreement-confirm" onClick={() => setAgreementModal(null)}>확인</button>
          </section>
        </div>
      )}

      {submitted && (
        <div className="modal-backdrop">
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="completion-title">
            <div className="modal-message completion">
              <span className="completion-mark" aria-hidden="true">✓</span>
              <p className="eyebrow">COMPLETE</p>
              <h2 id="completion-title">솔루션 도입신청이 접수되었습니다</h2>
              <p>신청 내용을 심사한 후 본사 계정 발급 절차를 안내해드립니다.</p>
              <div className="completion-actions"><a className="secondary-button" href={`${BASE_PATH}/`}>메인으로</a><a className="primary-button" href={`${BASE_PATH}/#service-intro`}>09SCM 솔루션 소개</a></div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
