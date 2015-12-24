


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
                    {class:"activeClass", activeColor:"color: rgb(153, 153, 153);"},
                    {},{},{},{},{},{},{},{},{}
                ],
            };
        return tabs[this.tab];
    }
});

Template.sectionTabs.events({
  'click .module-hero-bottom li':function(e){
        Session.set('subTabToShow', $(e.target).index());
  }
});

