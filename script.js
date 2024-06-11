// if else 문 -----------------------------------------------------
// mode-btn class안 텍스트를 가져온다.
// 텍스트가 dark 일 경우(조건)
let modeBtn = document.querySelector('.mode-btn');

function modeToggle(){
    //변수 선언
    let modeTxt = modeBtn.innerHTML;
    let bodyWrap = document.querySelector('.body-wrap');
    let pdStBlue = document.querySelector('.pd-st-blue');

    if(modeTxt === "Darkmode"){
        //텍스트를 Light로 바꾼다.
        modeBtn.innerHTML = "Lightmode";
        modeBtn.style.color = '#fff';
        // header 태그에 dark class add
        bodyWrap.classList.add('dark');
        pdStBlue.style.background = "#385185";
    } else {
         //텍스트를 Dark로 바꾼다.
         modeBtn.innerHTML = "Darkmode";
         modeBtn.style.color = '#898989';
         // header 태그에 dark class remove
         bodyWrap.classList.remove('dark');
         pdStBlue.style.background = "#83c9f8";
    }
}
// mode-btn 클릭하면 (클릭 이벤트)
modeBtn.addEventListener('click', modeToggle);




// if 조건문(아이디) -----------------------------------------------------
let userid = document.getElementById('userid');
let dTxt = document.querySelector('.d-txt');
let inputEle = document.querySelector('.pd-st input');
myPlaceholder = inputEle.placeholder;

// 커서가 클릭 되었을 때
userid.addEventListener('focusin', function() {
    // userid.value => input에 입력된 텍스트
    // userid.value.length => input 텍스트 길이
    if(userid.value >= 0) {
      // 0 이상일때
      inputEle.placeholder = ' ';
      dTxt.style.display = "block";
      }
  })
  
// 커서를 아웃 했을 때
userid.addEventListener('focusout', function() {
    // userid.value => input에 입력된 텍스트
    // userid.value.length => input 텍스트 길이
    if(userid.value >= 0) {
      // 0 이상일때
      inputEle.placeholder = '전화번호, 사용자 이름 또는 이메일';
      dTxt.style.display = "none";
    
      }
  })
  



// if 조건문(비밀번호) -----------------------------------------------------
let userpw = document.getElementById('userpw');
let rigthTxt = document.querySelector('.rigth-txt');


// 커서가 클릭 되었을 때
userpw.addEventListener('focusin', function() {
    // userid.value => input에 입력된 텍스트
    // userid.value.length => input 텍스트 길이
    if(userpw.value >= 0) {
      // 0 이상일때
      rigthTxt.style.display = "block";
      }
  })
  
// 커서를 아웃 했을 때
userpw.addEventListener('focusout', function() {
    // userid.value => input에 입력된 텍스트
    // userid.value.length => input 텍스트 길이
    if(userpw.value >= 0) {
      // 0 이상일때
      rigthTxt.style.display = "none";
    
      }
  })

// 비밀번호 표시 클릭했을 때
rigthTxt.addEventListener('click', function(e) {
    if (userpw.value.length >= 0) {        // 체크박스에 체크되어 있으면
        userpw.type = 'text';       // input 요소의 타입을 text 타입으로 변경
    } else {                     // 그렇지 않으면
        userpw.type = 'password'; 
    }
  })

