import * as React from "react";
import LogoImage from "./LogoImage";

function BrandLogos() {
  const logos = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/b3452af49f42ccb59ab3bd5ade6ebeb848d4a10cd04a2934d996fcf0514d4f16?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
      width: 85,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/435c2f760b740d2167049bfadfecad23a20a592115b1cb29ddefc54dec3e555b?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
      width: 107,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/5e1e95961c709a7d661bd7fec3f57a8de27f9aa84172ae55d33691253a10eacf?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
      width: 135,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/5e5c1d406eab7040ec39a7c41f97a5fd0ed501b5db7d8a69c0f2a5171a1d59a4?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
      width: 63,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/0072d26c0c7a489517a6c20a4ee9fcca964e549c265c80bf79e9ec4ad6a36394?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
      width: 98,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/3624fff27ec7062d3d12d1f75d4dcfa268fa63c036d2418ba52f36c53029a79d?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
      width: 113,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/f0ebcbd8fe198f79bf867fc855b5f515f17fc8f1cac587aad5f46eff6598723e?apiKey=2b47d56e3c75429e95bbdc40507f265e&",
      width: 84,
    },
  ];

  return (
    <div
      className="flex flex-wrap justify-center items-center gap-7 max-w-full mx-auto overflow-hidden"
      role="region"
      aria-label="Brand logos"
    >
      {logos.map((logo, index) => (
        <LogoImage key={`logo-${index}`} src={logo.src} width={50} />
      ))}
    </div>
  );
}

export default BrandLogos;
