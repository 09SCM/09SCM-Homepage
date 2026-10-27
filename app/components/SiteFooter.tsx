export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href="/" aria-label="09SCM 홈페이지">
          <strong>09SCM</strong>
            <span>동네에서 함께 사는 즐거움</span>
        </a>

        <div className="footer-company-info">
          <div className="footer-info-row">
            <span>상호명 : (주)0SCM</span>
            <span>대표자 : 홍길동</span>
            <span>개인정보관리책임자 : 홍길동</span>
            <span>사업자등록번호 : 123-12-12345</span>
            <span>주소 : 서울특별시 구로구 디지털로26길 61, 12층 1202호 (구로동, 에이스하이엔드타워2차)</span>
            <span className="footer-email"><span>이메일 :</span><a href="mailto:support@0scm.com">support@0scm.com</a></span>
          </div>
        </div>

        <div className="footer-bottom">
          <nav className="footer-policies" aria-label="정책 안내">
            <a href="/terms">이용약관</a>
            <a className="privacy-link" href="/privacy">개인정보처리방침</a>
          </nav>
          <p>Copyright © 0SCM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
