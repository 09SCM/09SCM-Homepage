# 09SCM Homepage

09SCM 솔루션 소개 및 솔루션 도입신청 홈페이지 목업 소스입니다.

- 솔루션 소개
- 핵심 기능
- 이용 흐름
- 도입 절차
- FAQ
- 솔루션 도입신청
- 이용약관 및 개인정보처리방침

## 현재 배포 주소

https://09scm.github.io/09SCM-Homepage/

`main` 브랜치에 변경사항이 반영되면 GitHub Actions를 통해 자동 배포됩니다.

## 로컬 실행

```bash
pnpm install
pnpm dev
```

Node.js 22.13 이상이 필요합니다.

## 배포

GitHub Pages용 정적 파일은 `.github/workflows/deploy-pages.yml`에서 생성하고 배포합니다.
