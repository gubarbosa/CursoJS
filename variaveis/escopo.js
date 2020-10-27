var nome = "Eduardo"
document.write(nome)
document.write("<br/>")
{
    document.write("Mensagem dentro de um escopo. <br/>")
    var nome = "Eduardo da Silva"
    document.write(nome)
    document.write("<br/>")
}

document.write("Mensagem fora do escopo <br/>")
document.write(nome)