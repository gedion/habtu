Template.midGalleries.helpers({
    gallery: function() {
        var gals = Galleries.find({type:this.type}, {sort: {sortorder:1}}).fetch();
        for(var i = 0; i < gals.length;i++) {
            gals[i]['isSectionStockGuar'] = this.isSectionStockGuar;
        }
        return { gal: gals };
    },
    isSectionStockGuar  : function() {
            return this. isSectionStockGuar;
    }
});


Template.midSectionFourGals.helpers({
   midSectionFourGals: function() {
        return { gal:Galleries.find({type:this.type}, {sort: {sortorder:1}})};
   }
});

Template.midSectionFourGalsTrendsAndWholeSale.helpers({
    latestAndwholeSale: function() {
        var gals = Galleries.find({type:this.type}, {sort: {sortorder:1}}).fetch();
        for(var i = 0; i < gals.length;i++){
            gals[i]['class'] = 'level-one-square-ad-module-mid-'+(i + 1);
        }
        return { gal: gals };
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
