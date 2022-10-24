# e2e-tests

Репозиторий с фронтовыми e2e-тестами

# Клонирование репозиториия
Для работы с репозиторием нужно его склонировать, инструкция для разных осей находится [тут](https://confluence.pcbltools.ru/confluence/pages/viewpage.action?spaceKey=~a.lazarev&title=Gitlab)
# Стэк
[Playwright](https://playwright.dev/)
# Установка
```angular2html
yarn install
npx playwright install chromium (если не был установлен ранее)
```
# Запуск
Тесты можно запустить 3 способами:
- playwright-раннер
- конфигурацией WebStorm (с помощью npm-скрипта)
- конфигурацией VS COde (поддерживает работу с PW из коробки, см. [здесь](https://playwright.dev/docs/getting-started-vscode))
### Playwright-runner
```angular2html
e2e-tests> npx playwright test --project=PROJECT_NAME
```
### Конфигурация IDE
![img_2.png](https://i.imgur.com/AbeAFzt.png)
Важно перед настройкой добавить новый скрипт с названием проекта по аналогии с другими, например, если нужно запускать тесты проекта vendor, тогда добавляем новый скрипт debugVendor, в котором указываем --project=Vendor (как в конфиге playwright.config.ts)

# Настройка
Перед началом написания тестов нужно настроить Prettier и ESLint
### Prettier
![img.png](https://i.imgur.com/m6MzpBr.png)
### Eslint
![img_1.png](https://i.imgur.com/9DvDxHl.png)

# Что-то не получается?
Пиши в MatterMost - `#sbo-qaa`
