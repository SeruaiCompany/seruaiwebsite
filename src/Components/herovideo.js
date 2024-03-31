function HeroVideo( { VideoPath } ) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return (
    <div className="HeroContainer">
      <video className="HeroVideo" muted loop autoPlay={true} {...(isMobile && { playsInline: true })}>
        <source src={VideoPath} type="video/mp4" />
      </video>
    </div>
  );
}

export default HeroVideo;
