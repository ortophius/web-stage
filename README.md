# Kappe Theme
Проект построен из блоков с js- и css-технологиями. В качестве html-шаблонизатора используется pug. Отдельные фрагменты pug также оформлены в качестве технологий блоков, хотя и добавляются в итоговый бандл нарпямую.
Для сборки используется gulp-bem-bundle-builder и модуль html2bemjson из bem-sdk. 

Готовая сборка отправляется в `dist/`.

Все необходимые модули указаны в [package.json](https://github.com/ortophius/web-stage/blob/master/package.json). Для сборки нужен Gulp 4 (gulp@next на данный момент).

Посмотреть результат можно [здесь](https://ortophius.github.io/web-stage/dist/home/home.html).

Сборка: `npm run build`

Сборка "на лету": `npm run watch`


