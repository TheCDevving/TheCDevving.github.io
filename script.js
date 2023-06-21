window.addEventListener("scroll", function () {
    var scrollButton = document.querySelector(".scroll-to-top");
    if (window.pageYOffset > 100) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });
  
  document.querySelector(".scroll-to-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // Chat window functionality
  
  var chatMessages = document.getElementById('chat-messages');
  var chatInput = document.getElementById('chat-input');
  
  function sendMessage() {
    var message = chatInput.value;
  
    if (message.trim() !== '') {
      var newMessage = document.createElement('div');
      newMessage.innerText = message;
      chatMessages.appendChild(newMessage);
      chatInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
  
  chatInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      sendMessage();
    }
  });
  