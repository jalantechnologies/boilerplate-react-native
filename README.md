# BoilerplateReactNative

##Installation
[1] Install all modules listed as dependencies in package.json
```bash
$ npm install
```
[2] Link native dependencies

```bash
$ react-native link
```

[3] Crashlytics dependency specifically for ios(No requirement for android)

```bash
$ cd ios
$ pod install
```

## Scripts

- `npm build-android-debug` - For building the debug android app(apk).
- `npm build-android-release` - For building the release android app(apk) and ready to upload to playstore.
- `npm android-dev` - For starting react native android app locally using dev configuration.
- `npm android-prod` - For starting react native android app locally using production configuration.
- `npm ios-dev` - For starting react native ios app locally using dev configuration.
- `npm ios-prod` - For starting react native ios app locally using production configuration.
- `npm test` - To run test suits via `jest`.

## Configuration

The module uses [config](https://www.npmjs.com/package/react-native-config) for loading configuration entries.

- Consult/update `env.dev` for values at development. (The default env)
- Consult/update `env.staging` for values at staging.
- Consult/update `env.prod` for values at Production.

**Entries**

Each entry here is an object notation and is provided with short description.

- `env` `String` - configuration enviornment 
- `API_ENDPOINT_URL` `String` - URL for API endpoint. 

## Features

- Error reporting via Crashlytics.
- Database connection via mongoose.
- Internationalization support.
- CI/CD via CircleCI.
