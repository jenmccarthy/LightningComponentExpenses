({

    selectType : function(component, event, helper) {
        var sourceClass = event.source.get("v.class");
        var recordTypeName = "";
        if(sourceClass.indexOf("expense") >= 0)
        {
        	recordTypeName = "Expense";
        }
        else if(sourceClass.indexOf("kilometrage") >= 0)
        {
        	recordTypeName = "Kilometrage";
        }

        var evenRTN = component.getEvent("expenseRecordTypeName");
		evenRTN.setParams({
            recordTypeName: recordTypeName
       }).fire();
    }

})
