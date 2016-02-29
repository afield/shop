angular.module('shopApp', [])
.directive('myRepeatDirective', function() {
  return function(scope, element, attrs) {
    angular.element(element).css('color','blue');
    if (scope.$last){
      window.alert("im the last!");
    }
  };
})
.directive('myMainDirective', function() {
  return function(scope, element, attrs) {
    angular.element(element).css('border','5px solid red');
  };
});