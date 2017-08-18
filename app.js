var _ = require('lodash');
var array = [4,34,7,9,67,32,4];
var object = [{firstname:"Chili", lastname:"Sauce"},
{firstname:"Thanh", lastname:"Tai"},
{firstname:"Chau", lastname:"Man"}];
var rs = _.map(object, function(item){
    //return item * 10;
    item.fullname =`${item.firstname} ${item.lastname}`;
    return item.fullname;
});
console.log(rs);