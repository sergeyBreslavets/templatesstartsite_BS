# bstutorial
**более новый https://github.com/sergeyBreslavets/gulp_zero_template
* the template for a quick start
* Шаблон для быстрого старта верстки на основе gulp +bower+ npm
* 
* 
* Установка

```
 для работы поставить NODE  https://nodejs.org/en/
 проверить node -v
 выполнить команды возможно sudo не надо в некоторых случаях 
 sudo npm install gulp --save-dev
 bower update
 sudo npm update
 измени bower.json - name   avtor
```

* Модули gulp
```
gulp-changed
gulp-imagemin
gulp-minify-html
gulp-jshint
gulp-concat
gulp-strip-debug
gulp-uglify
gulp-autoprefixer
gulp-minify-css
gulp-sass
gulp-jade
gulp-notify
```

* my tasks in gulp
```
gulp - по умолчанию 
gulp watch -- watch
gulp copymyriadpro   -- копирование шрифтов 
gulp copyopensans    -- копирование шрифтов 
gulp copyfont    -- копирование шрифтов 
  * tasks  
gulp jade
gulp jshint
gulp imagemin
gulp htmlpage
gulp whtml
gulp scripts
gulp styles
gulp sass
gulp imagemincss  
```

* Проблемы!!!
```
imagemincss   в watch иногда не работае 
картиники почему то не копируються из src 
лучше отключить эту функцию 
если sass дает ошибку нет искомого файла заново сохранить !!

```
* Важно
```
Если добавил файл *.scss для автоматического считывания его 
или любого друго перезапусти вотчер. чтобы прервать задачу нажми Ctrl+z.
возможно не сработают шрифты значит проверь путь в custom_var
возможно шрифты просто не скопировались если есть функция вызвать иначе просто скопировать 
возможно 
