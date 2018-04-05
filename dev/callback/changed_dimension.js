var nowDim = -1;



Callback.addCallback("DimensionLoaded", function(id){
    if(~nowDim){
        api.invokeCriterias("changed_dimension", function(cond){
            return (!cond.from ||cond.from == dimension[nowDim]) && (!cond.to || cond.to == dimension[id]);
        });
    }
    nowDim = id;
});

Callback.addCallback("LevelLoaded", function () {
    nowDim = Player.getDimension();
});

Callback.addCallback("LevelLeft", function () {
    nowDim = -1;
});