### 1. react组件设计模式：
    * Render-props
    * 组合模式
    * Provider-Consumer

> props.children(props) 函数名作为children

> props.test(props) 函数名作为props
```javascript
<A test={() => <></>}>{() => <></>}</A>
```
* * *
> 组件间隐式传值
```javascript
<A>
  {React.Children.map(this.props.children, (child,index)=>{
 	return React.cloneElement(child,newProps);
  })}
 </A>
```
* * *
> 跨组件间传值
```javascript
const {Provider, Consumer} = React.createContext(defaultProps)
<Provider value={object}>
  ...
  <Consumer>
     {object => <></>}
  </Consumer>
  ...
</Provider>
```

### 2. react hooks >=16.8.0
    * const [state,setState] = useState(defaultState)
    * useEffect(() => {return () => {}}, [dependencies])
    * useContext
    * const [state,dispatch] = useReducer(reducer,defaultValue)
```javascript
    const AppContext = React.createContext({});
    const {Provider} = AppContext;
    <Provider value={defaultValue}>
    ...
    </Provider>
    const defaultValue = React.useContext(AppContext);
```
> ps:通过useContext和useReducer来达到redux的效果
> react hooks使用规则：只能在function组件中使用，必须在function组件根作用域中使用，不要包含在if中

    
