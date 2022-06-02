# Тестовое задание №4.

### 1.Первая страница - форма обратной связи для пользователей.
На странице должно быть форма, ФИО + текст. и кнопку отправить.
При нажатие на кнопку должен отправляться ajax запрос, на сохранение данных в базу.

### 2. Вторая страница

Есть кнопка, показать 2 последних комментария.
Нажимаешь на нее, у тебя показывается 2 последних, потом нажимаешь еще на кнопку.
Еще показывается 2 комментов, в итоге уже 4 комментов на странице и тд по аналогии.
Тут тоже ajax запрос.

### 3. Третья страница

Получить записи по имени. Тоже ajax запрос, нужно поле + кнопка. Нажимаешь на кнопку, и тебе возвращаются записи из базы с твоим именем

### 4. СДЕЛАТЬ 2 ВАРИАНТА c ajax:
#### 1) На голом js
#### 2) При помощи Jquery

<hr>

# Используемые технологии:
### • php 7.4 ;
### • mysql-8.0;

<hr>

# Запуск приложения:

#### 1. Сделать импорт базы данных(файл dump.sql находится в корне проекта).
#### 2. В директории 'config', по шаблону 'config_db_example.php', создать 'config_db.php' - файл конфигурации подключения к БД.
#### 3. В связи с тем, что предусмотренно два варианта AJAX запросов, то для каждого варианта были написаны свои  js скрипты;
#### Скрипты реализованные на нативном JavaScript находятся в дирректории 'assets/js/javascript/';
#### Скрипты реализованные с использование библиотеки JQuery находятся в дирректории 'assets/js/jquery/';
#### Изначально, в предстовлениях, которые находятся в дирректории 'views',  подключены скрипты с использование нативного JS;
#### Для измениея используемых скриптов, в представлениях необходимо изменить ссылки подключаемых скриптов;
#### Например, JS : '\<script src="../assets/js/javascript/allComments.js">\</script>' ;
#### Jquery : '\<script src="../assets/js/jquery/allComments.js">\</script>' ;

##### Примечание: необоходимости в изменении данного скрипта нет , так как он не обоходим лишь для нативного JS. ('\<script src="../assets/js/javascript/outputComments.js">\</script>'). 
