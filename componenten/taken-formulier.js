app.component('taken-formulier', {
    template: `<taak-toevoegen @toevoegenEenTaak="eenTaakToevoegen"  ></taak-toevoegen>
                <hr>
                <div class="col-lg-6 offset-3 mx-auto">
                <div v-for="(taak,index) in taken" :key="index" class="input-group mb-3">
                <div>
                <div class="input-group mb-3">
                  
                    <div class="input-group-text">
                       <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
                    </div>
                        <input v-model="taak.taak" type="text" class="form-control" aria-label="Text input with checkbox">
                        <button @click="verwijderden" class="btn btn-outline-secondary" type="submit"  id="button-addon2" ><i class="bi bi-trash-fill"></i></button>
                </div>
                </div>
                </div>
               </div>`
    , data() {
        return {
            taken: [],
        }
    }, methods: {
        eenTaakToevoegen(taak) {
            this.taken.push(taak);
        },
        verwijderden(){
            this.taken.slice(1)
        }
    }
})