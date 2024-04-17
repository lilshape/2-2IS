function butclick() {
    //используем document.getElementById()
    //для получения элемента поля ввода с идентификатором "username"
    let username = document.getElementById("username"); 
    let userpass = document.getElementById("password");
    //Получаем значения из полей ввода
    let entUsername = username.value;
    let entUserpass = userpass.value;
    //делаем проверку совпадают ли данные
if ( entUsername === "admin" && entUserpass === "12345" ) {
  console.log("Вы вошли в систему.");
} else {
  console.log("Неправильные данные. Пожалуйста, попробуйте еще раз.");
    }

} 