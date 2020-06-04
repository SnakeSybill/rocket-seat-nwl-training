import Knex from 'knex';

export async function up(knex: Knex){
    // Cria a tabela
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf').notNullable();
    })
}

export async function down(knex: Knex){
    // Deleta a tabela (volta atrás)
    return knex.schema.dropTable('points');
}