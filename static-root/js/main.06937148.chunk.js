(this.webpackJsonpr_tweeter=this.webpackJsonpr_tweeter||[]).push([[0],{34:function(e,t,a){e.exports=a(46)},40:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(22),l=a.n(r),s=(a(39),a(40),a(18)),o=a(23),c=a(17),d=a(24),u=a(25),h=a(6),m=a(33),k=a(32),w=i.a.createContext(),f=function(e){Object(m.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={dataset:{username:e.username,canTweet:e.canTweet,page:e.page,tweetId:e.tweetId},value:"",tweets:[]},n.handleRetweet=n.handleRetweet.bind(Object(h.a)(n)),n.handleTweetAdd=n.handleTweetAdd.bind(Object(h.a)(n)),n.handleLikeClick=n.handleLikeClick.bind(Object(h.a)(n)),n.handleTextArea=n.handleTextArea.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="/api/tweets";this.state.dataset.username?t+="/?username=".concat(this.state.dataset.username):this.state.dataset.tweetId&&(t+="/".concat(this.state.dataset.tweetId)),fetch(t).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong!")})).then((function(t){Array.isArray(t)?e.setState({tweets:t}):e.setState({tweets:[t]})})).catch((function(e){console.log(e.message)}))}},{key:"handleTweetAdd",value:function(e){var t=this;e.preventDefault();var a={content:this.state.value};fetch("/api/tweets/add-tweet",{method:"POST",headers:{HTTP_X_REQUESTED_WITH:"XMLHttpRequest","X-Requested-With":"XMLHttpRequest","X-CSRFToken":v("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong!")})).then((function(e){var a=[e].concat(Object(c.a)(t.state.tweets));t.setState({tweets:a,value:""})})).catch((function(e){console.log(e)}))}},{key:"handleRetweet",value:function(e){var t=this;fetch("/api/tweets/tweet-action/".concat(e),{method:"POST",headers:{HTTP_X_REQUESTED_WITH:"XMLHttpRequest","X-Requested-With":"XMLHttpRequest","X-CSRFToken":v("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify({action:"retweet"})}).then((function(e){if(e.ok)return e.json();throw new Error("something went wrong!")})).then((function(e){if(t.state.tweets.length>1){var a=[e].concat(Object(c.a)(t.state.tweets));t.setState({tweets:a})}else console.log("Tweet was successfully retweeted!")})).catch((function(e){console.log(e)}))}},{key:"handleLikeClick",value:function(e){var t,a,n=this;this.state.tweets.length>1?t=this.state.tweets.find((function(t){return t.id===e})).likes.user_liked?"dislike":"like":this.state.tweets[0].id===e?(t=this.state.tweets[0].likes.user_liked?"dislike":"like",a="main"):(t=this.state.tweets[0].original.likes.user_liked?"dislike":"like",a="original"),fetch("/api/tweets/tweet-action/".concat(e),{method:"POST",headers:{HTTP_X_REQUESTED_WITH:"XMLHttpRequest","X-Requested-With":"XMLHttpRequest","X-CSRFToken":v("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify({action:t})}).then((function(e){if(e.ok)return e.json();throw new Error("something went wrong!")})).then((function(t){var i=t.likes,r=JSON.stringify(n.state.tweets);if(r=JSON.parse(r),"detail"===n.state.dataset.page)return"main"===a?(r[0].likes.likes=i,r[0].likes.user_liked=!r[0].likes.user_liked):(r[0].original.likes.likes=i,r[0].original.likes.user_liked=!r[0].original.likes.user_liked),void n.setState({tweets:r});var l=r.find((function(t){return t.id===e}));l.likes.likes=i,l.likes.user_liked=!l.likes.user_liked;var s=r.filter((function(t){if(t.original)return t.original.id===e}));if(s){var c,d=Object(o.a)(s);try{for(d.s();!(c=d.n()).done;){var u=c.value;u.original.likes.likes=i,u.original.likes.user_liked=!u.original.likes.user_liked}}catch(h){d.e(h)}finally{d.f()}}n.setState({tweets:r})})).catch((function(e){console.log(e)}))}},{key:"handleTextArea",value:function(e){var t=e.target.value;this.setState({value:t})}},{key:"render",value:function(){return i.a.createElement(w.Provider,{value:Object(s.a)(Object(s.a)({},this.state),{},{handleLikeClick:this.handleLikeClick,handleTweetAdd:this.handleTweetAdd,handleRetweet:this.handleRetweet,handleTextArea:this.handleTextArea})},this.props.children)}}]),a}(i.a.Component);function v(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var i=a[n].trim();if(i.substring(0,e.length+1)===e+"="){t=decodeURIComponent(i.substring(e.length+1));break}}return t}var g=a(9),p=a(12),E=a(7),b=a(5);var T=function(e){var t=e.value;return i.a.createElement(E.a,null,i.a.createElement(b.a,{xs:10,lg:8,className:"mx-auto mb-5 px-0"},i.a.createElement(g.a,{onSubmit:e.handleTweetAdd},i.a.createElement(g.a.Group,{controlId:"exampleForm.ControlTextarea1"},i.a.createElement(g.a.Label,null,"Create New Tweet:"),i.a.createElement(g.a.Control,{as:"textarea",rows:"3",value:t,onChange:function(t){e.handleTextArea(t)}})),i.a.createElement(p.a,{variant:"primary",type:"submit"},"Submit"))))},y=a(26),C=a(27),R=a(15);function x(){var e=Object(y.a)(["\n  // background-color: red; \n"]);return x=function(){return e},e}var j=Object(C.a)(p.a)(x()),O=function(e){var t=e.tweet,a=e.tweet.original;return i.a.createElement(b.a,{xs:10,lg:8,className:"mx-auto border border-success py-3 mb-3"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-body"},i.a.createElement("h5",{className:"mt-0"},"Media heading"),t.id," == ",t.content,a&&i.a.createElement("div",{className:"media mt-3 ml-5 border border-primary p-3 mb-3"},i.a.createElement("div",{className:"media-body"},i.a.createElement("h5",{className:"mt-0"},"Parent Heading"),a.content),i.a.createElement(R.a,{"aria-label":"Basic example"},i.a.createElement(j,{variant:a.likes.user_liked?"info":"primary",onClick:function(){e.handleLikeClick(a.id)}},"Like ",a.likes.likes),i.a.createElement(j,{variant:"success",onClick:e.handleRetweet.bind(null,a.id)},"Retweet")))),i.a.createElement(R.a,{"aria-label":"Basic example"},i.a.createElement(j,{variant:t.likes.user_liked?"info":"primary",onClick:function(){e.handleLikeClick(t.id)}},"Like ",t.likes.likes),i.a.createElement(j,{variant:"success",onClick:e.handleRetweet.bind(null,t.id)},"Retweet"))))};var S=function(e){var t=e.username;return console.log(t),i.a.createElement(E.a,null,i.a.createElement(b.a,{xs:10,lg:8,className:"mx-auto mb-5 px-0 bg-primary"},"Showing tweets of >> ",i.a.createElement("span",{className:"text-white"},t)))},_=a(31);var L=function(e){var t=Object(n.useContext)(w),a=t.dataset,r=t.handleLikeClick,l=t.handleRetweet,s=t.handleTweetAdd,o=t.handleTextArea,c=t.value,d=t.tweets,u=i.a.createElement(i.a.Fragment,null,i.a.createElement(S,{username:a.username}),"true"===a.canTweet&&i.a.createElement(T,{value:c,handleTextArea:o,handleTweetAdd:s}),i.a.createElement(E.a,null,d.map((function(e){return i.a.createElement(O,{key:e.id,tweet:e,handleRetweet:l,handleLikeClick:r})})))),h=i.a.createElement("div",null,"Hello, thanks for jumping in. Please, consider loging in to see the content!");return i.a.createElement(_.a,null,a.username?u:h)};var A=function(e){var t=Object(n.useContext)(w),a=t.tweets,r=t.handleRetweet,l=t.handleLikeClick;return console.log(a[0]),a.length?i.a.createElement(O,{tweet:a[0],handleRetweet:r,handleLikeClick:l}):i.a.createElement("div",null,"Loading")};var N=function(e){return i.a.createElement("div",{className:"py-3 bg-warning mb-3"},"Hello from Navbar")};var H=function(e){var t="detail"===Object(n.useContext)(w).dataset.page?i.a.createElement(A,null):i.a.createElement(L,null);return i.a.createElement(i.a.Fragment,null,i.a.createElement(N,null),t)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=document.getElementById("root");l.a.render(i.a.createElement(f,X.dataset,i.a.createElement(H,null)),X),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.06937148.chunk.js.map