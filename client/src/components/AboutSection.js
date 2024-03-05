import React from "react";
function AboutSection() {
  return (
    <video autoPlay muted loop id="bg-video" width="600" height="200">
      <source
        src="https://static.videezy.com/system/resources/previews/000/042/970/original/bg0002-5.mp4"
        type="video/mp4"
      />
      <source src="/pictures/background.mov" type="video/mov" />
      Your browser does not support the video tag.
    </video>
  );
}
export default AboutSection;
