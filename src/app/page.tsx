import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-slate-950 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-16 text-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
          Three.js Playground
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
          실험하고 싶은 장면을 고르세요
        </h1>
        <p className="text-base leading-7 text-slate-300">
          각각의 페이지는 독립적인 Three.js 실험장입니다. 원하는 씬을 고르면 즉시
          해당 데모로 이동합니다.
        </p>
      </div>

      <nav className="mx-auto mt-12 grid w-full max-w-4xl gap-6 md:grid-cols-2">
        <Link
          href="/christmas-tree"
          className="rounded-3xl border border-white/10 bg-slate-900/60 px-8 py-10 text-left transition hover:border-slate-200/40 hover:bg-slate-900/80"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            Scene #1
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            크리스마스 트리
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            React Three Fiber로 구현한 눈 내리는 트리. 카메라와 조명을 조절하면서
            토이 라이팅을 연습해보세요.
          </p>
          <span className="mt-6 inline-flex items-center text-sm font-medium text-sky-300">
            페이지 열기 →
          </span>
        </Link>
      </nav>
    </div>
  );
}
