# DisneyAPI

Servicio para acceder a recursos del mundo Disney.



{
	"info": {
		"_postman_id": "04d81de2-6708-43e2-888b-bf90599790c7",
		"name": "API-Disney",
		"description": "API REST para acceder a recursos relacionados con el mundo Disney.",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "20450928"
	},
	"item": [
		{
			"name": "Personajes",
			"item": [
				{
					"name": "Servicio de Personajes",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/characters",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"characters"
							]
						},
						"description": "Lista con todos los personajes del mundo Disney con todos sus atributos"
					},
					"response": []
				},
				{
					"name": "Servicio de personaje",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/characters?name=nombre\n",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"characters"
							],
							"query": [
								{
									"key": "name",
									"value": "nombre\n"
								}
							]
						},
						"description": "_Permite buscar un personaje por su nombre_\r\nSe debe ingresar el query name= con el nombre del personaje a buscar"
					},
					"response": []
				},
				{
					"name": "Servicio de personajes por edad",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/characters?age=",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"characters"
							],
							"query": [
								{
									"key": "age",
									"value": ""
								}
							]
						},
						"description": "Permite buscar todos los personajes con determinada edad.\r\nSe debe ingresar un querystring age= y la edad"
					},
					"response": []
				},
				{
					"name": "Servicio de Personajes por pelicula",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/characters?movies=idMovie\n",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"characters"
							],
							"query": [
								{
									"key": "movies",
									"value": "idMovie\n"
								}
							]
						},
						"description": "Servicio que permite buscar todos los personajes que aparecen en determinada película.\n\nSe debe agregar un querystring movies= y el id de la película"
					},
					"response": []
				},
				{
					"name": "Servicio para crear un personaje",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "Imagen",
									"type": "file",
									"src": []
								},
								{
									"key": "Nombre",
									"value": "",
									"type": "text"
								},
								{
									"key": "Edad",
									"value": "",
									"type": "text"
								},
								{
									"key": "Peso",
									"value": "",
									"type": "text"
								},
								{
									"key": "Historia",
									"value": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3000/characters/create",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"characters",
								"create"
							]
						}
					},
					"response": []
				},
				{
					"name": "Servicio para eliminar personaje",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/characters/delete/id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"characters",
								"delete",
								"id"
							]
						}
					},
					"response": []
				},
				{
					"name": "Servicio para editar un personaje",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "Imagen",
									"type": "file",
									"src": []
								},
								{
									"key": "Nombre",
									"value": "",
									"type": "text"
								},
								{
									"key": "Edad",
									"value": "",
									"type": "text"
								},
								{
									"key": "Peso",
									"value": "",
									"type": "text"
								},
								{
									"key": "Historia",
									"value": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3000/characters/edit/id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"characters",
								"edit",
								"id"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "PeliculasoSeries",
			"item": [
				{
					"name": "Servico de lista Peliculas o Series",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/movies",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"movies"
							]
						},
						"description": "Servicio que permite traer una lista con todas las Películas o Series de la base de datos.\n\nStartFragment\n\nTrae los campos imagen, título y fecha de creación.  \nAdemás trae un campo extra con la cantidad de títulos\n\nEndFragment"
					},
					"response": []
				},
				{
					"name": "Servicio de busqueda de pelicula por nombre",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/movies?name=nombre",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"movies"
							],
							"query": [
								{
									"key": "name",
									"value": "nombre"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Servicio de busqueda de peliculas por genero",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/movies?genre=idGenero",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"movies"
							],
							"query": [
								{
									"key": "genre",
									"value": "idGenero"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Servicio de listado de peliculas por orden ascendente y descendente",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/movies?order=ASC/DESC",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"movies"
							],
							"query": [
								{
									"key": "order",
									"value": "ASC/DESC"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Servicio de creacion de pelicula",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "Imagen",
									"type": "file",
									"src": []
								},
								{
									"key": "id_genero",
									"value": "",
									"type": "text"
								},
								{
									"key": "Titulo",
									"value": "",
									"type": "text"
								},
								{
									"key": "Fecha_Creacion",
									"value": "",
									"type": "text"
								},
								{
									"key": "Calificacion",
									"value": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3000/movies/create",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"movies",
								"create"
							]
						}
					},
					"response": []
				},
				{
					"name": "Servicio de eliminacion de pelicula",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/movies/delete/id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"movies",
								"delete",
								"id"
							]
						}
					},
					"response": []
				},
				{
					"name": "Servicio de edicion de pelicula",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "Imagen",
									"type": "file",
									"src": []
								},
								{
									"key": "Titulo",
									"value": "",
									"type": "text"
								},
								{
									"key": "Fecha_Creacion",
									"value": "",
									"type": "text"
								},
								{
									"key": "Calificacion",
									"value": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3000/movies/edit/id",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"movies",
								"edit",
								"id"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Usuarios",
			"item": [
				{
					"name": "Servicio de registro de usuario",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "name",
									"value": "",
									"type": "text"
								},
								{
									"key": "password",
									"value": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3000/auth/register",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"auth",
								"register"
							]
						},
						"description": "Servicio de registro de usuario.\n\nSe debe ingresar un nombre, password y contraseña para el usuario"
					},
					"response": []
				},
				{
					"name": "Servicio de login de usuario",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "name",
									"value": "",
									"type": "text"
								},
								{
									"key": "password",
									"value": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:3000/auth/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"auth",
								"login"
							]
						},
						"description": "Servicio para el login de usuario.\n\nSe debe ingresar nombre y password.\n\nSolo con el token generado se puede acceder a todos los endpoints durante un periodo de 10 minutos, luego del cual el token es destruido. En ese caso se debe volver a loguear y generar un nuevo token."
					},
					"response": []
				}
			]
		}
	]
}


