// Importa o app para ser utilizado.
// Todas funções que tem dentro do arquivo
// serão rodadas
import app from './app.js'

// Escolhendo a porta
const port = 3000

// Abrindo o servidor na porta escolhida
app.listen(port, ()=>{
    console.log(`Servidor aberto na http://localhost:${port}/`)
})