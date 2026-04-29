# Architecture

## Component thinking

React-мышление - это умение видеть интерфейс как набор маленьких независимых блоков.

UserPage

* UserHeader
* UserCard
* UserStats
* UserActions

Главная идея:

> Компонент должен отвечать за одну понятную часть UI.

Хорошее разбиение:

UserPage

* UserCard
* UserAvatar
* UserInfo
* UserActions

Плохое разбиение:

UserPage - все в одном месте.

## UI decomposition

UI decomposition - это разбиение интерфейса на компоненты.

Например, есть карточка:

Avatar + Name + Role + Show / Hide button

UserCard - container component

UserAvatar + UserInfo + UserActions - presontational component

## Presentatinal vs Container

Это важный паттерн.

Container component отвечает за:

* загрузку данных
* state
* useEffect
* бизнес-логику
* передачу props вниз

Пример:

```ts
function UserContainer() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser({
      name: "Semyon",
      age: 33,
      role: "Engineer",
    });
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return <UserCard user={user} />;
}


```

Presentational component отвечает только за UI:

Пример:

```ts
function UserCard({ user }: { user: User }) {
  return (
    <section>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
      <p>{user.age}</p>
    </section>
  );
}
```

### Главное различие:

Container

* знает откуда данные
* хранит state
* вызывает API
* содержит useEffect

Presentatinal

* получает props
* отвечает за UI
* не знает про API

Практическое правило:

Если компонент делает fetch, useEffect, управляет state - это container.

Если компонент принимает props и рендерит разметку - это presentational.
