# 개발자 웹 이력서 프로젝트 로드맵

## 1. 프로젝트 개요

### 목적
정적 웹 페이지 기반의 개발자 이력서(포트폴리오) 사이트를 구축한다. 별도의 백엔드 없이 프론트엔드만으로 동작하며, 깔끔한 디자인과 반응형 레이아웃, 다크모드를 지원한다.

### 기술 스택
| 기술 | 버전 | 역할 |
|------|------|------|
| HTML5 | - | 시맨틱 마크업, 페이지 구조 |
| CSS3 | - | 커스텀 스타일링, 애니메이션 |
| JavaScript | ES6+ | 인터랙션, 다크모드 토글, 스크롤 이벤트 |
| TailwindCSS | 3.x | 유틸리티 기반 스타일링, 반응형 디자인 |

---

## 2. 디렉토리 구조

```
project-root/
├── index.html              # 메인 HTML 파일
├── css/
│   └── custom.css          # TailwindCSS 외 커스텀 스타일
├── js/
│   └── main.js             # 인터랙션, 다크모드, 스크롤 로직
├── assets/
│   ├── images/             # 프로필 사진, 프로젝트 스크린샷
│   │   └── profile.jpg
│   └── icons/              # 파비콘, SVG 아이콘
│       └── favicon.ico
├── tailwind.config.js      # TailwindCSS 설정
├── package.json            # 프로젝트 의존성
├── ROADMAP.md              # 이 문서
└── README.md               # 프로젝트 설명
```

---

## 3. 개발 단계 (Phase)

### Phase 1: 프로젝트 초기 설정

**목표:** 개발 환경 구성 및 기본 파일 생성

- [ ] `npm init -y`로 프로젝트 초기화
- [ ] TailwindCSS 설치 및 설정
  ```bash
  npm install -D tailwindcss
  npx tailwindcss init
  ```
- [ ] `tailwind.config.js`에 콘텐츠 경로 및 다크모드 설정
  ```js
  module.exports = {
    content: ["./*.html", "./js/**/*.js"],
    darkMode: "class",
    theme: { extend: {} },
    plugins: [],
  };
  ```
- [ ] 디렉토리 구조 생성 (`css/`, `js/`, `assets/images/`, `assets/icons/`)
- [ ] `index.html` 기본 boilerplate 작성
- [ ] TailwindCSS CDN 또는 빌드 파이프라인 연결 확인

**완료 기준:** `index.html`을 브라우저에서 열었을 때 TailwindCSS 클래스가 정상 적용된다.

---

### Phase 2: 레이아웃 & 핵심 섹션 구현

**목표:** 이력서의 모든 주요 섹션을 HTML + TailwindCSS로 구현

각 섹션은 `<section>` 태그로 구분하고, `id` 속성을 부여하여 내비게이션 앵커로 활용한다.

#### 2-1. Navigation Bar
- [ ] 상단 고정(sticky) 내비게이션
- [ ] 각 섹션으로 이동하는 앵커 링크
- [ ] 다크모드 토글 버튼 배치

#### 2-2. Hero 섹션
- [ ] 이름, 직함, 한 줄 소개
- [ ] 프로필 이미지
- [ ] CTA 버튼 (이력서 다운로드, 연락하기)

#### 2-3. About 섹션
- [ ] 자기소개 텍스트
- [ ] 경력 요약 수치 (경력 연수, 프로젝트 수 등)

#### 2-4. Skills 섹션
- [ ] 기술 스택을 카테고리별로 분류 (Frontend, Backend, Tools)
- [ ] 각 스킬을 카드 또는 태그 형태로 표시
- [ ] 숙련도 표시 (프로그레스 바 또는 레벨 표기)

#### 2-5. Experience 섹션
- [ ] 타임라인 형태의 경력 기술
- [ ] 회사명, 직책, 기간, 주요 업무

#### 2-6. Projects 섹션
- [ ] 프로젝트 카드 (썸네일, 제목, 설명, 기술 태그)
- [ ] GitHub / 라이브 데모 링크

#### 2-7. Contact 섹션
- [ ] 이메일, GitHub, LinkedIn 링크
- [ ] 간단한 연락 폼 (프론트엔드만 구현)

#### 2-8. Footer
- [ ] 저작권 표시
- [ ] 소셜 링크

**완료 기준:** 모든 섹션이 데스크톱 화면에서 올바르게 렌더링된다.

---

### Phase 3: 반응형 디자인 & 다크모드

**목표:** 모바일/태블릿 대응 및 다크모드 지원

#### 반응형 디자인
- [ ] TailwindCSS 브레이크포인트 활용 (`sm`, `md`, `lg`, `xl`)
- [ ] 모바일: 단일 컬럼 레이아웃
- [ ] 태블릿: 2컬럼 그리드
- [ ] 데스크톱: 전체 레이아웃
- [ ] 내비게이션 햄버거 메뉴 (모바일)

#### 다크모드
- [ ] `<html>` 태그에 `class="dark"` 토글
- [ ] `localStorage`로 사용자 선호 저장
- [ ] 시스템 설정 감지 (`prefers-color-scheme`)
- [ ] 모든 섹션에 다크모드 스타일 적용

**완료 기준:** 320px ~ 1920px 해상도에서 레이아웃이 깨지지 않고, 다크모드 전환이 매끄럽게 동작한다.

---

### Phase 4: 애니메이션 & 인터랙션

**목표:** 사용자 경험 향상을 위한 시각 효과 추가

- [ ] 스크롤 기반 섹션 등장 애니메이션 (Intersection Observer API)
- [ ] 내비게이션 스크롤 스파이 (현재 섹션 하이라이트)
- [ ] 부드러운 스크롤 (`scroll-behavior: smooth`)
- [ ] 버튼/카드 hover 효과
- [ ] 스킬 프로그레스 바 애니메이션 (뷰포트 진입 시 동작)
- [ ] 타이핑 효과 (Hero 섹션 직함 표시, 선택사항)
- [ ] 페이지 최상단 이동 버튼 (스크롤 위치에 따라 표시/숨김)

**완료 기준:** 애니메이션이 60fps로 매끄럽게 동작하고, `prefers-reduced-motion` 미디어 쿼리를 존중한다.

---

### Phase 5: 최적화 & 배포

**목표:** 성능 최적화 후 정적 호스팅에 배포

#### 최적화
- [ ] 이미지 최적화 (WebP 변환, 적절한 크기)
- [ ] TailwindCSS purge로 미사용 CSS 제거
- [ ] HTML/CSS/JS 압축 (minify)
- [ ] Lighthouse 점수 90+ 달성 (Performance, Accessibility, SEO)
- [ ] `<meta>` 태그 SEO 최적화 (Open Graph, description)

#### 배포
- [ ] GitHub Pages 또는 Netlify/Vercel 중 선택
- [ ] 커스텀 도메인 연결 (선택사항)
- [ ] HTTPS 적용 확인

**완료 기준:** 배포된 URL에서 모든 기능이 정상 동작하고, Lighthouse 점수가 90 이상이다.

---

## 4. 이력서 섹션 상세 & 샘플 데이터

### Hero
```
이름: 김서준
직함: Full-Stack Developer
소개: "사용자 경험을 최우선으로 생각하는 3년차 풀스택 개발자입니다."
CTA: [이력서 다운로드] [연락하기]
```

### About
```
안녕하세요! 저는 웹 기술에 열정을 가진 풀스택 개발자 김서준입니다.
스타트업과 중견기업에서 다양한 웹 서비스를 기획부터 배포까지 경험했습니다.
클린 코드와 사용자 중심 설계를 지향하며, 새로운 기술을 빠르게 습득하는 것을 좋아합니다.

핵심 수치:
- 경력: 3년
- 완료 프로젝트: 12+
- 기술 스택: 15+
```

### Skills
```
Frontend: HTML, CSS, JavaScript, TypeScript, React, TailwindCSS
Backend: Node.js, Express, Python, Django
Database: PostgreSQL, MongoDB, Redis
DevOps & Tools: Git, Docker, AWS, GitHub Actions, Figma
```

### Experience
```
[2024.03 - 현재] 테크스타트 주식회사 | 프론트엔드 개발자
- React 기반 SaaS 대시보드 개발 및 유지보수
- 페이지 로딩 속도 40% 개선 (코드 스플리팅, 이미지 최적화)
- 디자인 시스템 구축으로 UI 개발 생산성 30% 향상

[2022.01 - 2024.02] 웹솔루션 | 풀스택 개발자
- Django + React 기반 이커머스 플랫폼 개발
- RESTful API 설계 및 구현 (일평균 10만 요청 처리)
- 결제 시스템 연동 (PG사 API 통합)

[2021.06 - 2021.12] ABC 소프트 | 인턴 개발자
- 사내 어드민 페이지 개발 (Vue.js)
- 레거시 코드 리팩토링 및 테스트 코드 작성
```

### Projects
```
프로젝트 1: TaskFlow - 프로젝트 관리 도구
- 설명: 칸반 보드 기반 태스크 관리 웹앱
- 기술: React, TypeScript, Node.js, MongoDB
- 링크: [GitHub] [Live Demo]

프로젝트 2: WeatherNow - 날씨 대시보드
- 설명: 실시간 날씨 정보 및 5일 예보 대시보드
- 기술: JavaScript, OpenWeather API, Chart.js
- 링크: [GitHub] [Live Demo]

프로젝트 3: DevBlog - 기술 블로그
- 설명: 마크다운 기반 정적 블로그 사이트
- 기술: Next.js, TailwindCSS, MDX
- 링크: [GitHub] [Live Demo]
```

### Contact
```
이메일: seoojun.kim@email.com
GitHub: github.com/seojunkim-dev
LinkedIn: linkedin.com/in/seojunkim
위치: 서울, 대한민국
```

---

## 5. 기술 스택 상세

### HTML5
- 시맨틱 태그 적극 활용 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- 접근성을 위한 ARIA 속성 적용
- Open Graph 메타 태그로 SNS 공유 최적화

### CSS3
- TailwindCSS로 대체하지 못하는 커스텀 스타일 정의
- CSS 변수(`--custom-property`)로 테마 색상 관리
- `@keyframes` 애니메이션 정의
- `prefers-reduced-motion`, `prefers-color-scheme` 미디어 쿼리 대응

### JavaScript (ES6+)
- 다크모드 토글 + localStorage 영속화
- Intersection Observer API로 스크롤 애니메이션 트리거
- 모바일 내비게이션 토글
- 스크롤 스파이 (현재 활성 섹션 감지)
- 폼 유효성 검사 (Contact 섹션)

### TailwindCSS 3.x
- 유틸리티 클래스 기반의 빠른 스타일링
- `dark:` 변형자(variant)로 다크모드 스타일 적용
- 반응형 브레이크포인트: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- 빌드 시 사용하지 않는 클래스 자동 제거 (purge)
- `tailwind.config.js`를 통한 커스텀 색상/폰트 확장
