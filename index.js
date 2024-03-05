// Minhas variáveis e estrutura de decisão
let nomeHeroi = "Frin"
let xpHeroi = 10001
let rank;

// Laços de repetição e Operadores

if (xpHeroi >= 1 && xpHeroi <= 1000){
    rank = "Ferro"
} else if (xpHeroi > 1001 && xpHeroi <= 2000){
    rank = "Bronze"
} else if (xpHeroi >= 2001 && xpHeroi <= 5000){
    rank = "Prata"
} else if (xpHeroi >= 5001 && xpHeroi <= 6000){
    rank = "Ouro"
} else if (xpHeroi >= 6001 && xpHeroi <= 7000){
    rank = "Platina"
} else if (xpHeroi >= 7001 && xpHeroi <= 8000){
    rank = "Diamante"
} else if (xpHeroi >= 8001 && xpHeroi <= 9000){
    rank = "Ascendente"
} else if (xpHeroi >= 9001 && xpHeroi <= 10000){
    rank = "Imortal"
} else if (xpHeroi >= 10001){
    rank = "Radiante"
}else {
    rank = "sem classificação"
}

// Saída 
console.log("O Herói de nome " + nomeHeroi + " está atualmente " + rank)