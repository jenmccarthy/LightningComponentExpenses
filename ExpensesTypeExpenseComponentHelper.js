({

    
    upsertExpense : function(component, expense, recordt, callback) {
      var action = component.get("c.saveExpense");
        
      action.setParams({ 
          "expense": expense,
          "recordt": recordt
      });
      if (callback) {
          action.setCallback(this, callback);
      }
      $A.enqueueAction(action);
    }
    

})
