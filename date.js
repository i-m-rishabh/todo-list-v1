
    module.exports.getDate = getDate;
    function getDate(){
       let date = new Date();  
        var options = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            // year: 'numeric'
        }
    var today = date.toLocaleDateString("en-IN", options) 
    return today;
    }
    
    module.exports.getDay = getDay;
    function getDay(){
        let date = new Date();  
        var options = {
            weekday: 'long',
            // day: 'numeric',
            // month: 'long',
            // year: 'numeric'
        }
        var today = date.toLocaleDateString("en-IN", options)
        return today;
    }