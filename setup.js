import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
jest.mock("react-native-localize", () => {
    return {
        getLocales: () =>  ({languageTag: "en-US", isRTL: false, countryCode: "US", languageCode: "en"})
    }
  });
Enzyme.configure({ adapter: new Adapter() })