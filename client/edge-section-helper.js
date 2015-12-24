Template.tabs.events({
  'click .contempo-tab':function(e){
        Session.set('tabToShow', 'contemp');
        updateEdgeTab(e);
  },
  'click .the-edge-tab':function(e){
        Session.set('tabToShow', 'theEdge');
        updateEdgeTab(e);
   },
  'click .sp-tab':function(e){
        Session.set('tabToShow', 'sb');
        updateEdgeTab(e);
   }
});


function updateEdgeTab(e){
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
}

Template.sectionOne.helpers({
    tabToShow: function(tab) {
      return Session.get('tabToShow') == tab;
    }
});
