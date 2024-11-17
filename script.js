const start=document.querySelector('.start');
const button=document.querySelectorAll('.btn');
const next=document.querySelector('.next');
const question_no=document.querySelector('.question_no');
const question=document.querySelector('.question')
const main_block=document.querySelector('.main_block')
const parent_block=document.querySelector('.parent_block');
const bt1=document.querySelector('.bt1');
const bt2=document.querySelector('.bt2');
const bt3=document.querySelector('.bt3');
const bt4=document.querySelector('.bt4');
const submit=document.querySelector('.submit');
const results=document.querySelector('.results')
let score=0;

const ob1={
    question:'The Central Rice Research Station is situated in ?',
    options:[{text:'Chennai'},{text:'Cuttack'},{text:'Banglore'},{text:'Quilon'},{answer:'Cuttack'}],

}
const ob2={
    question:'Who among the following wrote Sanskrit grammar?',
    options:[{text:'Kalidasa'},{text:'Charak'},{text:'Panini'},{text:'Aryabhatt'},{answer:'Panini'}],

}
const ob3={
    question:' The country that has the highest in Barley Production?',
    options:[{text:'China'},{text:'India'},{text:'Russia'},{text:'France'},{answer:'Russia'}],

}
const ob4={
    question:'Tsunamis are not caused by ?',
    options:[{text:'Hurricanes'},{text:'Earthquakes'},{text:'Undersea landslides'},{text:'Volcanic eruptions'},{answer:'Hurricanes'}],

}
const ob5={
    question:'D.D.T. was invented by ?',
    options:[{text:'Mosley'},{text:'Rudolf'},{text:'Karl Benz'},{text:'Dalton'},{answer:'Mosley'}],

}
const ans=['Cuttack','Panini','Russia','Hurricanes','Mosley'];
const objects=[ob1,ob2,ob3,ob4,ob5];
let q=1;
let p=1;

function loadingQuestions()
{
    
    let c=0;
    question_no.innerText=`Question ${q}`;
    question.innerText=`${objects[q-1].question}`
    button.forEach((ele)=>{
        ele.innerText=`${objects[q-1].options[c].text}`;
        c++;
})

}
function loadingQuestions1(p){
    let c=0;
    question_no.innerText=`Question ${p}`;
    question.innerText=`${objects[p-1].question}`
    button.forEach((ele)=>{
        ele.innerText=`${objects[p-1].options[c].text}`;
        c++;

})
}
function nextQuestion(){
    
    button.forEach((data)=>{
        if(p<5){
            data.style.pointerEvents='auto';
            data.style.backgroundColor='whitesmoke';
            data.style.color='black';

        }
       
        
        
    })

    p=p+1;
    if(p<6)
    {
        loadingQuestions1(p);

    }
   

}
function operation(){
    start.classList.remove('notappear');
    start.classList.add('appear')
    parent_block.classList.remove('hidden')
    parent_block.classList.add('open');
    loadingQuestions(q);
}

function blockingOthers()
{
    button.forEach((ele)=>{
        ele.style.pointerEvents = 'none';
    })
}
function change(e){
    let b=e.target;
    let s=b.innerText;
    let re=false;
    
    ans.forEach((ele)=>{
        
        if(s==ele)
        {
            score=score+1;
            b.style.backgroundColor='green';
            re=true;
        }
       
    })
    if(re==false)
    {
        b.style.backgroundColor='red';
        button.forEach((data)=>{
           ans.forEach((ele)=>{
            if(data.innerText==ele)
            {
                data.style.backgroundColor='green';
            }
           })
            
        })


    }
    button.forEach((data)=>{
        if(s!=data.innerText){
            data.style.pointerEvents='none';
        }
        
    })
}

start.addEventListener('click',operation);
next.addEventListener('click',nextQuestion);
bt1.addEventListener('click',change);
bt2.addEventListener('click',change);
bt3.addEventListener('click',change);
bt4.addEventListener('click',change);
submit.addEventListener('click',()=>{
    parent_block.classList.add('off');
    results.classList.add('notmiss');
    results.innerText=`Congragulations 💐
    Your Score is ${score} out of 5.
    Now it is safe to close window ❤️`;

});
