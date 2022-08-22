import "./my-story.styles.scss"


function MyStory() {
  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg";
  return (
    <div className="my-story-container">
      <img src={imageUrl} className="profile-pic" />
      <div className="profile-text">
        <h1>Hello There!</h1>
        <h2>I am Chris this is me typing, wow so insightful</h2>
        <h2>I am Chris</h2>
        <h2>I am Chris</h2>
        <h2>I am Chris</h2>
        <h2>I am Chris</h2>
        <h2>I am Chris</h2>
      </div>
    </div>
  );
}

export default MyStory