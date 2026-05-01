# Next.js

App Router - главная идея

В Next.js маршруты строятся через папку app.

page - страница

layout - общие шаблон

## Server Component vs Client Component

```ts
// Server Component
export default function Page() {
  return <h1>Hello</h1>;
}

"use client";

import { useState } from "react";
export function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}


```
