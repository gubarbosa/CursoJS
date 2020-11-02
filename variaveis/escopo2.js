let nome = "Eduardo"
document.write(nome)
document.write('<br/>')

{
    let nomeCompleto = "Eduardo da Silva"
    document.write('Dentro do escopo:')
    document.write(nomeCompleto)
    document.write('<br/>')
}

document.write('Fora do escopo: ')
document.write(nomeCompleto)
document.write("<br/>")