function CitizenShipBlog() {
  const usa =
    "https://d34316robnoe1k.cloudfront.net/bowling.jpeg";

  return (
    <div className="event">
      <h1> A Bowling Legend</h1>
      <h3> May, 2022</h3>
      <img className="poly-img" src={usa} />
      <p>
        A successful school year capped off with a round of bowling! 
      </p>
      <p>
        Our team may have finished last, but we had the most fun, 
        so who's the real winner here?
      </p>
    </div>
  );
}

export default CitizenShipBlog
