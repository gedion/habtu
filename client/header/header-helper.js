Template.menuNav.helpers({
    items: function() {
        return [
            {tag:'menu-labels-one'},
            {tag:'menu-labels-two'},
            {tag:'menu-labels-thee'},
            {tag:'menu-labels-four'},
            {tag:'menu-labels-five'},
            {tag:'menu-labels-six'},
            {tag:'menu-labels-seven'}
        ];
    }
});
Template.menuItems.helpers({
    menuItem: function() {
         return "Hello World";
     }
});

Template.menuNav.rendered = function () {
  $(".flexnav").flexNav();
  return "";
};
var amharicKeyboard = {};
Template.searchbar.events({
'click input':  function( evt) {
  var el = $(evt.target),
      amhkey = amharicKeyboard[el.attr('name')];
  if(amhkey) {
    amhkey.changeMode(session.get('language'));
   } else {
    amharicKeyboard[el.attr('name')] = el.amharicKeyboard({mode:Session.get('language')});
   }
}
});
