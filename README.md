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
