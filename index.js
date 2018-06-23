//MAIN TASK
const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
const MESSAGE_INPUT_LOGIN = 'Введите логин';
const MESSAGE_INPUT_PASSWORD = 'Введите пароль';
const MESSAGE_DECLINED = 'Отменено пользователем!';
const MESSAGE_DENIED = 'Доступ запрещен!';
const MESSAGE_WELCOME = 'Добро пожаловать!';

let adminLogin;
let adminPassword;

if (!(adminLogin=prompt(MESSAGE_INPUT_LOGIN))){
  alert(MESSAGE_DECLINED);
}
else if(adminLogin!==ADMIN_LOGIN){
  alert(MESSAGE_DENIED);
}
else if (!(adminPassword=prompt(MESSAGE_INPUT_PASSWORD))){
  alert(MESSAGE_DECLINED);
}
else if (adminPassword!==ADMIN_PASSWORD){
  alert(MESSAGE_DENIED);
}
else {
  alert(MESSAGE_WELCOME);
}


//ADDITIONAL TASK

const SEATS_AVAIL_SHARM = 15;
const SEATS_AVAIL_HURGADA = 25;
const SEATS_AVAIL_TABA = 6;

let seatsNumber = Number( prompt('Введите количество необходимых мест') );
if ( Number.isNaN( seatsNumber ) || 
    seatsNumber <=0 || 
    Number.parseFloat( seatsNumber )!==Number.parseInt( seatsNumber ) ){
  alert('Ошибка ввода!');
}
else{
  let isChoiseMade = false;
  if (seatsNumber <= Math.max(SEATS_AVAIL_SHARM, SEATS_AVAIL_HURGADA, SEATS_AVAIL_TABA)) {
    if ( seatsNumber <= SEATS_AVAIL_SHARM && !isChoiseMade ){
      if ( confirm('Есть данное количество мест в группе Sharm') ){
        alert('Приятного путешествия в группе Sharm');
        isChoiseMade = true;
      }
    }
    if ( seatsNumber <= SEATS_AVAIL_HURGADA && !isChoiseMade ){
      if ( confirm('Есть данное количество мест в группе Hurgada') ){
        alert('Приятного путешествия в группе Hurgada');
        isChoiseMade = true;
      }
    }
    if ( seatsNumber <= SEATS_AVAIL_TABA && !isChoiseMade ){
      if ( confirm('Есть данное количество мест в группе Taba') ){
        alert('Приятного путешествия в группе TABA');
        isChoiseMade = true;
      }
    }
    if ( isChoiseMade === false ){
      alert('Нам очень жаль, приходите еще!');
    }
  }
  else{
    alert('Извините, столько мест нет ни в одной группе!');
  }
}