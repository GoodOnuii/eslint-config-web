# web-eslint

오누이 web frontend 공통 eslint 설정입니다.

## Installation

해당 package를 설치하기 전에 `.npmrc` 파일을 생성하고 아래의 내용을 추가해주세요. [참조 파일](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry#authenticating-to-github-package-registry)

다음 아래와 같이 설치를 진행하시면 됩니다.

```text
//.npmrc
@goodonuii:registry=https://npm.pkg.github.com
```

`$ yarn add -D @goodonuii/web-eslint`

또는 `package.json`에 아래와 같이 추가해주세요:

```
"dependencies": {
    "@goodonuii/web-eslint": "^0.1.9"
  }
```

## Usage

```json
// .eslintrc.json
{
  "extends": ["@goodonuii/web-eslint"]
}
```
