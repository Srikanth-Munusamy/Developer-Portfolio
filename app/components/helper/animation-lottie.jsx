"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures this runs only on the client
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing during SSR
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || "95%", // Dynamically use passed width or fallback
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
