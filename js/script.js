// CHECK
console.log('JS VUE OK', Vue);

// ESTRAPOLO FUNZIONE DA VUE
const {createApp} = Vue;

// CREO VARIBILE E RICHIAMO LA FUNZIONE
const app = createApp ({
    name: 'Carousel',

    // USO DATA CON ALL'INTENRO IL RETURN 
    data() {
        return {
            // DATI 
           date: destinations,
           // INDICE
           currentIndex: 0,
           // CHIAVE PER FARE L'INTERVALLO 
           autoplay: null,
        }
    },

    // INTERAGISCO CON DATA
    computed: {

        // ULTIMO INDICE
        lastElement(){
            return this.date.length -1
        },

        // PRIMO INDICE
        firstElement(){
            return this.currentIndex === 0
        },

        // QUANDO SONO IDENTITICI
        indexElement(){
            return this.currentIndex === this.lastElement
        }
    },

    // METODO FUNZIONI
    methods: {

        // FUNZIONE IMMAGINI
        setIndex (position) {
            // AL BOTTONE NEXT
            if(position === 'next') {
                // SE SEI ALLA FINE RIPORTAMI A INDICE 0
                if(this.indexElement){
                    this.currentIndex = 0;
                }
                // INCREMENTA
                else {
                    this.currentIndex++;
                }
            // AL BOTTONE PREV
            } else {
                // SE SEI ALL'INZIO RIPORTAMI A L'ULTIMO INDECE
                if(this.firstElement) {
                    this.currentIndex = this.lastElement;
                }
                // DECREMENTA
                else {
                    this.currentIndex--;
                }
            }
        },

        // DISATTIVA (STOP) 
        stopAutoplay(){
            clearInterval(this.autoplay)
        },

        // ATTIVA (AVVIO)
        startAutoplay() {
            this.autoplay = setInterval(() => {
                this.setIndex('next')
            },4000);
        },

    },

    // ESEGUI APPENA LA PAGINA SARA' MONTATA
    mounted() {
        // ESEGUI STARTAUTOPLAY
        this.startAutoplay();
    },
})

// COLLEGO ID 
app.mount('#root');