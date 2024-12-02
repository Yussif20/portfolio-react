import bgVideo from '../assets/video-loop.mp4';

const VideoBackground = () => {
  return (
    <video
      className="fixed top-0 left-0 w-full h-full object-cover opacity-80 -z-10"
      loop
      autoPlay
      muted
    >
      <source src={bgVideo} type="video/mp4" />
    </video>
  );
};

export default VideoBackground;