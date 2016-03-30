({
	showRecordTypeComponent : function(component, event, helper) {
		var rtName = event.getParam("recordTypeName");
        var j$ = jQuery.noConflict();
   j$("#ExpenseWrapper").hide();
            j$("#TypeWrapper").hide();
        j$("#KilometrageWrapper").hide();
        if(rtName == "Kilometrage")
        {
	        j$("#KilometrageWrapper").show();

        }
        if(rtName == "Expense")
        {

	        j$("#ExpenseWrapper").show();
        }
        if(rtName == "")
        {
	        j$("#TypeWrapper").show();

        }
            
        rtName = "";    
    }
    
    
})
