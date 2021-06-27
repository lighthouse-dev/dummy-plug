# dummy-plug

express 를 이용하여 정적 json 파일을 리턴하는 API 샘플 코드

## Tech Stack

- Node, Express

## Environment Variables

실행시 .local.dev.env 파일에 다음 환경 변수 추가

`DUMMY_PLUG_PORT`

## Run Locally

Clone the project

```txt
git clone https://github.com/lighthouse-dev/dummy-plug.git
```

Go to the project directory

```txt
cd dummy-plug
```

Install dependencies

```txt
yarn install
```

Start the server

```txt
yarn run dev
```

### Add Entry Point

1. [src/data](https://github.com/lighthouse-dev/dummy-plug/tree/main/src/data) 에 json파일 추가 (res.json()에 직접 기재해도 됨)
2. [server.ts](https://github.com/lighthouse-dev/dummy-plug/blob/main/src/server.ts) 에 엔트리포인트 추가 & 위에서 생성한 json파일을 리턴하도록 추가

   ```ts
   app.get('/v1/profile', (_req: express.Request, res: express.Response) => {
     res.json(require('./data/profile.json'));
   });
   ```
