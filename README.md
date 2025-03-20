# 함준우 202130334

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
