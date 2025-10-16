-- Assicurati di eliminare la tabella di giunzione prima, se esiste
DROP TABLE IF EXISTS users_tasks;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tasks;

-- 1. Creazione di Users (usa BIGINT per chiarezza, anche se SERIAL in MySQL è BIGINT UNSIGNED)
CREATE TABLE users (
    id SERIAL, -- OK, MySQL lo vede come BIGINT UNSIGNED
    username VARCHAR(200),
    password VARCHAR(100),
    CONSTRAINT users_pk PRIMARY KEY (id)
);

-- 2. Creazione di Tasks
CREATE TABLE tasks (
    id SERIAL, -- OK, MySQL lo vede come BIGINT UNSIGNED
    titolo VARCHAR(100),
    descrizione VARCHAR(1000),
    stato integer,
    scadenza date,
    CONSTRAINT task_pk PRIMARY KEY (id)
);

-- 3. Creazione di users_tasks (CORRETTA)
create table users_tasks(
    -- DEVE essere BIGINT per corrispondere a users.id e tasks.id (che sono SERIAL/BIGINT)
    tasks_id BIGINT UNSIGNED,
    users_id BIGINT UNSIGNED,
    
    CONSTRAINT users_tasks_pk PRIMARY KEY (tasks_id, users_id), 
    
    -- Chiavi esterne
    constraint users_task_fk1 foreign key (users_id)
        references users(id) on DELETE CASCADE,
    constraint users_task_fk2 foreign key (tasks_id)
        references tasks(id) on DELETE CASCADE
);

