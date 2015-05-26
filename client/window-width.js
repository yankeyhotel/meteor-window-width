
// set colors
var xs_color = yankeyhotelWW.settings.color.xs || "#c0392b",
    sm_color = yankeyhotelWW.settings.color.sm || "#e67e22",
    md_color = yankeyhotelWW.settings.color.md || "#f1c40f",
    lg_color = yankeyhotelWW.settings.color.lg || "#27ae60",
    xl_color = yankeyhotelWW.settings.color.xl || "#2980b9";

// set widths
var xs_width = yankeyhotelWW.settings.widths.xs || "480px",
    sm_width = yankeyhotelWW.settings.widths.sm || "768px",
    md_width = yankeyhotelWW.settings.widths.md || "992px",
    lg_width = yankeyhotelWW.settings.widths.lg || "1200px";

var str = "\
// colors for breaks \
@xs-color: "+ xs_color +";\
@sm-color: "+ sm_color +";\
@md-color: "+ md_color +";\
@lg-color: "+ lg_color +";\
@xl-color: "+ xl_color +";\
// px widths for breaks \
@xs-width: "+ xs_width +";\
@sm-width: "+ sm_width +";\
@md-width: "+ md_width +";\
@lg-width: "+ lg_width +";\
";

Meteor.call("writeToUserThemeFile", str);

$(document).ready(function(){

    function whatWidth() {

        var placement = yankeyhotelWW.settings.placement || "bottom-left";

    	if (!$("#window-width").length) {
    		$("body").append('<div id="window-width" class="'+placement+'"><p><strong><span class="pixels">100</span>px</strong> </p></div>');
    	}

        var width = $(window).width();
    	$("#window-width .pixels").text(width);

    }

    whatWidth();

    $(window).resize(whatWidth);

});
