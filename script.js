let display = document.querySelector('.계산기_출력창')
let firstNum = '', operator, previousKey, previousNum = '', pressInformation, isPlus;
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

//    console.log(누른곳html)
//    console.log(누른곳클래스정보)
//    console.log(누른곳내용)

   if(누른곳html.matches('button')){
    
    if(누른곳클래스정보 === '숫자'){
        
        if(operator === undefined){
            firstNum = firstNum + 누른곳내용
            display.textContent = firstNum;
        } else{
            previousNum = previousNum + 누른곳내용
            display.textContent = previousNum
          }
    }


    if(누른곳클래스정보 === '연산자'){

    if(pressInformation === undefined){
    누른곳html.classList.add('isPressed')
    pressInformation = 누른곳html;
    } else{
    pressInformation.classList.remove('isPressed')
    누른곳html.classList.add('isPressed')
    pressInformation = 누른곳html
    }
    // if(Boolean(pressInformation)){
    //     pressInformation.classList.remove('isPressed')
    // }

        if(previousKey === '숫자' && firstNum !== undefined && operator !== undefined && previousNum !== undefined){
            display.textContent = calculate(firstNum, operator, previousNum)
            previousNum = ''
          }

        operator = 누른곳내용
        firstNum = display.textContent
        previousNum = ''
        previousKey = ''
    }

    if(누른곳클래스정보 === '소수점' && previousKey !== '소수점'){
        
    if(operator === undefined){
        if(firstNum === ''){
            firstNum = '0'
        }
        firstNum = firstNum + '.'
        display.textContent = firstNum
    }
        else{
            if(previousNum === ''){
                previousNum = '0'
            }
            previousNum = previousNum + '.'
            display.textContent = previousNum
        }
    }


    if(누른곳클래스정보 === '초기화'){
        firstNum = '';
        previousNum = '';
        previousKey =  undefined;
        operator = undefined;
        if(pressInformation !== undefined){
        pressInformation.classList.remove('isPressed')
        }
        pressInformation = undefined;
        display.textContent = 0;
    }

    if(누른곳클래스정보 === '양수음수'){
        if(Number(display.textContent) > 0){
        display.textContent = '-' + display.textContent
        }
        else if(Number(display.textContent) < 0){
            isPlus = Math.abs(Number(display.textContent))
            display.textContent = String(isPlus)
        }
    }

    if(누른곳클래스정보 === '퍼센트'){
        display.textContent = calculate(display.textContent, '÷', '100')
        
    }

    if(누른곳클래스정보 === '계산'){

        if(operator !== undefined){
            if(previousNum !== ''){
              display.textContent = calculate(firstNum, operator, previousNum)
            // previousNum = display.textContent
              firstNum = display.textContent
           } else {
             display.textContent = calculate(firstNum, operator, display.textContent)
             console.log('아래쪽 계산버튼이 선택되었습니다')
           }
          }
    }

    previousKey = 누른곳클래스정보

   }
})