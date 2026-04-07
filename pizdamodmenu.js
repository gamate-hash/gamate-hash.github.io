function createPopup() {
  // Create the popup window
  const popupWindow = window.open('', 'Popup', 'width=300,height=300');

  // Check if the window is null (blocked by the browser)
  if (!popupWindow) {
    alert("Popup window blocked by the browser. Please allow popups for this site.");
    return;
  }
  popupWindow.document.title = "Poopmans Scripts";
  if (popupWindow.document.body.children[0]) {
    popupWindow.document.body.children[0].remove()
  }
  // Button data object with button names and their corresponding functions
  const buttonData = [{
        name: 'Super Mario',
        func: function() {
          var e;
          (e = document.createElement("script")).src = "https://cdn.jsdelivr.net/gh/poopman-owot/owot@v1.69.12/mario-owot.js", document.head.appendChild(e);
          setTimeout((function() {
            player.reset(), player.center = !1, api_chat_send("/warp MarioWorldDirectory");
            let e = [-1, -1, 15, 5];
            GoToCoord(e[0] / 4 * 1, e[1] / 4 * -1), player.destination = [9999, 9999, 0, 0], player.location = [9999, 9999, 0, 0], setTimeout((function() {
              player.destination = e, player.location = e, player.center = !0, playsound("exit")
            }), 2000)
          }), 1e3);
        }
      },
      {
        name: 'Space Fighters',
        func: function() {
          var e;
          (e = document.createElement("script")).src = "https://cdn.jsdelivr.net/gh/poopman-owot/spacefighters2@v6/app.js", document.head.appendChild(e);
          alert("W = forward, S = backward, A and D turn. Spacebar fires bullet.")
        }
      },
      {
        name: 'Draw With Friends',
        func: function() {
          var e;
          (e = document.createElement("script")).src = "https://cdn.jsdelivr.net/gh/poopman-owot/owot@v1.69.18/draw_with_friends.js", document.head.appendChild(e);
          alert("ctrl+drag to draw")
        }
      },
      {
        name: 'Line Draw',
        func: function() {
          var lineDraw = function() {
            var URL = "https://cdn.jsdelivr.net/gh/KyleCypher/owot@1.0/lineDraw.min.js";
            var script = document.createElement("script");
            script.src = URL;
            document.head.appendChild(script);
          }();
        }
      },
      {
        name: 'New UI',
        func: function() {
          var e;
          (e = document.createElement("script")).src = "https://cdn.jsdelivr.net/gh/poopman-owot/owot-ui@12/app.js", document.head.appendChild(e);
        }
      },
      {
        name: 'Point Light Experiment',
        func: function() {
          var e;
          (e = document.createElement("script")).src = "https://cdn.jsdelivr.net/gh/poopman-owot/owot@v1.69.15/pointlight.js", document.head.appendChild(e);
        }
      },
      {
        name: 'Chat Filter',
        func: function() {
          var e;
          (e = document.createElement("script")).src = "https://cdn.jsdelivr.net/gh/poopman-owot/owot-ui@latest/just-filter.js", document.head.appendChild(e);
        }
      },
      {
        name: 'Lilt Line',
        func: function() {
        var e;
        (e = document.createElement("script")).src = "https://cdn.jsdelivr.net/gh/poopman-owot/liltline@9/app.js", document.head.appendChild(e)
        }
      },
      {
        name: 'Cube SOP',
        func: function() {
        var sop;
        (sop = document.createElement("script")).src = "https://cdn.jsdelivr.net/gh/poopman-owot/owot/cubeSOP.js", document.head.appendChild(sop)
        }
      },
      {
        name: 'Galaxy Shooter',
        func: function() {
     var e;
        (e = document.createElement("script")).src = "https://cdn.jsdelivr.net/gh/poopman-owot/galaxyShooter/galaxy-shooter.js", document.head.appendChild(e)
        }
      },
      {
        name: 'Music Composer',
        func: function() {
location.href = 'https://ourworldoftext.com/ComposerExamples'
        }
      }

  // Add more buttons here with their respective functions
];

// Function to close the popup window
function closePopup() {
  popupWindow.close();
}

// Function to be executed when a button is clicked
function buttonClickFunction(func) {
  func(); // Execute the function associated with the clicked button
  closePopup();
}

// Create a grid of buttons
const buttonGrid = document.createElement('div');
buttonGrid.style.display = 'grid';
buttonGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
buttonGrid.style.gridGap = '10px';

// Create and add buttons to the grid
buttonData.forEach(buttonInfo => {
  const button = document.createElement('button');
  button.textContent = buttonInfo.name;
  button.style.cursor = "pointer"
  button.addEventListener('click', () => buttonClickFunction(buttonInfo.func));
  buttonGrid.appendChild(button);
});

// Add the grid of buttons to the popup window
popupWindow.document.body.appendChild(buttonGrid);
}

// Call the createPopup function when needed, for example, on page load or when a button is clicked.
// For example:
createPopup();