const Video = () => {
  return (
    <div className="w-full my-10 mt-20 b">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-1 p-6 min-w-[540px] h-[400px] md:h-[740px] ">
        <iframe
          className="w-full h-full "
          src="https://www.youtube.com/embed/H77P44Ki6QY"
          title="Tohands V4 Smart Calculator: Your All-In-One Device for Shops ! #tohands #tohandsV4 #smartcalculator"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
export default Video;
