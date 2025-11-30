## three-js-playground

실험용 Three.js/React Three Fiber 씬들을 모으는 Next.js 14 프로젝트입니다.  
루트 페이지(`src/app/page.tsx`)에 각 실험으로 이동할 수 있는 네비게이션 카드가 있고, 나머지 경로는 독립적인 씬을 렌더링합니다.

현재 제공되는 씬

| Path | Description |
| --- | --- |
| `/christmas-tree` | 눈이 내리는 크리스마스 트리. TreeLayers/TreeStar/TreeOrnaments 등으로 구성된 토이 스타일 조형에 Leva 컨트롤과 조명 실험이 붙어 있습니다. |

## 개발 환경

- Next.js 14 (App Router)
- React Three Fiber + @react-three/drei
- Leva (실시간 파라미터 조정)
- Yarn Berry (nodeLinker: node-modules)

## 로컬 실행

```bash
yarn install
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열면 네비게이션 페이지가 나타납니다.  
크리스마스 트리 씬으로 들어가려면 "크리스마스 트리" 카드를 클릭하거나 [http://localhost:3000/christmas-tree](http://localhost:3000/christmas-tree) 로 직접 이동하세요.

## 디렉터리 가이드

- `src/components/ThreePlayground.tsx` – 공통 캔버스 씬. 조명, 카메라, 눈 파티클 등 공용 요소가 정의됩니다.
- `src/components/ChristmasTree.tsx` – 트리 구성(레이어, 별, 오너먼트 등)을 조립하는 컴포넌트.
- `src/components/SnowField.tsx` – 간단한 눈 내리는 파티클.
- `src/app/christmas-tree/page.tsx` – 트리 씬을 로드하는 라우트.

## 향후 씬 추가 방법

1. `src/app/<scene-name>/page.tsx` 파일을 만들고 원하는 캔버스를 렌더링합니다.
2. `src/app/page.tsx` 네비게이션 카드 목록에 링크를 추가합니다.
3. 필요한 컴포넌트/컨트롤을 `src/components` 하위에 배치합니다.

이 구조를 반복하면 새로운 실험 씬을 쉽게 추가할 수 있습니다. 즐겁게 실험해 보세요!
