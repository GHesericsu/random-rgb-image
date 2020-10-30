import App from '../client/src/Components/App.jsx';

describe('App Component', () => {
  test('App Component Exists', () => {
    const wrapper = mount(<App />);
    const instance = wrapper.instance();
    expect(wrapper.find(App).exists()).toEqual(true);
    expect(instance).toBeInstanceOf(App);
    wrapper.unmount();
  });

  test(`Generate Image Button Should Work`, () => {
    const mockFunction = jest.fn();
    const button = shallow((<button onClick={mockFunction}>Generate New Image</button>));
    button.simulate('click');
    expect(mockFunction.mock.calls.length).toBe(1);
    button.unmount();
  });
});
