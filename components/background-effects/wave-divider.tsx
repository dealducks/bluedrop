"use client";

interface WaveDividerProps {
  position?: "top" | "bottom";
  variant?: "gentle" | "flowing" | "layered" | "ripple";
  color?: "primary" | "secondary" | "muted" | "background" | "white";
  flip?: boolean;
  className?: string;
}

export function WaveDivider({
  position = "bottom",
  variant = "gentle",
  color = "background",
  flip = false,
  className = "",
}: WaveDividerProps) {
  const colorClasses = {
    primary: "fill-primary",
    secondary: "fill-secondary",
    muted: "fill-muted",
    background: "fill-background",
    white: "fill-white",
  };

  const positionClasses = {
    top: "top-0",
    bottom: "bottom-0",
  };

  const waveVariants = {
    gentle: (
      <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
    ),
    flowing: (
      <>
        <path d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,112C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </>
    ),
    layered: (
      <>
        <path
          d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,112C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fillOpacity="0.5"
        />
        <path
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,197.3C960,192,1056,192,1152,197.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fillOpacity="0.3"
        />
      </>
    ),
    ripple: (
      <path d="M0,128L40,138.7C80,149,160,171,240,165.3C320,160,400,128,480,128C560,128,640,160,720,170.7C800,181,880,171,960,154.7C1040,139,1120,117,1200,117.3C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
    ),
  };

  const svgTransform = flip ? "scale(1, -1)" : "scale(1, 1)";

  return (
    <div
      className={`pointer-events-none absolute left-0 right-0 overflow-hidden ${positionClasses[position]} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className={`w-full h-16 sm:h-20 md:h-24 lg:h-28 ${colorClasses[color]}`}
        style={{ transform: svgTransform }}
      >
        {waveVariants[variant]}
      </svg>
    </div>
  );
}
