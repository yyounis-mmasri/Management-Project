import { type ReactNode, type MouseEvent, useState } from "react";
import "./Ripple.css";

interface RippleProps {
  children: ReactNode;
  className?: string;
}

interface RippleEffect {
  x: number;
  y: number;
  size: number;
  key: number;
}

const Ripple = ({ children, className = "" }: RippleProps) => {
  const [ripples, setRipples] = useState<RippleEffect[]>([]);

  const addRipple = (e: MouseEvent<HTMLDivElement>) => {
    const rippleContainer = e.currentTarget.getBoundingClientRect();
    // Use larger dimension to ensure ripple covers entire container
    const size = Math.max(rippleContainer.width, rippleContainer.height);
    // Center ripple at click position
    const x = e.clientX - rippleContainer.left - size / 2;
    const y = e.clientY - rippleContainer.top - size / 2;

    const newRipple: RippleEffect = {
      x,
      y,
      size,
      key: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple from state after animation completes (600ms)
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.key !== newRipple.key));
    }, 600);
  };

  return (
    <div className={`ripple-container ${className}`} onMouseDown={addRipple}>
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          className="ripple-effect"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </div>
  );
};

export default Ripple;
