$(function(){
  var $container = $('#container');
  
  // Masonry : Initialize
  $container.masonry({
    itemSelector: '.dashboard__box'
  });
  
  // Masonry : Remove
  $('.dashboard__boxes').on('click', '.dashboard__box__close', function(e){
    e.preventDefault();
    $(this).closest('.dashboard__box').fadeOut();
    $container.masonry('remove', $(this).parents('.dashboard__box'));
    $container.masonry();
  });
  
  // Tabs
  $('.nav--tabs').on('click', 'a[data-tab-index]', function(e){
    e.preventDefault();
    var $this = $(this),
                tabId = $this.data('tab-index'),
                tab = $('.js-tabs').find('#'+tabId),
                classActive = 'is-active';
    $this.addClass(classActive).siblings().removeClass(classActive);
    tab.siblings().hide().end().fadeIn('fast');
  });
  
  /********************
   * Pour ajouter une marge en haut sur le chevron des select
   * En jquery parce que je n'ai pas réussi à le faire uniquement en css
   * Fonction globale
   ********************/
  var setSelectIconMargin = function(id, id_icon) {
    var marge = (($(id).height() - $(id_icon).height()) / 2) + 3;
    $(id_icon).css("margin-top", marge + "px");
  };
  
  /**********
   * Page de commande de chéquiers
   **********/
  $('#number_check').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
    setSelectIconMargin('#number_check', '#id-i-check-number');
  });
    
  $('#account_check').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
    setSelectIconMargin('#account_check', '#id-i-check-account');
  });
  
  $('#format_check').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
    setSelectIconMargin('#format_check', '#id-i-check-type');
  });
  
  /**********
   * Page des virements
   **********/
  $('#dw_lbl_debit_account').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
    setSelectIconMargin('#dw_lbl_debit_account', '#id-i-debit-account');
  });
  
  $('#dw_lbl_credit_beneficiary').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
    setSelectIconMargin('#dw_lbl_credit_beneficiary', '#id-i-credit-beneficiary');
  });
  
  $('#dw_lbl_credit_account').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
    setSelectIconMargin('#dw_lbl_credit_account', '#id-i-credit-account');
  });
  
  $('#dw_lbl_currency').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
    setSelectIconMargin('#dw_lbl_currency', '#id-i-currency');
  });
  
  /**********
   * Page des bénéficiaires
   **********/
  $('#dw_lbl_bank').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
    setSelectIconMargin('#dw_lbl_bank', '#id-i-beneficiary-bank');
  });
  
  $('#dw_lbl_currency').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
    setSelectIconMargin('#dw_lbl_currency', '#id-i-beneficiary-currency');
  });
  
  /**********
   * Page des ribs
   **********/
  $('#dw_lbl_account_to_edit').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
    setSelectIconMargin('#dw_lbl_account_to_edit', '#id-i-rib-account');
  });
  
  /********************
   *  Chargement de la page
   ********************/
  $(window).load(function() {
    /**********
     * Lors du rechargement des pages, on remet le chevron au milieu de la zone de sélection
     * Tjs pas terrible ... si qq1 arrive a le faire que en css suis prenneur
     **********/
    
    // Contre valorisation
    if ($("#currency_change").length == 1) {
      setSelectIconMargin('#currency_change', '#id-i-change-currency');
    }
    
    // Commande de chéquiers
    if ($("#number_check").length == 1) {
      setSelectIconMargin('#number_check', '#id-i-check-number');
    }
    
    if ($("#account_check").length == 1) {
      setSelectIconMargin('#account_check', '#id-i-check-account');
    }
    
    if ($("#format_check").length == 1) {
      setSelectIconMargin('#format_check', '#id-i-check-type');
    }
    
    // Virements
    if ($("#dw_lbl_debit_account").length == 1) {
      setSelectIconMargin('#dw_lbl_debit_account', '#id-i-debit-account');
    }
    
    if ($("#dw_lbl_credit_beneficiary").length == 1) {
      setSelectIconMargin('#dw_lbl_credit_beneficiary', '#id-i-credit-beneficiary');
    }
    
    if ($("#dw_lbl_credit_account").length == 1) {
      setSelectIconMargin('#dw_lbl_credit_account', '#id-i-credit-account');
    }
    
    if ($("#dw_lbl_currency").length == 1) {
      setSelectIconMargin('#dw_lbl_currency', '#id-i-currency');
    }
    
    // Bénéficiaires
    if ($("#dw_lbl_bank").length == 1) {
      setSelectIconMargin('#dw_lbl_bank', '#id-i-beneficiary-bank');
    }
    
    if ($("#dw_lbl_currency").length == 1) {
      setSelectIconMargin('#dw_lbl_currency', '#id-i-beneficiary-currency');
    }
    
    // ribs
    if ($("#dw_lbl_account_to_edit").length == 1) {
      setSelectIconMargin('#dw_lbl_account_to_edit', '#id-i-rib-account');
    }
  })
  
  /**
   * Permet d'afficher et de cacher les évènements et les détails pour les remises
   */
  var showHideEventDetails = function(id) {
    if ($(id + "-list").css( "display") == "block") {
      $(id + "-list").css('display', "none");
      $(id + "-icon").addClass("icon-angle-circled-right").removeClass("icon-angle-circled-down");
    }
    else {
      $(id + "-list").css('display', "block");
      $(id + "-icon").addClass("icon-angle-circled-down").removeClass("icon-angle-circled-right");
    }
  };
  
  $("#id-transfer-payment-details-event").click(function(){
    showHideEventDetails("#id-transfer-payment-details-event");
  });
  
  $("#id-transfer-payment-details-alldetails").click(function(){
    showHideEventDetails("#id-transfer-payment-details-alldetails");
  });
});

// Modal window
$(document).foundation();
