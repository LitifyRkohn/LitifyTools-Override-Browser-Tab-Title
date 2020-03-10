({
    doInit : function(component, event, helper){
        console.log(component.get('v.fieldName'));
        if(component.get('v.fieldName')!=null){
        //get the field name
        var field = component.get('v.fieldName');
            component.set('v.fields',[field]);
        
        //set key for values lookup
        var key = 'v.simpleRecord.'+field;
        
        //use the key to lookup value returned in LDS
        var value = component.get(key);
        
        //set the value to and attribute to be used in your component
       //component.set('v.passThroughValue', value);
            document.title = value;
   }
    }
});