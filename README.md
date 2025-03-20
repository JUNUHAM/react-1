# 함준우 202130334

# 3월 20일 3주차 수업내용
## 수강 내용
### React 초기 모듈 설명
>node_modules/
>>초기 node module 및 새로 설치하는 패키지가 저장이됨
>>초기 파일 : 37,352 / 폴더 : 4,597 / 용량 : 200mb 엄청난 양이 존재함
>> git으로 관리하지 않아서 폴더명이 흐릿하게 됨
>public
>>정적 파일을 저장하는 dir
>>build후 배포할 HTML, CSS, JS등이 보관된곳
>>특별히 수정할 필요 없음
>>index.html : React앱이 마운트 되는 html파일
>>src : React 주요코드가 위치하는 dir
>>대부분 여기서 작업을 하게 됨
>>>src/App.js : 메인 component로 필요한 sub component를 모아서 관리함
>>>src/App.css : App.js의 css
>>>src/index.js : React앱의 진입 점으로 최종렌더링이 되는곳
>>>ReactDOM.createRoot를 사용해 App.js를 렌더링함

* * *

### 의존성 관리와 package.json
>* package.json은 패키지의 의존성을 관리하는 파일
>* 의존성의란 하나의 소프트웨어가 다른 소프트웨어에 의존해서 동작하는 관계를 의미
>* 즉 어떤 프로젝트에 사용된 각종 패키지등의 버전을 동일하게 유지하기 위한 것
>* 협업을 할때는 팀원들 각자의 컴에 같은 패키지를 설치하여 동일한 개발환경을 구축해야함<br>코드는 Github, Git server를 사용하나 node 패키지는 각 팀원들이 구축해야 함
>* 의존성을 무시하면 다른 패키지를 설치하는 팀원 때문에 개발 프로젝트의 오류 등이 발생할수가 있다
>* 개인의 경우도 github에 있는 코드를 내려 받은 후 동일한 개발환경을 구축하여야 할때가 있다




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
