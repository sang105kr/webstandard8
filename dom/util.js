/*-------------------------------------------------------------*
 * 노드생성 함수
 * 주어진 태그이름, 속성, 컨텐츠를 포함하는 요소를 만들어 주는 함수
 *-------------------------------------------------------------*/
function makeElement(tagName, attributes, ...contents){

  //태그생성
  const elementNode = document.createElement(tagName);

  //어트리뷰트 추가
  if(attributes){
    for(let attr in attributes){
      if(attributes.hasOwnProperty(attr)) {
        elementNode.setAttribute(attr,attributes[attr] );
      }
    }
  }

  //컨텐츠 생성
  for(let i=0; i < contents.length; i++){
    let child = contents[i];

    //3번째 매개값이 문자열이면 텍스트 노드생성
    if(typeof child === 'string' ) {
      child = document.createTextNode(child);
    }
    elementNode.appendChild(child);        
  }

  return elementNode;
}