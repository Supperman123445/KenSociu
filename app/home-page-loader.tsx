"use client";

import { useEffect, useState } from "react";
import HomePageClient from "./home-page-client";
import { Locale } from "@/lib/i18n";

type HomePageLoaderProps = {
  locale: Locale;
  detectedCountryCode?: string | null;
  detectedCallingCode?: string | null;
  detectedIp?: string | null;
  detectedLocation?: string | null;
};

export default function HomePageLoader(props: HomePageLoaderProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!ready) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          color: "#000000",
          fontSize: "18px",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        Loading...
      </div>
    );
  }

  return <HomePageClient {...props} />;
}
