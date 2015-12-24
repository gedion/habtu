


///section tabs

Template.sectionTabs.helpers({
    tab: function() {
        tabs = {
            "contempo": [
                    {class:"activeClass", activeColor:"color: rgb(153, 153, 153);"},
                    {},{},{}
                ],
            "theEdge": [
                    {class:"activeClass", activeColor:"color: rgb(153, 153, 153);"},
                    {}
                ],
            "sp": [
                    {class:"activeClass", activeColor:"color: rgb(153, 153, 153);"}
                ],
            };
        return tabs[this.tab];
    }
});

Template.sectionTabs.events({
  'click .module-hero-bottom li':function(e){
        var el = $(e.target),
            tabIdex = el.index();
        Session.set('subTabToShow', tabIdex);
        updateSectionTabs(el);
  }
});

function updateSectionTabs(el){
    var tabLists =  $('.module-hero-bottom li');
    tabLists.removeClass("activeClass");
    tabLists.css("color","");
    el.addClass("activeClass");
    el.css("color", "rgb(153, 153, 153)");

}

