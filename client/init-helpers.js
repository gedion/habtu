
Template.galleries.helpers({
    gallery: function() {
        var images ={
                    "theEdge":{
                    bgsrc:'//media.scdn4.secure.raxcdn.com/9/spot/bg/2015/mitto_1230-420_20151222142104.jpg',
                    bghref:'/mitto',
                    bgsrc2:'//media.scdn4.secure.raxcdn.com/logo/9/logo9_mitto.png',
                    gal: [{class:"image-1",
                        "src": "https://media.scdn4.secure.raxcdn.com/logo/9/logo9_lollipopstar.png"
                    }, {class:"image-2",
                        "src": "https://12d7e7431903430f347e-091545d78b828f8cf642edf9c77cae16.ssl.cf1.rackcdn.com/MOY151217CA01_NAVY_200_0.jpg"
                    }, {class:"image-3",
                        "src": "https://12d7e7431903430f347e-091545d78b828f8cf642edf9c77cae16.ssl.cf1.rackcdn.com/MOY151214NL52_MARSALA_200_0.jpg"
                    }, {class:"image-4",
                        "src": "https://12d7e7431903430f347e-091545d78b828f8cf642edf9c77cae16.ssl.cf1.rackcdn.com/MOY151221RJ03_RED_200_0.jpg"
                    }, {class:"image-5",
                        "src": "https://12d7e7431903430f347e-091545d78b828f8cf642edf9c77cae16.ssl.cf1.rackcdn.com/MOY151215NG51_Navy_200_0.jpg"
                    }]},
                    "sp":{
                        bgsrc:'//media.scdn4.secure.raxcdn.com/9/spot/bg/2015/julia_1230-420_20151211115802.jpg',
                        bghref:'julia',
                        bgsrc2:'//media.scdn4.secure.raxcdn.com/logo/9/logo9_julia.png',
                        gal: [{class:"image-1",
                        "src": "https://12d7e7431903430f347e-091545d78b828f8cf642edf9c77cae16.ssl.cf1.rackcdn.com/MOY151221RJ01_GREEN_200_0.jpg"
                    }, {class:"image-2",
                        "src": "https://5aef966fc13e83f0f5a4-0359586ae19d202da2171d54b11eaa5f.ssl.cf1.rackcdn.com/OMZ201512171019131908811_Color_200_0.jpg"
                    }, {class:"image-3",
                        "src": "https://17d6b428d357f1dec43e-25951e03bf03a95b82b6180e7b4d1694.ssl.cf1.rackcdn.com/RXZ20151222073504_COLOR_200D_4.jpg"
                    }, {class:"image-4",
                        "src": "https://17d6b428d357f1dec43e-25951e03bf03a95b82b6180e7b4d1694.ssl.cf1.rackcdn.com/RXZ2015120311310337310468_Color_200_0.jpg"
                    }, {class:"image-5",
                        "src": "https://17d6b428d357f1dec43e-25951e03bf03a95b82b6180e7b4d1694.ssl.cf1.rackcdn.com/RXZ2015121011293841110468_Color_200_2.jpg"
                    }]},
                    "contempo":{
                        bgsrc:'//media.scdn4.secure.raxcdn.com/9/spot/bg/2015/entro_1230-420_20151210105114.jpg',
                        bghref:'/entro',
                        bgsrc2:'//media.scdn4.secure.raxcdn.com/logo/9/logo9_entro.png',
                        gal: [{class:"image-1",
                        "src": "https://9066ac667bf257578696-b2ef9485bc268dfe24570b8214a4ba3b.ssl.cf1.rackcdn.com/IPZ2015121017072468810175_Color_200_0.jpg"
                    }, {class:"image-2",
                        "src": "https://9066ac667bf257578696-b2ef9485bc268dfe24570b8214a4ba3b.ssl.cf1.rackcdn.com/IPZ2015121717002494410175_Color_200_0.jpg"
                    }, {class:"image-3",
                        "src": "https://9066ac667bf257578696-b2ef9485bc268dfe24570b8214a4ba3b.ssl.cf1.rackcdn.com/IPZ2015121716530948010175_Color_200_0.jpg"
                    }, {class:"image-4",
                        "src": "https://9066ac667bf257578696-b2ef9485bc268dfe24570b8214a4ba3b.ssl.cf1.rackcdn.com/IPZ2015120319274524710175_Color_200_0.jpg"
                    }, {class:"image-5",
                        "src": "https://9066ac667bf257578696-b2ef9485bc268dfe24570b8214a4ba3b.ssl.cf1.rackcdn.com/IPZ2015121016143082810175_Color_200D_5.jpg"
                    }]}
                };
                return images[this.tab];
       }
});

Template.tabs.helpers({
    tabs: function() {
        return [
            {label:"ኮንተምፖራሪ", class:"contempo-tab", active:"tab-home-page-active-1"},
            {label:"ምርት", class:"the-edge-tab"},
            {label:"ኤስፒ", class:"sp-tab"}
        ];
    }
});
Template.goalsNav.helpers({
    goals: function() {
        return [
            {ref:"WOMENS MANUFACTURERS",label:"የሰቶች መፍጠር",descr:"Run a mile a day!"},
            {ref:"WOMENS DISTRIBUTORS",label:"የሰቶች ሥርጭት",descr:"Do not drive to work! Bike or take bus/train."},
            {ref:"MEN",label:"የወንዶች ልብስ",descr:"No more coffee!"},
            {ref:"CHILDREN",label:"ልጆች",descr:"Limit facebook usage to 15 minutes per day!"},
/*            {ref:"ACCESSORIES",label:"ቪክቶሪያ ሲክረት",descr:"Read an hour a day!"},*/
            {ref:"HANDBAGS",label:"የእጅ  ቦርሳ",descr:"This one is a bonus. Start cooking!"},
            {ref:"FOOTWEAR",label:"ቻማ",descr:"This one is a bonus. Start cooking!"}
        ];
/*
        return [
            {ref:"WOMENS MANUFACTURERS",label:"WOMENS MANUFACTURERS",descr:"Run a mile a day!"},
            {ref:"WOMENS DISTRIBUTORS",label:"WOMENS DISTRIBUTORS",descr:"Do not drive to work! Bike or take bus/train."},
            {ref:"MEN",label:"MEN",descr:"No more coffee!"},
            {ref:"CHILDREN",label:"CHILDREN",descr:"Limit facebook usage to 15 minutes per day!"},
            {ref:"ACCESSORIES",label:"ACCESSORIES",descr:"Read an hour a day!"},
            {ref:"HANDBAGS",label:"HANDBAGS",descr:"This one is a bonus. Start cooking!"},
            {ref:"FOOTWEAR",label:"FOOTWEAR",descr:"This one is a bonus. Start cooking!"}
        ];
*/
    }
});
Template.weeklyGoals.helpers({
    weeklyGoals: function() {
         return [{label:1},{label:2},{label:3}];
     }
});
Template.dailyGoals.helpers({
    dailyGoals: function() {
        return [{label:1},{label:2},{label:3},{label:4},{label:5},{label:6},{label:7}];
    }
});
Template.goalsNav.rendered = function () {
  $(".flexnav").flexNav();
  initChart();
  return "";
};
