import "./site-info.styles.scss"

function SiteInfo() {
  return (
    <div className="site-info-container">
      <h1>Site Info</h1>
      <dl>
        <dt>- Frontend </dt>
        <dd>
          <span> ReactJS <span className="description"> (UI Library) </span></span>
        </dd>
        <dd>
          <span> JavaScript <span className="description"> (Because web-dev) </span></span>
        </dd>
        <dd>
          <span> SASS <span className="description"> (CSS pre-preocessor) </span></span>
        </dd>
        <dd>
          <span> HTML <span className="description"> (Because web-dev) </span></span>
        </dd>
      </dl>

      <dl>
        <dt>- Backend </dt>
        <dd>
          <span> AWS Amplify <span className="description"> (for auto-scaling) </span></span>
        </dd>
        <dd>
          <span> AWS CloudFront <span className="description"> (Content Caching) </span></span>
        </dd>
        <dd>
          <span> AWS Route 53 <span className="description"> (Domain Name) </span></span>
        </dd>
        <dd>
          <span> AWS S3 <span className="description"> (Database / storage) </span></span>
        </dd>
      </dl>
    </div>
  );
}

export default SiteInfo;
