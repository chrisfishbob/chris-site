import "./site-info.styles.scss"

function SiteInfo() {
  return (
    <div className="site-info-container">
      <h1>Site Info</h1>
      <dl>
        <dt> Front End</dt>
        <dd>- ReactJS</dd>
        <dd>- JavaScript</dd>
        <dd>- SASS </dd>
        <dd>- HTML </dd>
      </dl>

      <dl>
        <dt>- Backend </dt>
        <dd>
          - AWS Amplify
          <dd className="expand-description"> For continuous deployment and hosting.</dd>
        </dd>
        <dd>- AWS Route53
          <dd className="expand-description"> For domain name regustration</dd>
        
        </dd>
        <dd>- AWS CloudFront</dd>
        <dd>- AWS S3</dd>
      </dl>
    </div>
  );
}

export default SiteInfo;
