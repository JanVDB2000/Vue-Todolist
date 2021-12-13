app.component('taak-toevoegen',{
    props:{
        aantal: {
            type:Array,
            required:true,
        }
    },
    template:
        `<div class=" col-8 offset-2">
                 <div class="shadow-lg m-4 mx-auto ">
                    <h1 class="text-center p-3">Takenlijst</h1>
                 </div>
            <div class="col-6 offset-3 mx-auto ">
            <form class=" input-group mb-3 "@submit.prevent="onSubmit">
                <input type="text" class="form-control" placeholder="Taak..." aria-label="Recipient's username" aria-describedby="button-addon2" id="taak" v-model="taak">
                <button @click="toevoegenEenTaak" class="btn btn-outline-secondary" type="submit"  id="button-addon2" for="toDotask"><i class="bi bi-plus-square-fill"></i></button>
                <button @click="delAll" class="btn btn-outline-danger" type="button">Delete All</button>
                <span class="input-group-text">Aantal : {{aantal.length}} </span>
            </form>
             </div>
           </div>`,
    data(){
        return{
            taak:'',
        }
    },
    methods:{
        onSubmit(){
            let eenTaakToevoegen = {
                taak: this.taak,
            }
            this.$emit('toevoegenEenTaak',  eenTaakToevoegen)
            this.taak= '';
        },
        delAll(){
            this.$emit('delAll')
        }
    }
})