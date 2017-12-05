# punto-de-venta v1.0.0



- [User](#user)
	- [Crea una venta](#crea-una-venta)
	- [Eliminar venta](#eliminar-venta)
	- [Regresa una venta](#regresa-una-venta)
	- [Regresa las ventas.](#regresa-las-ventas.)
	- [Actualizar venta](#actualizar-venta)
	


# User

## Crea una venta



	POST /sales


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Transacciones			| 			| **optional** <p>Array de las ids de las transacciones</p>							|
| Total			| 			|  <p>total de la venta</p>							|

## Eliminar venta



	DELETE /sales/:id


## Regresa una venta



	GET /sales/:id


## Regresa las ventas.



	GET /sales


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Actualizar venta



	PUT /sales/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Transacciones			| 			| **optional** <p>Array de las ids de las transacciones</p>							|
| Total			| 			|  <p>total de la venta</p>							|


