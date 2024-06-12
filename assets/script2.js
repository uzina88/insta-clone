function updateInputState(input, activeVar){
  // trim() 공백제거
  // 공백 제거한 value 값의 길이가 0보다 클 때
  if(input.value.trim().length > 0){
    input.parentElement.classList.add('active'); 
    activeVar = true;
  } else {
    // value 값의 길이가 없을 때
    input.parentElement.classList.remove('active');  
    activeVar = false;
  }

  return activeVar;
}

// --------------------------------------------------------------------

let userid = document.getElementById('userid');
let userpw = document.getElementById('userpw');

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
    idActive = updateInputState(input, idActive);
  } else {
    pwActive = updateInputState(input, pwActive);
  }

  // idActive && pwActive 값이 모두 참일 떄
  if(idActive && pwActive){
    // disabled 제거
    submitBtn.removeAttribute('disabled') 
  } else {
    // disabled 추가
    submitBtn.setAttribute('disabled', true);
  }

}

userid.addEventListener('keyup',handleInput);
userpw.addEventListener('keyup',handleInput);