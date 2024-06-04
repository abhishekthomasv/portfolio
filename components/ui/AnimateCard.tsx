"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";

export const PinContainer = ({
  children,
  className,
  containerClassName,
  href,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(0.92)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  const handleProjectClick = () => {
    window.open(`${href}`, "_blank");
  };

  return (
    <div
      onClick={() => {
        handleProjectClick();
      }}
      className={cn(
        "relative group/pin z-50  cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)]  border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn(" relative z-50 ", className)}>{children}</div>
        </div>
      </div>
    </div>
  );
};
