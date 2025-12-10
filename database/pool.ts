import pg from 'pg'

const pool = new pg.Pool({
    connectionString: 'postgres://postgres:Vcr2003!abc@localhost:5432/equipamentos_nitprev'
})

export {pool}