# 1、初始化ts+react项目

```
npx create-react-app name --template typescript
```

# 2、用ts写一个hello world
### 简单写一个函数式组件

```tsx
import React from "react";
const Hello = (props: any) => {
    return <h2>{ props.message }</h2>
}
export default Hello
```
### 上面用到any不太好，我们定义一个接口,使用props时没有提示

```tsx
import React from "react";
interface IHelloProps {
    message: string
}
const Hello = (props: IHelloProps) => {
    return <h2>{ props.message }</h2>
}
export default Hello

```
### React.FunctionComponent

```tsx
import React from "react";

interface IHelloProps {
    message?: string
}
const Hello: React.FunctionComponent<IHelloProps> = (props) => {
    return <h2>{ props.message }</h2>
}
Hello.defaultProps = {
    message: 'hello wangling'
}

export default Hello

```

你会发现多了很多提示

![img.png](imgMd/img.png)

### FunctionComponent接口定义

```jsx
interface FunctionComponent<P = {}> {
        (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
        propTypes?: WeakValidationMap<P> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        defaultProps?: Partial<P> | undefined;
        displayName?: string | undefined;
    }
```



### React.FC

FC是FunctionComponent的简写

FC的类型定义

```ts
type FC<P = {}> = FunctionComponent<P>;
```

```tsx
interface IHelloProps {
    message?: string
}
const Hello: React.FC<IHelloProps> = (props) => {
    return <h2>{ props.message }</h2>
}
Hello.defaultProps = {
    message: 'hello wangling'
}

export default Hello
```

# 3、classnames使用
```bash
npm i classnames -S
npm i @types/classnames -S
```
