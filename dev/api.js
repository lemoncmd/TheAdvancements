var api = {
    advancement:{},
    parentSorted:{},
    criterias:{},
    registerAdvancement:function(){
        
    },
    loadAdvancementsFromFile:function(zip, isImportedFromPC){
        
    },
    invokeCriterias:function(trigger, contidionFunc){
        if(!(this.criterias[trigger] instanceof Array))return;
        for(var i = 0; i < this.criterias[trigger].length; i++){
            var parentName = this.criterias[trigger][i].parent;
            var name = this.criterias[trigger][i].name;
            
            if(!progress[parentName])this.createProgressFromAdvancement(parentName);
            if(!progress[parentName].criteria[name] && conditionFunc(this.criterias[trigger][i].conditions)){
                progress[parentName].criteria[name] = true;
                progress[parentName].count++;
                if(progress[parentName].count == progress[parentName].amount){
                    if(this.advancement[parentName].display.show_toast)this.showToast(); //set show_toast true.
                    if(this.advancement[parentName].display.announce_to_chat)this.announceToChat(); //set an~ true.
                }
            }
        }
    },
    registerDimensionName:function(id, name){
        if(dimension)dimension[id] = name;
    },
    createProgressFromAdvancement:function(id){
        progress[id] = {count:0, amount:0, criteria:{}};
        for(var i in this.advancement[id].criteria){
            progress[id].criteria[i] = false;
            progress[id].amount++;
        }
    }
}

var progress = {};

Saver.addScopeSaver("advancements",{
    save:function(){
        return progress;
    },
    read:function(obj){
        progress = obj;
    }
});

var dimension = [
    "overworld",
    "the_nether",
    "the_end"
];