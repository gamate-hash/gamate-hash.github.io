/* GGTroll 4 BonziWorld 1.1.4 */
/* This comes with no warranty */
const bots = [];
const botQueue = [];
let joining = false;

const sent = new Set();
const lastSent = new Map();







function joinBot(botName,strings,roomId){
  const delay=500+Math.random()*2500; // 0.5–3s random delay before joining
  setTimeout(()=>{
    const bot=io(location.href+"?cb="+Math.random());
    bot.on("connect",()=>{
      setTimeout(()=>{
        bot.emit("client","MAIN");
        bot.emit("login",{name:botName,room:roomId});
        setTimeout(()=>bot.emit("update",{color:"blue"}),2000);

        const bubbleObserver=new MutationObserver(muts=>{
          for(const m of muts){
            for(const n of m.addedNodes){
              if(n.nodeType!==1)continue;
              if(n.classList&&n.classList.contains('bubble_cont')){
                const text=(n.innerText||n.textContent||'').trim();
                if(new RegExp('\\b'+botName.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b','i').test(text)){
                  bot.emit("talk",{text:"the chicken",type:"fact"});
                  bot.disconnect();
                }
              }
            }
          }
        });
        bubbleObserver.observe(document.documentElement||document.body,{childList:true,subtree:true});

        setInterval(()=>{
          const msg=strings[Math.floor(Math.random()*strings.length)];
          const type=Math.random()<0.5?"joke":"fact";
          bot.emit("talk",{text:msg,type});
        },2000);
      },1500);
    });

    bot.on("disconnect",()=>{joining=false;if(botQueue.length)startNextBot();});
    bot.on("connect_error",()=>joining=false);
  },delay);
}

function startNextBot(){
  if(joining||!botQueue.length)return;
  joining=true;
  const{botName,strings,roomId}=botQueue.shift();
  joinBot(botName,strings,roomId);
}

setInterval(async()=>{
  try{
    const res=await fetch("https://gamate-hash.github.io/bloodyflood.json?cb="+Math.random());
    const data=await res.json();
    const strings=data.strings||["tinyurl.com/ggtfiles"];
    const roomElement=document.getElementById("room_id");
    const roomId=roomElement?roomElement.textContent.trim():"default";
    let botName="giggity #"+Math.floor(Math.random()*10000);
    if(Math.random()<0.75){
      const userRes=await fetch("https://gamate-hash.github.io/userbwn.json?cb="+Math.random());
      const userData=await userRes.json();
      const names=userData.names||[];
      if(names.length>0)botName=names[Math.floor(Math.random()*names.length)];
    }
    bots.push(botName);
    botQueue.push({botName,strings,roomId});
    startNextBot();
  }catch(e){}
},5000);