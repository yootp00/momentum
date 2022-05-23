const quotes=[
    {
        quote:"삶이 있는 한 희망은 있다.",
        author:"키케로",
    },
    {
        quote:"행복은 습관이다,그것을 몸에 지니라.",
        author:"허버드",
    },
    {
        quote:"해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
        author:"톨스토이",
    },
    {
        quote:"단순하게 살라. 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
        author:"이드리스 샤흐",
    },
    {
        quote:"작은 기회로 부터 종종 위대한 업적이 시작된다.",
        author:"데모스테네스",
    },
    {
        quote:"겨울이 오면 봄이 멀지 않으리.",
        author:"셸리",
    },
    {
        quote:"실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
        author:"하버트 개서",
    },
    {
        quote:"진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.",
        author:"아인슈타인",
    },
    {
        quote:"성공으로 가는 엘리베이터는 고장입니다. 당신은 계단을 이용해야만 합니다. 한 계단 한 계단씩.",
        author:"조 지라드",
    },
    {
        quote:"네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다.",
        author:"베토벤",
    },
    {
        quote:"내 비장의 무기는 아직 손안에 있다 .그것은 희망이다.",
        author:"나폴레옹",
    },
    {
        quote:"자신을 내보여라. 그러면 재능이 드러날 것이다.",
        author:"발타사르 그라시안",
    },
    {
        quote:"만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리자신에 깜짝 놀랄 것이다.",
        author:"에디슨",
    },
    {
        quote:"매일 당신을 두렵게 만드는 일을 하나씩 하라.",
        author:"미상",
    },
    {
        quote:"모든 성취의 시작점은 갈망이다.",
        author:"나폴레온 힐",
    }
    
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;