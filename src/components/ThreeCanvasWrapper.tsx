"use client";

import dynamic from "next/dynamic";

const ThreePlayground = dynamic(() => import("@/components/ThreePlayground"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center rounded-3xl border border-white/10 bg-slate-900/40 text-sm text-slate-400">
      WebGL 캔버스 준비 중...
    </div>
  ),
});

export default function ThreeCanvasWrapper() {
  return (
    <section className="h-[520px] w-full">
      <ThreePlayground />
    </section>
  );
}
