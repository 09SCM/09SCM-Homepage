const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href={`${BASE_PATH}/`} aria-label="09SCM 홈페이지">
          <strong>09SCM</strong>
            <span>동네에서 함께 사는 즐거움</span>
        </a>

        <div className="footer-company-info">
          <div className="footer-info-row">
            <span>상호명 : (주)유디아이디</span>
            <span>대표자 : 정재훈</span>
            <span>사업자등록번호 : 113-86-56537</span>
            <span>통신판매업 신고번호 : 제 2012-서울구로-0239호</span>
            <span>사업장 주소 : [08389] 서울특별시 구로구 디지털로26길 61, 12층 1202, 1203호 (구로동, 에이스하이엔드타워 II)</span>
          </div>
        </div>

        <div className="footer-bottom">
          <nav className="footer-policies" aria-label="정책 안내">
            <a href={`${BASE_PATH}/terms/`}>이용약관</a>
            <a className="privacy-link" href={`${BASE_PATH}/privacy/`}>개인정보처리방침</a>
          </nav>
          <p>Copyright © UDID Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
