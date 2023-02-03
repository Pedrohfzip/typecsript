//funcao que nao retorna valor nenhum

const olaMundo = () => {
    console.log('Ola mundo')
}
olaMundo()

function logError(error: string){
    console.log(error)
}

logError('Erro!')

const erro2 = (error:string) =>{
    console.log(error)
}

erro2('Erroo')