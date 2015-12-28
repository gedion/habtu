Session.set('tabToShow', 'contemp');

var tabToShow = function(tab) {
        return Session.get('tabToShow') == tab;
}

Template.sectionOne.helpers({ tabToShow:tabToShow });

Template.sectionTwo.helpers({ tabToShow:tabToShow });


Template.mainTabs.helpers({
    mainTab: function() {
        return [
            {label:"ኮንተምፖራሪ", class:"contempo-tab", active:"tab-home-page-active-1"},
            {label:"ምርት", class:"the-edge-tab"},
            {label:"ኤስፒ", class:"sp-tab"}
        ];
    }
});

Template.mainTabs.events({
  'click .contempo-tab':function(e){
        Session.set('tabToShow', 'contemp');
        updateEdgeTab(e);
  },
  'click .the-edge-tab':function(e){
        Session.set('tabToShow', 'theEdge');
        updateEdgeTab(e);
   },
  'click .sp-tab':function(e){
        Session.set('tabToShow', 'sp');
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

Template.whatsNewFrom.helpers({
    gal: function(){
        var subTabIndex = Session.get('subTabToShow') || 0;
        return Galleries.find({type:this.tab+'WhatsNew', tab:subTabIndex}, {sort: {sortorder:1}});
    }
});

Template.gals.helpers({ gallery: function() {
        var subTabIndex = Session.get('subTabToShow') || 0;
        gals = Galleries.find({type:this.tab, tab:subTabIndex}, {sort: {sortorder:1}}).fetch();
        for (var i = 0; i < gals.length;i++) {
            gals[i]['class'] = 'image-'+(i + 1);
        }
        var galleries = {gal: gals};
        gal2 = Galleries.find({type:this.tab+'WhatsNew', tab:subTabIndex}, {sort: {sortorder:1}}).fetch();
        if (gal2.length == 1) {
            for(var key in gal2[0]){
                galleries[key] = gal2[0][key];
            }
        }
        return galleries;
    }
});

Template.sectionTwoGal.helpers({ gallery: function() {
        return Galleries.find({type:this.tab, tab:-1}, {sort: {sortorder:1}});
     }
});
