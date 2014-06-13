var Foo = function Foo() {
};

Foo.prototype = Object.create(HTMLElement.prototype);
Foo.prototype.createdCallback = function() {
  this.wasUpgraded = true;
  var location = this.attributes['location'].value;
  window.console.log(window.location + " upgrading " + this.localName + ' from ' + location);
};

Foo = document.registerElement('x-foo', Foo);
