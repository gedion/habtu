Template.menuNav.helpers({
    items: function() {
        return [
            {ref:"WOMENS MANUFACTURERS",label:"የሰቶች መፍጠር",descr:"Run a mile a day!"},
            {ref:"WOMENS DISTRIBUTORS",label:"የሰቶች ሥርጭት",descr:"Do not drive to work! Bike or take bus/train."},
            {ref:"MEN",label:"የወንዶች ልብስ",descr:"No more coffee!"},
            {ref:"CHILDREN",label:"ልጆች",descr:"Limit facebook usage to 15 minutes per day!"},
/*            {ref:"ACCESSORIES",label:"ቪክቶሪያ ሲክረት",descr:"Read an hour a day!"}, */
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
Template.menuItems.helpers({
    menuItem: function() {
         return "Hello World";
     }
});

Template.menuNav.rendered = function () {
  $(".flexnav").flexNav();
  return "";
};
