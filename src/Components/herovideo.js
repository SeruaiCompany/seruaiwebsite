function HeroVideo( { VideoPath } ) {
  return (
    <div className="HeroContainer">
      <video muted autoPlay loop playsInline className="HeroVideo">
        <source src={VideoPath} />
      </video>
    </div>
  );
}

export default HeroVideo;
