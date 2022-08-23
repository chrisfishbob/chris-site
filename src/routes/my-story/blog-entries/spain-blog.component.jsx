function SpainBlog() {
  const spain = "https://racoongrilledcheesecopy.s3.amazonaws.com/spain.jpeg";

  return (
    <div className="event">
      <h1> Spain</h1>
      <h3> Summer, 2022</h3>
      <img className="poly-img" src={spain} />
      <p> Got to visit Spain briefly for a family vacation!</p>
      <p>
        I took almost no pictures so I had to borrow this picture online, but
        Spainish food is amazing. I didn't think I liked ham before arriving at
        Madrid.
      </p>
      <p> Editor's review: Lot's of cool architecture and ... Five Guys? </p>
      <p> Score: 10 /10</p>
    </div>
  );
}

export default SpainBlog;
