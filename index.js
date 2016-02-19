(function(){

  'use strict';

  var box = document.getElementById('js-box');

  box.addEventListener('click', function() {
    if (/velocity-animating/.test(box.className)) {
      return;
    }

    Promise
      .resolve()
      .then(function() {
        return Velocity(box, {
          rotateY: [180, 0],
          tween: 100
        }, {
          duration: 500,
          easing: 'ease-in-out',
          progress: (function(){
            var oldTweenValue = 0;

            return function(elements, complete, remaining, start, tweenValue) {
              if (oldTweenValue < 50 && tweenValue >= 50) {
                elements.forEach(function(element) {
                  element.classList.toggle('back');
                });
              }

              oldTweenValue = tweenValue;
            };
          }())
        });
      });
  }, false);

}());
