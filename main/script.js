// 팝업1.새 게시물 올리기 --------------------------------------------
// sidebar-open-btn 클릭 했을 때 sidebar 한테 active class add(사이드바 열기)
// overlay 클릭 했을 때 sidebar 한테 active class remove(사이드바 닫기)
let newPost = document.querySelector('.new-post');
let overlay = document.querySelector('.overlay');
let newPostOpenBtn = document.querySelector('.newpost-open-btn');
let closeBtn = document.querySelector('.close-btn');
// console.log(sidebar, overlay, sidebarOpenBtn)

function popupbarOpen(){
    newPost.classList.add('active');
    overlay.classList.add('active');
    closeBtn.classList.add('active');
}

function popupbarClose(){
    newPost.classList.remove('active');
    overlay.classList.remove('active');
    closeBtn.classList.remove('active');
}

newPostOpenBtn.addEventListener('click', popupbarOpen);
closeBtn.addEventListener('click', popupbarClose);
//sidebar.addEventListener('mouseleave', sidebarOpen);


// 팝업2.popup 메뉴 스크립트  --------------------------------------------
let popupMenu = document.querySelector('.popup-menu');
let popupMenuBtn = document.querySelectorAll('.popup-menu-btn');
console.log(popupMenu)

function popupMenuOpen(){
    popupMenu.classList.add('active');
    overlay.classList.add('active');
}

function popupMenuClose(){
    popupMenu.classList.remove('active');
    overlay.classList.remove('active');
}

overlay.addEventListener('click', popupMenuClose);


// 더보기 버튼 forEach 배열 후 함수 호출 -----------------------------------
popupMenuBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        popupMenuOpen();
    })
  })
  
