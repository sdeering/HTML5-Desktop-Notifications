var timer, notifications = window.webkitNotifications;
window.onload = function() {
  document.querySelector("#request input").addEventListener('click', function() { this.select(); }, false);
  status((notifications ?
      "Yay! Notifications are" : "Sorry. Notifications aren't")
      + " supported on this browser");

  function ensurePermission(callback) {
    if (notifications.checkPermission() == 0) {
      callback();
    } else {
      notifications.requestPermission(function() {
        if (notifications.checkPermission() == 0) callback();
      });
    }
  }

  document.querySelector("#scheduleIt").addEventListener('click', function() {
    ensurePermission(scheduleNotification);
  }, false);

  function scheduleNotification() {
    var timeValue = document.querySelector("#timeString").value;
    var triggerTime = Date.parse(timeValue);
    if (!triggerTime)
    {
        status("Sorry, I didn't understand when you want the notification. Enter &quot;2 minutes&quot; for example.");
        return;
    }
    status("Roger that! I'll ping you in "+ timeValue +" ...", true);
    var notification = window.webkitNotifications.createNotification("", document.querySelector("#message").value, "Doesn't HTML5 just rock?");
    var remaining = triggerTime.getTime() - (new Date()).getTime();
    console.log(triggerTime, triggerTime.getTime(),(new Date()).getTime(), remaining);
    if (remaining < 2000) remaining = 2000;
    clearTimeout(timer);
    timer = setTimeout(function() { notification.show(); }, remaining);
  }

  function status(message, shouldFlourish) {
    var m = message.replace(/ /g, "&nbsp;");
    var statusEl = document.querySelector("#status");
    statusEl.innerHTML = m;
    if (shouldFlourish) {
      statusEl.className = 'visible';
      setTimeout(function() {
        document.querySelector("#status").className = '';
      }, 1500);
    }
  }

};