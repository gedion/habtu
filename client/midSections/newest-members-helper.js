
Template.newestMembers.helpers({
    logo: function() {
        return [
            {src:"http://placehold.it/178x106"},
            {src:"http://placehold.it/178x106"},
            {src:"http://placehold.it/178x106"},
            {src:"http://placehold.it/178x106"},
            {src:"http://placehold.it/178x106"},
            {src:"http://placehold.it/178x106"},
            {src:"http://placehold.it/178x106"},
            {src:"http://placehold.it/178x106"}
        ];
    }
});

Template.newestMembersGallery.helpers({
    gallery: function() {
        return {
          gal:  [
                    {src:"http://placehold.it/150x225", isSectionStockGuar: this.isSectionStockGuar},
                    {src:"http://placehold.it/150x225", isSectionStockGuar: this.isSectionStockGuar},
                    {src:"http://placehold.it/150x225", isSectionStockGuar: this.isSectionStockGuar},
                    {src:"http://placehold.it/150x225", isSectionStockGuar: this.isSectionStockGuar},
                    {src:"http://placehold.it/150x225", isSectionStockGuar: this.isSectionStockGuar},
                    {src:"http://placehold.it/150x225", isSectionStockGuar: this.isSectionStockGuar},
                    {src:"http://placehold.it/150x225", isSectionStockGuar: this.isSectionStockGuar}
                ],
        };
    }
});

Template.socialMedia.helpers({
    link: function() {
        return [
                    {href:"//www.facebook.com/", title:'Find Us On Facebook', class:'module-eight-social-fb'},
                    {href:"//twitter.com/", title:'Follow Us On Twitter', class:'module-eight-social-twitter'},
                    {href:"//www.pinterest.com/", title:'Find Us On Pinterest"', class:'module-eight-social-pt'},
                    {href:"//plus.google.com/", title:'Find us on Google', class:'module-eight-social-google'},
                    {href:"//instagram.com/", title:'Find us on Instagram', class:'module-eight-social-instagram'},
                    {href:"//www.linkedin.com", title:'Follow us on LinkedIn', class:'module-eight-social-linkedin'}
                ];
    }
});

Template.midSectionFour.helpers({
   galleryLatestTrends: function() {
        return {
          gal:  [
                    {src:"http://placehold.it/150x225", class:"level-one-square-ad-module-mid-1"},
                    {src:"http://placehold.it/150x225", class:"level-one-square-ad-module-mid-2"},
                    {src:"http://placehold.it/150x225", class:"level-one-square-ad-module-mid-3"},
                    {src:"http://placehold.it/150x225", class:"level-one-square-ad-module-mid-4"}
                ],
        };
    },
    galleryFreshPicks: function() {
        return {
          gal:  [
                    {src:"http://placehold.it/100x165"},
                    {src:"http://placehold.it/100x165"},
                    {src:"http://placehold.it/100x165"}
                ],
        };
    }
});
var tabToShow = function(tab) {
        return Session.get('tabToShow') == tab;
}

Template.newestMembersGallery.helpers({
    isSectionStockGuar  : function() {
            return this. isSectionStockGuar;
    }

});

Template.midSectionTwo.events({
  'click .buyers-club-module ul li':function(e){
        var el = $(e.target),
            tabIdex = el.index();
        Session.set('buyersClubTabToShow', tabIdex);
        updateMidSectionTwoTabs(el);
  }
});

function updateMidSectionTwoTabs(el){
    var tabLists =  $('.buyers-club-module ul li');
    tabLists.removeClass("active-color");
    tabLists.css("color","");
    el.addClass("active-color");
    el.css("color", "rgb(157, 3, 115)");

}
