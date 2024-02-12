# react-2024-01-15

## Дз1

1. Создать репозиторий(Публичный) на github
2. Создать ветку с названием - lecture-1/hw
3. Создать проект(используем vite - https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
4. Очистить проект
5. Скопировать себе в проект мокковые данные(materials/mock.js в этом проекте)
6. Отобразить все рестораны из моковых данных. Отображаем рестораны друг за другом. Логику отрисовку массивов не используем, отображаем каждый ресторан отдельно. Цель отработать работу с элементами.
   1. Название ресторана
   2. Заголовок - Меню (h3)
   3. Список названий блюд (используем тег ul и li)
   4. Заголовок - Отзывы (h3)
   5. Список текстов отзывов (используем тег ul и li)
   6. (Доп) сделать все это на React.createElement.
7. Сделать коммит
8. Запушить
9. Открыть ПР из ветки с дз в ветку main
10. Отправить ссылку на ПР в ветку дз 1 в Discord

## Дз2

1. Создать компонент Layout с Header и Footer. Обернуть им список ресторанов;
2. Разбить рестораны на компоненты;
3. Применить способ отрисовки массивов.
   Потихоньку можно начинать использовать стили, но без фанатизма, тк на следующей лекции продолжим про них говорить.

## Дз3

1. В компонент Dish добавить счетчик аналогичный тому, который делали на лекции. Минимальное значение счетчика 0, максимальное 5. При минимальном значении дизейблиться кнопка с -, при максимальном кнопка с +. Дизейбл кнопки должен быть отражен стилями кнопки(кнопка конечно же делается отдельным компонентом). Если счетчик не сбрасывается ничего страшного.
2. Делаем табы ресторанов. Выводим в строчку кнпоки с названиями ресторанов. По клику на кнопку отображается ресторан с этим названием. Единовременно отображается только один ресторан.

## ДЗ4

1. Добавить после списка отзывов форму из трёх полей: Имя, Текст, Рейтинг

## ДЗ 5

1. Сделать фейковую авторизацию:
   1. Добавить в шапку кнопку login
   2. По клику на кнопку должна происходить фейковая авторизацию(сложить пользователя в контекст. Пользователь = объект с полем имя и почта)
   3. Если пользователь авторизован, то в шапке показываем его имя и кнопку выйти.
   4. По клику на кнопку выйти очищаем пользователя в контексте.
   5. Форма добавления отзыва показывается только если пользователь авторизован. Вместо инпута имени отображаем Имя авторизованного пользователя.
2. Доп задание. Пользователь не захардкожен, а вводится в поля модального окна, которое открывается по клику на кнопку login. Модалка реализована через порталы - https://react.dev/reference/react-dom/createPortal. В модалке два поля: имя и почта, две кнопки: отмена и войти

## ДЗ 6

1. Установить @reduxjs/toolkit и react-redux
2. Создать stor
3. Скопировать в проект нормализованный мокковые данные(materials/normalized-mock.js в этом проекте)
4. Для каждой сущности создать слайс
5. Заполнить дефолтное состояние каждого слайса мокковыми данными(как делали на лекции)
6. Заменить старое использование данных в приложении на использование данных из стора(обязательно пишем селекторы отдельно, как на лекции)

## ДЗ 7

1. Скопировать папку simple_api (materials/simple_api в этом проекте)
2. Установить там зависимости
3. Добавить в package.json своего проекта скрипт "start-server": "node simple_api/server.js"
4. Запустить сервер этой командой
5. Заменить моки на получение данных с сервера.
6. Реализовать модуль корзины (как отображать в интерфейсе корзину решайте сами, тк на лекции про роутинг унесем ее на отдельную страницу. Если есть желание можете как на лекции сделать через портал и еще раз потренироваться)

## ДЗ 8

1.Переделать получение данных на RTK Query 2. Добавить создание нового отзыва(используем форму отзыва. Важно, чтобы при сохранении показывался лоадер на форме, после успешного сохранения она очищалась и выполнялся перезапрос отзывов ресторана) 3. Доп задание. Реализовать для отзывов режим редактирования. На карточке отзыва рисуем кнопку редактировать, по клику на которую карточка заменяется формой отзыва с данными отзыва в полях. По клику на сохранить обновляем отзыв, по клику на отмену выключаем редактирование без изменений отзыва. Сохранение сопровождаем лоадером, после сохранения перезапрос отзывов ресторана.
