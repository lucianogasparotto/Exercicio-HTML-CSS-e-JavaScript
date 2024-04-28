function escalarTitulares(){
    const titulares = document.getElementById('titulares')

    const posicao = document.getElementById('posicao').value
    const nomeJogador = document.getElementById('nome').value
    const numeroJogador = document.getElementById('numero').value

    const h4 = document.createElement('h4')
    h4.innerText = posicao + ' - ' + nomeJogador + ' - ' + numeroJogador

    const confirmation = confirm('Adiciona o jogador ' + h4.innerText + ' a lista de titulares?')

    if (confirmation) {
        titulares.append(h4)
    }
    
    document.getElementById('posicao').value = ''
    document.getElementById('nome').value = ''
    document.getElementById('numero').value = ''
}

function removeTitular() {
    const titulares = document.getElementById('titulares')
    const numeroJogador = document.getElementById('remove-jogador').value
    const h4ToRemove = Array.from(titulares.getElementsByTagName('h4')).find(h4 => h4.innerText.includes(numeroJogador))

    const confirmation = confirm('Remover o jogador ' + h4ToRemove.innerText + '?')

    if (confirmation) {
        if (h4ToRemove) {
            titulares.removeChild(h4ToRemove)
        } else {
            alert('Jogador não encontrado')
        }
    }

    document.getElementById('remove-jogador').value = ''
}