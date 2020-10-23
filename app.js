const quiz = [
  {
    question: "ADの3要素でないものは、次のうちどれ？",
    answers: [
      "Inherency",
      "Uniqueness",
      "Solvency",
      "Impact"
    ],
    correct:"Uniqueness"
  }, {
    question:""
  }
  , {
  }
];


const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;





const question = "ADの3要素でないものは、次のうちどれ？";
const answers = [

];
const correct = "Uniqueness";      

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;


//クイズの問題文、選択肢の定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0; 
// let buttonLength = $button.length;　　//注意事項！！！ここのlengthはLengthではない（大文字じゃない）ことに注意！！！
while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
}
}
setupQuiz();
// document.getElementById("js-question").textContent = question;
//変数は「＝」を入れるだけで＝以下の内容が更新される

// const $button = document.getElementsByTagName("button");
//何度も使うものは、変数・定数に設定すると見やすくなる

// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

// let buttonIndex = 0;
// while(buttonIndex < 4){   //ここで4かい繰り返したいから4を持ってきてる
// }
// //より柔軟性を持たせるための書き方も知っておくべき
// let buttonIndex = 0;
// let buttonLength = $button.length;  //＄を用いることで配列の分だけ繰り返すという指示を送れる。
// while(buttonIndex < 4){

// }


// let buttonIndex = 0; 
// let buttonLength = $button.length;　　//注意事項！！！ここのlengthはLengthではない（大文字じゃない）ことに注意！！！
// while(buttonIndex < buttonLength){
//     $button[buttonIndex].textContent = answers[buttonIndex];
//   buttonIndex++;
// }
//while文は繰り返しを省略できる！！！！！！！！！！！！！！



//getElementById と　getElementsByTagName はElement , Elements であることに注意

// $button[0].addEventListener("click", () => {
//   if(correct === $button[0].textContent) {
//     window.alert("true");
//   } else {
//     window.alert("false");
//   }
// });
// $button[1].addEventListener("click", () => {
//   if(correct === $button[1].textContent) {
//     window.alert("true");
//   } else {
//     window.alert("false");
//   }
// });
// $button[2].addEventListener("click", () => {
//   if(correct === $button[2].textContent) {
//     window.alert("true");
//   } else {
//     window.alert("false");
//   }
// });
// $button[3].addEventListener("click", () => {
//   if(correct === $button[3].textContent) {
//     window.alert("true");
//   } else {
//     window.alert("false");
//   }
// });

//リファクタリング→スパゲッティコードを修正する→具体的には何度も出てきたコードを省略する
//buttonLength を使うと配列の分だけ数を取得できる
//buttonIndex++ を命令すると、indez++;=値が1ずつ増える

//e.targetをつかってみよう！！　→さらなる省略ができる
//console.log（）はdec toolsに打ち込むことによって（）内の指定したもの（オブジェクト）の機能を知ることができる
//(e)とはMouseEvent のこと　→クリックされた要素に対して何かしたいときは[e.target]で書くことが可能


const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("true");
    score++;
  } else {
    window.alert("false");
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行

setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert("finish!! Your score is " + score + "/" + quizLength + "!!!!!!!");

  }

};


// $button[0].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[1].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[2].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[3].addEventListener("click", (e) => {
//   clickHandler(e);
// });

let handlerIndex = 0; 
// const buttonLength = = $button.length;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
  clickHandler(e);
});
  handlerIndex++;
   }