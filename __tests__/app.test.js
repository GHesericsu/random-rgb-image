import App from '../client/src/Components/App.jsx';

describe('App Component', () => {
  test('App Component Exists', () => {
    const wrapper = mount(<App />);
    const instance = wrapper.instance();
    // console.log('wrapper', wrapper.find(App).children() )
    expect(wrapper.find(App).exists()).toEqual(true);
    // expect(wrapper.find(App).children() > 4).toEqual(true);
    expect(instance).toBeInstanceOf(App);
    wrapper.unmount();
  });
  test(`An Image Exists`, () => {
    
  }), 
});
