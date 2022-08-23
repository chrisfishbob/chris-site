function CitizenShipBlog() {
  const usa =
    "http://myattorneyusa.com/storage/upload/images/citizenship-nationality.jpg";

  return (
    <div className="event">
      <h1> One Of U.S.! </h1>
      <h3> April, 2022</h3>
      <img className="poly-img" src={usa} />
      <p>
        After many years of living in California, I became a naturalized U.S.
        citizen!
      </p>
      <p>
        It hasn't always been easy, moving from Taiwan to a California suburb
        where everyone spoke a different language. Eventually, one day I woke up
        and realized that my inner-dialogue is English. Maybe there is a value
        to binging YouTube videos after all.
      </p>
    </div>
  );
}

export default CitizenShipBlog
