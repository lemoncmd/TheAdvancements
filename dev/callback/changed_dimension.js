var nowDim = -1;



Callback.addCallback("DimensionLoaded", function(id){
    if(dimension[id]){
        if(~nowDim){
            api.invokeCriterias("changed_dimension", function(cond){
                return (!cond.from || cond.from == dimension[nowDim]) && (!cond.to || cond.to == dimension[id]);
            });
        }
        nowDim = dimension[id];
    }
});

Callback.addCallback("LevelLeft", function () {
    nowDim = -1;
});