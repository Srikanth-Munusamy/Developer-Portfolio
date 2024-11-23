"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Lottie component with `ssr: false` to disable SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const [defaultOptions, setDefaultOptions] = useState(null);

  useEffect(() => {
    if (animationPath) {
      setDefaultOptions({
        loop: true,
        autoplay: true,
        animationData: animationPath, // Ensure this is a valid JSON object
        style: {
          width: width || "95%",
        },
      });
    }
  }, [animationPath, width]);

  if (!defaultOptions) return null; // Prevent rendering until options are set

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
