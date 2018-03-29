

//effects_changed
!function(){
    var addEffect = Entity.addEffect;
    Entity.addEffect = function(){
        addEffect.apply(this, arguments);
        if(arguments[0] == Player.get()){
            
        }
    }
}();