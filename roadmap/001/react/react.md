# React

## JSX

JSX - это синтаксис, похожий на HTML внутри JavaScript/TypeScript.

```Ts
const title = "React";

return <h1>Hello, {title}</h1>;
```

Важно:

```
className (class)

htmlFor (for)

{} для JS-выражений
```

## Components

Компонент - это функция, которая возвращает UI.

```ts
function Button() {
  return <button>Click me</button>;
}
```

Использование:

```ts
<Button />
```

## Props

Props - это входные данные компонента.

```ts
type ButtonProps = {
  text: string;
};

function Button({ text }: ButtonProps) {
  return <button>{text}</button>;
}

<Button text="Save" />
```

## State

State - это внутренние данные компонента, которые могут меняться.

```ts
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

## Events

Events - обработка действий пользователя.

```ts
function Input() {
  const [value, setValue] = useState("");

  return (
    <input value={value} onChange={(e) => setValue(e.target.value)} />
  );
}
```

### Practice

Сделать UserCard, который принимает name, age, role через props, а внутри имеет кнопку Show/Hide info через state.

[https://stackblitz.com/edit/vitejs-vite-v52b9egz](Practice)
