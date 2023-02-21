import Krug from '../src/assets/KrugVip.jpg';
import wakha from '../src/assets/WAKHA-PISTA-LOGO.jpg';
import roma from '../src/assets/RomaVip.jpg';
import anubis from '../src/assets/AnubisVip.jpg';
import EntradaDama from '../src/assets/EntradaDama.jpg';
import EntradaConConsumo from '../src/assets/EntradaConConsumo.jpg';
import EntradaSinConsumo from '../src/assets/EntradaSinConsumo.jpg';
import VoucherN1 from '../src/assets/VoucherN1.jpg';
import VoucherN2 from '../src/assets/VoucherN2.jpg';
import VoucherN3 from '../src/assets/VoucherN3.jpg';
import VoucherN4 from '../src/assets/VoucherN4.jpg';
import VoucherN5 from '../src/assets/VoucherN5.jpg';
import VoucherDama from '../src/assets/VoucherDama.jpg';

export const Entradas = [
  { 
    id : "1", 
    nombre : "ENTRADA SIN CONSUMO" , 
    valor : "900", 
    entradas : "🍾 1 Entrada General para Pista en WAKHA",
    seña: "🍾 Seña : Pago Total",
    consumo : "🍾 Consumo : No Incluye",
    precintos : "🍾 No Incluye precintos VIP ❌",
    img : EntradaSinConsumo,
  },
  { 
    id : "2" , 
    nombre : "ENTRADA CON CONSUMO" , 
    valor : "1300" , 
    entradas : "🍾 1 Entrada General para Pista en Wakha",
    seña: "🍾 Seña : Pago Total",
    consumo : "🍾 Consumo : $1.500 ARS",
    precintos : "🍾 No Incluye precintos VIP ❌",
    img : EntradaConConsumo,
},
  { id : "3" , 
  nombre : "ENTRADA 2X1 DE DAMAS" , 
  valor : "800" , 
  entradas : "🍾 2 Entrada general para pista en wakha",
  seña: "🍾 Seña : Pago Total",
  consumo : "🍾 Consumo : No Incluye",
  precintos : "🍾 No Incluye precintos VIP ❌",
  img : EntradaDama,
  }
]

export const MesasVips = [
  { 
  id : "1" , 
  nombre : "MESA VIP KRUG" ,
  valor : "45.000" , 
  entradas : '🍾 12 Entradas Generales',
  consumo : "🍾 $40.000 ARS en consumo",
  excedentes : "🍾 Se permite el excedente de 2 personas. ($1.500 ARS por Persona)",
  seña: "🍾 Seña : $5.000 ARS",
  precintos : "🍾 Incluye 12 Precintos VIP (KRUG) ✔️",
  img : Krug,

 },
 { 
  id : "2" , 
  nombre : "MESA VIP ANUBIS" , 
  valor : "35.000" , 
  consumo : "🍾 $30.000 ARS en consumo",
  entradas : '🍾 12 Entradas Generales',
  excedentes : "🍾 Se permite el excedente de 2 personas. ($1.500 ARS por Persona)",
  seña: "🍾 Seña : $5.000 ARS",
  precintos : "🍾 Incluye 12 Precintos VIP (ANUBIS) ✔️",
  img : anubis,
 },
 { 
  id : "3" , 
  nombre : "MESA VIP ROMA" , 
  valor : "18.000" ,
  consumo : "🍾 $15.000 ARS en consumo",
  entradas : '🍾 8 Entradas Generales',
  excedentes : "🍾 Se permite el excedente de 3 personas. ($1.500 ARS por Persona)",
  seña: "🍾 Seña : $5.000 ARS",
  precintos : "🍾 Incluye 8 Precintos VIP (ROMA) ✔️",
  img : roma,
},
{
  id : "4",
  nombre : "MESA VIP PISTA",
  valor : "12.000",
  consumo : "🍾 $10.000 ARS en consumo",
  entradas : '🍾 6 Entradas Generales',
  excedentes : "🍾 Se permite el excedente de 3 personas. ($1.500 ARS por Persona)",
  seña: "🍾 Seña : $5.000 ARS",
  precintos : "🍾 No Incluye precintos VIP ❌",
  img : wakha,
},
]


export const Voucher = [
  {
  id : "1" , 
  nombre : "VOUCHER 1" ,
  valor : "30.000" , 
  consumo : "🍾 Consumo : $28.000 ARS",
  entradas : "🍾 14 Entradas Generales para Pista en WAKHA",
  seña: "🍾 Seña : $2.500 ARS",
  precintos : "🍾 No Incluye precintos VIP ❌",
  img : VoucherN1,

 },
 { 
  id : "2" , 
  nombre : "VOUCHER 2" , 
  valor : "25.000" , 
  consumo : "🍾 Consumo : $23.000 ARS",
  entradas : "🍾 10 Entradas Generales para Pista en WAKHA",
  seña: "🍾 Seña : $2.500 ARS",
  precintos : "🍾 No Incluye precintos VIP ❌",
  img : VoucherN2,
 },
 { 
  id : "3" , 
  nombre : "VOUCHER 3" , 
  valor : "20.000" ,
  consumo : "🍾 Consumo : $18.000 ARS",
  entradas : "🍾 8 Entradas Generales para Pista en WAKHA",
  seña: "🍾 Seña : $2.500 ARS",
  precintos : "🍾 No Incluye precintos VIP ❌",
  img : VoucherN3,
},
{
  id : "4",
  nombre : "VOUCHER 4",
  valor : "15.000",
  consumo : "🍾 Consumo : $12.000 ARS",
  entradas : "🍾 5 Entradas Generales para Pista en WAKHA",
  seña: "🍾 Seña : $2.500 ARS",
  precintos : "🍾 No Incluye precintos VIP ❌",
  img : VoucherN4,
},
{
  id : "5",
  nombre : "VOUCHER 5",
  valor : "8.000",
  consumo : "🍾 Consumo : $6.000 ARS",
  entradas : "🍾 2 Entradas Generales para Pista en WAKHA",
  seña: "🍾 Seña : $2.500 ARS",
  precintos : "🍾 No Incluye precintos VIP ❌",
  img : VoucherN5,
},
{
  id : "6",
  nombre : "VOUCHER DAMAS",
  valor : "20.000",
  consumo : "🍾 Consumo : $20.000 ARS",
  entradas : "🍾 10 Entradas Generales para Pista en WAKHA",
  seña: "🍾 Seña : $2.500 ARS",
  precintos : "🍾 No Incluye precintos VIP ❌",
  img : VoucherDama,
}, 
]




