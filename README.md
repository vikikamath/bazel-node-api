# Install

## OSX

```bash
brew install bazel
```

```bash
npm run install
```

# Run

```bash
npm run start
```

# Unit test

```bash
npm run test
```

# Interact with server

```bash
curl -d '{"num":"1", "by":"2"}' -H "Content-Type: application/json" -X POST http://localhost:8080/decrement
```

```bash
curl -d '{"num":"1", "by":"2"}' -H "Content-Type: application/json" -X POST http://localhost:8080/increment
```

Above commands should output :
`-1`
`3`
