const nomes = new Array("Papapimbax", "Cleber", "Joseph")

class Pessoa {
    Buscar () {
        return nomes
    }

    BuscarUm (id) {
        return nomes[id]
    }

    Criar (nome) {
        nomes.push(nome)
    }

    Alterar (id, nome) {
        nomes[id] = nome
    }

    Delete (id) {
        nomes.splice(id, 1)
    }
}

export default new Pessoa()