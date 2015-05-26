Meteor.methods({
    "writeToUserThemeFile": function(less) {
        check(less, String);
        var fs = Npm.require("fs");
        var path = "../client";

        fs.readFile(path+"/window-width-variables.less", function(err, data) {
            if(err){
                console.log(err);
            } else {
                console.log(data);
            }
        });
        
        // fs.writeFile(path+"/window-width-variables.less", less, function(err) {
        //     console.log("WRITING FILE");
        //     if (err) {
        //         console.log("ERROR WHEN WRITING", err);
        //     }
        // });
    }
});
