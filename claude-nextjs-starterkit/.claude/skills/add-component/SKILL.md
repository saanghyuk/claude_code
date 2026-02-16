---
name: add-component
description: 새로운 React 컴포넌트를 생성합니다 (TypeScript + Tailwind CSS)
disable-model-invocation: true
argument-hint: <component-name> [category]
---

# Create React Component

새로운 React 컴포넌트를 프로젝트 구조에 맞춰 생성합니다.

## 사용법

```
/add-component Button
/add-component Button ui
/add-component HeroSection sections
```

## 생성되는 컴포넌트 구조

- `components/[category]/[component-name].tsx` - 컴포넌트 파일
- TypeScript 사용
- Tailwind CSS 스타일
- `'use client'` 지시어 (클라이언트 컴포넌트)
- Props 타입 정의
- 간단한 기본 구현

## 카테고리

- `ui` - shadcn/ui 스타일 재사용 컴포넌트
- `sections` - 페이지 섹션 컴포넌트
- `layout` - 레이아웃 컴포넌트
- `form` - 폼 관련 컴포넌트

## 예제 생성 파일

`/add-component Button ui` 실행 결과:

```typescript
'use client'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded font-medium transition-colors ${className}`}
    >
      {children}
    </button>
  )
}
```
