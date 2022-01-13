import { finalizarCompra } from './lib/vendor/compras';

finalizarCompra(
  datosCompra,

  // What happens if this is called multiple times?
  // What happens if it is not called?
  function compraTerminada() {
    cargoEnTarjetaCredito(datosCompra.tarjeta);
    reducirStock(datoscompra.producto)
  }
)
