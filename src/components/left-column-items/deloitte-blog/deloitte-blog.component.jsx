import "./deloitte-blog.styles.scss"

function DeloitteBlog() {
  const deloitte_boat =
    "https://d34316robnoe1k.cloudfront.net/deloitte_boat.jpg";

  return (
    <div className="deloitte-blog-container">
      <h1> Chris's Consulting Chronicles </h1>
      <h3> Summer, 2022</h3>
      <img className="deloitte-img" src={deloitte_boat} />
      <p>
        I had the great oppurtunity to work as a Software Engineer this summer
        at Deloitte!
      </p>
      <p>
        I've met so many amazing people, and I got to visit Denver, Dallas, and
        Chicago, none of which I would've gotten the chance to see this summer otherwise.
      </p>
    </div>
  );
}

export default DeloitteBlog;