# SIS_257_1_AF_PP
Este repositorio contendra el laboratorio de la materia correspondientes 
Medicamento: Contendrá información sobre los medicamentos disponibles en la farmacia, como nombre, cantidad en inventario, precio, etc.
Cliente: Datos de los clientes que compran en la farmacia, como nombre, dirección, número de teléfono, etc.
Venta: Registra las ventas realizadas, incluyendo información como fecha, cliente, medicamentos vendidos y cantidad.
Proveedor: Información sobre los proveedores de los medicamentos, como nombre, dirección, número de teléfono, etc.
A partir de estas entidades, podemos diseñar las operaciones CRUD (Create, Read, Update, Delete) para cada una. Por ejemplo:
Operaciones CRUD:
Medicamento:

    Create: Agregar un nuevo medicamento al inventario.
    Read: Ver la lista de todos los medicamentos o buscar un medicamento específico por nombre o código.
    Update: Actualizar la información de un medicamento existente (precio, cantidad, etc.).
    Delete: Eliminar un medicamento del inventario.

Cliente:

    Create: Agregar un nuevo cliente a la base de datos.
    Read: Ver la lista de todos los clientes o buscar un cliente por nombre o ID.
    Update: Actualizar la información de un cliente (dirección, número de teléfono, etc.).
    Delete: Eliminar un cliente de la base de datos.
Venta:

    Create: Registrar una nueva venta, con información sobre el cliente, los medicamentos vendidos y la cantidad.
    Read: Ver la lista de todas las ventas realizadas en un período de tiempo específico o buscar una venta por ID o cliente.
    Update: Permitir la modificación de una venta (añadir más medicamentos, cambiar el cliente, etc.).
    Delete: Eliminar una venta de la base de datos (solo en casos excepcionales, como registros duplicados o errores).

Proveedor:

    Create: Agregar un nuevo proveedor a la lista de contactos.
    Read: Ver la lista de todos los proveedores o buscar uno por nombre o ID.
    Update: Actualizar la información de un proveedor (dirección, número de teléfono, etc.).
    Delete: Eliminar un proveedor de la lista.

Entidades del backend
Medicamento (ID, Nombre , Precio, Cantidad , Tipo)
Cliente (ID, Nombre ,Apellido , Sexo , Direccion , Telefono)
Proveedor (id, Nombre , Ciudad, Direccion, Telefono, Representante, Telefono_Representante)
Venta(id, ID_Cliente, ID_Empleado, Fecha_Venta, total_Venta)
Detalle_Venta(id, ID_Medicamento, id_venta, Cantidad, Precio )
Compra( id, id_Proveedor, id_Empleado, Fecha , Total , Impuesto)
Detalle_Compra(id, ID_Medicamento, ID_Compra, Cantidad , Precio)
Empleado(ID ,Nombre, Apellido , Cargo , Fecha_Contratacion,Salario )

