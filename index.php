<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge;chrome=1" />
<title>HTML5 Desktop Notifications Demo</title>
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/bootstrap.min.css">

</head>
<body>
      <header>
          <h1>HTML5 Desktop Notifications Demo</h1>
      </header>

  <div role="main" id="main">


      <div class="alert">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <strong>Browser Support</strong> <span id="browser-support-msg">Checking...</span>
      </div>

      <div id="request">
        <h2>Desktop Alert Message</h2>
        <p>
            <input id="da-title" type="text" value="Hello there!" />
        </p>
        <p>
            <textarea id="da-message">I'm a desktop message! =)</textarea>
        </p>
        <p>
            <button class="btn btn-primary" id="alert-me-btn">Alert Me Sir</button>
        </p>
      </div>

  </div>

      <footer>
          Copyright <a href="http://jquery4u.com">jQuery4u</a> 2012 | Author Sam Deering
      </footer>

  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script src="js/date.js" type="text/javascript" charset="utf-8"></script>
  <script src="js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
  <script src="js/html5desktopalert.js" type="text/javascript" charset="utf-8"></script>


</body>
</html>