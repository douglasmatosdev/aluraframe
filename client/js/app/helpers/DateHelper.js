class DateHelper {
   
    // O constructor é apenas para lançar um erro casso a classe seja instânciada
    constructor() {
        
        throw new Error('DateHelper não pode ser instânciada');
    }

    /**
     *  Os métodos estáticos são para facilitar o uso, evitando que 
     *  tenhamos que instânciar a classe toda vez que quisermos usar
     *  esses métodos.
     */

    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {

        // Expressão que valida o formato da data para ANO-MÊS-DIA.
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) {
            throw new Error('Deve estar no formato aaaa-mm-dd');
        }

        // Note que no return temos um new Date, isso para evitar que a data seja alterada.
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

}