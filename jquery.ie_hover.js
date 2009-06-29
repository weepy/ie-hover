(function($) {
  function fixHover() {
	  
    var hoverRules = []
    for(var i=0; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i]
      var rules = $.browser.msie ? sheet.rules : sheet.cssRules
      for(var j=0; j< rules.length; j++) {
        var rule = rules[j];
        if(rule.selectorText.match(":hover")) {
          setupEvents(rule)
          addRule(sheet, rule, j)
          removeRule(sheet, j+1)
        }
      }
    }
  }
 
  function debug(x) {
	  $("body").append(x).append("<br/>")
  }

  function addRule(sheet, rule, i) {
    if($.browser.msie) {
      var selector = rule.selectorText.replace(":hover", ".iehover", "g")
      sheet.addRule(selector, rule.style.cssText, i)
    } else {
      var s = rule.cssText.replace(":hover", ".iehover", "g")
      sheet.insertRule(s, i)
    }
  }
 
  function removeRule(sheet, i) {
    $.browser.msie ? sheet.removeRule(i) : sheet.deleteRule(i);
  }
 
  function hoverOn() {
    $(this).addClass("iehover")
  }
 
  function hoverOff() {
    $(this).removeClass("iehover")
  }

  function setupEvents(rule) {
    var nohover = rule.selectorText.replace(":hover","")
    $( nohover ).hover(hoverOn, hoverOff)
  }
     
  $.fixIEHover = function(also_fix_non_ie) {
    if($.browser.msie || also_fix_non_ie )
      fixHover()
  }
 
}(jQuery))

