import "./WaterfallBackground.css";

export default function WaterfallBackground() {
  return (
    <div className="waterfall-background" aria-hidden="true">
      <div className="waterfall-glow"></div>

      <img
        src="/images/waterfall.png"
        alt=""
        className="waterfall-image"
      />

      <div className="waterfall-fade"></div>
    </div>
  );
}