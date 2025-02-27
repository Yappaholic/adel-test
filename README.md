### Тестовое задание на NextJS
Для запуска достаточно клонировать репозиторий и запустить
через менеджер пакетов:

```shell
git clone https://github.com/yappaholic/adel-test
cd adel-test
npm install # или bun install
npm run dev # или bun dev
```

Данные из сервера находятся в `app/api/products/data.ts`
и отправляются с помощью специального API маршрута.

Специальные типы данных расположены в `types`, кастомные
хуки в `hooks` и Zustand store в `store`.

Все созданные компоненты находятся в директории `components` и
разделены по их назначению.
