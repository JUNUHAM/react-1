# 함준우 202130334
# 5월 29일 12주차

### Rendering patton
- SPA : 단일 페이지 앱 
- SSR : 서버 사이드 렌더링 -> 매 요청 시 서버에서 정적 페이지 생성
- SSG : 정적 사이트 생성 -> 빌드시 한번에 모든 정적 페이지 생성
- RSC : React 서버 컴포넌트 -> 서버에서 동작하는 컴포넌트로 DB 접근 등이 가능

[SPA]<br>
단일 HTML 페이지를 로드하고, 사용자가 앱과 상호작용할 때 페이지를 동적으로 업데이트함<br>
초기 로드 시간이 느림<br>
대부분의 빌드 도구에서 기본 아키텍처로 사용됨<br>

[SSR]<br>
서버에서 페이지를 번들링하고 완전히 렌더링된 페이지를 클라이언트로 전송함<br>
성능향상에는 도움이 되나 설정 및 유지보수가 복잡함<br>
특히 스트리밍 기능이 추가되면 유지관리가 힘들어짐<br>

[SSG]<br>
빌드시점에 앱의 모든 정적 HTML 파일을 생성함<br>
성능향상에는 도움이 되나 SSR보다 설정 및 유지보수가 복잡함<br>

[RSC]<br>
빌드타임, 서버전용, 인터랙티브 컴포넌트를 단일 React트리에 포함할수 있음<br>
성능향상에는 도움이 되나 설정및 유지 보수에 대한 전문적인 지식이 필요함<br>

렌더링 전략은 라우터랑 통합되어야 프레임 워크로 빌드된 앱이 경로별로 렌더링 전략을 선택할수 있다
이를 통해 앱 전체를 다시 작성하지 않고도 다양한 렌더링 전략을 사용가능함

ex. 일반적인 랜딩페이지는 정적으로 생성되는 SSG 방식이 유리할수 있으나 <br> 콘텐츠 피드가 있는 페이지는 SSR이 효과적일수 있다

### 올바른 경로에 적합한 렌더링 전략사용시 기대점
- 첫 바이트 까지의 시간
- 첫 콘텐츠 페인트
- 가장 큰 콘텐츠 페인트

위 3가지의 로드 시간을 줄일수 있다



# 5월 22일 11주차

## 프로젝트에 도입하기 (Installation)
- React는 점진적으로 적용할 수 있도록 설계가 되어있으며 필요한 만큼 React를 사용할수가 있다
- 간단한 HTML PAGE에 약간의 상호작용을 추가하거나 복잡한 React 기반의 앱을 시작하고자 하는경우 이 섹션을 참고

### 💡 This chapter
- -새로운 React 프로젝트를 시작하는 방법
- -기존 프로잭트에 React를 추가하는 방법
- -에디터 설정
- -React 개발자 도구 설치치

* React로 새로운 앱 이나 웹을 구축하려면 프레임워크부터 시작하는 것이 좋다
* 앱에 기존 프레임워크에서 잘 제공되지 않는 제약 조건이 있거나, 자체 프레임 워크를 빌드하는 것을 선호하거나, React앱의 기본 사항만 경우 React 앱을 처음부터 빌드할 수 있습니다.
풀스택 프레임워크 :
* -권장 프레임워크는 프로덕션에서 앱을 배포하고 확장하는 데 필요한 모든 기능을 지원함
* -최신 React기능을 통합하고 React의 아키텍쳐를 활용함

---
<h1>📜 중요! </h1>
<h3>풀스택 프레임워크에서는 서버가 필요하지 않습니다<h3>
<p>이 페이지의 모든 프레임워크는 클라이언트 측 즉 렌더링 <a href="https://developer.mozilla.org/en-US/docs/Glossary/CSR">(CSR)</a>, 단일 페이지 앱 <a href="https://developer.mozilla.org/en-US/docs/Glossary/SPA">(SPA)</a>, 정적 사이트 생성 <a href="https://developer.mozilla.org/en-US/docs/Glossary/SSG">(SSG)</a>을 지원합니다 이러한 앱은 서버 없이 <a href="https://developer.mozilla.org/en-US/docs/Glossary/CDN">CDN</a> 또는 정적호스팅 서비스에 배포할수 있습니다 또한 이러한 프레임워크 를 사용하면 사용 사례에 적합한 경우 경로별로 서버측 렌더링을 추가 할수 있습니다</p>

<p>이렇게 하면 클라이언트 전용 앱으로 시작할수 있으며 나중에 요구 사항이 변경되는경우 앱을 다시 작성하지 않고도 개별경로에서 서버 기능을 사용하도록 선택할수 있습니다 렌더링 전략을 구성하는 방법에 대한 프레임워크 설명서를 참고하세요</p>

---

Next.js (앱 라우터)
* Next.js 앱 라우터는 React의 아키텍쳐를 최대한 활용하여 풀 스택 React앱을 활성화 하는 Rect 프레임워크
* Next.js 는 Vercel에서 유지 관리
* Next.js 앱을 빌드 해서 Node.js와 서버리스 호스팅 혹은 자체 서버에 배포를 할수가 있다
* Next.js 는 또 한 서버가 필요 없는 정적 내보내기도 지원함
* Vercel 은 추가적으로 옵트-인 유로 클라우드 서비스도 지원함
* - opt-in 이란 사용자가 옵션을 직접 선택할수 있도록 하는 서비스

React Router (v7)
- React Router는 React에서 가장 인기있는 라우팅 라이브러리이며 Vite와 함께 사용하면 풀스택 React 프레임워크를 만들 수 있습니다
- -표준 Web API이며, 다양한 JS런타임과 플랫폼을 위한 준비된 배포 템플릿이 있다고 강조함
- -React Router는 Shopify에서 유지관리

Expo (네이티브 없음)
* Expo는 네이티브 UI를 사용하며 안드로이드, IOS, 웹을 위한 범용 앱을 만들 수 있는 React 프레임워크
* 네이티브 부분을 쉽게 사용할 수 있게 해주는 React Native SDK를 제공함
* Expo는 Expo에서 유지 관리
* Expo로 앱을 빌드하는 것은 무료이고, 구글이나 앱스토어에 제한없이 제출할 수 있다
* -Expo는 추가적으로 opt-in 유료 클라우드도 제공함

풀스택 React 버전을 향해 나아가고 있는 또 다른 프레임워크들
* TanStack Start (beta): TanStack Start는 TanStack Router를 기반으로 하는 풀스택 React 프레임워크, Nitro나 Vite 같이 전체문서 SSR, 스트리밍, 서버 함수, 번들링과 많은 유용한 도구를 제공함

* RedwoodJS: Redwood는 쉽게 풀스택 웹 어플리케이션을 만들 수 있도록 사전탑재된 패키지와 구성을 가진 풀스택 React 프레임 워크

---

## 📖[처음부터 시작하기]
앱에 기존 프레임워크에서 잘 제공되지 않는 제약 조건이 있거나, 자체 프레임워크를 구축하는 것을 선호하거나,<br> React앱의 기본사항을 배우려는 경우 React를 처음부터 시작하는데 사용할수 있는 다른 옵션이 있다

처음부터 시작하면 더 많은 유연성을 얻을수 있으나 라우팅, 데이터 가져오기 및 기타 일반적인 사용패턴에 사용할 도구를 선택하여야함

이미 존재하는 프레임워크를 사용하는 대신 자신만의 프레임워크를 구축하는것과 비슷함

자신만의 솔루션을 구축하려면 Vite, Parcel 또는 RSbuild와 같은 빌드 도구로 시작할수 있도록 하는 가이드를 참조

---

## 📕[Vite]

Vite는 현대 웹 프로젝트의 더 빠르고 가벼운 개발 환경을 제공하는것을 목표로 하는 빌드도구

Vite는 합리적인 기본 기능을 제공함

Vite는 빠른 새로고침, JSX, Babel/SWC 및 기타 일반적인 기능을 제공하는 풍부한 플러그인 생태계를 가지고 있다

Vite를 시작하려면 React 플러그인, React SWC 플러그인, React SSR 예제 프로젝트를 참고

Vite는 이미 우리가 추진하는 프레임워크 중 하나에서 빌드 도구로 사용하고 있다 (React Router, Next.js등)

```
npm create vite@latest my-app -- --template react
```

---

## 📗[React Native 용 Metro]
React Native를 처음부터 사용하려면 React Native용 JS번들러인 Metro를 사용해야함

Metro는 IOS 및 AND와 같은 플랫폼에 대한 번들링을 지원하지만 앞서 소개한 도구에 비해 기능이 부족함

프로젝트에 Native기능이 필요없다면 Vite, Parcel 쓰는게 신상에 좋음

---

## [공통 애플리케이션 패턴 구축]
위에 나열된 빌드 도구는 Cli 전용 단일 페이지 앱(SPA)로 시작하지만 라우팅, 데이터 가져오기, 스타일링과 같은 일반적인 기능에 대한 추가 솔루션은 포함되지 않음


[Routing]
* 라우팅은 사용자가 특정 URL을 방문시 표시할 콘텐츠나 페이지를 결정함
* 앱의 여러부분에 URL을 매핑하려면 라우터를 설정해야함
* 또한 중첩경로, 경로 매개변수, 쿼리 매개변수도 설정해야함
* 라우터는 코드 내에서 구성하거나 구성 요소 폴더 및 파일 구조에 따라 정의할 수 있다

라우터는 최신 애플리케이션의 핵심 부분이며 일반적으로
* 데이터 패치 : 더 빠른 로딩을 위해 전체 페이지에 대한 데이터를 미리 패치하는것
* 코드 분할 : 클라이언트 번들 크기를 최소화하기 위한것
* 페이지 렌더링 방식 : 각 페이지가 생성되는 방식을 위한 것

---

[Data Fetching] 데이터 미리 가져오기
* 서버나 다른 데이터 소스에서 데이터를 미리 가져오는 것으로 대부분의 애플리케이션에서 핵심적인 부분임
* 이를 제대로 수행하려면 로딩 상태, 오류 상태, 그리고 가져온 데이터를 캐싱등 복잡한 기능이 포함됨
* 특별히 제작된 데이터 가져오기 라이브러리는 데이터를 가져오고 캐싱하는 어려운 작업을 대신 처리해 줌
* 이러한 라이브러리는 일반적으로 컴포넌트에서 직접 사용되지만 더 빠른 프리페칭과 더 나은 성능을 위해 라우팅 로더에 통합되거나 서버 렌더링에도 사용할수 있다
* 컴포넌트에서 직접 데이터를 가져오면 네트워크 요청 폭주로 인해 로딩 시간이 느려질수 있으므로 라우터 로더나 서버에서 데이터를 미리 가져오는것이 좋다

---



# 5월 15일 10주차

---

## 💡 최소한의 데이터만 이용해서 완성하기

UI를 **상호작용(interactive)**하게 만들기 위해서는  
사용자가 **기반 데이터 모델을 변경할 수 있게** 해야 합니다.

React는 이를 위해 **state**라는 개념을 제공합니다.

---

### ✅ 핵심 요약

- state는 컴포넌트가 **기억해야 하는 변경 가능한 데이터의 최소 집합**입니다.
- 가장 중요한 원칙은 **중복 배제 원칙(Don't Repeat Yourself)**입니다.
- **앱이 필요로 하는 최소한의 state만 유지**하고,  
  나머지 값은 필요할 때마다 계산하는 것이 좋습니다.

---

### 🧠 예시로 이해하기

예를 들어, 쇼핑 리스트를 만드는 경우:

- 상품 아이템들을 **배열 형태의 state**로 저장합니다.
- **상품 개수**를 UI에 표시하고 싶다면  
  별도로 state를 두는 대신, **배열의 길이(`array.length`)를 계산**해서 보여줍니다.

> 불필요하게 많은 state를 두면 버그와 비효율이 생길 수 있습니다.  
> 항상 "진짜 필요한 데이터만" state로 관리하세요.

---

## 🧠 최소한의 데이터만 이용해서 완벽하게 UI State 표현하기

예시 애플리케이션에서 다음과 같은 데이터가 있다고 가정해 봅시다:

- 제품의 원본 목록  
- 사용자가 입력한 검색어  
- 체크박스의 값  
- 필터링된 제품 목록

이 중 **어떤 데이터를 state로 관리해야 할까요?**

---

### ✅ 핵심 판단 기준

아래 **세 가지 질문**을 통해 state 여부를 판단할 수 있습니다:

1. **시간이 지나도 변하지 않나요?**  
   → 그렇다면 **state가 아닙니다**.

2. **부모로부터 props로 전달되나요?**  
   → 그렇다면 **state가 아닙니다**.

3. **컴포넌트 안의 다른 state나 props로 계산할 수 있나요?**  
   → 그렇다면 **절대로 state가 아닙니다!**

---

## 🧩 어떤 것이 state인지 판별해보기

앞에서 본 애플리케이션의 데이터를 다시 한 번 정리해봅시다.

---

### ✅ 데이터별 판단

1. **제품의 원본 목록**  
   → props로 전달되므로 **state가 아닙니다**.

2. **사용자가 입력한 검색어**  
   → 시간이 지남에 따라 변하고, 다른 요소로부터 계산될 수 없으므로 **state입니다**.

3. **체크박스의 값**  
   → 이 또한 시간에 따라 바뀌고 다른 요소로부터 계산할 수 없으므로 **state입니다**.

4. **필터링된 제품 목록**  
   → 원본 목록, 검색어, 체크박스 값으로부터 계산이 가능하므로 **state가 아닙니다**.

---

> ✅ 따라서, **검색어**와 **체크박스의 값**만이 state입니다  

---

---

## 🧩 어떤 컴포넌트가 state를 가져야 할까?

앱에서 **최소한으로 필요한 state**를 결정했으니,  
이제는 **어떤 컴포넌트가 이 state를 소유하고 변경할 책임을 져야 하는지** 정할 차례입니다.

---

### 🎯 기본 원칙

React는 항상 **단방향 데이터 흐름(one-way data flow)**을 따릅니다.  
즉, **부모 → 자식 방향으로만** 데이터를 전달해야 합니다.

---

### ❓ 명확하지 않을 때는?

처음에는 어떤 컴포넌트가 state를 가져야 하는지 명확하지 않을 수 있습니다.  
React에 익숙하지 않은 경우라면 더더욱 헷갈릴 수 있죠.

하지만, 아래의 단계를 따라가면 결정할 수 있습니다:

---

### ✅ 결정 단계

각 **state**에 대해 다음을 수행하세요:

1. 해당 state를 기반으로 **렌더링되는 모든 컴포넌트**를 찾습니다.  
2. 이 컴포넌트들의 **가장 가까운 공통 부모 컴포넌트**를 찾습니다.  
   → 이 부모 컴포넌트가 그 state를 가져야 합니다!

> 모든 관련 컴포넌트를 포함하는 **공통 상위 컴포넌트**에 state를 위치시키는 것이 핵심입니다.

---

## 🧠 State가 어디에 있어야 할 지 정하기

state를 어디에 위치시킬지는 다음 원칙을 따르세요:

- 대부분의 경우, **공통 부모 컴포넌트**에 state를 둡니다.  
- 경우에 따라 **그 부모보다 더 상위 컴포넌트**에 두는 것도 가능합니다.  
- 적절한 컴포넌트를 찾지 못한다면, **새로운 컴포넌트를 만들어 상위 계층에 추가**하세요.

---

이전 단계에서 이 애플리케이션에는 두 가지 state가 있다는 것을 확인했습니다:

- 사용자의 **검색어 입력 값**  
- 체크박스의 **필터 여부 값**

이 두 state는 함께 작동하며, 여러 하위 컴포넌트에서 동시에 사용되므로  
**같은 위치(공통 부모)에 위치시키는 것이 가장 합리적**입니다.

> 관련된 여러 컴포넌트에서 함께 사용하는 state는 반드시 **공통 상위 컴포넌트**에 배치해야  
> 데이터 흐름이 깔끔하고 유지보수가 쉬워집니다.

---

## 🔍 State를 사용하는 컴포넌트를 찾아보기

이제 state를 실제로 사용하는 컴포넌트를 살펴봅시다.

- `ProductTable`은 **검색어**와 **체크박스의 값**에 기반해  
  **상품 리스트를 필터링**해야 합니다.
  
- `SearchBar`는 사용자가 입력한 **검색어**와 **체크박스 상태를 표시**해야 합니다.

---

### 🔗 공통 부모는?

이 두 컴포넌트가 공유하는 **가장 가까운 부모 컴포넌트**는 바로  
`FilterableProductTable`입니다.

---

### 📌 결론

따라서, **검색어**와 **체크박스의 값**이라는 두 가지 state는  
`FilterableProductTable` 컴포넌트 내부에 위치시켜야 합니다.

> 공통 부모 컴포넌트에 state를 위치시키면  
> 하위 컴포넌트들이 props를 통해 효율적으로 데이터를 주고받을 수 있습니다.

---

---

## ⚙️ state를 컴포넌트에 실제로 추가하기

앞서 정리한 대로, `SearchBar`는 **검색어**와 **체크박스 값**을 표시해주고,  
`ProductTable`은 이 값들을 기준으로 **상품을 필터링**합니다.

두 컴포넌트의 **공통 부모**는 `FilterableProductTable`입니다.  
따라서, state는 이 컴포넌트 안에 위치해야 합니다.

---

### ✅ 결정 사항

- `FilterableProductTable` 컴포넌트에  
  **검색어와 체크박스의 값**을 **state로 추가**합니다.

---

### 🛠️ 구현 방법

React의 `useState()` **Hook**을 사용해 state를 정의합니다.

```jsx
const [filterText, setFilterText] = useState('');
const [inStockOnly, setInStockOnly] = useState(false);
```

---

> useState는 React 컴포넌트에서 state를 선언할 수 있게 해주는 특별한 함수입니다.
> Hook은 React의 기능에 "연결(hook into)"할 수 있도록 도와줍니다.

---

---

## 🧩 FilterableProductTable에 state 추가하기

이제 `FilterableProductTable` 컴포넌트 상단에  
두 개의 state 변수를 정의하여 초기값을 명확하게 설정해줍니다.

```jsx
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  // ...
}
```

### 🔁 props로 state 전달하기
filterText와 inStockOnly 값을 하위 컴포넌트인
SearchBar와 ProductTable에 props로 전달해 줍니다.

```jsx
return (
  <div>
    <SearchBar 
      filterText={filterText}
      inStockOnly={inStockOnly}
    />
    <ProductTable 
      products={products}
      filterText={filterText}
      inStockOnly={inStockOnly}
    />
  </div>
);

```

> 이렇게 하면 하위 컴포넌트들은 부모 state 값을 읽을 수 있으며,
> 필요에 따라 콜백 함수로 값을 변경하도록 설정할 수도 있습니다.

---
---

## 🔄 역 데이터 흐름 추가하기

현재 `filterText`는 단순히 읽기 전용으로 사용되고 있기 때문에,  
**input의 value는 변경되지 않으며 화면도 갱신되지 않습니다.**

---

### ✅ 우리가 원하는 동작

사용자가 **input을 변경할 때마다**,  
입력값이 반영되어 **state가 업데이트**되기를 원합니다.

---

### 🧠 해결 방법

- 현재 `state`는 `FilterableProductTable`이 소유하고 있습니다.
- 이 state를 변경하려면,  
  `setFilterText`와 `setInStockOnly` 함수를 호출해야 합니다.

---

### 🔗 함수 전달하기

`SearchBar` 컴포넌트가  
`FilterableProductTable`의 state를 업데이트할 수 있으려면,  
**이 두 setter 함수를 `props`로 SearchBar에 전달해야 합니다.**

```jsx
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
```

---


# 5월 8일 9주차
## 수강내용
### 디자인을 컴포넌트로 나누는 방법
> * Programming : 새로운 함수나 객체를 만드는 방식과 같은 방법
> > - 이중 단일책임 원칙을 반영하고자 하면 컴포넌트는 이상적으로는 한번에 한가지 일 만 해야함
> > - 만약 컴포넌트가 점점 커지면 작은 하위 컴포넌트로 쪼개져야 함
> * CSS : 클래스 선택자를 무엇으로 만들지 생각하는 방법(실제 컴포넌트들은 약간 좀 더 세분되어 있음)
> * Design : 디자인 계층을 어떤식으로 구성할지 

* JSON이 잘 구조화가 되어있다면 이것이 UI의 컴포넌트 구조가 자연스럽게 데이터 모델에 대응된다는 것을 발견할수 있다
* UI와 데이터 모델은 보통 같은 정보 아키텍처 즉 같은 구조를 가지기 때문임
* UI를 컴포넌트로 분리하고 각 컴포넌트가 데이터 모델에 매칭이 될수 있도록 함

### STEP1 UI 구현
1. FilterableProductTable : 예시 전체 포괄
2. SearchBar : 사용자의 입력을 받음
3. ProductTable : 데이터 리스트를 보여주고 사용자의 입력을 기반으로 필터링함
4. ProductCategoryRow : 각 카테고리의 헤더를 보여줌
5. ProductRow : 각각의 제품의 해당하는 행을 보여줌

계층 구조화
```
    FilterableProductTable
        - SearchBar
        - ProductTable
            - ProductCategoryRow
            - ProductRow
```
### STEP 2 React로 정적인 버전 구현
* 실구현 구간
* 가장 쉬운 접근법은 상호작용기능을 폐하고 데이터 모델로부터 UI를 렌더링 하는 버전을 구축하는것
* 대채로 먼저 정적인 버전을 만들고 그 다음에 상호작용 기능을 추가하는것이 좋음
* 정적 버전을 만드는것은 많은 타이핑이 필요하나 생각할것은 적어짐
* 반대로 상호작용 기능을 추가하는것은 많은 생각이 필요하나 타이핑할것은 적어짐

* 데이터 모델을 렌더링하는 앱의 정적인 버전을 만들기 위해선
* * 다른 컴포넌트를 재사용하고
* * props를 이용해서 데이터를 넘겨주는 컴포넌트를 구현하는것이 좋음

* state개념에 익숙하다고 해도 정적을 버전을 구축할때는 state를 지양하는것이 좋음
* state는 오직 상호작용을 위해 즉 시간이 지남에 따라 데이터가 바뀌는것에 사용함
* 우리는 앱의 정적버전을 만들고 있기에 지금은 필요하지 않음

* 앱을 구축할때 계층 구조에 따라 상층부에 있는 컴포넌트부터 시작하는 top-down 방식이 있고
<br> 하층부에 있는 컴포넌트 부터 시작하는 bottom-up 으로 구축하는 방법이 있다

* 간단한 예시에서는 보통 T-D방식으로 만드는게 쉬우나 프로젝트가 커지면 B-U으로 만들고 테스트를 작성하면서 개발하기가 더 쉽다

* 이 단계가 끝나면 데이터 렌더링을 위하여 만들어진 재사용 가능한 컴포넌트의 라이브러리가 만들어 지게 됨
* 정적 버전이기에 컴포넌트는 단순히 JSX만 리턴함
* 최상위 컴포넌트는 prop으로 데이터 모델을 받음
* 데이터가 최상위 컴포넌트부터 맨아래까지 흘러가기 때문에 단방향 데이터 흐름이라고 부름

### 최소한의 데이터만 사용하여 UI state 표현하기
* UI를 상호작용하게 만드려면 사용자가 기반 데이터 모델을 변경할수 있게 하여야함
* state를 통하여 기반 데이터 모델을 변경할수 있게함

* state는 앱이 기억하여야 하는 변경할수 있는 데이터의 최소 집합
* state를 구조화 하는데 가장 중요한 원칙은 중복배제원칙(Don't Repeat Yourself) 임
* 앱이 필요로 하는 가장 최소한의 state를 파악하고 나머지 모든것들은 필요에 다라 실시간으로 계산
* ex. 쇼핑리스트의 경우 배열에 상품 아이템을 넣을것임
* UI에 상품 아이템의 개수를 노출하고 싶다면 상품아이템의 개수를 따로 state값으로 가지는게 아니라 단순하게 배열의 길이만 쓰면 됨

* product앱은 다음과 같은 데이터를 가지고 있다
> 1. 제품의 원본 목록
> 2. 사용자가 입력한 검색어
> 3. 체크박스의 값
> 4. 필터링된 제품 목록

* 이중 어떤게 state가 되어야 하는지는 3가지의 질문을 통해 정할수있다
1. 시간이 지나도 변하지 않음 -> state가 아님
2. 부모로 부터 props로 전달이 되는가? -> state가 아님
3. 컴포넌트 내부의 다른 state나 props를 가지고 계산이 가능한가? -> state가 아님

* 이외는 state임



# 4월 18일 8주차 보강
## 수강내용
### State 끌어올리기
* 보드 컴포넌트가 xIsNext, Square, onPlay 함수를 prop으로 받을수 있게하고
* * onPlay는 보드가 업데이트 된 square를 배열로 호출할수 있게 해주는 함수

* 보드에서 state요청하는 구문 제거

* 보드 컴포넌트는 game컴포넌트가 전달한 props에 의해 완전히 제어됨
* 게임이 작동하게 하려면 game컴포넌트에서 handlePlay 함수를 구현해야 함
* handlePlay 호출시 기능은
* * 이전에 보드는 업데이트된 setSquare를 호출했으나 이제는 업데이트된 square배열을 onplay로 전달함
* handlePlay는 리렌더링을 트리거 하기위해 game의 state를 업데이트 해야하나 더이상 호출받을수 없는 setSquare함수가 없으며 대신 이정보를 저장하기 위해 history state변수를 사용하고 있음 업데이된 square배열을 새 히스토리로 추가하여  history를 업데이트 해주어야 하며 Board에서 했던것처럼 xIsNext의 값을 반전시켜 주어야함

### 전개 구문 ...
* 배열이나 문자열등 반복가능한 객체를 개별 요소로 펼처서 사용할수있게 해주는 문법
* 예시 : 함수 인자 출력
```
function sum(a,b,c){
    return a+b+c;
}

const number = [10,20,30];
const result = sum(...number); //number배열 내부 요소 10,20,30을 개별요소로 펼처 a,b,c에 대입
console.log(result);
// return 60
```

### 과거 움직임 보여주기
* 이제 히스토리를 기록하기 때문에 과거 플레이 목록을 보여줄수 있다
* 버튼과 같은 react 엘리먼트는 일반 js 객체이므로 어플리케이션에서 전달할수 있다
* 여러 엘리먼트를 렌더링하려면 react 엘리먼트 배열을 사용할수 있다
* state에 이동 history 배열이 있기에 이것을 react 엘리먼트 배열로 변환하여야 한다
* js에서 한 배열을 다른 배열로 변환 하려면 배열 map 함수를 사용하여 변환할수 있다
```
[1,2,3].map((x) => x * 2) //[2,4,6]
```

### Map함수
* map의 기본 구문은 map(callBackFn) 혹은 map(callBackFn, thisArg)이다
* thisArg는 내부에서 this로 사용할 값을 지정하는데 화살표 함수에선 생략이됨
* 따라서 예제에서는 callbackFn만 사용하고 화살표 함수가 callbackFn를 대체함
* square, move는 화살표함수의 매개변수임
1. history.map : history는 모든 플레이를 저장하는 배열로 이 history에 map함수를 적용하겠다는 구문
2. map 함수는 history 각각의 요소 index를 순회하며 square를 추출해냄
3. 각 요소는 { }을 실행하며 버튼을 생성함
4. 생성된 버튼은 moves객체에 다시 저장이됨
5. move는 최종 rendering에 사용됨

#### 재정리
```
const moves = history.map((square, move) => {})
```
- 원본 배열 (history) : map이 호출된 원본 배열
- 인덱스 (move) : 현재 순환중인 원본 배열 요소의 인덱스
- 요소 (square) : 현재 순환중인 요소 배열의 값 

### Key 선택하기
* 리스트를 렌더링할때 react는 렌더링 된 각 리스트 항목에 대한 몇 가지 정보를 저장함
* 리스트를 업데이트할때 react는 무엇이 변경되었는지 확인해야함
* 리스트의 항목은 추가, 제거, 재정렬 또는 업데이트 될수 있음
* 리스트가 다음과 같이 업데이트 되었다고 가정할때
```
<li>Alexa: 7 takes left</li>
<li>Ben: 5 takes left</li>
```
* UPDATE
```
<li>Ben: 9 takes left</li>
<li>Cludia: 8 takes left</li>
<li>Alexa: 5 takes left</li>
```

* 만약 데이터 베이스에서 데이터를 불러와서 사용한다면 DB의 ID를 KEY로 사용할수 있다
* 리스트가 다시 렌더링 되면 REACT는 각 리스트 항목의 KEY를 가져와 이전 리스트의 항목에서 일치하는 KEY를 탐색함
* 현재 리스트에서 이전에 존재하지 않았던 KEY가 있으면 REACT는 컴포넌트를 생성함
* 만약 현재 리스트에서 이전 리스트에 존재했던 KEY를 가지고있지 않다면 REACT는 그 KEY를 가진 컴포넌트를 제거함
* 두 KEY가 일치한다면 해당 컴포넌트는 이동함
* KEY는 특별하게 미리 지정된 프로퍼티임
* 엘리먼트가 생성되면 반환되는 엘리먼트에 직접 KEY를 지정함
* KEY가 prop으로 전돨되는 것 처럼 보일수 있으나 react는 자동으로 key를 사용해 업데이트할 컴포넌트를 결정함
* 부모가 지정한 key가 무엇인지 컴포넌트는 모름
* 동적인 리스트를 만들 때마다 적절한 key를 할당하는 것을 강력히 추천함
* 적절한 key가 없는경우 데이터 재구성 추천
* key가 지정되지 않은경우 react는 경고를 출력하며 배열의 인덱스를 기본 key로 사용함
* 배열 인덱스를 key로 사용하면 리스트항목의 순서를 바꾸거나 항목을 추가, 제거할때 문제가 발생함
* 명시적으로 key={i}를 전달하면 경고는 사라지나 배열의 인덱스를 사용할때와 같은 문제가 발생하므로 추천하지 않음


### 시간 여행 구현하기 - 1
* 틱택토 게임의 기록에서 과거의 각 플레이어에는 해당 플레이의 일련번호인 고유 id가 있다
* 중간에 순서를 바꾸거나 삭제하거나 삽입할수가 없기때문에 인덱스를 key로 사용하는것이 안전함
* game 함수에서 li key={move}로 추가할수 있으며 렌더링 된 게임을 리렌더링하면 오류가 사라짐

### 시간여행 구현하기 - 2 
* jumpTo를 구현하기 전에 사용자가 현재 어떤 단계를 보고있는지를 추적할수있는 state가 하나 더 필요함
* 초기값이 0인 currentMove라는 새 state변수를 정의함
* jumpTo함수를 수정하여 currentMove를 업데이트
* currentMove를 변경하는 숫자가 짝수라면 xIsNext를 true로 설정함
* 이제 handlePlay 함수 내용중 두가지를 변경함
* 새로운 플레이를 하는 경우 해당 시점까지의 히스토리만 유지해야함
* * history의 모든 항목 뒤에 nextSquare를 추가하는 대신 <br> history.slice(0, currentMove + 1)의 모든 항목 뒤에 추가하여 이전 히스토리의 해당 부분만 유지하도록 함
* 이동할때마다 최신 히스토리 항목을 가리키도록 currentMove를 업데이트



# 4월 17일 7주차 내용
## 수강내용
### JS Slice 문법 설명
* Array.slice(n)
* property가 하나인 slice()경우 배열의 n행부터 출력을함
* property가 두개인 slice()경우는 첫번째 n이 출력시작 n행 두번째 n의 전 행까지 출력을 한다
```
예시
    const animal[] = {'ant','rabbit','turtle','lion','zebrea','tiger'}
    console.log(Array.Slice(2,5));

    ========== 출력 ===========
    rabbit, turtle, lion, zebra
```

### Tic Tac Toe
```
function handleClick(i) {
 const nextSquares = squares.slice();
 nextSquares[i] = "X";
 setSquares(nextSquares);
}

이 다음 인수 i를 handleClick에 전달해야함 Square의 onSquareClick prop를 JSX에서 직접 handleClick으로 전달할수도 있으나

이 방법은 작동하지 않음
<Square value={squares[0]} onSquareClick={handleClick(0)} />

이유
다음과 같이 handleClick(0)의 호출은 Board의 렌더링의 일부가 됨
handleClick은 setSquares를 호출하여 보드컴포넌트의 state를 변경시키기에
보드 컴포넌트 자체가 다시 렌더링이 됨 하지만 이 과정에서 또 handleClick이 다시 호출되어서
무한루프가 발생함
```
* 왜 이런 문제가 발생하였는가?
```
이전에 onSquareClick={handleClick} 은 함수를 호출한것이 아닌 handleClick함수를 prop으로 전달을 함
하지만 지금은 handleClick(0)을 보면 알듯이 해당 함수를 직접 호출하여서 너무 빨리 함수를 호춯하고 있음
사용자가 클릭하기 전까지는 함수가 호출이 되면 안됨

이 문제 해결을 위해 handleClick(0)을 호출하는 handleClickSquareClick함수를 만들고 handleClick(1)을
호출하는 함수 handleClickSquareClick함수를 만들고 하면 되지만

9개의 서로다른 함수를 정의하고 불러오고 하면 너무 장황하니 () => 함수를 사용하여 코드를 리팩토링함
```

1. 사용자가 Board의 왼쪽 위 Square를 클릭하면 button이 Square로 부터 onClick prop으로 받은 함수가 실행이 됨
    * Square컴포넌트는 Board에서 해당 함수를 onSquareClick prop으로 받음
    * Board는 jsx에서 해당 함수를 직접 정의함
    * 이 함수는 0을 인수로 handleClick을 호출함
2. handleClick은 인수 0을 사용해 Square 배열의 첫번째 엘리먼트를 null에서 x로 업데이트함
3. Board 컴포넌트의 Square state가 업데이트 되어 Board와 그 모든 자식이 모두 다시 렌더링 됨 이에 따라 인덱스가 0인 Square의 컴포넌트의 value prop가 null 에서 X로 변경됨


### 불변성이 중요한 이유
```
일반적으로 데이터를 변경하는 방법은 두가지가 있다
1. 데이터의 값을 직접 변경하는 방법
2. 원하는 변경사항이 있는 새 복사본으로 데이터를 대체하는것

예시 : 
    데이터의 값을 직접 변경
    const squares = [null, null, null, null, null, null, null, null, null];
    squares[0] = 'X';
// Now `squares` is ["X", null, null, null, null, null, null, null, null];

예시 :
    복사본으로 데이터 대체
    const squares = [null, null, null, null, null, null, null, null, null];
    const nextSquares = ['X', null, null, null, null, null, null, null, null];
// Now `squares` is unchanged, but `nextSquares` first element is 'X' rather than `null`
```
<b>사용하면 좋은이유</b>

1. 불변성을 사용하면 복잡한 기능을 훨씬 쉽게 구현이가능
2. 불변성을 사용하는 것의 또다른 장점이 있음
> * 기본적으로 부모 컴포넌트의 state가 변경되면 모든 자식 컴포넌트가 자동으로 다시 렌더링이 됨
> * 변경사항이 없는 자식 컴포넌트도 렌더링이됨
> * 리렌더링 자체가 사용자에게 보이는것은 아니나 성능상의 이유로 트리의 영향을 받지않는 부분의 리렌더링은 피하는것이 좋음
> * 불변성을 사용하면 컴포넌트가 데이터의 변경 여부를 저렴한 비용으로 판단할수가 있음

### TIC TAC TOE 교대로 변경하는 기능 구현
* 현재까지 만든 게임중 가장 큰 결함은 O를 보드에 표시할수가 없다는 문제였음
* 첫번째가 두는 말은 X로 설정하고 이제 보드 컴포넌트에 새로운 state를 추가하여 추적해 보겠다

### return 값이 없는 return?
* JS에서 return 값이 없는 return은 함수를 즉시 종료하라는 의미임
* 이때 값을 지정해주지 않으면 undefined가 반환됨

### TIC TAC TOE 승자 결정하기
* 이제 차례를 표시했으니 게임의 승자가 나오면 더이상 차례를 만들 필요가 없는것도 표시해야함
* 이를위해 9개의 사각형 배열을 가져와서 승자를 확인하고 적절하게 X, O, NULL을 반환하는 함수를 추가해야함

### 구조 분해 할당 (Destructuring Assignment)
* 비구조화 할당, 구조화 할당이라도 함
* 구조 분해 할당은 배열이나 객체의 구조를 해체해 내부 값을 개별 변수에 쉽게 할당하는 기법임
* 이를통해 코드의 간결성과 가독성을 올릴수 있다
* map함수에서도 활용하는 많이 사용하는 기법임

```
const palrs = [
    [1,2],
    [3,4],
    [5,6]
]

palrs.map([x,y]) => {
    console.log(`x: $[x], y: $[y]`);
}
```

### 타임머신 만들기
* Play History만들기
* Square배열을 직접 업데이트 하면 시간여행을 구현하는것은 매우 힘들것임
* 우리는 slice()를 사용해서 플레이어가 클릭할때마다 square 배열의 새 복사본을 만들고 불변처리함
* 이에 배열의 모든 과거버전을 저장할수있었고 이미 발생한 플레이의 내용을 탐색할수도 있다
* 과거의 square 배열을 history라는 배열에 저장하고 이 배열을 새로운 state로 저장함
* history배열은 첫번째 플레이부터 마지막 플레이까지 모든 보드 state를 나타내며 다음과 같은 모양을 가짐
```
[
  // Before first move
  [null, null, null, null, null, null, null, null, null],
  // After first move
  [null, null, null, null, 'X', null, null, null, null],
  // After second move
  [null, null, null, null, 'X', null, null, null, 'O'],
  // ...
]
```

* 이제 과거 플레이 목록을 표시하기 위해 새로운 최상위 컴포넌트 game을 작성
* 여기에 전체 게임 기록을 포함하는 history state를 배치
* history state를 game 컴포넌트에 배치하면 자식 board 컴포넌트에서 square state를 제거 할수 있음
* square컴포넌트에서 board컴포넌트로 state를 끌어욜렸던 것처럼, 이제 board컴포넌트에서 최상위 game컴포넌트로 state를 끌어올릴수있음
* 이렇게 하면 game 컴포넌트가 board컴포넌트의 데이터를 완전히 제어하고 board의 history에서 이전순서를 렌더링하는것을 지시할수있음

# 4월 10일 6주차 내용
## 수강내용
### TIC-TAC-TOE 게임 만들기
* tutorial에서 학습할내용

1. 환경설정 : 개발환경설명
2. 개요 : react의 핵심인 compoenet, props, state 학습
3. 게임 완료하기 : react개발에서 많이 사용되는 기술 학습
4. Time-line : react만의 강점에 대해 더 깊은 통찰력 얻기 가능

### Props를 통한 데이터전달
* react의 component architecture를 사용해 재사용가능한 component를 만들어 사용함

### state 끌어올리기
* 현재 각 Square Component는 게임 state의 일부를 기억함
* 게임에서 승자를 판별하려면 Board가 9개의 square 내부의 state를 기억하고 있어야함
* Board가 각각의 Square에 state에 요청을 한다고 가정하면
* 기술적으로는 가능하나 공식문서에서 자중을 요청

* 가장좋은방법은 부모요소에서 공유 state를 선언하는 방법이 존재함
* 부모 컴포넌트는 props를 통해 해당 state를 자식 컴포넌트에 전달하는게 가능함
이러면 자식 컴포넌트가 서로 동기화되고 부모 컴포넌트와도 동기화되도록 유지하는것이 가능

### fill() 설명
```
    Array(n).fill(0,2,4) 구문설명
    n개 배열에 2번배열부터 4번배열까지 0값을 배열에 넣어라
    Array(9).fill(null)
    9개배열에 모든 값을 null로 하여라
```

# 4월 3일 5주차 내용
## 수강내용
### 이벤트 응답
* component 내부에 event handler 함수를 선언하면 evenet에 응답할수 있다
* onClick=[handleClick]의 끝에 ()가 없다
* 함수를 호출하지 않고 전달만 하면 된다
* react는 사용자가 버튼을 클릭할 때 이벤트 핸들러를 호출 한다

### 화면 업데이트
* component가 특정 정보를 기억해 두었다가 표시하기를 원하는 경우가 있다
* 예를들어 버튼이 클릭된 횟수를 카운트하고 싶은경우에 component에 state를 추가하면 된다
<pre>import {useState} from 'react';</pre>
* 이 코드를 보면 useState는 react파일안에 named Export로 선언되어있는 여러 개의 component중 하나라는것을 알수가 있다
* 이제 component내부에 state변수를 선언할수 있다
<pre>function MyButton(){<br>const [count, setCount] = useState(0);<br>//..</pre>
* useState로 부터 현재의 state를 저장할수 있는 변수인 count와 이를 업데이트 할수 있는 함수인 setCount를 얻을수 있다
* 이름은 자유롭게 지정할수있으나 보통 [ex, setEx] 형식으로 작성하는것이 일반적이다
* 즉 변수이름과 변수 이름 앞에 set을 붙인 업데이트 함수를 관용적으로 사용한다

### HOOK사용하기
* use로 시작하는 함수를 HOOK이라고 한다
* useState는 React에서 제공하는 내장 HOOK이다
* 다른 내장 HOOK는 API참고서에서 찾아볼수 있다
* 또한 기존의 것들을 조합하여 자신의 HOOK을 작성할수도 있다

* HOOK은 다른 함수보다 더 제한적이다
* component 또는 다른 hook의 상단에서만 hook을 호출할수가 있다
* 조건이나 반복에서 useState를 사용하고 싶다면 새 컴포넌트를 추출하여 그곳에 넣으면 된다

* HOOK은 react의 렌더링 및 상태 관리 메커니즘과 밀접하게 연결되어 있으며 아래와 같은 규칙을 따라야함
> 최상위에서만 사용하여야함
>> if, for, while등의 블록내부에서 hook을 호출하면 안됨(함수의 조건문 내부에서 호출하면 실행순서가 달라질수 있기때문)

### 왜 이런 규칙을 따라야하는가?
react의 동작을 예측 가능하고 안정성을 높이기 위해 필요한 규칙이다

1. rendering 순서를 보장하기 위해
* 조건문이나 반복문에서 hook을 사용하면 매 rendering마다 hook의 호출순서가 달라질수있기에 react가 상태를 제대로 추적할수가 없다
2. 불필요한 사이드 이펙트 방지

### 왜 function형 컴포넌트만 hook을 사용하는가?
* class형 컴포넌트는 lifecycle함수를 통해 상태관리를 하여왔다
* 그런이유 때문에 class형 component는 유지보수가 어려웠다
* react팀에서 function형 컴포넌트를 지향함

### function VS class
* 왜 요즘은 func component를 더 많이 사용할까?
* react의 역사를 찾아보면 그 이유를 알수있다

1. react 초창기
* 함수형 컴포넌트가 존재는하였으나 단순이 props를 받아 반환하는 역할만 가능했다
* 상태나 생명주기 기능이 없음<br> ㄴ 그래서 주요 component는 주로 class로 작성됨
2. hook도입
* useState의 도입으로 함수형을 사용을 권장함
3. react17 이후
* 사실상 func component가 표준이 됨

### Component간 데이터 공유
* 위에서 변수는 count하나인데 버튼 3개가 모두 다른 state를 가지게 되는것인가에 대한 의문이 존재함
* 각각의 CountState com는 독립적인 count가 있는것처럼 동작하였고 각 버튼을 클릭하면 각각 증가함
* 그러나 이것은 이상한것이 아님 각 component 객체가 독립적으로 동작하는것이기 때문

# 3월 27일 4주차 수업내용
## 수강내용
### Component의 생성 및 nesting(중첩)
* export default 키워드는 파일내의 component 중 기본 component를 지정하는 문법
* 이 키워드도 js문법임

> export default 와 export의 차이
> * named export (export)
>> * 하나의 파일안에 여러개의 compoent가 있을때 사용

> * export default
>> * 하나의 파일안에서 하나의 component 만 내보내는 경우 사용

### JSX 마크업

* 앞에서 작성한 코드의 마크업 문법을 JSX라고함
* 반드시 사용해야 하는것은 아니나 편의성을 위하여 많이 사용함
* JSX는 HTML보다 엄격한 문법을 적용함
* JSX에서는 br같은 싱글태그에서도 태그를 닫아줘야함
* react에서는 여러개의 컴포넌트를 JSX태그로 반환될수 있음
* 다만 여러개의 componnent를 <pre><div></div><></></pre> 으로 rapping 해줘야함

### Style 구문
* React에서는 className이라는 키워드로 class를 정의한다
* className은 html의 class와 동일한 방식으로 작동함
* css는 별도의 css 파일에 작성을함 react는 css파일을 추가하는것을 규정하지는 않는다
* 가장 간단한 방법은 html에 link태그를 추가하는 것이 한 방법이다
> 그러나 link를 추가하면 정적 페이지를 수정해야 하기 때문에 추천하지 않음
* 만일 빌드 도구나 프레임워크를 사용한다면 해당문서를 참고해 프로젝트에 css파일을 추가한다

### 데이터 표시
* JSX를 사용하면 JS내부에 마크업을 넣을수 있다
* JSX코드 내에서 JS로 탈출하여 변수나 표현식을 사용하는것이다
* 이방법을 ESCAPE BACK이라고 함
* {}를 사용하여 변수나 표현식을 사용자에게 표시하는 방법
<pre>
    return(
        < img 
            className="avator"
            src={user.imageUrl}
        />
    );
</pre>
* src속성에 user.imageUrl 변수의 값을 전달하여 이미지의 경로를 설정하고있다
* component에 import를 사용하여 외부 css파일을 연결하여 불러오면 

### 조건부 렌더링
* React에서 조건문을 작성하는데에는 특별한 문법이 필요없음
* 일반적인 JS를 작성할때 사용하는것과 동일한 방법을 사용함
> * if-else
> * 삼항연산자
> * 이항연산자 : &&(AND), ||(OR), !=(NOT)

### 리스트 렌더링
* 컴포넌트 리스트를 렌더링 하기위해선 for문 및 map() 함수와 같은 JS기능을 사용함
* 리스트 태그에 KET속성이있는것을 알아야함
* 목록을 사용할때에는 각 항목에 대해 고유식별문자 또는 숫자를 전달해야함
* 항목을 삽입, 삭제 또는 재정렬할때 어떤일이 일어나는지 알기위해 KEY를 사용함
* 이걸 KEY PROP라고 함

# 3월 20일 3주차 수업내용
## 수강 내용
### React 초기 모듈 설명
>node_modules/
>>초기 node module 및 새로 설치하는 패키지가 저장이됨<br>
>>초기 파일 : 37,352 / 폴더 : 4,597 / 용량 : 200mb 엄청난 양이 존재함<br>
>> git으로 관리하지 않아서 폴더명이 흐릿하게 됨<br>
>public<br>
>>정적 파일을 저장하는 dir<br>
>>build후 배포할 HTML, CSS, JS등이 보관된곳<br>
>>특별히 수정할 필요 없음<br>
>>index.html : React앱이 마운트 되는 html파일<br>
>>src : React 주요코드가 위치하는 dir<br>
>>대부분 여기서 작업을 하게 됨<br>
>>>src/App.js : 메인 component로 필요한 sub component를 모아서 관리함<br>
>>>src/App.css : App.js의 css<br>
>>>src/index.js : React앱의 진입 점으로 최종렌더링이 되는곳<br>
>>>ReactDOM.createRoot를 사용해 App.js를 렌더링함<br>

* * *

### 의존성 관리와 package.json
>* package.json은 패키지의 의존성을 관리하는 파일
>* 의존성이란 하나의 소프트웨어가 다른 소프트웨어에 의존해서 동작하는 관계를 의미
>* 즉 어떤 프로젝트에 사용된 각종 패키지등의 버전을 동일하게 유지하기 위한 것
>* 협업을 할때는 팀원들 각자의 컴에 같은 패키지를 설치하여 동일한 개발환경을 구축해야함<br>코드는 Github, Git server를 사용하나 node 패키지는 각 팀원들이 구축해야 함
>* 의존성을 무시하면 다른 패키지를 설치하는 팀원 때문에 개발 프로젝트의 오류 등이 발생할수가 있다
>* 개인의 경우도 github에 있는 코드를 내려 받은 후 동일한 개발환경을 구축하여야 할때가 있다

* * *

### 의존성을 관리해주는 이유
>* 손쉬운 설치 및 업데이트
>>* npm install 또는 yarn install 한 줄로 모든 의존성을 자동 설치 가능
>>* 특정 버전의 라이브러리를 쉽게 설치할수가 있다

>* 일관된 개발환경 유지
>>* 팀원들과 같은 라이브러리 버전을 유지할수가 있다
>>* package-lock.json을 활요하면 동일한 패키지를 정확한 버전으로 설치 가능

>* 중복 설치 방지
>>* 필요없는 라이브러리르 제거하여 프로젝트를 가볍게 유지할수가 있다

>* package.json은 이런 의존성을 체계적으로 관리하는 역할을 함
>* 프로젝트에 필요한 라이브러리를 쉽게 설치, 업뎃, 유지 가능하게 해주는 시스템임

### package.json내부 설명
dependencies : 실제 코드에서 사용하는 라이브러리

### package.json과 package_lock.json의 차이
#### package.json<br> 
>프로젝트의 기본 정보와 의존성을 정의<br >내용 : 패키지 이름, 버전, 스크립트, 의존성목록등 포함<br > 직접 수정 가능<br > 일반적으로 ^ 또는 - 을 사용하여 버전범위를 지정함<br > 보통 git에 포함됨

* * *

#### package_lock.json
>설치된 패키지의 정확한 버전 정보 저장<br > 의존성 트리 및 패키지의 정확한 버전이 기록됨<br > 직접 수정하지 않으며, npm install 시 자동 업데이트<br > 특정버전이 고정되어 일관된 환경 구성이가능<br > 포함하는것이 권장되나 modules처럼 무시할수도 있음

#### package.json을 유지 해야하는 이유
1. 프로젝트의 의존성 정보 제공
2. 버전범위 지정 가능

### node modules 재설치
* 팀 작업을 하면서 github로 부터 프로젝트 파일을 clone 한 경우
* 개인이 자신의 프로젝트를 다른 pc등에서 clone하여 계속 개발해야 하는 경우
* 프로젝트에 문제가 생겨 node module을 다시 설치해야 하는 경우

### 설치법
1. node module폴더와 package-lock.json파일을 삭제함
<pre>rm -rf node_modules package-lock.json</pre>
2. npm 패키지의 임시 저장소인 cache를 초기화 함
* cache가 오래되면 충돌이 발생할수도 있기에 문제해결에 도움이 되는 작업
* force옵션으로 강제로 삭제함
<pre>npm cache clean --force</pre>
3. 패키지 재설치
<pre> npm install </pre>

## package-lock.json을 삭제하는 이유
1. package-lock.json이 손상되었거나 잘못된 의존성이 있을때

2. 최신버전의 패키지를 다시 받고 싶을때

3. 팀프로젝트에서 다른 팀원이 이상한 상태로 package-lock.json을 업데이트 했을때

#### 문제가 없다면 package-lock.json을 유지하는 것이 좋으나 의존성 출동이나 패키지 문제로 인하여 에러가 발생한다면 삭제 후 재설치 하는것이 좋다

## COMPONENT
* React는 component 단위로 개발하여 블록형식으로 앱을 구축함
* component는 하나의 모듈임
* React component는 JS함수임
* 조건에 따라 화면을 다르게 표출하고 싶다면 if문을 사용하면됨
* 목록을 표시하고 싶다면 map()함수를 사용하면됨
* React에서 사용되는 마크업을 JSX(Javascript Syntax eXtension)이라고 함

## 필요한곳에 상호작용요소 추가
* React Component는 데이터를 수신하고 화면에 표시해야하는 내용을 반환함
* 사용자의 입력을 받에 새로운 데이터를 component에 전달할수도 있다
* 이때 React는 상호작용을 통해 얻은 새로운 데이터로 화면을 업데이트함

## Full_Stack
* React는 라이브러리여서 component를 조합할수는 있으나 라우팅 및 데이터 가져오기를 규정하지는 않는다
* React는 전체 앱을 빌드하려면 Next.js또는 Remix와 같은 full-stack React Framework를 사용해야함
* React도 하나의 아키텍쳐임
* 따라서 이를 구현하는 Framework를 사용하면 서버에서 실행되거나 혹은 빌드 중에도 비동기 component에서 데이터를 가져올수가 있다
* 또한 파일이나 DB에서 데이터를 읽어와서 대화형 component에 전달할수도 있다

## React 사용하면 좋은점
* React를 사용하면 동일한 기술을 사용해 Web-App 과 Native-App을 모두 구축할수가 있다
* 각 플랫폼의 고유한 강점을 활용하여 모든 플랫폼에 잘 어울리는 UI를 구현할수가 있다

### WEB의 본질에 충실하기
* 사람들은 웹/앱 페이지가 빨리 로드되기를 기대함
* React를 사용하면 서버에서 데이터를 가져오는 동안에도 HTML을 스트리밍하여 JS가 로드되기도 전에 콘텐츠를 보여줄수 있다
* 또한 Cl측에서는 표준 웹 api를 사용하여 렌더링 도중에도 UI를 반영하도록 할수 있다
* 이런 동작은 사용자가 원하는 빠른 로드를 도와줌

### 진정한 Native UX를 실현
* 사람들은 APP이 자신의 플랫폼과 유사한 느낌을 주기를 원함
* React Native와 Expo를 사용하면 Android, IOS등을 위한 앱을 React로 빌드할수있다
* App이 Native처럼 보이고 느껴지는 이유는 UI가 Native이기 때문임
* 즉 WebView가 아니라 플랫폼에서 제공하는 Android / IOS View를 사용하기 때문이다
* React를 사용하면 웹 개발자도 Native개발자도 될수있다
* UX의 희생없이 다양한 플랫폼에 제품출시가 가능함
* 기업에서는 플랫폼간 제약을 없에고 전체기능을 협업을 통해 개발할수 있는 팀을 구축이가능

## 새로운 기능에 맞춰 업그레이드
* 모든 React commit은 10억명이상의 사용자에 의해 여러 환경에서 테스트를 거침
* Meta에 있는 10만개 이상의 React Component는 모든 마이그레이션 전략의 검증을 지원함
>* 마이그레이션 : 디이터나 소프트웨어를 한 시스템이서 다른 시스템으로 이동하는 것 

# 3/13 강의 요약
## 수강 내용
### Node의 장단점
>장점
>   >1. 비동기 논 블로킹 I/O로 높은 성능 제공
>   >2. JS 풀스택 개발이 가능해 생산성이 향상됨
>   >3. NPM(Node Package Manager) 사용가능
>   >4. 경량 서버 개발에 최적화 됨
>   >5. 실시간 데이터 처리가 강력함

* * *

>단점
>   >1. CPU집약 적인 작업에 부적합함 : 싱글 스레드 기반이라 멀티스레딩이 안됨
>   >2. 콜백 지옥문제
>   >3. 보안 취약점 존재


* * *

## React 개발 환경 구축
--------------
>필요한 것은 Node.Js만 있으면 충분하다<br>
>처음에는 Node.js만 있었으나 시간이 지나며 <br>
>npm -> Node.js v0.6.3, Node.js npx -> 5.2.0 에 추가가 되었다

## React 프로젝트 구조 및 역할
----------------
>node module : js로 작성된 모듈의 모임<br>
>public : 정적 파일을 저장하는 폴더로 빌드시 그대로 유지가 됨<br>
>   >index.html React앱이 마운트 되는 html파일<br>
>   >manifest.json : pwa관련 설정파일<br>

>src : React의 주요 코드가 위치하는곳<br>
>   >app.css : app.js의 적용되는 스타일 코드<br>
>   >app.js : 메인 컴포넌트<br>
>   >apptest.js : jest를 사용한 기본 테스트 파일<br>
>   >index.css : 전역 스타일<br>
>   >index.js : react앱의 진입점 ReactDOM.createRoot를 사용해 app.js를 렌더링함<br>
>   >logo.svg : 그냥 로고<br>

>.gitignore : git에 추가하지 않을 파일 목록 정의<br>
>package-lock.json : 설치된 패키지의 정확한 버전이 기록된 파일<br>
>README.md : 프로젝트 설명문서<br>
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
