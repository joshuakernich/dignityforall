requirejs.config({
    baseUrl: 'js',
    paths: {
        cs: '../lib/cs','coffee-script': '../lib/coffee-script',
        text: '../lib/text',
        stubs: '../stubs'
    }
});

requirejs(['text!stubs/thing.html','cs!page'], function(thing,Page) {
  console.log(thing);
  console.log(Page);
  new Page();
});