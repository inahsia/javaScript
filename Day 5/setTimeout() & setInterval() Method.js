// when you want to call a function after a certain period of time, the time after which the function will be called given by the user in milliseconds

let timeID=setTimeout(func,delay);


<html>
  <head>
    <title>
    setTimeout() method
    </title>


  </head>
  <body>
    <button onclick="setTimeout(demo,5000);">
      click here
      </button>

      <script>

        function demo(){
          alert('Here is an example of setTimeout javascript');
        }
      </script>
  </body>
</html>


// to cancel clearTimeout()

let timerID=setTimeout(...);
clearTimeout(timerID);



// setInterval()
// to call a functiom repeatedly at a specified interval of time. 

// let intervalId=setInterval(function,deply)






