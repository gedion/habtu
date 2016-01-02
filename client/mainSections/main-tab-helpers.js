Session.set('tabToShow', 'contemp');

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
                ]
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

var tabToShow = function(tab) {
    return Session.get('tabToShow') == tab;
}

Template.sectionOne.helpers({ tabToShow:tabToShow });

Template.sectionTwo.helpers({ tabToShow:tabToShow });

Template.mainTabs.helpers({
    mainTab: function() {
        return [
            {tag:'main-tab-one'},
            {tag:'main-tab-two'},
            {tag:'main-tab-three'}
        ];
    }
});

Template.mainTabs.events({
  'click .contempo-tab':function(e){
        Session.set('tabToShow', 'contemp');
        updateMainTabs(e);
  },
  'click .the-edge-tab':function(e){
        Session.set('tabToShow', 'theEdge');
        updateMainTabs(e);
   },
  'click .sp-tab':function(e){
        Session.set('tabToShow', 'sp');
        updateMainTabs(e);
   }
});


function updateMainTabs(e){
    var tabIndex,
        tabHomePages = $('.tab-home-page'),
        tabContent = $('#hp_tab_ad_1'),
        tabclass = 'tab-home-page-active-',
        el = $(e.target),
        activeTabMap = {
           'contempo-tab':  1,
           'the-edge-tab': 2,
           'sp-tab':       3
        };
    tabIndex =  activeTabMap[el.attr('class')];

    tabHomePages.removeClass('tab-home-page-active-1');
    tabHomePages.removeClass('tab-home-page-active-2');
    tabHomePages.removeClass('tab-home-page-active-3');
    $('.tab-home-page:nth('+(tabIndex-1)+')').addClass(tabclass+tabIndex);

    tabContent.removeClass('tab-target-1');
    tabContent.removeClass('tab-target-2');
    tabContent.removeClass('tab-target-3');
    tabContent.addClass('tab-target-'+tabIndex);
    Session.set('subTabToShow', 0);
}
