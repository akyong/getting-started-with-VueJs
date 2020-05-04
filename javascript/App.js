

const abc = new Vue({
    el:"#app",
    data: function() {
        return{
            name: "@Bobby Akyong",
            flags: false,
            favFoods: [
                "Sea Food","Hot Dog","Hamburger"
            ],
            whos: "",
            myfavoritefood: "",
            pocFavFoods: [],
            index: 0
        }
    },
    methods: {
        changeName: function () {
            this.name = this.name === "Bobby" ? "Akyong" : "Bobby";
        },
        changeFlags: function () {
            this.flags = !this.flags;
        },
        addToFavFoods: function () {
            if(this.myfavoritefood !== ""){
                this.pocFavFoods.push({id: this.index++, name: this.myfavoritefood});
            }
            else{
                alert("please fill the Food.");
            }
            this.myfavoritefood = "";
        },
        removefood: function (index) {
            this.pocFavFoods.splice(index,1);
        }
    },
    computed:{
        resultOfVmodel: function () {
            return this.whos.length > 1 ? '"You love '+this.whos+ '"': ""
        },
        // readJs: function () {
        //     const lines = this.jsku.split('\n');
        //     for(var line = 0; line < lines.length; line++){
        //         this.jsku += lines[line];
        //         console.log(lines[line]);
        //     }
        // }
    },
    components:{
        // 'my-button': button
    }
});
