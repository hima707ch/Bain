export default function Video() {
  return (
    <div className="vedio">
      <iframe
        title="vedio"
        width="100%"
        height="800px"
        object-fit="cover"
        src="https://www.youtube.com/embed/OvdhP-D3XVQ?autoplay=1&mute=1&rel=0"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
