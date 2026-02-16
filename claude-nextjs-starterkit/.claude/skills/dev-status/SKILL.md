---
name: dev-status
description: 프로젝트의 개발 상태를 빠르게 확인 (npm 스크립트, 빌드 상태, 린트 등)
disable-model-invocation: true
---

# Development Status

프로젝트의 현재 상태를 확인합니다.

## 확인 항목

1. **Git 상태**: 변경사항, 추적되지 않은 파일
2. **npm 설치**: 의존성 설치 여부
3. **TypeScript**: 타입 에러 확인
4. **Lint**: ESLint 상태 확인
5. **빌드**: 프로덕션 빌드 가능 여부

## 실행 명령어

```bash
# 1. Git 상태
git status

# 2. npm 설치 확인
npm list | head -20

# 3. TypeScript 컴파일 확인
npx tsc --noEmit

# 4. Lint 확인
npm run lint

# 5. 빌드 테스트
npm run build
```

## 출력 결과

명령어 실행 후 결과를 분석하여 프로젝트의 상태를 정리해줍니다:
- ✅ 정상 상태
- ⚠️ 경고 (수정 권장)
- ❌ 에러 (즉시 수정 필요)
