// CHECK
console.log('JS VUE OK', Vue);


/* ESTRAPOLO FUNZIONE DA VUE */
const { createApp } = Vue;


/* CREO VARIBILE E RICHIAMO LA FUNZIONE */
const app = createApp({


    /* NOME PAGINA */
    name: 'Carousel',


    /* DATI DI BASE DA UTILIZZARE */
    data() {
        return {


            /* DATI ARRAY */
            date: destinations,


            /* INDICE DA INCREMENTARE */
            currentIndex: 0,



            /* AUTOPLAY IMMAGINI */
            autoplay: null,

        }

    },


    /* UTILIZZO LA FUNZIONE COMPUTED PER INTERAGINRE CON LA FUNZIONE DATA */
    computed: {


        /* CREO UN METODO CHE RESTITUISCE INDICE DELL'ULTIMO ELEMENTO */
        lastElement() {
            return this.date.length - 1
        },


        /* CREO UN METODO CHE MI RESTITUISCE TRUE SE IL CURRENTINDEX(INDICE) E' INDENTO A 0 */
        firstElement() {
            return this.currentIndex === 0
        },


        /* CREO UN METODO CHE MI RESTITUISCE TRUE SE INDICE DI CURRENNTINDEX E' INDENTICO AL METODO CHE MI RESTITUISCE INDICE DELL'ULTIMO ELEMENTO */
        indexElement() {
            return this.currentIndex === this.lastElement
        }
    },


    /* CREO FUNZIONI */
    methods: {


        /* CREO UNA FUNZIONE PER PASSARGLI COME ARGOMENTO QUALE BOTTONE L'UTENTE CLICCA (PREV/NEXT) */
        setIndex(position) {


            /* SE COME ARGOMENTO PASSATO AL CLICK DEL BOTTONE E' IDENTCO A NEXT */
            if (position === 'next') {


                /* SE CURRENTINDEX E' INDENTICO ALL'INDICE DELL'ULTIMO ELEMENTO */
                if (this.indexElement) {


                    /* RIPORTA INDICE DI CURRENTINDEX A 0 */
                    this.currentIndex = 0;

                    /* ALTRIMENTI */
                } else {


                    /* INCREMENTALO */
                    this.currentIndex++;

                }


                /* ALTRIMENTI AL CLICK SUL BOTTONE PREV */
            } else {


                /* SE CURRENTINDEX E' 0 */
                if (this.firstElement) {


                    /* RIASSEGNO CURRENTINDEX ALL'INDICE DELL'ULTIMO ELEMENTO  */
                    this.currentIndex = this.lastElement;


                    /* ALTRIMENTI */
                } else {


                    /* DECREMENTA */
                    this.currentIndex--;
                }
            }
        },

        /* DISATTIVA (STOP) */
        stopAutoplay() {
            clearInterval(this.autoplay)
        },

        /* ATTIVA (AVVIO) */
        startAutoplay() {
            this.autoplay = setInterval(() => {
                this.setIndex('next')
            }, 4000);
        },

    },

    /* USO IL METDO MOUNT PER ESEGUIRE UN AZIONE APPENA LA PAGINA SARA' MONTATA */
    mounted() {


        /* ESEGUI STARTAUTOPLAY */
        this.startAutoplay();
    },
})

// COLLEGO ID 
app.mount('#root');