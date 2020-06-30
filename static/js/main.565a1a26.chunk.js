(this["webpackJsonpspaced-repetition-flashcards"]=this["webpackJsonpspaced-repetition-flashcards"]||[]).push([[0],{195:function(e,t,a){e.exports=a(328)},303:function(e,t,a){},323:function(e,t,a){},324:function(e,t,a){},325:function(e,t,a){},327:function(e,t,a){},328:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(35),s=a.n(i),c=a(39),o=a(26),l=a(27),u=a(28),d=a(29),m=a(65),h=a(17),p=a(340),v=a(339),f=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{as:"h2",style:{color:"white"}},"Spaced Repetition System"),r.a.createElement(m.b,{to:"/quiz"},r.a.createElement(v.a,null,"Start Session")))}}]),a}(r.a.Component),y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Edit")}}]),a}(r.a.Component),b=a(50),w=a(59),E=a(338),O=a(336),N=a(337),j="NEXT_QUESTION",k=j,S=function(e,t,a,n){return{type:k,payload:{questionId:e,isCorrect:t,question:a,difficulty:n}}},T=(a(303),0),q=1,x=2,C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleCheckboxSelection=n.handleCheckboxSelection.bind(Object(b.a)(n)),n.handleCheckAnswer=n.handleCheckAnswer.bind(Object(b.a)(n)),n.handleNextQuestion=n.handleNextQuestion.bind(Object(b.a)(n)),n.startNewTimer=n.startNewTimer.bind(Object(b.a)(n)),n.state={selectedKey:"a",cardState:T,currentInterval:0,currentTime:0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.startNewTimer()}},{key:"handleCheckboxSelection",value:function(e){this.setState({selectedKey:e})}},{key:"handleCheckAnswer",value:function(){var e=this.state.selectedKey,t=this.props.question;this.setState({cardState:e===t.answerKey?q:x})}},{key:"handleNextQuestion",value:function(){var e=this.state,t=e.selectedKey,a=e.currentInterval,n=this.props,r=n.question;n.shouldStop||(this.props.nextQuestion(r.id,t===r.answerKey,r.questionText,r.difficulty),this.setState({selectedKey:"a",cardState:T,currentTime:0}),clearInterval(a),this.startNewTimer())}},{key:"startNewTimer",value:function(){var e=this;this.setState({currentTime:0,currentInterval:setInterval((function(){var t=e.state,a=t.currentInterval,n=t.currentTime,r=e.props,i=r.question.timer,s=r.shouldStop;1e3*i===n||s?(clearInterval(a),e.handleNextQuestion()):e.setState({currentTime:n+100})}),100)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.cardState,n=t.currentTime,i=this.props.question,s=i.answerKey,c=i.questionText,o=i.options,l=i.timer;if(!s)return r.a.createElement(h.a,{to:"/results"});var u=Object.keys(o||{});u.sort();var d=u.map((function(t,n){var i=null;a!==T&&(i=t===s?r.a.createElement(w.a,{className:"modifier-check",name:"check"}):r.a.createElement(w.a,{className:"modifier-times",name:"times"}));var c=r.a.createElement("label",{className:"label-modifier"},o[t],i||"");return r.a.createElement(E.a.Field,{key:n},r.a.createElement(O.a,{radio:!0,label:c,name:"checkboxRadioGroup",value:o[t],checked:e.state.selectedKey===t,onClick:function(){return e.handleCheckboxSelection(t)}}))})),m=a!==T;return r.a.createElement("div",{className:"card"},r.a.createElement(N.a,{className:"card-progress",value:n,total:1e3*l,size:"small"}),r.a.createElement(E.a,{className:"question-form"},r.a.createElement(E.a.Field,null,c),d,r.a.createElement(v.a,{className:"answer-check",onClick:m?this.handleNextQuestion:this.handleCheckAnswer},m?"Next":"Check Answer")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.shouldStop&&clearInterval(t.currentInterval),t}}]),a}(r.a.Component),g={nextQuestion:S},I=Object(c.b)((function(e){return e}),g)(C),K=(a(323),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={interval:setInterval((function(){var t=n.state,a=t.interval,r=t.timer;r>=e.mainTimer?clearInterval(a):n.setState({timer:r+1})}),1e3),timer:0},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.answered,a=e.currentIndex,n=e.mainTimer,i=e.questions,s=this.state.timer,c=!1,o={};return Object.keys(t).length<i.length?o=i[a]||{}:(a%i.length===0&&i.sort((function(e,a){var n=t[e.id],r=t[a.id],i=n.answeredCorrectly/n.attempts/n.difficulty,s=r.answeredCorrectly/r.attempts/r.difficulty;return i<s?-1:i>s?1:0})),o=i[a%i.length]),n===s&&(c=!0,o={}),r.a.createElement("div",{className:"quiz"},r.a.createElement(p.a,{as:"h3",className:"main-timer",style:{color:"white"}},"Total Time: ",n-s),r.a.createElement(I,{shouldStop:c,question:o}))}}]),a}(r.a.Component)),A=Object(c.b)((function(e){var t=e.quiz,a=t.currentSession;return{answered:a.answered,currentIndex:a.currentIndex,questions:t.questions,mainTimer:t.mainTimer}}),{})(K),z=(a(324),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.answered,t=Object.keys(e),a=t.length>0,n=t.reduce((function(t,a){return t+e[a].attempts}),0),i=t.reduce((function(t,a){return t+e[a].answeredCorrectly}),0),s=i/n;return r.a.createElement("div",{className:"results"},r.a.createElement(p.a,{as:"h2"},"Results"),a?r.a.createElement("div",{className:"stats"},r.a.createElement("div",{className:"question-stats"},r.a.createElement(p.a,{as:"h4"},"Question Stats"),Object.keys(e).map((function(t,a){var n=e[t],i=n.attempts,s=n.answeredCorrectly,c=n.difficulty,o=n.question;return r.a.createElement("div",{className:"stat-group",key:a},r.a.createElement("div",{className:"stat-title"},o),r.a.createElement("div",{className:"stat"},"Attempts: ",i),r.a.createElement("div",{className:"stat"},"Correct: ",s),r.a.createElement("div",{className:"stat"},"Difficulty: ",c),r.a.createElement("div",{className:"stat"},"Score: ",s/i))}))),r.a.createElement("div",{className:"summary"},r.a.createElement(p.a,{as:"h4"},"Overall Stats"),r.a.createElement("div",{className:"summary-title"},"Total Attempts: ",n),r.a.createElement("div",{className:"summary-title"},"Total Correct: ",i),r.a.createElement("div",{className:"summary-title"},"Total Score: ",s.toFixed(3)))):r.a.createElement(p.a,{as:"h4"},"Oops it looks like there are no stats!"))}}]),a}(r.a.Component)),Q=Object(c.b)((function(e){return{answered:e.quiz.currentSession.answered}}))(z),W=(a(325),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"app-content"},r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/"},r.a.createElement(f,null)),r.a.createElement(h.b,{exact:!0,path:"/quiz"},r.a.createElement(A,null)),r.a.createElement(h.b,{path:"/edit"},r.a.createElement(y,null)),r.a.createElement(h.b,{exact:!0,path:"/results"},r.a.createElement(Q,null)))))}}]),a}(r.a.Component)),D={quiz:{currentSession:{currentIndex:0,answered:{}},questions:[{id:0,category:"Addition",questionText:"What is 2 + 9?",answerKey:"a",options:{a:11,b:7,c:18,d:29,e:"Not possible"},timer:5,difficulty:1},{id:1,category:"Subtraction",questionText:"What is 12 - 4?",answerKey:"c",options:{a:12,b:-8,c:8,d:16,e:"Not possible"},timer:5,difficulty:1},{id:2,category:"Subtraction",questionText:"What is 10 - 22?",answerKey:"b",options:{a:32,b:-12,c:-22,d:10,e:"Not possible"},timer:5,difficulty:1},{id:3,category:"Multiplication",questionText:"What is 5 * 12?",answerKey:"a",options:{a:60,b:17,c:15,d:7,e:"Not possible"},timer:10,difficulty:2},{id:4,category:"Multiplication",questionText:"What is 11 * 4?",answerKey:"c",options:{a:11,b:15,c:44,d:7,e:"Not possible"},timer:10,difficulty:2},{id:5,category:"Division",questionText:"What is 9 / 3?",answerKey:"d",options:{a:6,b:12,c:18,d:3,e:"Not possible"},timer:10,difficulty:2},{id:6,category:"Division",questionText:"What is 9 / 0?",answerKey:"e",options:{a:0,b:9,c:90,d:12,e:"Not possible"},timer:15,difficulty:3}],mainTimer:60}},F=a(120),R=a(40),M=(a(326),a(180));function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=[M.a].concat(Object(F.a)(a)),r=Object(R.d)(R.a.apply(void 0,Object(F.a)(n)),"object"===typeof window&&"undefined"!==typeof window.devToolsExtension?window.devToolsExtension():function(e){return e}),i=Object(R.e)(t,e,r);return i}var J=a(182),P=j,_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D.quiz,t=arguments.length>1?arguments[1]:void 0,a=t.payload,n=(t.response,t.type);switch(n){case P:var r=a.questionId,i=a.isCorrect,s=a.question,c=a.difficulty,o=Object(J.a)({},e);return o.currentSession.currentIndex+=1,r in o.currentSession.answered?(o.currentSession.answered[r].attempts+=1,i&&(o.currentSession.answered[r].answeredCorrectly+=1)):o.currentSession.answered[r]={attempts:1,answeredCorrectly:i?1:0,question:s,difficulty:c},o;default:return e}},G=Object(R.c)({quiz:_});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(327);var L=new function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[],a=B(e,G,t);return a}(window.PRELOADED_STATE||D);s.a.render(r.a.createElement(c.a,{store:L},r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[195,1,2]]]);
//# sourceMappingURL=main.565a1a26.chunk.js.map