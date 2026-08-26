select * from usuarios
select * from comentarios
select * from curtidas
select * from atividades

create table usuarios (
	usuario_id serial primary key,
    usuario_nome text NOT NULL,
    usuario_email character varying NOT NULL,
    usuario_senha character varying NOT NULL,
    foto_url character varying
);

CREATE TABLE atividades (
    atividade_id serial NOT NULL PRIMARY KEY,
    usuario_id serial NOT NULL,
    tipo character varying NOT NULL,
    distancia_metros numeric NOT NULL,
    duracao_minutos integer NOT NULL,
    co2_kg numeric NOT NULL,
    data_iso timestamp with time zone NOT NULL,
    CONSTRAINT atividade_usuario_id_fkey FOREIGN KEY (usuario_id)
        REFERENCES public.usuarios (usuario_id) MATCH SIMPLE
);

CREATE TABLE comentarios (
    comentario_id serial NOT NULL PRIMARY KEY,
    usuario_id serial NOT NULL,
    atividade_id serial NOT NULL,
    CONSTRAINT comentarios_usuarios_id_fkey FOREIGN KEY (usuario_id)
        REFERENCES public.usuarios (usuario_id) MATCH SIMPLE,
    CONSTRAINT comentario_atividades_id_fkey FOREIGN KEY (atividade_id)
        REFERENCES public.atividades (atividade_id) MATCH SIMPLE
);

CREATE TABLE curtidas (
    curtida_id serial NOT NULL PRIMARY KEY,
    usuario_id serial NOT NULL,
    atividade_id serial NOT NULL,
    CONSTRAINT curtida_usuario_id_fkey FOREIGN KEY (usuario_id)
        REFERENCES public.usuarios (usuario_id) MATCH SIMPLE,
    CONSTRAINT curtida_atividade_id_fkey FOREIGN KEY (atividade_id)
        REFERENCES public.atividades (atividade_id) MATCH SIMPLE
);