function updateInputState(inputV, activeVar){
  // trim() 공백제거
  // 공백 제거한 value 값의 길이가 0보다 클 때는 ture
  // 사용자가 input 창에 입력한 값이 하나라도 있냐
  if(inputV.value.trim().length > 0){
    inputV.parentElement.classList.add('active'); 
    // 값이 있을 때는 ture
    activeVar = true;
  } else {
    // value 값의 길이가 없을 때 false
    inputV.parentElement.classList.remove('active');  
    // 값이 없을 때는 false
    activeVar = false;
  }
  // 함수 실행 후 퉤 뱉어줘라(실행)
  // return : 해당 함수가 실행된 후 함수 호출한 위치로 전달되는 값
  return activeVar; // true, false
}

// --------------------------------------------------------------------
let userid = document.getElementById('userid');
let userpw = document.getElementById('userpw');
console.log(userpw)

// 복합연산자
// let idActive = pwActive = false;
let idActive = false;
let pwActive = false;

let submitBtn = document.getElementById('submit-btn');

function handleInput(e){
  // e는 매개변수.target
  // e.target => 이벤트가 일어나는 대상
  let input = e.target;
  let type = input.getAttribute("type");
  
  if(type == "text"){
    // return 값 => true, false 값 들어옴.
    idActive = updateInputState(input, idActive); 
  } else {
    // type이 텍스트가 아닐 경우 => password]
    // return 값 => true, false 값 들어옴.
    pwActive = updateInputState(input, pwActive);
  }

  // idActive && pwActive 값이 모두 참일 때 => input.value.lenght > 0
  if(idActive && pwActive){
    // disabled 제거
    submitBtn.removeAttribute('disabled') 
  } else {
    // idActive나 pwActive 중 둘 중 하나라도 false 일 때
    // disabled 추가
    submitBtn.setAttribute('disabled', true);
  }
}

userid.addEventListener('keyup',handleInput);
userpw.addEventListener('keyup',handleInput);


// 비밀번표 표시변경 -------------------------------------------------------
let pwVisible = document.getElementById('pw-visible');

function pwMode() {
  if(userpw.getAttribute('type') == 'password') {
    // user의 type이 password일 경우
    // 1. 비밀번호 표시 클릭 = userpw (input) type => text로 변경
    // 2. pwVisible.innerHTML = "숨기기"로 변경
    userpw.setAttribute('type','text');
    pwVisible.innerHTML = '숨기기';
    pwVisible.style.color = 'blue';
  } else {  
    // userpw의 type이 text일 경우
    // 1. 숨기기 => userpw type => password
    // 2. pwVisible.innerHTML => '비밀번호 표시'로 변경
    userpw.setAttribute('type','password');
    pwVisible.innerHTML = '비밀번호 표시';
    pwVisible.style.color = '#000';
  }
}
pwVisible.addEventListener('click', pwMode);


// 다크모드  -------------------------------------------------------
let modeBtn = document.getElementById('mode-toggle');

function modeToggle(e){
  e.preventDefault();
  // 1. body 태그에 dark 라는 clss toggle
  // dark 라는 class가 있으면 remove, 없느면 add
  // console.log(document.querySelector('body'))
  let body = document.querySelector('body');
  body.classList.toggle('dark');

  // body에 dark라는 클래스가 있을 때
  // modeBtn.innerHTML = "Lightmode"
  // classList.contans() ture, false 값 확인
  // console.log(body.classList.contains('dark'));

  // if 조건문 ------------------------------------------------------
  // if(body.classList.contains('dark')) {
  //   modeBtn.innerHTML = 'Lightmode';
  // } else {
  //   modeBtn.innerHTML = 'Darkmode';
  // }

  // body에 dark라는 클래스가 없을 때
  // modeBtn.innerHTMl = "Darkmode"

  // 삼항연산자 ------------------------------------------------------
  // 조건 ? 참일 때 : 거짓일 때
  // body.classList.contains('dark') 이 조건
  // ? 'Lightmode' : 'Darkmode'; 참일때 Lightmode 거짓일 때 Darkmode
  modeBtn.innerHTML = body.classList.contains('dark') ? 'Lightmode' : 'Darkmode';
}

modeBtn.addEventListener('click', modeToggle);