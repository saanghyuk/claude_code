# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

정적 웹 페이지 기반 개발자 이력서(포트폴리오) 사이트. 백엔드 없이 프론트엔드만으로 동작하며, 반응형 레이아웃과 다크모드를 지원한다. 개발 로드맵은 `ROADMAP.md`에 정의되어 있다.

## Tech Stack

- HTML5, CSS3, JavaScript (ES6+), TailwindCSS 3.x
- 다크모드: `darkMode: "class"` 방식 (html 태그에 `dark` 클래스 토글)
- 빌드 도구 없이 TailwindCSS CDN 또는 CLI 빌드 사용

## Commands

```bash
# TailwindCSS 설치
npm install -D tailwindcss
npx tailwindcss init

# TailwindCSS 빌드 (개발)
npx tailwindcss -i ./css/custom.css -o ./css/output.css --watch

# TailwindCSS 빌드 (프로덕션)
npx tailwindcss -i ./css/custom.css -o ./css/output.css --minify
```

## Architecture

단일 페이지(`index.html`) 구조이며, 각 이력서 섹션은 `<section id="...">` 태그로 구분된다.

- `index.html` — 전체 페이지 구조 및 콘텐츠
- `css/custom.css` — TailwindCSS 외 커스텀 스타일, CSS 변수, @keyframes
- `js/main.js` — 다크모드 토글, Intersection Observer 애니메이션, 스크롤 스파이, 모바일 내비게이션
- `assets/images/`, `assets/icons/` — 정적 리소스
- `tailwind.config.js` — TailwindCSS 설정 (content 경로, 다크모드, 커스텀 테마)

## Key Conventions

- TailwindCSS 유틸리티 클래스를 우선 사용하고, 커스텀 CSS는 `css/custom.css`에만 작성
- 다크모드 스타일은 TailwindCSS `dark:` variant 사용
- 반응형 브레이크포인트: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- 접근성: 시맨틱 HTML 태그, ARIA 속성, `prefers-reduced-motion` 대응
- 섹션별 샘플 데이터는 `ROADMAP.md` 4장 참조
