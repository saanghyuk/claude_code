# From Ads to Apps: Leveraging Pre-Install Ad Journeys for Cold-Start Personalization via Reinforcement Learning

------

## Abstract

새로운 앱이 폭발적으로 증가하고 유저 리텐션이 급격히 짧아지는 시대에, 신규 유저를 초기 세션에서 붙잡는 것은 앱 비즈니스의 핵심 과제다. 그러나 신규 유저에 대한 in-app 데이터가 전무한 cold start 상황에서는 효과적인 개인화가 불가능하다는 것이 통념이다. 본 연구는 이 통념에 도전한다.

유저가 앱을 설치하기 전에 거쳐온 광고 터치포인트 — 어떤 채널에서 어떤 광고를 보았고, 어떤 키워드를 검색했는지 — 가 Mobile Measurement Partner(MMP) 데이터에 이미 존재한다는 점에 주목한다. 본 연구는 이 pre-install ad journey를 cold start 개인화의 정보원으로 활용하는 강화학습(RL) 기반 프레임워크를 제안한다.

제안하는 프레임워크는 유저의 여정을 앱 밖(광고)에서 앱 안(행동)까지 하나의 연속된 학습 과정으로 모델링한다. 설치 직후에는 ad journey가 유저 state의 주된 정보원이며, 앱 내 행동이 축적됨에 따라 정보원이 점진적으로 in-app behavior로 전이된다. RL agent는 이 evolving state를 기반으로 매 시점 최적의 intervention을 결정하며, 장기적 유저 가치(구독 전환, retention)를 최대화한다.

본 연구는 구독형 앱에서의 field experiment를 통해 (1) pre-install ad journey가 cold start 개인화에 유효한 signal임을 실증하고, (2) ad journey 기반 개인화가 device context만 활용하는 것 대비 유의미한 효과 개선을 가져옴을 보인다. 나아가, iOS App Tracking Transparency(ATT)로 인한 ad journey 정보의 체계적 손실을 information degradation의 natural experiment로 활용하여, privacy regulation이 초기 개인화 효과를 얼마나 감소시키는지를 정량화한다.

**Keywords**: Cold Start, Mobile Advertising, Ad Attribution, Reinforcement Learning, Personalization, Privacy, Mobile Measurement Partner(MMP)

------

## 1. 연구의 큰 그림

### 1.1 문제 인식

앱 시장의 현실:

- 앱이 넘쳐나고 유저의 리텐션은 짧아지고 있다
- 대부분의 유저가 앱을 설치한 뒤 매우 빠르게 이탈한다
- 첫 세션에서 유저를 붙잡지 못하면 UA(User Acquisition) 비용이 낭비된다

Cold start의 딜레마:

- 유저를 붙잡으려면 개인화가 필요하다
- 개인화를 하려면 유저 정보가 필요하다
- 신규 유저에게는 in-app 정보가 없다
- 그래서 모든 신규 유저에게 동일한 경험을 제공하고 있다

### 1.2 핵심 인사이트

**정보가 없는 것이 아니다.** 유저가 앱을 설치하기 전에 거쳐온 광고 여정(ad journey)에 유저의 intent와 preference에 대한 signal이 담겨 있다. 이 정보는 MMP 데이터에 이미 존재하지만, 현재 cold start 개인화에 활용되지 않고 있다.

### 1.3 제안

Pre-install ad journey를 cold start 개인화의 출발점으로 활용하되, 유저가 앱 안에서 행동을 시작하면 점진적으로 in-app behavior로 정보원을 전이하는 RL 기반 프레임워크를 제안한다.

------

## 2. 데이터 구조: MMP에서 관찰할 수 있는 것

### 2.1 Pre-install Ad Journey

MMP에서 유저별로 광고 터치포인트 이력을 가져온다. 채널 종류에 따라 관찰 수준이 체계적으로 다르다:

**Non-SAN 채널 (일반 DSP들)**

- 유저가 거쳐온 터치포인트의 풀 시퀀스가 있음
- 채널, 타이밍, 순서를 알 수 있음
- 어떤 광고 소재(creative)였는지는 모름

**SAN 채널 (Meta, Google, TikTok 등 — Self-Attributing Networks)**

- 채널 내에서 유저가 여러 터치포인트를 거쳤더라도 마지막 하나만 MMP로 전달됨
- 대신 그 마지막 터치포인트의 creative 정보, 검색 keyword를 알 수 있음

**현실의 유저 journey**: 하나의 타임라인 위에 SAN과 Non-SAN 터치포인트가 섞여있다.

실제 journey 예시:

> DSP A → DSP A → [Meta 소재X → Meta 소재Y → Meta 소재Z] → Google 검색 → DSP B → 설치

MMP에서 보이는 것:

> DSP A → DSP A → Meta 소재Z(last만, creative 있음) → Google 검색(last만, keyword 있음) → DSP B → 설치

### 2.2 Install Moment Context

설치 시점에 자동으로 수집되는 정보:

- OS, 디바이스 모델, 국가/지역
- 설치 시간대, 언어 설정 등
- MMP 없이도 누구나 가질 수 있는 정보 → **baseline으로 활용**

### 2.3 iOS의 현실

iOS ATT(App Tracking Transparency)로 인해:

- ATT opt-in이 앱별이라서, 우리 앱에서 동의해도 Meta, Google, 각 퍼블리셔 앱에서도 동의해야 해당 터치포인트가 보임
- 현실에서는 iOS install의 상당수가 unattributed (어떤 채널에서 왔는지조차 모름)
- → Android가 메인 분석, iOS는 information degradation 분석에 활용

------

## 3. 프레임워크: 연속적 학습으로서의 유저 여정

### 3.1 핵심 아이디어

유저의 여정을 앱 밖(광고)부터 앱 안(행동)까지 하나의 연속된 과정으로 본다.

기존 접근:

- 광고 팀: "어떤 광고가 설치를 유도했나?" (attribution)
- 앱 팀: "앱 안에서 뭘 보여줄까?" (추천/CRM)
- → 둘이 단절되어 있음

본 연구의 접근:

- 광고에서 얻은 정보가 앱 안 개인화의 출발점이 됨
- 시간이 지나면서 in-app 정보로 자연스럽게 대체됨
- → 하나의 연속된 학습 과정

### 3.2 정보원의 전이 (Information Source Transition)

| 시점              | 주된 정보원                       | 설명                                                |
| ----------------- | --------------------------------- | --------------------------------------------------- |
| t=0 (설치 직후)   | Ad journey + Device context       | In-app 정보 전무. 광고 여정이 유일한 단서           |
| t=1~5 (초기 세션) | Ad journey + 초기 in-app behavior | 앱 내 행동이 조금씩 쌓이기 시작                     |
| t=10+ (활성 유저) | 주로 in-app behavior              | Ad journey 의존도 감소, 직접적 행동 데이터가 지배적 |

**이 전이 과정 자체를 모델링하는 것이 본 연구의 방법론적 핵심이다.**

### 3.3 RL 프레임워크

**State** $s_t$: 시점 $t$에서 agent가 관찰하는 정보

$$s_t = (\underbrace{h_i^{ad}}*{\text{ad journey repr.}}, \underbrace{h_t^{app}}*{\text{in-app behavior repr.}}, \underbrace{d_i}_{\text{device context}})$$

- $h_i^{ad}$: Pre-install ad journey를 시퀀스 인코더로 인코딩한 벡터. 시간이 지나도 변하지 않음 (설치 전 정보이므로).
- $h_t^{app}$: 시점 $t$까지의 in-app behavior를 인코딩한 벡터. 매 시점 업데이트됨. t=0에서는 비어있음.
- $d_i$: Device context 벡터. 고정.

핵심: t=0에서는 $h_t^{app}$이 비어있으므로 $h_i^{ad}$가 state의 주된 정보원. 시간이 지나면서 $h_t^{app}$이 풍부해지고 $h_i^{ad}$의 상대적 중요도가 자연스럽게 감소.

**Action** $a_t$: 매 시점 agent가 선택하는 intervention

- 구체적 action은 실증 앱에 따라 정의됨
- 예시: 콘텐츠 추천, 인앱 팝업/오퍼, 푸시 알림, 아무것도 안 함
- 프레임워크는 discrete action space를 가정

**Reward** $r_t$: Action에 대한 유저의 반응

- 단기 reward: 클릭, 콘텐츠 소비, 체류 시간 등
- 장기 목표: 구독 전환, D7/D14/D30 retention

**Policy** $\pi(a_t | s_t)$: State를 보고 action을 결정하는 함수

- 목표: 장기 누적 reward를 최대화하는 policy를 학습
- $\pi^* = \arg\max_\pi \mathbb{E}\left[\sum_{t=0}^{T} \gamma^t r_t\right]$

### 3.4 모델 구조 (개념적)

```
시점 t에서의 의사결정:

[Ad Journey Sequence]                    [In-app Behavior Sequence]
  DSP1 → DSP2 → Meta(last) → ...         클릭1 → 시청1 → 클릭2 → ...
         ↓                                         ↓
  Sequence Encoder (Transformer)          Sequence Encoder (Transformer)
         ↓                                         ↓
     h_i^{ad}                                  h_t^{app}
         ↓                                         ↓
         └──────────── + ─────────────────────────┘
                       ↓
              [Device Context d_i]
                       ↓
                 State vector s_t
                       ↓
               Policy Network (NN)
                       ↓
            각 action별 expected value
                       ↓
              가장 높은 action 선택
```

### 3.5 학습 방법

**Phase 1: Offline RL**

- 과거 유저 데이터로 초기 policy 학습
- 각 유저의 (ad journey, in-app behavior sequence, 앱이 보여준 것, 결과)를 활용
- 한계: 과거에 개인화를 안 했으면 action variation이 적을 수 있음

**Phase 2: Online RL with Exploration**

- 실제 신규 유저에게 다양한 action을 시도하면서 실시간 학습
- Exploration (여러 가지 시도) → Exploitation (좋은 것으로 수렴)
- 초기에는 exploration 비율을 높이고, 데이터가 쌓이면서 줄임

------

## 4. 실증 전략

### 4.1 메인 분석: Android 유저

Android에서는 ad journey가 상대적으로 완전하게 관찰되므로, 프레임워크의 효과를 가장 깔끔하게 검증할 수 있다.

**비교 조건:**

- Baseline 1: 개인화 없음 (모든 유저에게 동일한 경험)
- Baseline 2: Device context만으로 개인화 (MMP 없이 가능한 수준)
- Proposed: Ad journey + Device context로 개인화 (MMP 필요)

**핵심 검증:**

- Proposed가 Baseline 1, 2 대비 구독 전환율과 retention을 유의미하게 개선하는가?
- Proposed와 Baseline 2의 차이 = **ad journey 정보의 incremental value**

### 4.2 Information Degradation 분석: iOS 활용

iOS의 ATT로 인한 정보 손실을 natural experiment로 활용:

| 그룹             | 관찰 가능한 정보                | 개인화 수준 |
| ---------------- | ------------------------------- | ----------- |
| Android          | Ad journey (가장 완전) + Device | 최고        |
| iOS attributed   | Ad journey (부분적) + Device    | 중간        |
| iOS unattributed | Device만                        | 최저        |

**검증:**

- 정보량이 줄수록 개인화 효과가 감소하는 gradient를 보임
- → Privacy regulation(ATT)이 초기 개인화 효과를 얼마나 감소시키는지 정량화
- → 기업에게 "MMP 데이터 및 ATT opt-in율 제고에 투자할 가치가 있는가?"에 대한 답 제공

### 4.3 Ad Journey 정보원 전이 분석

**검증:**

- 시점별로 ad journey 정보의 기여도가 어떻게 변하는가?
- 몇 번째 in-app interaction 이후부터 ad journey 없이도 충분한 개인화가 가능한가?
- → Ad journey가 "bridge" 역할을 하는 구간의 길이를 정량화

------

## 5. Contribution 정리

### Substantive Contribution (메인)

- Cold start 문제를 pre-install ad journey로 해결한다는 **새로운 관점** 제시
- 앱 밖 데이터(광고)와 앱 안 데이터(행동)를 하나의 연속된 과정으로 연결

### Methodological Contribution

- 정보원이 시간에 따라 전이되는 (ad journey → in-app behavior) **evolving state structure** 하에서의 RL 프레임워크
- MRSR(Ma, Huang, Ascarza, Israeli 2025)의 확장: state representation의 source 자체가 시간에 따라 변하는 세팅

### Empirical Contribution

- Ad journey 기반 개인화의 효과를 field experiment로 검증
- Ad journey 정보의 **incremental value** 정량화 (device context 대비)
- Privacy regulation(ATT)에 의한 **information degradation의 비용** 정량화

------

## 6. 포지셔닝: Huang 교수님 연구와의 관계

| 기존 연구                                                    | 본 연구의 확장                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **MRSR** (Ma, Huang, Ascarza, Israeli 2025): In-app behavior가 쌓인 후 multiple response로 state representation 학습 → dynamic personalization | In-app behavior가 **전혀 없는 cold start에서 시작**, ad journey가 초기 state의 prior 역할. 시간에 따라 정보원이 전이되는 구조를 RL로 모델링 |
| **Incrementality Prediction** (Huang, Ascarza, Israeli 2025): 과거 실험들을 synergize하여 heterogeneous treatment effect 예측 | Ad journey representation 기반으로 intervention의 CATE를 추정하는 데 활용 가능 |
| **Privacy-Protected Targeting** (Huang, Ascarza 2025): Privacy-protected data에서의 treatment effect calibration | ATT로 인한 information degradation이 개인화 효과에 미치는 영향을 정량화. Privacy의 실질적 비용 측정 |
| **Doing More with Less** (Huang, Ascarza 2024): 단기 signal로 장기 targeting 개선 | Ad journey라는 "앱 밖 단기 signal"로 앱 안 장기 가치(retention, 구독 전환)를 개선 |

------

## 7. 열려있는 질문들

- 실증할 구독 앱의 구체적 업종 (OTT, 피트니스, 뉴스, 생산성 도구 등)
- 실증 앱에서의 구체적 action space 정의
- RL 알고리즘 선택 (DQN, PPO, Conservative Q-Learning 등)
- Offline RL → Online RL 전환 전략
- 실험 설계 디테일 (sample size, 기간, exploration 비율 등)
- State의 ad journey → in-app behavior 전이를 어떻게 formally 모델링할지