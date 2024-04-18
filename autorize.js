function butclick() {

  // используем document.getElementById()
  // для получения элемента поля ввода с идентификатором "username"
  let username = document.getElementById("username").value;
  let userpass = document.getElementById("password").value;
  let users = [admin, user, manager, user2, user3];
  let passwords = [123, 456, 789, 987, 654];
  // Получаем значения из полей ввода

  // делаем проверку совпадают ли данные
  for (let i = 0; i < users.length; i++) {
    if (username === users[i] && userpass === passwords[i]) {
      console.log("Вы вошли в систему.");
  
      // Скрытие вкладки авторизации
      document.getElementById("login-form").style.display = "none";
  
      // Отображение вкладки с пользователем
      document.getElementById("user-panel").style.display = "block";
  
      // Установка имени пользователя во вкладке с пользователем
      document.getElementById("user-name").innerHTML = username;
    alert("Авторизация прошла успешно!");
    // Выход из функции после авторизации
  } else {
    console.log("Неправильные данные. Пожалуйста, попробуйте еще раз.");
  }
}
}
function logout() {
  // Скрытие вкладки с пользователем
  document.getElementById("user-panel").style.display = "none";
  // Отображение вкладки авторизации
  document.getElementById("login-form").style.display = "block";
}

