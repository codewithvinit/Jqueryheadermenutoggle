jQuery(document).ready(function() {
  // Detech Body click on web page  
  jQuery("body").click(function(event) {
        console.log(event.target);
        if (jQuery(event.target).hasClass('fa-search') || jQuery(event.target).hasClass('search-field')) { // Check Form classes on which not to hide
            jQuery(".search-form-wrap").show();
        } else {
            jQuery(".search-form-wrap").hide();
        }
    });
});
