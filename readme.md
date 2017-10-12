# node-school-testing-workshop3

Добавить в тесты функции `replaceExpressions` заглушку для `fs.writeFile`, чтобы файл `script` не перезаписывался при каждом запуске тестов.
В тест на успех добавить шпиона, который проверяет, что модуль `logger.js` вызвался один раз.

Документация:

`sinon stub` - http://sinonjs.org/releases/v4.0.1/stubs/

`sinon spy` - http://sinonjs.org/releases/v4.0.1/spies/
