export * from './lib/map';
export * from './lib/filter';
export * from './lib/reduce';

(function () {
  var doc = document.documentElement;

  doc.classList.remove('no-js');
  doc.classList.add('js');
}());
