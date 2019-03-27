import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
//import * as config from './__mocks__/react-native-config';
jest.mock("react-native-localize", () => {
    return {
        getLocales: () =>  ({languageTag: "en-US", isRTL: false, countryCode: "US", languageCode: "en"})
    }
  });
  jest.mock("react-native-config", () => {
    return {
        Config: {API_ENDPOINT_URL: 'localhost'}
    }
  });
Enzyme.configure({ adapter: new Adapter() })