function updateTimer() {
        var now = new Date();
        var date = now.toLocaleDateString();
        var time = now.toLocaleTimeString([], {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });

        var timerElement = document.getElementById('timer');
        timerElement.textContent = date + ', ' + time;

        setTimeout(updateTimer, 1000);
      }

      updateTimer();