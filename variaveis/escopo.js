let nome = "Eduardo"
document.write(nome)
document.write("<br/>")
{
    document.write("Mensagem dentro de um escopo. <br/>")
    let nome = "Eduardo da Silva"
    document.write(nome)
    document.write("<br/>")
}

document.write("Mensagem fora do escopo <br/>")
document.write(nome)