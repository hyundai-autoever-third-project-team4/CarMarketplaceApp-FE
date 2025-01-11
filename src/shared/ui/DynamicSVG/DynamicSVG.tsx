import { useState, useEffect } from "react";

interface DynamicSVGProps {
  svgUrl: string;
  color: string;
  width: number;
  height: number;
  alt?: string;
}

const DynamicSVG = ({
  svgUrl,
  color,
  width = 24,
  height = 24,
  alt = "icon",
  ...props
}: DynamicSVGProps) => {
  const [svgContent, setSvgContent] = useState("");

  const toBase64 = (str: string) => {
    return window.btoa(unescape(encodeURIComponent(str)));
  };

  useEffect(() => {
    fetch(svgUrl)
      .then((response) => response.text())
      .then((data) => {
        // SVG를 파싱
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "image/svg+xml");
        const svg = doc.querySelector("svg");

        if (svg) {
          // 모든 path, circle, rect 등의 요소를 찾아서 색상 적용
          const elements = svg.querySelectorAll(
            "path, circle, rect, line, polyline, polygon"
          );
          elements.forEach((el) => {
            // fill="none"이 아닌 경우에만 fill 적용
            if (el.getAttribute("fill") !== "none") {
              el.setAttribute("fill", color);
            }
            // stroke가 있는 경우 stroke도 적용
            if (el.getAttribute("stroke")) {
              el.setAttribute("stroke", color);
            }
          });

          // 수정된 SVG를 문자열로 변환
          const coloredSVG = new XMLSerializer().serializeToString(svg);
          const encodedSvg = toBase64(coloredSVG);
          setSvgContent(`data:image/svg+xml;base64,${encodedSvg}`);
        }
      });
  }, [svgUrl, color]);

  return (
    <img src={svgContent} alt={alt} width={width} height={height} {...props} />
  );
};

export default DynamicSVG;
