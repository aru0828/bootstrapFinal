$(document).ready(function () {

    
    $('.card-icon i').on("click",function(){
       
      $(this).removeClass('ui-hidden');
      $(this).addClass('ui-show').siblings('i').addClass('ui-hidden').removeClass('ui-show');
        
    })
});
