import { ImageResponse } from "next/og";

export const alt = "Dra. Juliana Druzian — Reumatologia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 72,
          background:
            "linear-gradient(135deg, #f5f1ed 0%, #ffffff 45%, #e8b4b8 100%)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 28,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#7a9e9f",
            fontWeight: 600,
          }}
        >
          Reumatologia
        </p>
        <h1
          style={{
            margin: "16px 0 0 0",
            fontSize: 72,
            lineHeight: 1.05,
            color: "#3d3430",
            fontWeight: 500,
          }}
        >
          Dra. Juliana Druzian
        </h1>
        <p
          style={{
            margin: "20px 0 0 0",
            fontSize: 30,
            color: "#6b5e58",
            maxWidth: 720,
            lineHeight: 1.35,
          }}
        >
          Atendimento humanizado, precisão clínica e ciência a seu favor.
        </p>
      </div>
    ),
    { ...size },
  );
}
