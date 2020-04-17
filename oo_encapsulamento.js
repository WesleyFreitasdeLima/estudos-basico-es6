class Tv {
    constructor() {
        // Usar _ para indicar que o atributo é privado, de acordo com a convenção
        this._relacaoCanais = Array(2, 4, 5, 7, 10);
        this._canalAtivo = 5;
        this._volume = 30;
    }

    // Getters e Setters
    // Pseudo variaveis
    get canalAtivo() {
        return this._canalAtivo;
    }

    set canalAtivo(value) {
        this._canalAtivo = value;
    }
}

let tv = new Tv();
console.log(tv.canalAtivo);

tv.canalAtivo = 7;
console.log(tv.canalAtivo);