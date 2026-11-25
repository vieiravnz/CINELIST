Vue.createApp({
    data() {
        return {
            nomeDigitado: "",
            resultados: [],
            jaBuscou: false,
            favoritos: [],

            filmes: [
                {
                    id: 1,
                    nome: "Duna",
                    ano: 2022,
                    diretor: "Denis Villenueve",
                    streaming: "Max",
                    poster: "img/dunaposter.jpg"
                },

                {
                    id: 2,
                    nome: "Vingadores Ultimato",
                    ano: 2019,
                    diretor: "Anthony Russo e Joe Russo",
                    streaming: "Disney+",
                    poster: "img/vingadoresposter.jpg"
                
                },
                {
                    id: 3,
                    nome: "Interestelar",
                    ano: 2014,
                    diretor: "Christopher Nolan",
                    streaming: "Netflix, Amazon Prime Video, HBO Max, Claro Tv+",
                    poster:"img/interestelarposter.jpg"
                },
                {
                    id: 4,
                    nome: "Clube da Luta",
                    ano: 1999,
                    diretor: "David Fincher",
                    streaming: "Disney+, Netflix, Amazon Prime Video, Paramount+, Claro tv+, Telecine",
                    poster: "img/clubedalutaposter.jpg"
                }
            ]
        };
    },

    methods: {
        buscarFilme() {
            const texto = this.nomeDigitado.trim().toLowerCase();
            this.resultados = this.filmes.filter(function(filme) {
                return filme.nome.toLowerCase().includes(texto);
            });

            this.jaBuscou = true;
        },

        favoritar(filme) {
            if (this.estaNosFavoritos(filme.id)) {
                return;
            }

            this.favoritos.push({
                id: filme.id,
                nome: filme.nome,
                ano: filme.ano,
                diretor: filme.diretor,
                streaming: filme.streaming,
                poster: filme.poster,
                editando: false
            });
        },

        estaNosFavoritos(id) {
            return this.favoritos.some (function (fav) {
                return fav.id === id;
            });
        },

        removerFavorito(id) {
            this.favoritos = this.favoritos.filter (function(fav) {
                return fav.id !== id;
            });
        }
    }
}).mount("#app");