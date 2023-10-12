"use client";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";
export default function UidProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (typeof window === "undefined") return null;
  if (!mounted) return <Spinner />;
}
