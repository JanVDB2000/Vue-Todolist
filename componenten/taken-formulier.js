app.component('taken-formulier', {
    template: `<taak-toevoegen @toevoegenEenTaak="eenTaakToevoegen" @delAll="verwijderlijst" :aantal="checkboxlijst"></taak-toevoegen>
                <hr>
                <div class="col-lg-6 offset-3 mx-auto">
                <div v-for="(taak,index) in taken" :key="index" class="input-group mb-3 w-100">
                <div>
                <div class="input-group mb-3">
                  
                    <div class="input-group-text">
                       <input @click="checkb(index)" class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
                    </div>
                        <input v-model="taak.taak" type="text" class="form-control" :class="{ 'text-decoration-line-through': checkboxlijst[index] }" aria-label="Text input with checkbox">
                        <button @click="verwijderden(index)" class="btn btn-outline-secondary" type="submit"  id="button-addon2" ><i class="bi bi-trash-fill"></i></button>
                </div>
                </div>
                </div>
               </div>`
    , data() {
        return {
            taken: [],
            checkboxlijst: [],
            isActive: false,
        }
    }, methods: {
        eenTaakToevoegen(taak) {
            this.taken.push(taak);
            this.checkboxlijst.push(this.isActive );
        },
        verwijderden(index){
            this.taken.splice(index,1);
            this.checkboxlijst.splice(index,1);
        },
        verwijderlijst(){
            this.taken = [];
            this.checkboxlijst = [];
        },
        checkb(index){
            if (this.checkboxlijst[index] === false){
                this.checkboxlijst[index] = true
            } else{
                this.checkboxlijst[index] = false
            }

        }
    }
})