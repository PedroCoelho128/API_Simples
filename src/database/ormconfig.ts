import { DataSource } from 'typeorm'
import dotenv from 'dotenv'

dotenv.config() // carrega as variáveis de ambiente do arquivo .env

const dataBase = new DataSource({
  type: 'sqlite',
  database: process.env.DATABASE || './src/database/database.sqlite',
  entities: [
    join(__dirname, '..', 'models/*.{ts,js}')
  ],
  logging: true,
  synchronize: true
})

dataBase.initialize()
  .then(() => {
    console.log(`Banco conectado com sucesso!`);
  })
  .catch((erro) => {
    console.error(`Erro ao conectar ao banco de dados`, erro);
  })

export default dataBase

function join(__dirname: string, arg1: string, arg2: string): string | Function | import("typeorm").EntitySchema<any> {
  throw new Error('Function not implemented.')
}

