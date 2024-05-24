function butclick() {
  // используем document.getElementById()
  // для получения элемента поля ввода с идентификатором "username"
  let username = document.getElementById("username").value;
  let userpass = document.getElementById("password").value;
  let users = ["admin", "user", "admin1", "user1", "user2"];
  let passwords = [123, 456, 789, 987, 654];
  let typRoot = ["a", "u", "a", "u", "u"];

  //отладка
  console.log(username, userpass);
  // делаем проверку совпадают ли данные
  for (let i = 0; i < users.length; i++) {
    if (username === users[i] && userpass === passwords[i]) {
      console.log("Вы вошли в систему.");
    } else {
      console.log("Неправильные данные. Пожалуйста, попробуйте еще раз.");
    }
    alert("Авторизация прошла успешно!");
    // Определение типа пользователя

    if (typRoot[i] === "a") {
      // Пользователь является администратором

      let newPass = prompt("Введите новый пароль:");

      if (newPass && newPass.length > 0) {
        passwords[i] = newPass;

        console.log("Пароль успешно изменён.");
      }
    } else if (typRoot[i] === "u") {
      // Пользователь является обычным пользователем
      console.log("Вы не можете изменять пароли.");
    }
  }
  // Скрытие вкладки авторизации
  document.getElementById("login-form").style.display = "none";

  // Отображение вкладки с пользователем
  document.getElementById("user-panel").style.display = "block";

  // Установка имени пользователя во вкладке с пользователем
  document.getElementById("user-name").innerHTML = username;

  function logout() {
    // Скрытие вкладки с пользователем
    document.getElementById("user-panel").style.display = "none";
    // Отображение вкладки авторизации
    document.getElementById("login-form").style.display = "block";
  }
}
function logout() {
  // Очистить локальное хранилище или сессию
  localStorage.clear();

  // Перенаправить пользователя на страницу авторизации
  window.location.href = "autorize.html";

  document.getElementById("logoutButton").addEventListener("click", logout);
}
