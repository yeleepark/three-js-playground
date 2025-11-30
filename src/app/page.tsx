import ThreeCanvasWrapper from "@/components/ThreeCanvasWrapper";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950/95 px-6 py-16 text-white">
      <main className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
        <section className="flex flex-col gap-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Three.js Playground
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            Next.js + React Three Fiber 조합으로
            <span className="text-sky-400"> 실시간 WebGL</span>을 연습하세요.
          </h1>
          <p className="text-base leading-7 text-slate-300">
            App Router의 사전 렌더링과 캐싱을 활용하면 UI는 서버에서 빠르게
            준비되고, WebGL 전용 컴포넌트는 브라우저에서만 동작하도록
            분리해 안정적으로 Three.js를 다룰 수 있습니다. 아래 예제를 수정해
            자신만의 실험실을 만들어보세요.
          </p>
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 text-sm text-slate-200">
            <p className="font-medium text-white">추천 워크플로</p>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>· `src/components`에 캔버스를 클라이언트 컴포넌트로 작성</li>
              <li>· `next/dynamic` + `ssr: false`로 WebGL 전용 코드를 지연 로드</li>
              <li>· Leva 패널로 조작값을 만들고 실험 이력을 기록</li>
            </ul>
          </div>
        </section>
        <ThreeCanvasWrapper />
      </main>
    </div>
  );
}
