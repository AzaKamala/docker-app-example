/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('log').insert([
    {id: 1, message: 'Hello world from the docker database'}
  ]);
};