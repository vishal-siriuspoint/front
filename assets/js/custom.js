 $(document).ready(function () 
 {     

    /***** responsive menu ********/    
    $(document).on("click"," .res_menu .res_icon a",function(e) {
          e.preventDefault();
          $("#slide_bar").addClass("show");
          $("#overplay").addClass("show");
    });

    $('#overplay').on('click', function () {

      $('#slide_bar').removeClass('show');

      $(this).removeClass('show');
    });
      
    $(document).on("click",".left_menu ul li a",function() 
    { 
      if($(this).next('.sub_menu').hasClass('open')){
        $("#slide_bar").addClass("show");
        $("#overplay").addClass("show");
        
      }else{
       
        $('#slide_bar').removeClass('show');
        $("#overplay").removeClass("show");
      }
    });
    $(document).on("click",".slide_close a",function(){
      $('#slide_bar').removeClass('show');

      $("#overplay").removeClass('show');
    });
 

    


    $(document).on("click","#v-pills-tab a",function() {
      $("#v-pills-tabContent").show();
    });
    $(document).on("click","#feedback_close",function() {
      $("#v-pills-tabContent").hide();
    });
     

      $(document).ready(function(){
      $('form input').change(function () {
        $('form .add-img ').text(this.files.length + " file(s) selected");
      });
    });

    // $('.feedback-select2').select2();
    

    // $('#feedback_select').select2({
    //   placeholder: "typing...."
    // });

});


 