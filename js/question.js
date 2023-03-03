var QnAList = [
    {
        q:"영양란이 좋으세요?",
        a:[
            {
                ans : '영양란 좋아요',
                type: ['영양란','유정란','구운란']
            },
            {
                ans : '영양란 싫어요',
                type: ['구운유정란','감동란','토종란']
            }
        ]
    },
    {
        q:"토종란이 좋으세요?",
        a:[
            {
                ans : '토종란 좋아요',
                type: ['토종란','구운유정란','감동란']
            },
            {
                ans : '토종란 싫어요',
                type: ['영양란','유정란','감동란']
            }
        ]
    },
    {
        q:"메추리알 좋으세요?",
        a:[
            {
                ans : '메추리알 좋아요',
                type: ['영양란']
            },
            {
                ans : '메추리알 싫어요',
                type: ['감동란']
            }
        ]
    }
]
var typeList = [
    {
        type : "영양란",
        value : 0
    },
    {
        type : "유정란",
        value : 0
    },
    {
        type : "구운란",
        value : 0
    },
    {
        type : "토종란",
        value : 0
    },
    {
        type : "구운유정란",
        value : 0
    },
    {
        type : "감동란",
        value : 0
    }
]



let questionNum = 0;
let answerValue = []
function getQnA(){
    if(questionNum < QnAList.length){
        question.querySelector('.question').innerHTML = QnAList[questionNum].q
        let anwerList = []
        let getAnswer = ""
        for(i = 0; i < QnAList[questionNum].a.length; i++){
            anwerList.push(QnAList[questionNum].a[i].ans)
        }
        for(i = 0; i < anwerList.length; i++){
            getAnswer += `<button onclick="answerClick(this)">${anwerList[i]}</button>`
        }
        question.querySelector('.answer').innerHTML = getAnswer;


        if(questionNum >= 1){
            console.log(QnAList[questionNum-1])
        }
        
        
        question.querySelector('.progressBar').innerText = `${questionNum+1}/${QnAList.length}`
        let gage = `${((questionNum+1)/QnAList.length)*100}%`
        question.querySelector('.progressBar').style.width = gage


        questionNum += 1;

    }
}
getQnA()



function answerClick(test){

    if(questionNum < QnAList.length){
        beforeQuestionNum = questionNum
        question.querySelector('.question').innerHTML = QnAList[questionNum].q
        let anwerList = []
        let getAnswer = ""
        for(i = 0; i < QnAList[questionNum].a.length; i++){
            anwerList.push(QnAList[questionNum].a[i].ans)
        }
        for(i = 0; i < anwerList.length; i++){
            getAnswer += `<button onclick="answerClick(this)">${anwerList[i]}</button>`
        }
        question.querySelector('.answer').innerHTML = getAnswer;

        
        question.querySelector('.progressBar').innerText = `${questionNum+1}/${QnAList.length}`
        let gage = `${((questionNum+1)/QnAList.length)*100}%`
        question.querySelector('.progressBar').style.width = gage

        
        

    }
    

    if(questionNum >= 1 && questionNum <= QnAList.length){
        for(i = 0; i < QnAList[questionNum-1].a.length; i++){
            if(test.innerHTML === QnAList[questionNum-1].a[i].ans){
                console.log(answerValue.push(QnAList[questionNum-1].a[i].type))
                console.log(answerValue)
            }
        }
        questionNum += 1;
        return questionNum;
    }
    if(questionNum > QnAList.length){
        console.log('결과 보여주기')
        for(i = 0; i < answerValue.length; i++){
            for (j = 0; j < answerValue[i].length; j++){
                for(k = 0; k < typeList.length; k++){
                    if(typeList[k].type === answerValue[i][j]){
                        typeList[k].value += 1
                    }
                }
                console.log(answerValue[i][j])
            }
        }
        let valueResult;
        valueResult = typeList.sort(function (a, b){
            return a.value - b.value
            }
        )
        console.log(valueResult)
        console.log(valueResult.length)
        console.log(valueResult[valueResult.length-1])
        console.log(`당신에게 맞는 계란은${valueResult[valueResult.length-1].type}입니다!`)
    }


    
}



