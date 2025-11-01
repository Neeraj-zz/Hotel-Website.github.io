   // Hide splash screen after 3 seconds
   document.addEventListener('DOMContentLoaded', function() {
     setTimeout(function() {
       const splashScreen = document.getElementById('splash-screen');
       if (splashScreen) {
         splashScreen.classList.add('hidden');
         // Remove the splash screen from DOM after transition
         setTimeout(function() {
           if (splashScreen.parentNode) {
             splashScreen.parentNode.removeChild(splashScreen);
           }
         }, 500); // Match the CSS transition time
       }
     }, 2000); // Show splash screen for 3 seconds
   });