import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

type PolicyPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  effectiveDate: string;
  version: string;
  content: string;
};

export default function PolicyPage({
  eyebrow,
  title,
  description,
  effectiveDate,
  version,
  content,
}: PolicyPageProps) {
  return (
    <div className="site-shell policy-shell">
      <SiteHeader />

      <main className="policy-main">
        <article className="policy-document">
          <header className="policy-title">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{description}</p>
          </header>

          <dl className="policy-meta" aria-label={`${title} 시행 정보`}>
            <div>
              <dt>시행일</dt>
              <dd>{effectiveDate}</dd>
            </div>
            <div>
              <dt>버전</dt>
              <dd>{version}</dd>
            </div>
          </dl>

          <div className="policy-current-copy">
            <h2>시행본</h2>
            <div className="policy-copy-box">{content}</div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
