# dummy-plug

express 를 이용하여 정적 json 파일을 리턴하는 API 샘플 코드

## 사용방법

### Install

    yarn install

### Start

    yarn run dev

`http://localhost:8080/<Entry Point>` 액세스 (Default Port값 : 8000)

### Entry Point 추가

1. [src/data](https://github.com/lighthouse-dev/dummy-plug/tree/main/src/data) 에 json파일 추가
2. [server.ts](https://github.com/lighthouse-dev/dummy-plug/blob/main/src/server.ts) 에 엔트리포인트 추가 & 위에서 생성한 json파일을 리턴

   ```ts
   app.get('/v1/profile', (_req: express.Request, res: express.Response) => {
     res.json(require('./data/profile.json'));
   });
   ```
