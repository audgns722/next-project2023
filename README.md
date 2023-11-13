# NEXT를 이용한 포트폴리오 사이트 만들기 [Next.js](https://nextjs.org/)

## NEXT의 특징
1. 서버 사이드 렌더링 (SSR): Next.js는 서버 사이드 렌더링을 지원하여 초기 페이지 로딩 속도를 향상시킵니다. 이는 검색 엔진 최적화(SEO)에 유리하며 사용자 경험을 향상시킵니다.
2. 정적 사이트 생성 (SSG): 정적 사이트 생성을 통해 미리 페이지를 렌더링하여 정적 파일로 제공할 수 있습니다. 이를 통해 성능이 향상되며, CDN (Content Delivery Network)을 통해 전 세계적으로 빠른 속도로 콘텐츠를 제공할 수 있습니다.
3. 개발환경 설정의 용이성: 기본적으로 설정된 개발환경이 제공되어 새로운 프로젝트를 빠르게 시작할 수 있습니다. 필요한 설정은 최소화되며, 사용자가 직접 설정을 추가하거나 변경할 수 있습니다.
4. Hot Module Replacement (HMR): 코드 변경 사항이 발생할 때 모듈을 다시 불러와서 페이지 새로 고침 없이도 변경 사항을 즉시 확인할 수 있습니다. 개발자의 생산성을 향상시키는 데 도움이 됩니다.
5. API Routes: API Routes를 사용하여 서버리스 함수를 정의하고 API 엔드포인트를 쉽게 만들 수 있습니다. 이를 통해 클라이언트와 서버 간의 통신이 간편해집니다.
6. 자동 코드 분할 (Automatic Code Splitting): 페이지 간 코드를 자동으로 분할하여 필요한 코드만 로드함으로써 초기 로딩 시간을 최소화하고 성능을 향상시킵니다.
7. TypeScript 지원: TypeScript를 기본적으로 지원하여 정적 타입 체크와 타입 안정성을 높일 수 있습니다.
8. 풍부한 플러그인 생태계: 다양한 플러그인을 통해 확장성을 높이고 프로젝트에 필요한 기능을 쉽게 추가할 수 있습니다.
9. 빌트인 CSS 지원: CSS 모듈, SCSS, LESS 등 다양한 스타일링 옵션을 내장하고 있어 스타일링을 효과적으로 관리할 수 있습니다.

### SSR과 CSR + MVC는 (Model-View-Controller)
1. 서버 사이드 렌더링 (SSR): 동작 방식: 사용자가 페이지에 접근할 때, 서버에서 해당 페이지의 HTML을 렌더링하고 클라이언트에 전달합니다.
- 장점: 초기 로딩 속도가 빠르며, 검색 엔진 최적화(SEO)에 유리합니다. 초기 렌더링된 HTML을 받은 클라이언트는 기본적인 콘텐츠를 즉시 볼 수 있습니다.
- 단점: 서버 부하가 있을 수 있으며, 매번 새로운 페이지를 요청할 때마다 서버는 새로운 HTML을 생성해야 합니다.사용자 경험은 초기 로딩 후에는 클라이언트 사이드 렌더링과 비슷해집니다.
2. 클라이언트 사이드 렌더링 (CSR): 동작 방식: 초기에는 HTML과 빈 페이지가 클라이언트에 전송되고, 클라이언트에서 JavaScript 파일을 로드하여 페이지를 동적으로 렌더링합니다.
- 장점: 클라이언트 측에서 페이지를 동적으로 업데이트할 수 있어 애플리케이션이 더 빠르게 반응하고 사용자 경험을 향상시킬 수 있습니다. 서버 부하가 감소하며, 서버는 데이터만 제공하면 됩니다.
- 단점: 초기 로딩 속도가 느리며, 검색 엔진 최적화가 CSR에 비해 어려울 수 있습니다. 빈 페이지나 로딩 스피너를 보여주고, 자바스크립트가 로드되고 실행된 후에 사용자에게 완전한 콘텐츠가 보여집니다.

## 특징
- 메타데이터 생성 : Next.js는 일부 메타데이터 생성과 관련된 기능을 내장하고 있어, 검색 엔진 최적화 및 소셜 미디어 미리보기 등에서 개발자들이 편리하게 이점을 얻을 수 있습니다.
- Next.js에서 파일 시스템 기반의 동적 라우팅을 사용할 때, 페이지 구조를 만들면 해당 폴더와 파일들이 자동으로 라우팅되어 포함됩니다. 이러한 동작을 파일 시스템 기반의 라우팅이라고 합니다.
- 웹폰트, 이미지 자동 최적화 :  `import Image from 'next/image'` 사이즈 필요 `<Image src={port.img} alt={port.name} width={420} height={220} />`

## 작업 순서
1. 폴더를 만들고 next 설치
2. 기본셋팅 폴더생성 및 깃 업로드 

## 실행

1. 실행 : `npm run dev`

## 설치

1. next 최신버전 설치  : `npx create-next-app@latest 프로젝트 이름`
2. gsap 설치 : `npm i gsap`
3. sass 설치 : `npm i sass`
4. lenis 설치 : `npm i @studio-freight/lenis`

## 트러블 슈팅
<details>
<summary>ReactServerComponentsError</summary>
<!-- summary 아래 한칸 공백 두어야함 -->

## (해결) : javascript, jquery(CSR)브라우저에서 작동
- 최상단에 "use client"로 설정
`./src\app\page.js   
ReactServerComponentsError: You're importing a component that needs useEffect. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default. Learn more: https://nextjs.org/docs/getting-started/react-essentials 
   ╭─[C:\Users\line\Documents\GitHub\myeonghun\next-project\src\app\page.js:1:1]
 1 │ import React, { useEffect } from 'react'
   ·                 ─────────
 2 │ import Skip from '@/components/Skip'
 3 │ import Header from '@/components/Header'
 4 │ import Intro from '@/components/Intro'
   ╰────
Maybe one of these should be marked as a client entry with "use client":
./src\app\page.js`

</details>

<details>
<summary>Attempted import error</summary>
<!-- summary 아래 한칸 공백 두어야함 -->

## (해결) : Attempted import error
- `export function link()... ` -> `const link = () => ... export default link;`
`Attempted import error: '@/utils/link' does not contain a default export (imported as 'link').`

</details>

