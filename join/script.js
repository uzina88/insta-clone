let joinBtn = document.getElementById('join-btn');
let animateInput = document.querySelectorAll('.animate-input');
// console.log(animateInput) 대괄호(배열)
// 복합 대입 연산자
let emailAct = nameAct = idAct = pwAct = false;
//console.log(emailAct, nameAct, idAct, pwAct)

let userEmail = document.getElementById('user-email');
let userName = document.getElementById('user-name');
let userId = document.getElementById('user-id');
let userPw = document.getElementById('user-pw');

let pwBtn = document.getElementById('pw-btn');

function updateInputState(val, activeVar) {
  if(val.value.trim().length > 0){
    // animate-input 에 active class add
    val.parentElement.classList.add('active');
    activeVar = true;
  } else {
     // animate-input 에 active class remove
    val.parentElement.classList.remove('active');
    activeVar = false;
  }
  return activeVar;
  // updateInputState 함수에 true, false를 넘겨준다.
}

// "=>"" arrow funciton
animateInput.forEach((item) => {
  let input = item.querySelector('input');
  // input을 배열(반복) console.log(input)
  input.addEventListener('keyup', ()=> {
  // keyup 이벤트를 해야지 로그 찍힘 console.log(input)
    if(input == userEmail) {
      emailAct = updateInputState(input, emailAct);
    } else if(input == userName) {
      nameAct = updateInputState(input, nameAct);
    } else if(input == userId) {
      idAct = updateInputState(input, idAct);
    } else if(input == userPw) {
      pwAct = updateInputState(input, pwAct);
    }
    
    let allTrue = emailAct && nameAct && idAct && pwAct;
    if(allTrue) {
      // allTrue 안 값이 모두 참일 때 
      // joinBtn disabled 속성 remove
      joinBtn.removeAttribute('disabled');
      // j-Query에서는 .attr('disabled', true / false) 사용 가능
      // vanilla JS에서는 속성 제거할 때 flase X | removeAttribute() 사용!
      // joinBtn.setAttribute('disabled', false);
    } else {
      joinBtn.setAttribute('disabled', true);
    }
  })
})


function modeToggle(){
  // 삼항연산자
  // 조건 ? true : false
  // 조건 ? true(참일때 실행할 값) : false(거짓일 때 실행할 값)
  // userPw의 type password => text | pwBtn.innerHTML = '숨기기'
  let pwType = userPw.getAttribute('type') == 'password';
  // userPw의 type password => text | pwBtn.innerHTML = '비밀번호 표시'
  userPw.setAttribute('type', pwType ? 'text' : 'password');
  pwBtn.innerHTML = pwType ? '숨기기' : '비밀번호 표시';
}

pwBtn.addEventListener('click', modeToggle);