let readlineSync = require('readline-sync')



interface User{
    nome: string
    senha: string | number
    numero: number
    saldo: number
}
function criaUser(): User{
    let nome: string = readlineSync.question('Digite o seu nome -> ')
    let senha: string | number = readlineSync.question('Digite a senha -> ')
    let numero: number = Math.floor(Math.random() * 1000) + 1
    let saldo = 0
    const user: User = {
        nome,
        senha,
        numero,
        saldo
    }

    return user
}
let usuarios: User[] = []

function mostraUser(){
    if(usuarios == null){
        console.log('Esta vazio')
    }
    for(let i = 0;i < usuarios.length; i++){
        console.log(...usuarios)    
    }
}

function fazerLogin(nome: string, senha: string | number){
    for(let i = 0;i < usuarios.length; i++){
        if(nome == usuarios[i].nome && senha == usuarios[i].senha){
            return true
        }else{
            return false
        }
    }
    
}

function buscarUser(nome: string, senha: string | number){
    for(let i = 0;i < usuarios.length; i++){
        if(nome == usuarios[i].nome && senha == usuarios[i].senha){
            console.log(`\tNome: ${usuarios[i].nome}\n`+
                        `\tNumero da Conta: ${usuarios[i].numero}\n`+
                        `\tSaldo: R$${usuarios[i].saldo}\n`)
        }else{
            return false
        }
    }
    
}





let iniciar: number = readlineSync.question('Para iniciar digite 1 !')

while(iniciar == 1){
console.log('=============== Bem vindo ao Sistem do Banco dinheirus! ===============')
let opcaoLogin = readlineSync.question('-> Fazer Login [1]\n'+
                                        '-> Se cadastrar [2]\n')

if(opcaoLogin == 1){
    let nome = readlineSync.question('Digite seu nome ->')
    let senha = readlineSync.question('Digite sua senha ->\n')
    let login: boolean = fazerLogin(nome, senha)
    if(login == true){
        let opcao: number = readlineSync.question('\tSua conta -> [1]\n'+
                                                '\tSaque -> [2]\n'+
                                                '\tDepositar -> 3\n'+
                                                '\tSair -> [0]\n')



        if(opcao == 0){
            break
        }else if(opcao == 1){
            buscarUser(nome,senha)
        }else if(opcao == 2){
            while(opcao == 2){
                
                console.log('Voce tem R$300,00 para sacar\n')
                let opcaoSaque: number = readlineSync.question('Para sacar digite 1 ='+'= Para sair Digite 0')
                if(opcaoSaque == 1){
                    let saque = readlineSync.question('Quanto deseja Sacar ? ')
                    console.log(`Voce sacou R$${saque}`)
                    break
                }else if(opcaoSaque == 0){
                    break
                }

            }
            
        }else if(opcao == 3){
            buscarUser
        }
    }else(
        console.log('Credenciais Erradas')
    )
    
}
                                        
    if(opcaoLogin == 2){
        let user = criaUser()
        usuarios.push(user)
        
    }
    if(opcaoLogin == 3){
    mostraUser()
    }




                            
        

 }