Meteor.startup(function() {
    var content = Content.findOne();
    if(content == null) {
       var  contents = [
                    {note: 'Tab one',   tag: 'main-tab-one',   noteAmharic:'ገጵ እንድ'},
                    {note: 'Tab two', tag: 'main-tab-two',   noteAmharic:'ገጵ ሁለት'},
                    {note: 'Tab three',  tag: 'main-tab-three', noteAmharic:'ገጵ ሶስት'},

                    {note: 'What\'s new?', tag: 'whats-new-from-header',noteAmharic:'ምን እዲስ ነገር እለ?'},
                    {note: 'Buy factory direct! Find the lowest prices on wholesale apparel by shopping straight from the manufacturer.', tag: 'whats-new-from-body',noteAmharic:'ምን እዲስ እለ'},

                    {note: 'Header 0', tag: 'mod-0-header', noteAmharic:'ራስ 0'},
                    {note: 'Header 1', tag: 'mod-1-header', noteAmharic:'ራስ 1'},
                    {note: 'Header 2', tag: 'mod-2-header', noteAmharic:'ራስ 2'},
                    {note: 'Header 3', tag: 'mod-3-header', noteAmharic:'ራስ 3'},
                    {note: 'On Sale!', tag: 'mod-stockg-header', noteAmharic:'ቅናሽ ላይ'},
                    {note: 'Rewards!', tag: 'mod-rewards-header', noteAmharic:'ሽልማት'},
                    {note: 'Newest!', tag: 'mod-newest-header', noteAmharic:'አዲስ'},
                    {note: 'Featuring!', tag: 'mod-featuring-body', noteAmharic:'ምርጥ'},
                    {note: 'Body 0', tag: 'mod-0-body', noteAmharic:'አካል 0'},
                    {note: 'Body 1', tag: 'mod-1-body', noteAmharic:'አካል 1'},
                    {note: 'Body 2', tag: 'mod-2-body', noteAmharic:'አካል 2'},
                    {note: 'Body 3', tag: 'mod-3-body', noteAmharic:'አካል 3'},
                    {note: 'Body 4', tag: 'mod-stockg-body', noteAmharic:'አካል 4'},
                    {note: 'Body 5', tag: 'mod-newest-body', noteAmharic:'አካል 5'},
                    {note: 'Get Rewards', tag: 'mod-rewards-body', noteAmharic:'ሽልማት አግኝ'},
                    {note: 'Footer 0', tag: 'mod-0-footer', noteAmharic:'እግር 0'},
                    {note: 'Footer 1', tag: 'mod-1-footer', noteAmharic:'እግር 1'},
                    {note: 'Footer 2', tag: 'mod-2-footer', noteAmharic:'እግር 2'},
                    {note: 'Footer 3', tag: 'mod-3-footer', noteAmharic:'እግር 3'},
                    {tag:'menu-labels-one', ref:"WOMENS",'noteAmharic':'ሴቶች',note:"WOMENS"},
                    {tag:'menu-labels-two', ref:"MEN",'noteAmharic':'ወንዶች',note:"MEN"},
                    {tag:'menu-labels-four', ref:"CHILDREN",'noteAmharic':'ልጆች',note:"CHILDREN"},
                    {tag:'menu-labels-five', ref:"ACCESSORIES",'noteAmharic':'ጌጣ ጌጥ',note:"ACCESSORIES"},
                    {tag:'menu-labels-six', ref:"HANDBAGS",'noteAmharic':'ቦርሳ',note:"HANDBAGS"},
                    {tag:'menu-labels-seven', ref:"FOOTWEAR",'noteAmharic':'ጫማ',note:"FOOTWEAR"},
                    {tag:'contempoWhatsNewBody',note:"What's new from tab 1", noteAmharic :"ምን እዲስ ገጵ 1" },
                    {tag:'theEdgeWhatsNewBody', note:"What's new from tab 2", noteAmharic :"ምን እዲስ ገጵ 2"  },
                    {tag:'spWhatsNewBody', note:"What's new from tab 3", noteAmharic :"ምን እዲስ ገጵ 3" }
        ];

        for(var i = 0;i< contents.length;i++){
            Content.insert(contents[i]);
        }
    }
    if (Galleries.findOne() === undefined) {
        gals = [
            {type:'newestMembers', src:"http://placehold.it/178x106", sortorder:1},
            {type:'newestMembers', src:"http://placehold.it/178x106", sortorder:2},
            {type:'newestMembers', src:"http://placehold.it/178x106", sortorder:3},
            {type:'newestMembers', src:"http://placehold.it/178x106", sortorder:4},
            {type:'newestMembers', src:"http://placehold.it/178x106", sortorder:5},
            {type:'newestMembers', src:"http://placehold.it/178x106", sortorder:6},
            {type:'newestMembers', src:"http://placehold.it/178x106", sortorder:7},
            {type:'newestMembers', src:"http://placehold.it/178x106", sortorder:8},
            {type:'rewards', src:"http://placehold.it/178x106", sortorder:1},
            {type:'rewards', src:"http://placehold.it/178x106", sortorder:2},
            {type:'rewards', src:"http://placehold.it/178x106", sortorder:3},
            {type:'rewards', src:"http://placehold.it/178x106", sortorder:4},
            {type:'rewards', src:"http://placehold.it/178x106", sortorder:5},
            {type:'rewards', src:"http://placehold.it/178x106", sortorder:6},
            {type:'rewards', src:"http://placehold.it/178x106", sortorder:7},
            {type:'stockGuar', src:"http://placehold.it/178x106", sortorder:1},
            {type:'stockGuar', src:"http://placehold.it/178x106", sortorder:2},
            {type:'stockGuar', src:"http://placehold.it/178x106", sortorder:3},
            {type:'stockGuar', src:"http://placehold.it/178x106", sortorder:4},
            {type:'stockGuar', src:"http://placehold.it/178x106", sortorder:5},
            {type:'stockGuar', src:"http://placehold.it/178x106", sortorder:6},
            {type:'stockGuar', src:"http://placehold.it/178x106", sortorder:7},
            {type:'galleryFreshPicksTop', src:"http://placehold.it/100x165", sortorder:1},
            {type:'galleryFreshPicksTop', src:"http://placehold.it/100x165", sortorder:2},
            {type:'galleryFreshPicksTop', src:"http://placehold.it/100x165", sortorder:3},
            {type:'galleryFreshPicksBottom', src:"http://placehold.it/100x165", sortorder:1},
            {type:'galleryFreshPicksBottom', src:"http://placehold.it/100x165", sortorder:2},
            {type:'galleryFreshPicksBottom', src:"http://placehold.it/100x165", sortorder:3},
            {type:'galleryLatestTrends', src:"http://placehold.it/150x225", sortorder:1},
            {type:'galleryLatestTrends', src:"http://placehold.it/150x225", sortorder:2},
            {type:'galleryLatestTrends', src:"http://placehold.it/150x225", sortorder:3},
            {type:'galleryLatestTrends', src:"http://placehold.it/150x225", sortorder:4},
            {type:'wholesale', src:"http://placehold.it/150x225", sortorder:1},
            {type:'wholesale', src:"http://placehold.it/150x225", sortorder:2},
            {type:'wholesale', src:"http://placehold.it/150x225", sortorder:3},
            {type:'wholesale', src:"http://placehold.it/150x225", sortorder:4},
            {type:'newestMembersGallery', src:"http://placehold.it/150x225", sortorder:1},
            {type:'newestMembersGallery', src:"http://placehold.it/150x225", sortorder:2},
            {type:'newestMembersGallery', src:"http://placehold.it/150x225", sortorder:3},
            {type:'newestMembersGallery', src:"http://placehold.it/150x225", sortorder:4},
            {type:'newestMembersGallery', src:"http://placehold.it/150x225", sortorder:5},
            {type:'newestMembersGallery', src:"http://placehold.it/150x225", sortorder:6},
            {type:'newestMembersGallery', src:"http://placehold.it/150x225", sortorder:7},
            {type:'newestMembersGallery', src:"http://placehold.it/150x225", sortorder:8},
            {type:'vOfTheDay', src:"http://placehold.it/200x300", sortorder:1},
            {type:'vOfTheDay', src:"http://placehold.it/200x300/ff1", sortorder:2},
            {type:'vOfTheDay', src:"http://placehold.it/150x225/f43", sortorder:3},
            {type:'vOfTheDay', src:"http://placehold.it/100x150/ff0", sortorder:4},
            {type:'contempo', tab:-1, src: "http://placehold.it/150x220", sortorder:1},
            {type:'contempo', tab:-1, src: "http://placehold.it/150x220", sortorder:2},
            {type:'contempo', tab:-1, src: "http://placehold.it/150x220", sortorder:3},
            {type:'contempo', tab:-1, src: "http://placehold.it/150x220", sortorder:4},
            {type:'contempo', tab:-1, src: "http://placehold.it/150x220", sortorder:5},
            {type:'contempo', tab:0, src: "http://placehold.it/150x220", sortorder:1},
            {type:'contempo', tab:0, src: "http://placehold.it/150x220", sortorder:2},
            {type:'contempo', tab:0, src: "http://placehold.it/150x220", sortorder:3},
            {type:'contempo', tab:0, src: "http://placehold.it/150x220", sortorder:4},
            {type:'contempo', tab:0, src: "http://placehold.it/150x220", sortorder:5},
            {type:'contempo', tab:1, src: "http://placehold.it/150x220", sortorder:1},
            {type:'contempo', tab:1, src: "http://placehold.it/150x220", sortorder:2},
            {type:'contempo', tab:1, src: "http://placehold.it/150x220", sortorder:3},
            {type:'contempo', tab:1, src: "http://placehold.it/150x220", sortorder:4},
            {type:'contempo', tab:1, src: "http://placehold.it/150x220", sortorder:5},
            {type:'contempo', tab:2, src: "http://placehold.it/150x220", sortorder:1},
            {type:'contempo', tab:2, src: "http://placehold.it/150x220", sortorder:2},
            {type:'contempo', tab:2, src: "http://placehold.it/150x220", sortorder:3},
            {type:'contempo', tab:2, src: "http://placehold.it/150x220", sortorder:4},
            {type:'contempo', tab:2, src: "http://placehold.it/150x220", sortorder:5},
            {type:'contempo', tab:3, src: "http://placehold.it/150x220", sortorder:1},
            {type:'contempo', tab:3, src: "http://placehold.it/150x220", sortorder:2},
            {type:'contempo', tab:3, src: "http://placehold.it/150x220", sortorder:3},
            {type:'contempo', tab:3, src: "http://placehold.it/150x220", sortorder:4},
            {type:'contempo', tab:3, src: "http://placehold.it/150x220", sortorder:5},
            {type:'theEdge', tab:-1, src: "http://placehold.it/150x220", sortorder:1},
            {type:'theEdge', tab:-1, src: "http://placehold.it/150x220", sortorder:2},
            {type:'theEdge', tab:-1, src: "http://placehold.it/150x220", sortorder:3},
            {type:'theEdge', tab:-1, src: "http://placehold.it/150x220", sortorder:4},
            {type:'theEdge', tab:-1, src: "http://placehold.it/150x220", sortorder:5},
            {type:'theEdge', tab:0, src: "http://placehold.it/150x220", sortorder:1},
            {type:'theEdge', tab:0, src: "http://placehold.it/150x220", sortorder:2},
            {type:'theEdge', tab:0, src: "http://placehold.it/150x220", sortorder:3},
            {type:'theEdge', tab:0, src: "http://placehold.it/150x220", sortorder:4},
            {type:'theEdge', tab:0, src: "http://placehold.it/150x220", sortorder:5},
            {type:'theEdge', tab:1, src: "http://placehold.it/150x220", sortorder:1},
            {type:'theEdge', tab:1, src: "http://placehold.it/150x220", sortorder:2},
            {type:'theEdge', tab:1, src: "http://placehold.it/150x220", sortorder:3},
            {type:'theEdge', tab:1, src: "http://placehold.it/150x220", sortorder:4},
            {type:'theEdge', tab:1, src: "http://placehold.it/150x220", sortorder:5},
            {type:'sp', tab:-1, src: "http://placehold.it/150x220", sortorder:2},
            {type:'sp', tab:-1, src: "http://placehold.it/150x220", sortorder:3},
            {type:'sp', tab:-1, src: "http://placehold.it/150x220", sortorder:4},
            {type:'sp', tab:-1, src: "http://placehold.it/150x220", sortorder:5},
            {type:'sp', tab:-1, src: "http://placehold.it/150x220", sortorder:1},
            {type:'sp', tab:0, src: "http://placehold.it/150x220", sortorder:1},
            {type:'sp', tab:0, src: "http://placehold.it/150x220", sortorder:2},
            {type:'sp', tab:0, src: "http://placehold.it/150x220", sortorder:3},
            {type:'sp', tab:0, src: "http://placehold.it/150x220", sortorder:4},
            {type:'sp', tab:0, src: "http://placehold.it/150x220", sortorder:5},
            {type:'mod-rewards-logo', tab:0, src: "http://placehold.it/100x80", sortorder:1},
            {type:'newest-member-logo', tab:0, src: "http://placehold.it/230x30", sortorder:1},
            {
             type:'theEdgeWhatsNew',
             bodyTag:'theEdgeWhatsNewBody',
             tab:0,
             newFromLabel:"The Edge",
             newFromLogo: 'http://placehold.it/240x60',
             bgsrc: '//media.scdn4.secure.raxcdn.com/10/edge_right_3.jpg',
             bgsrc2: '//media.scdn4.secure.raxcdn.com/logo/9/logo9_mitto.png',
             sortorder:1
            },
            {
             type:'theEdgeWhatsNew',
             bodyTag:'theEdgeWhatsNewBody',
             tab:1,
             newFromLabel:"The Edge",
             newFromLogo: 'http://placehold.it/240x60',
             bgsrc: '//media.scdn4.secure.raxcdn.com/10/edge_right_2.jpg',
             bgsrc2: '//media.scdn4.secure.raxcdn.com/logo/9/logo9_mitto.png',
             sortorder:2
            },
            {
             type:'spWhatsNew',
             bodyTag:'spWhatsNewBody',
             type:'spWhatsNew',
             tab:0,
             newFromLabel:"SP",
             newFromLogo: 'http://placehold.it/240x60',
             bgsrc: '//media.scdn4.secure.raxcdn.com/9/spot/bg/2015/julia_1230-420_20151211115802.jpg',
             bgsrc2: '//media.scdn4.secure.raxcdn.com/logo/9/logo9_julia.png',
             sortorder:1
            },
            {
                 type:'contempoWhatsNew',
                 bodyTag:'contempoWhatsNewBody',
                 tab:0,
                 newFromLabel:"Boom Boom",
                 newFromLogo: 'http://placehold.it/240x60',
                 bgsrc: '//media.scdn4.secure.raxcdn.com/9/spot/bg/2015/iris_1230-420_20151224115323.jpg',
                 bgsrc2: '//media.scdn4.secure.raxcdn.com/logo/9/logo9_entro.png',
            },{
                 type:'contempoWhatsNew',
                 bodyTag:'contempoWhatsNewBody',
                 tab:1,
                 newFromLabel:"Boom Boom",
                 newFromLogo: 'http://placehold.it/240x60',
                 bgsrc: '//media.scdn4.secure.raxcdn.com/9/spot/bg/2015/koriamerica_1230-420_20151224120211.jpg',
                 bghref: '/entro',
                 bgsrc2: '//media.scdn4.secure.raxcdn.com/logo/9/logo9_entro.png',
            },{
                 type:'contempoWhatsNew',
                 bodyTag:'contempoWhatsNewBody',
                 tab:2,
                 newFromLabel:"Boom Boom",
                 newFromLogo: 'http://placehold.it/240x60',
                 bgsrc: '//media.scdn4.secure.raxcdn.com/9/spot/bg/2015/minxapparel_1230-420_20151224115157.jpg',
                 bgsrc2: '//media.scdn4.secure.raxcdn.com/logo/9/logo9_entro.png',
            },{
                 type:'contempoWhatsNew',
                 bodyTag:'contempoWhatsNewBody',
                 tab:3,
                 newFromLabel:"Boom Boom",
                 newFromLogo: 'http://placehold.it/240x60',
                 bgsrc: '//media.scdn4.secure.raxcdn.com/9/spot/bg/2015/hemandthread_1230-420_20151224123700.jpg',
                 bgsrc2: '//media.scdn4.secure.raxcdn.com/logo/9/logo9_entro.png',
            }
        ];
        for(var i = 0;i<gals.length;i++){
           Galleries.insert(gals[i]);
        }
    }
});
