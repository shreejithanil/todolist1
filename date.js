	
exports.getdate = getdate;
function getdate() {
	var today=new Date();
	var options={
		weekday:"long",
    	year:"numeric",
    	day:"numeric",
    	month:"long"
    }
    var day=today.toLocaleDateString("en-US",options);
    return day;


}
exports.getday = getday;

function getday() {
    var today=new Date();
    var options={
        weekday:"long"
    }
    var day=today.toLocaleDateString("en-US",options);
    return day;


}
	