function DeloitteBlog() {
  const deloitte_boat =
    "http://d34316robnoe1k.cloudfront.net/deloitte_boat.png";

  return (
    <div className="event">
      <h1> Chris's Consulting Chronicles </h1>
      <h3> Summer, 2022</h3>
      <img className="poly-img" src={deloitte_boat} />
      <p>
        I had the great oppurtunity to work as a Software Engineer this summer
        at Deloitte!
      </p>
      <p>
        This website exists solely because of my time working at the firm. To
        say that I was "concerned" would be an understatement when I first got
        my project details and learnt that I had to use HTML, CSS, JavaScript,
        AWS, and ReactJS, which is awesome, except ...
      </p>
      <p> I didn't know any of it</p>
      <p>
        But after many hours, 5000+ lines, and many pull requests, I've learned
        enough to build this website with everything mentioned above and deploy
        it!
      </p>
    </div>
  );
}

export default DeloitteBlog;