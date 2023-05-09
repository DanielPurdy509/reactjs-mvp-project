DROP TABLE IF EXISTS photos;

CREATE TABLE photos (
    id serial PRIMARY KEY,
    image_src varchar(50),
    location varchar(50),
    description text,
    photo_date date
);