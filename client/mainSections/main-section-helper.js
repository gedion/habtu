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
/*
"https://media.scdn4.secure.raxcdn.com/logo/8/logo8_freeloader.png"
"https://media.scdn4.secure.raxcdn.com/logo/8/logo8_boomboom.png"
"https://media.scdn4.secure.raxcdn.com/logo/8/logo8_tashaapparel.png"
*/

gallery = function() {
        var subTabIndex = Session.get('subTabToShow') || 0;
        var images = {
                         "contempo":
                                 [{
                                     newFromLabel:"Boom Boom",
                                     newFromLogo: 'http://placehold.it/240x60',
                                     bgsrc: '//media.scdn4.secure.raxcdn.com/9/spot/bg/2015/iris_1230-420_20151224115323.jpg',
                                     bghref: '/entro',
                                     bgsrc2: '//media.scdn4.secure.raxcdn.com/logo/9/logo9_entro.png',
                                     gal: [{class: "image-1","src": "http://placehold.it/150x220"},{class: "image-2","src": "http://placehold.it/150x220"},{class: "image-3","src": "http://placehold.it/150x220"},{class: "image-4","src": "http://placehold.it/150x220"},{class: "image-5","src": "http://placehold.it/150x220"}]
                                 },{
                                     newFromLabel:"Boom Boom",
                                     newFromLogo: 'http://placehold.it/240x60',
                                     bgsrc: '//media.scdn4.secure.raxcdn.com/9/spot/bg/2015/koriamerica_1230-420_20151224120211.jpg',
                                     bghref: '/entro',
                                     bgsrc2: '//media.scdn4.secure.raxcdn.com/logo/9/logo9_entro.png',
                                     gal: [{class: "image-1","src": "http://placehold.it/150x220"},{class: "image-2","src": "http://placehold.it/150x220"},{class: "image-3","src": "http://placehold.it/150x220"},{class: "image-4","src": "http://placehold.it/150x220"},{class: "image-5","src": "http://placehold.it/150x220"}]
                                 },{
                                     newFromLabel:"Boom Boom",
                                     newFromLogo: 'http://placehold.it/240x60',
                                     bgsrc: '//media.scdn4.secure.raxcdn.com/9/spot/bg/2015/minxapparel_1230-420_20151224115157.jpg',
                                     bghref: '/entro',
                                     bgsrc2: '//media.scdn4.secure.raxcdn.com/logo/9/logo9_entro.png',
                                     gal: [{class: "image-1","src": "http://placehold.it/150x220"},{class: "image-2","src": "http://placehold.it/150x220"},{class: "image-3","src": "http://placehold.it/150x220"},{class: "image-4","src": "http://placehold.it/150x220"},{class: "image-5","src": "http://placehold.it/150x220"}]
                                 },{
                                     newFromLabel:"Boom Boom",
                                     newFromLogo: 'http://placehold.it/240x60',
                                     bgsrc: '//media.scdn4.secure.raxcdn.com/9/spot/bg/2015/hemandthread_1230-420_20151224123700.jpg',
                                     bghref: '/entro',
                                     bgsrc2: '//media.scdn4.secure.raxcdn.com/logo/9/logo9_entro.png',
                                     gal: [{class: "image-1","src": "http://placehold.it/150x220"},{class: "image-2","src": "http://placehold.it/150x220"},{class: "image-3","src": "http://placehold.it/150x220"},{class: "image-4","src": "http://placehold.it/150x220"},{class: "image-5","src": "http://placehold.it/150x220"}]
                                 }


                                ],
                         "theEdge":
                                 [{
                                     newFromLabel:"The Edge",
                                     newFromLogo: 'http://placehold.it/240x60',
                                     bgsrc: '//media.scdn4.secure.raxcdn.com/10/edge_right_3.jpg',
                                     bghref: '/mitto',
                                     bgsrc2: '//media.scdn4.secure.raxcdn.com/logo/9/logo9_mitto.png',
                                     gal: [{class: "image-1","src": "http://placehold.it/150x220"},{class: "image-2","src": "http://placehold.it/150x220"},{class: "image-3","src": "http://placehold.it/150x220"},{class: "image-4","src": "http://placehold.it/150x220"},{class: "image-5","src": "http://placehold.it/150x220"}]
                                 },{
                                     newFromLabel:"The Edge",
                                     bgsrc: '//media.scdn4.secure.raxcdn.com/10/edge_right_2.jpg',
                                     bghref: '/mitto',
                                     bgsrc2: '//media.scdn4.secure.raxcdn.com/logo/9/logo9_mitto.png',
                                     gal: [{class: "image-1","src": "http://placehold.it/150x220"},{class: "image-2","src": "http://placehold.it/150x220"},{class: "image-3","src": "http://placehold.it/150x220"},{class: "image-4","src": "http://placehold.it/150x220"},{class: "image-5","src": "http://placehold.it/150x220"}]
                                 }
                                ],
                         "sp":
                                 [{
                                     newFromLabel:"SP",
                                     newFromLogo: 'http://placehold.it/240x60',
                                     bgsrc: '//media.scdn4.secure.raxcdn.com/9/spot/bg/2015/julia_1230-420_20151211115802.jpg',
                                     bghref: 'julia',
                                     bgsrc2: '//media.scdn4.secure.raxcdn.com/logo/9/logo9_julia.png',
                                     gal: [{class: "image-1","src": "http://placehold.it/150x220"},{class: "image-2","src": "http://placehold.it/150x220"},{class: "image-3","src": "http://placehold.it/150x220"},{class: "image-4","src": "http://placehold.it/150x220"},{class: "image-5","src": "http://placehold.it/150x220"}]
                                 }

                                ]
                     }

                return images[this.tab][subTabIndex] || images[this.tab][0];
       };

Template.galleries.helpers({ gallery: gallery });
Template.sectionTwoGal.helpers({ gallery: gallery });
