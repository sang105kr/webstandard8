'use strict';
// document.addEventListener("DOMContentLoaded", init, false);

function init(){
  //이벤트 소스(타겟)
  const $ul = document.querySelector('ul');
  const $item1 = document.querySelector(".item.item1");
  //이벤트 리스너
  $ul.addEventListener("click", function(evt) {
    handler(evt, 'ul_capture');
  }, true);
  $ul.addEventListener("click", function(evt) {
    handler(evt, 'ul_bubble');
  }, false);
  $item1.addEventListener("click", function(evt) {
    handler(evt, 'li_capture');
  }, true);
  $item1.addEventListener("click", function(evt) {
    handler(evt, 'li_bubble');
  }, false);
}
//이벤트 핸들러
//이벤트 객체 : 이벤트 핸들러 메소드의 첫번째 매개값으로 
//             브라우저가 생성해서 넘겨준다.
function handler(evt,msg){
  console.log('클릭!' + msg);
  console.log(evt);
  console.log(evt.target);
  console.log(evt.currentTarget);
}

init();