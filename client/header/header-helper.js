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
