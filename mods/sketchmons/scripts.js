exports.BattleScripts = {
        init: function() {
                for (var i in this.data.Learnset) {
                        this.data.Learnsets[i].learnset.sketch = ["5E"];
                }
        }
};