let displayTextContent = document.querySelector('.계산기_출력창').textContent
let firstNum = '', operator, previousKey, previousNum = ''
let 버튼불러오기 = document.querySelector('.계산기_버튼')

function calculate(n1, 연산자, n2){
  let result;
  if(연산자 === '+'){
    result = Number(n1) + Number(n2)
  }
  if(연산자 === '-'){
    result = Number(n1) - Number(n2)
  }  
  if(연산자 === 'x'){
    result = Number(n1) * Number(n2)
  }
  if(연산자 === '÷'){
    result = Number(n1) / Number(n2)
  }
  return String(result)
}

버튼불러오기.addEventListener('click', function (ev){
    // 버튼 누르면 작동하는 함수

    const 누른곳html = ev.target;
    const 누른곳클래스정보 = 누른곳html.classList[0]
    const 누른곳내용 = 누른곳html.textContent;

   console.log(누른곳html)
   console.log(누른곳클래스정보)
   console.log(누른곳내용)
})