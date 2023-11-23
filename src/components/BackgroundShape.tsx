export const BackgroundShape = () => {
  return (
    <>
      <div
        style={{
          zIndex: -1,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(/images/texture.png)",
          backgroundRepeat: "repeat",
        }}
      ></div>
      <div
        style={{
          zIndex: -2,
          position: "absolute",
          top: "-227px",
          left: "-150px",
          width: "820px",
          height: "820px",
          transform: "rotate(-17.891deg)",
          flexShrink: 0,
          borderRadius: "820px",
          background: "linear-gradient(180deg, rgba(0, 194, 255, 0.00) 0%, #FF29C3 100%)",
          filter: "blur(100px)",
        }}
      ></div>
      <div
        style={{
          zIndex: -2,
          position: "absolute",
          top: "68px",
          left: "168px",
          width: "394px",
          height: "559px",
          transform: "rotate(-17.891deg)",
          flexShrink: 0,
          background: "linear-gradient(180deg, rgba(24, 75, 255, 0.00) 0%, #174AFF 100%)",
          filter: "blur(100px)",
        }}
      ></div>
    </>
  );
};
