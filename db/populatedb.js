#! /usr/bin/env node
require("dotenv").config();
const { Client } = require("pg");

const SQL = `
drop table messages;

create table if not exists messages (
    id integer primary key generated always as identity,
    author varchar (255),
    message varchar (255),
    date timestamp
);
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: `${process.env.DBCONNECTION}`
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();