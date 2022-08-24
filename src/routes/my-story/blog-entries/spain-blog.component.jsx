function SpainBlog() {
  const spain = "https://d34316robnoe1k.cloudfront.net/spain-2.jpg";

  return (
    <div className="event">
      <h1> Spain</h1>
      <h3> Summer, 2022</h3>
      <img className="poly-img" src={spain} />
      <p>
        Got to visit Spain briefly for a family vacation! (I look different
        because of the lighting, It's not a drawing).
      </p>
      <p>
        I only took a couple pictures, this being one of them, but Spainish food is amazing. I didn't think
        I liked ham before arriving at Madrid.
      </p>
      <p> Editor's review: Lot's of cool architecture and ... Five Guys? </p>
      <p> Score: 10 /10</p>
    </div>
  );
}

export default SpainBlog;
