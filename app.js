const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

app.get("*", (_req, res) => {
  res.end(`
    <!DOCTYPE html>
    <html style="color:red">
    <head>
      <title> Я Витянус! Грязный анус</title>
      <meta charset="utf-8">
      <meta name="keywords" content="пикапер всея Беларуси, добро пожаловать">
      <link rel="shortcut icon" href="https://sun2.velcom-by-minsk.userapi.com/iaWzXemXnXZhhMzoxQVayNOqlHFpbQQ0L79WGQ/f2x1CqdX-4U.jpg">
      <style> table {color: blue}</style>
    </head>
  
    <body>
  
      <h1 class="privet">Буду писать свои инфилды, сыновья мои, посвящать вас в Мир Кисок</h1>
      <h2><em>Че, серьезно подумал, что все будет так просто? Хуй там. Теперь я программист. Читай дальше</em></h2>
      <p id="ideveloper"> Думаю, следует начать с того, что я хронический <br> <b>РАСПИЗДЯЙ</b> (но строчку переносить через тег br научился за 15 минут)))) <br> Идем дальше хули, по мере освоения сюда будут добавляться <em><b>НОВЫЕ ТЕХНОЛОГИИ ПРОГРАММИРОВАНИЯ (ебать сильно сказал)</b></em></p>
      Если считаешь, что твои яйца достаточно большие, то можешь написать <a href="https://vk.com/id33100647" target="_top"><b>мне в лс, не ссы</b> </a>
       <br>
      Хочешь, чтоб открылось в новой вкладке, не удаляя тебя с этой ахуенной страницы? Так и быть, юный падаван, нажимай <a href="https://vk.com/id33100647" target="_blank"><b>СЮДА</b> </a>
      <br>
          <a href="#ideveloper"> Якорь на "Думаю, следует начать с того, что я хронический"</a>
      <h2>Ладно, кое-какое понимание обо мне у тебя уже сложилось, думаю, пора рассказать, почему я охуенный</h2>
        <ul class="list">
          <li id="huivgovne">Сделал <b>15000</b> подходов <b><em>(ДА, СУКА)</em></b></li>
          <li>Закрыл <40 телок </li>
          <li>Последний раз это было <a href="https://ru.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%BF%D0%BE%D0%B2%D0%BE%D0%B9_%D1%81%D0%B5%D0%BA%D1%81" target="_blank">МЖМ </a></li>
          <ul>
            <li>с Женей</li>
            <li>с моими двумя руками</li>
          </ul>
        </ul>
        <hr>
        <h1>А вот и полосочка подъехала.</h1>
     <table border="2">
       <thead>
         <tr>
           <th>Имя девочки</th>
           <th>Оценка х/10</th>
           <th>Дата знакомства</th>
           <th>Закрыл/не закрыл</th>
         </tr>
       </thead><tbody>
         <tr>
           <td> <a href="https://vk.com/mary_headphones" target="_blank"><em>Машка</em></a> </td>
           <td>6.5</td>
           <td>Далекий 2016</td>
           <td width="600">Пососались, на этом всё. Подход исполнил супердерзко-доминантно, сам охуел.</td>
         </tr>
         <tr>
           <td><a href="https://vk.com/id192836970" target="_blank"><em>Янка - Рыжая Шлюшка</em></td>
           <td>5.5</td>
           <td>2019</td>
           <td>Вот с этой шмарой было оч весело. Сосались, лапали друг друга, привел в туалет,<br>а там лежала куча говна. Собственно, ее хотела на этом и закончилась. Позже с ней че-то мутил <a href="https://vk.com/vladosqa" target="_blank">Влад</a></td>
         <tr>
           <td><a href="https://vk.com/id153715122" target="_blank"<em>Моя мечта...</em></td>
           <td><b>10/10</b></td>
           <td>2016</td>
           <td>Всё впереди... А, может, уже и было... Что ж, мы были пьяны... <details><img src="https://sun9-36.userapi.com/c638119/v638119647/35768/XSvQe_ASnAk.jpg" width="600"></details></td>
         </tr>
       </tbody>
  
     </table>
    </body>
  
  </html>`);
});

app.listen(PORT, () => console.log("Server has been started on " + PORT));
