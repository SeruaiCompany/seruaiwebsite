function HeroVideo( { VideoPath } ) {
  return (

    <div className="HeroContainer">

        <video playsinline className="HeroVideo" muted loop autoplay>
        <source src={VideoPath} type="video/mp4" />
        </video>

    </div>

  );
}

export default HeroVideo;
