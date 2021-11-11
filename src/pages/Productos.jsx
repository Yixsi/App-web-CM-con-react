import React,{useState} from "react";
import Layout from "layouts/Layout";
import "style/Productos.css";

function Productos(){

  const productosData = [
    {
        "_id": {
          "$oid": "61672412aeab4ac259d6619b"
        },
        "codigo": "149",
        "nombre": "Cinta Malla 20 Metros",
        "precio": " $ 2,600 ",
        "cantidad": "6",
        "fecha": "2021-04-20",
        "descripcion": "Cinta para uso en paredes de panel.",
        "categoria": "Otros",
        "url": "https://admintienda.coval.com.co/backend/admin/backend/web/archivosDelCliente/items/images/ACCESORIOS-CINTAS-CINTA-MALLA------------5-CM-X--20-M-DELT-170520210611060802.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661a0"
        },
        "codigo": "159",
        "nombre": "Clavo  3/4  Caja",
        "precio": " $ 3,500 ",
        "cantidad": "2",
        "fecha": "2021-04-20",
        "descripcion": "Clavos de alta resitencia para uso en diferentes superficies",
        "url": "https://indurruedas.co/wp-content/uploads/2017/12/DSC4803.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661af"
        },
        "codigo": "202",
        "nombre": "Espátula Goya Inox",
        "precio": " $ 5,000 ",
        "cantidad": "2",
        "fecha": "2021-04-20",
        "descripcion": "Fabricada en acero inoxidable, con mango antideslizante de polipropileno",
        "categoria": "Herramientas",
        "url": "https://myacenter.com/wp-content/uploads/2020/09/12204-600x600.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661c5"
        },
        "codigo": "305",
        "nombre": "Pistola Manguera 4 Chorros Uduke",
        "precio": " $ 5,000 ",
        "cantidad": "16",
        "fecha": "2021-04-20",
        "descripcion": "Pistola de riego con 4 funciones",
        "categoria": "Herramientas",
        "url": "https://uduke.co/toolsstore/wp-content/uploads/2021/03/7807-1.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d6618f"
        },
        "codigo": "119",
        "nombre": "Brocha Brush 2\"",
        "precio": " $ 3,500 ",
        "cantidad": "17",
        "fecha": "2021-04-20",
        "descripcion": "Brocha de calidad garantizada, con cerdas naturales, mango plástico negro y una perforación en la punta para su fácil almacenamiento.",
        "categoria": "Herramientas",
        "url": "https://www.ferreteriasamir.com/5549-large_default/brocha-popular-brush-1-12-goya.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d66192"
        },
        "codigo": "128",
        "nombre": "Caja 2X4",
        "precio": " $ 600 ",
        "cantidad": "7",
        "fecha": "2021-04-20",
        "descripcion": "Caja de material altamente resistente, autoextinguible que brinda proteccion a la toma electrica",
        "categoria": "Eléctricos",
        "url": "https://www.ferreteriasamir.com/43-large_default/caja-2x4-pvc-standar-retie-induma.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661c7"
        },
        "codigo": "254",
        "nombre": "Plafón Plástico",
        "precio": " $ 3,000 ",
        "cantidad": "4",
        "fecha": "2021-04-20",
        "descripcion": "plafon para iluminaciones electricas de alta resistencia a voltajes y sobrecargas",
        "categoria": "Eléctricos",
        "url": "https://e-mercury.com.co/wp-content/uploads/2020/10/ECA85-PLAFON-PLASTICO-E27-RETIE.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d66188"
        },
        "codigo": "106",
        "nombre": "Adaptador Macho Presión",
        "precio": " $ 500 ",
        "cantidad": "4",
        "fecha": "2021-04-20",
        "descripcion": "Adpatador macho para tuberia de agua ",
        "categoria": "Tuberia",
        "url": "https://cr.epaenlinea.com/pub/media/version20200605/catalog/product/cache/a83b746ef25730b9cb1cc414bac0f04a/2/6/2615010_6.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661ae"
        },
        "codigo": "199",
        "nombre": "Espátula",
        "precio": " $ 2,500 ",
        "cantidad": "7",
        "fecha": "2021-04-20",
        "descripcion": "Fabricada en acero inoxidable, con mango antideslizante de polipropileno",
        "categoria": "Herramientas",
        "url": "https://sumatec.co/wp-content/uploads/2019/08/220025020-600x600.png"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661c6"
        },
        "codigo": "253",
        "nombre": "Plafón Loza",
        "precio": " $ 2,700 ",
        "cantidad": "5",
        "fecha": "2021-04-20",
        "descripcion": "plafon para iluminaciones electricas de alta resistencia a voltajes y sobrecargas",
        "categoria": "Eléctricos",
        "url": "https://electroservimos.co/2906-large_default/pgr-plafon-loza-casquillo-aluminio-retie-corona.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d6619d"
        },
        "codigo": "154",
        "nombre": "Cinta Transparente Cellux 100 M",
        "precio": " $ 4,000 ",
        "cantidad": "15",
        "fecha": "2021-04-20",
        "descripcion": "Fabricadas con respaldo resistente a la tensión y adhesivo acrílico de alta fuerza de retención. Usos: Sellado de cajas de cartón, principalmente cajas pesadas, Embalaje de paquetes",
        "categoria": "Otros",
        "url": "https://images.jumpseller.com/store/universaldetornillosyherr/7147410/CINTA.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661a2"
        },
        "codigo": "174",
        "nombre": "Codo Presión",
        "precio": " $ 600 ",
        "cantidad": "2",
        "fecha": "2021-04-20",
        "descripcion": "Accesorio de tuberia de presion",
        "categoria": "Tuberia",
        "url": "https://ferreteriasurtillaves.com/wp-content/uploads/2019/09/codos.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661b1"
        },
        "codigo": "209",
        "nombre": "Grapa Muro Número",
        "precio": " $ 1,100 ",
        "cantidad": "4",
        "fecha": "2021-04-20",
        "descripcion": "Grapas para muro, soportes para cableados",
        "categoria": "Otros",
        "url": "https://cdn1.totalcode.net/easy/product-zoom/es/grapas-plastica-clavos-rojo-no.6-x100und-2.webp"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661bc"
        },
        "codigo": "234",
        "nombre": "Llave Lavamanos + Acople",
        "precio": " $ 18,500 ",
        "cantidad": "1",
        "fecha": "2021-04-20",
        "descripcion": "Grifería sencilla fabricada en polímeros de alta ingeniería, brindando un toque de elegancia, calidad y ahorro de consumo de agua en comparación a otras marcas.\n",
        "categoria": "Hogar",
        "url": "https://fullmineria.com/wp-content/uploads/2020/12/LLAVE-LAVAMANOS-CON-ACOPLE.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661be"
        },
        "codigo": "237",
        "nombre": "Llave Móvil Mesa Flexible",
        "precio": " $ 26,000 ",
        "cantidad": "3",
        "fecha": "2021-04-20",
        "descripcion": "Grifería sencilla fabricada en polímeros de alta ingeniería, brindando un toque de elegancia, calidad y ahorro de consumo de agua en comparación a otras marcas.\n",
        "categoria": "Hogar",
        "url": "https://www.carloseparamoltda.com/wp-content/uploads/MET-406-600x600.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661cc"
        },
        "codigo": "266",
        "nombre": "Sifón Lavamanos Completo Plastgri",
        "precio": " $ 5,600 ",
        "cantidad": "9",
        "fecha": "2021-04-20",
        "descripcion": "Reparaciones WC, tipo desagües, complemento de instalación de grifería, permite el adecuado desagüe, por si diseño evita los malos olores.",
        "categoria": "Tuberia",
        "url": "https://cdn1.totalcode.net/easy/product-zoom/es/conjunto-sifon-lavamanos-integral-con-rebose-cromo-1.webp"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661d1"
        },
        "codigo": "284",
        "nombre": "Tapón Soldado Presión ",
        "precio": " $ 400 ",
        "cantidad": "3",
        "fecha": "2021-04-20",
        "descripcion": "Accesorio de uso en tuberias de presion",
        "categoria": "Tuberia",
        "url": "https://cdn1.totalcode.net/easy/product-zoom/es/tapon-presion-1~2%22-soldado-pavco-2.webp"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d66189"
        },
        "codigo": "108",
        "nombre": "Amarra Blanca ",
        "precio": " $ 1,600 ",
        "cantidad": "18",
        "fecha": "2021-04-20",
        "descripcion": "Ideal para agrupar y organizar Cables, apretar mangueras, tareas de jardinería, etc, Fáciles de usar en el hogar, la oficina, fábricas, entre otras.",
        "categoria": "Otros",
        "url": "https://www.promesa.com.ec/wp-content/uploads/2020/06/30609-1.png"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d6618c"
        },
        "codigo": "116",
        "nombre": "Bisturí",
        "precio": " $ 2,200 ",
        "cantidad": "11",
        "fecha": "2021-04-20",
        "descripcion": "Herramienta ideal para corte de superficies como madera y plastico.",
        "categoria": "Herramientas",
        "url": "https://www.solintos.com/wp-content/uploads/2020/10/bisturi-1.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d6619c"
        },
        "codigo": "152",
        "nombre": "Cinta Teflón",
        "precio": " $ 500 ",
        "cantidad": "19",
        "fecha": "2021-04-20",
        "descripcion": "Cinta para uso en tuberias, filtraciones, relleno",
        "categoria": "Otros",
        "url": "https://homecenterco.scene7.com/is/image/SodimacCO/487317"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661ac"
        },
        "codigo": "195",
        "nombre": "Disco Flap",
        "precio": " $ 3,100 ",
        "cantidad": "17",
        "fecha": "2021-04-20",
        "descripcion": "Disco de uso domestico para pulir de superficies",
        "categoria": "Otros",
        "url": "https://belltec.com.co/7641-large_default/disco-flap-fibra-412-curvo-grano-80-bosch-2608605452.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661b3"
        },
        "codigo": "215",
        "nombre": "Guantes de  Tela",
        "precio": " $ 4,500 ",
        "cantidad": "10",
        "fecha": "2021-04-20",
        "descripcion": "Guante industrial para uso en trabajos pesados",
        "categoria": "Otros",
        "url": "https://fullmineria.com/wp-content/uploads/2020/11/g-tel..jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661b8"
        },
        "codigo": "223",
        "nombre": "Lija Abracol  ",
        "precio": " $ 1,500 ",
        "cantidad": "15",
        "fecha": "2021-04-20",
        "descripcion": "Lija de uso industrial para pulir superficies ",
        "categoria": "Otros",
        "url": "https://ferrebox.co/138-large_default/lija-de-agua-grano-100-profesional-abracol.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661c2"
        },
        "codigo": "247",
        "nombre": "Panel Led 18W Cuadrado",
        "precio": " $ 15,500 ",
        "cantidad": "2",
        "fecha": "2021-04-20",
        "descripcion": "Panel led de alta calidad, de uso domestico para ambientar espacios",
        "categoria": "Eléctricos",
        "url": "https://http2.mlstatic.com/D_NQ_NP_648907-MCO30251639614_052019-O.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661ce"
        },
        "codigo": "279",
        "nombre": "Tapa Ciega 4X4",
        "precio": " $ 600 ",
        "cantidad": "8",
        "fecha": "2021-04-20",
        "descripcion": "Tapa ciega para uso en conexiones electricas sin funcionamiento",
        "categoria": "Eléctricos",
        "url": "https://cdn1.totalcode.net/easy/product-zoom/es/tapa-ciega-4-cm-x-4-cm-lisa-2.webp"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d66191"
        },
        "codigo": "126",
        "nombre": "Buje Sanitario",
        "precio": " $ 2,000 ",
        "cantidad": "5",
        "fecha": "2021-04-20",
        "descripcion": "Union buje para tuberia sanitaria, usada para unir dos tubos de diferentes dimensiones",
        "categoria": "Tuberia",
        "url": "https://cdn1.totalcode.net/easy/product-zoom/es/buje-soldado-pvc-sanitario-3%22-x-2%22-gerfor-1.webp"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d66195"
        },
        "codigo": "131",
        "nombre": "Chazo Expansión ",
        "precio": " $ 600 ",
        "cantidad": "6",
        "fecha": "2021-04-20",
        "descripcion": "Chazo expansivo de alta resistencia para perforaciones en concreto.",
        "categoria": "Otros",
        "url": "https://www.ferredistarco.com/wp-content/uploads/2019/06/CHAZOS.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661b4"
        },
        "codigo": "216",
        "nombre": "Guantes Industrial Calibre 25 Talla 10",
        "precio": " $ 4,000 ",
        "cantidad": "12",
        "fecha": "2021-04-20",
        "descripcion": "Guantes de plastico para manipulacion de elementos quimicos o abrasivos",
        "categoria": "Otros",
        "url": "https://www.kipclin.com/images/virtuemart/product/KIP-LAT-00000616.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661ba"
        },
        "codigo": "230",
        "nombre": "Llana Lisa Mango Madera",
        "precio": " $ 18,000 ",
        "cantidad": "7",
        "fecha": "2021-04-20",
        "descripcion": "Llana lisa, resistente, duradera, fácil de usar.\n",
        "categoria": "Herramientas",
        "url": "http://cdn.shopify.com/s/files/1/0013/5033/6614/products/Llanalisaconmangodemadera0_8mm2_1200x1200.jpg?v=1610552666"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661c4"
        },
        "codigo": "249",
        "nombre": "Pegante PVC",
        "precio": " $ 2,000 ",
        "cantidad": "14",
        "fecha": "2021-04-20",
        "descripcion": "pegante de uso domestico e industrial para acomplar tuberias de pvc",
        "categoria": "Otros",
        "url": "https://mundialonline.com.co/wp-content/uploads/2020/09/10240688.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661d4"
        },
        "codigo": "292",
        "nombre": "Tijera Lámina",
        "precio": " $ 12,000 ",
        "cantidad": "5",
        "fecha": "2021-04-20",
        "descripcion": "herramienta para corte de lamina",
        "categoria": "Herramientas",
        "url": "https://cdn1.totalcode.net/easy/product-zoom/es/tijeras-aviacion-14_563-corte-recto-1.webp"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d6618d"
        },
        "codigo": "117",
        "nombre": "Bombillo Led 12W",
        "precio": " $ 7,200 ",
        "cantidad": "18",
        "fecha": "2021-04-20",
        "descripcion": "Bombillo tipo led para uso domestco, ambienta espacios del hogar con una luz fria y ahorradora",
        "categoria": "Eléctricos",
        "url": "https://elpalustre.com.co/image/cache/catalog/pasante/bombilla-12w-e27-760x1000.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d66197"
        },
        "codigo": "140",
        "nombre": "Chazo Plástico Con Tornillo",
        "precio": " $ 200 ",
        "cantidad": "11",
        "fecha": "2021-04-20",
        "descripcion": "Chazo plastico resitente para perforaciones en concreto, madera, uso para cargas livianas",
        "categoria": "Otros",
        "url": "https://cdn1.totalcode.net/easy/product-zoom/es/chazo-1~4%22-%2B-tornillo-combinado-8%22-x-1%22-x6und-3.webp"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d6619a"
        },
        "codigo": "146",
        "nombre": "Cinta Doble Faz 2 Mts",
        "precio": " $ 1,600 ",
        "cantidad": "6",
        "fecha": "2021-04-20",
        "descripcion": "Uso en interiores, multiusos para union de elementos",
        "categoria": "Otros",
        "url": "https://www.labodegaeconomica.co/wp-content/uploads/2021/01/Cinta-Doble-Faz-2-cm-ancho-x-2-metros-de-largo-3500.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661a4"
        },
        "codigo": "177",
        "nombre": "Codo Sanitario  45 Grados",
        "precio": " $ 2,200 ",
        "cantidad": "2",
        "fecha": "2021-04-20",
        "descripcion": "Accesorios de tuberia sanitaria",
        "categoria": "Tuberia",
        "url": "https://cdn1.totalcode.net/easy/product-zoom/es/codo-pvc-sanitario--45%C2%B0-c-x-c--1.1~2%22-gerfor-1.webp"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661a9"
        },
        "codigo": "192",
        "nombre": "Disco Bosh Corte Metal",
        "precio": " $ 2,800 ",
        "cantidad": "6",
        "fecha": "2021-04-20",
        "descripcion": "Disco de uso domestico para corte de superficies metalicas",
        "categoria": "Otros",
        "url": "https://belltec.com.co/7668-large_default/-disco-abrasivo-para-pulidora-de-14x7x78-bosch.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661b6"
        },
        "codigo": "221",
        "nombre": "Interruptor Sencillo Uduke",
        "precio": " $ 3,600 ",
        "cantidad": "1",
        "fecha": "2021-04-20",
        "descripcion": "\nInterruptor doméstico, toma polo a tierra, resistente a la corrosión, de fácil limpieza e instalación.",
        "categoria": "Eléctricos",
        "url": "https://fierros.com.co/guia/files/classifieds/343845-3260.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661bb"
        },
        "codigo": "233",
        "nombre": "Llave Bola Pvc Lisa ",
        "precio": " $ 1,900 ",
        "cantidad": "14",
        "fecha": "2021-04-20",
        "descripcion": "Controlar el paso del agua entre conductos Plásticos o Metalicos para la cocina, baños y exteriores",
        "categoria": "Tuberia",
        "url": "https://ecommerce.ferremaster.com/backend/admin/backend/web/archivosDelCliente/items/images/Articulos-de-Construccion-Llaves-y-Valvulas-LLAVE-BOLA-PVC-2-ROSCADA-LBP-2R-144420201221164301.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d66198"
        },
        "codigo": "141",
        "nombre": "Cinta 3M 10 Metros",
        "precio": " $ 3,100 ",
        "cantidad": "3",
        "fecha": "2021-04-20",
        "descripcion": "Aislante de uso profesional para cableados, en uniones, encintados y demás de uso general",
        "categoria": "Otros",
        "url": "https://http2.mlstatic.com/D_NQ_NP_932965-MCO43183544554_082020-O.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d6618a"
        },
        "codigo": "112",
        "nombre": "Amarra Negra ",
        "precio": " $ 1,400 ",
        "cantidad": "6",
        "fecha": "2021-04-20",
        "descripcion": "Ideal para agrupar y organizar Cables, apretar mangueras, tareas de jardinería, etc, Fáciles de usar en el hogar, la oficina, fábricas, entre otras.",
        "categoria": "Otros",
        "url": "https://dojiw2m9tvv09.cloudfront.net/44838/product/wakcjb3jpg9554.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d66194"
        },
        "codigo": "130",
        "nombre": "Canastilla Lavaplatos",
        "precio": " $ 4,500 ",
        "cantidad": "4",
        "fecha": "2021-04-20",
        "descripcion": "anastilla de lujo, en material de alta resistencia a la humedad, no se pela, no se deforma con el calor, es más higiénico, cumple con las normas internacionales.",
        "categoria": "Hogar",
        "url": "https://cdn1.totalcode.net/easy/product-zoom/es/canastilla-lavaplatos-4%22-bl_1951_11-inoxidable-plastica-2.webp"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661c0"
        },
        "codigo": "241",
        "nombre": "Nivel Aluminio 12 Uduke",
        "precio": " $ 12,000 ",
        "cantidad": "2",
        "fecha": "2021-04-20",
        "descripcion": "Se recomienda leer instrucciones de uso y utilizar elementos de protección personal.\n",
        "categoria": "Herramientas",
        "url": "https://uduke.co/toolsstore/wp-content/uploads/2021/03/12176-1.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661c9"
        },
        "codigo": "259",
        "nombre": "Rodillo Felfa Caribe",
        "precio": " $ 7,000 ",
        "cantidad": "13",
        "fecha": "2021-04-20",
        "descripcion": "Para pintar sobre todo tipo de superficies, para todo tipo de pinturas",
        "categoria": "Herramientas",
        "url": "https://elpalustre.com.co/image/cache/catalog/pinturas/Rod-Pro-02-760x1000.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661cd"
        },
        "codigo": "278",
        "nombre": "Tapa Ciega 2X4",
        "precio": " $ 700 ",
        "cantidad": "9",
        "fecha": "2021-04-20",
        "descripcion": "Tapa ciega para uso en conexiones electricas sin funcionamiento",
        "categoria": "Eléctricos",
        "url": "https://cdn1.totalcode.net/easy/product-zoom/es/tapa-ciega-2-cm-x-4-cm-lisa-2.webp"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661d0"
        },
        "codigo": "282",
        "nombre": "Tapón Roscado Presión",
        "precio": " $ 500 ",
        "cantidad": "9",
        "fecha": "2021-04-20",
        "descripcion": "Accesorio de uso en tuberias de presion",
        "categoria": "Tuberia",
        "url": "https://www.ferrecentromocoa.co/wp-content/uploads/2017/11/tapon-roscado-presion-1-2-pvc-tigre-2-1.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661d5"
        },
        "codigo": "295",
        "nombre": "Toma Doble Uduke",
        "precio": " $ 4,800 ",
        "cantidad": "4",
        "fecha": "2021-04-20",
        "descripcion": "Cumple con norma RETIE certificada por Cotecna",
        "categoria": "Eléctricos",
        "url": "https://www.producabos.com/wp-content/uploads/2020/06/275834.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661c1"
        },
        "codigo": "244",
        "nombre": "Palustre Lufkin",
        "precio": " $ 8,100 ",
        "cantidad": "8",
        "fecha": "2021-04-20",
        "descripcion": "Palustre, de fácil y seguro agarre, resistente, fácil de usar.\n",
        "categoria": "Herramientas",
        "url": "https://www.ferreteriasamir.com/1029-large_default/palustre-n-7-mango-de-plastico-lufkin.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661d3"
        },
        "codigo": "288",
        "nombre": "Tee Sanitaria",
        "precio": " $ 3,700 ",
        "cantidad": "7",
        "fecha": "2021-04-20",
        "descripcion": "Accesorio de uso en tuberias de presion",
        "categoria": "Tuberia",
        "url": "https://cdn1.totalcode.net/easy/product-zoom/es/tee-sanitaria-1-%C2%BD%22-pvc-2.webp"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d6619e"
        },
        "codigo": "157",
        "nombre": "Clavija Grade 15 Amp",
        "precio": " $ 1,900 ",
        "cantidad": "19",
        "fecha": "2021-04-20",
        "descripcion": "Clavija resistente a grandes voltajes, alta durabilidad, patas de planas que remiten energía adecuada.",
        "categoria": "Eléctricos",
        "url": "https://www.eimpsa.com/web/wp-content/uploads/2020/04/CLAVIJA-C-002-CAUCHO-TIPO-INDUSTRIAL-15A-CODELCA.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661a6"
        },
        "codigo": "185",
        "nombre": "Cortinero Plafón Dorado en U",
        "precio": " $ 700 ",
        "cantidad": "1",
        "fecha": "2021-04-20",
        "descripcion": "Reposa cortinas para interiores, material de alta resistencia",
        "categoria": "Hogar",
        "url": "https://cdn1.totalcode.net/easy/product-zoom/es/plafon-1%22-abierto-dorado-1.webp"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661a8"
        },
        "codigo": "190",
        "nombre": "Disco Abracol",
        "precio": " $ 4,000 ",
        "cantidad": "16",
        "fecha": "2021-04-20",
        "descripcion": "Disco de uso domestico para corte de superficies metalicas",
        "categoria": "Otros",
        "url": "https://cdn1.totalcode.net/easy/product-zoom/es/disco-fino-metal-t1-4-1~2x3~64pg-abracol-2.webp"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d6619f"
        },
        "codigo": "158",
        "nombre": "Clavija Pequeña 10 Amp",
        "precio": " $ 1,700 ",
        "cantidad": "17",
        "fecha": "2021-04-20",
        "descripcion": "Clavija resistente a grandes voltajes, alta durabilidad, patas de planas que remiten energía adecuada.",
        "categoria": "Eléctricos",
        "url": "https://i2.wp.com/www.relco.com.co/wp-content/uploads/2018/10/1111-principal.jpg?fit=3427%2C2517&ssl=1"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661b5"
        },
        "codigo": "218",
        "nombre": "Interruptor + Toma",
        "precio": " $ 5,000 ",
        "cantidad": "16",
        "fecha": "2021-04-20",
        "descripcion": "\nInterruptor doméstico, toma polo a tierra, resistente a la corrosión, de fácil limpieza e instalación.",
        "categoria": "Eléctricos",
        "url": "https://tesluz.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeDRmTGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2cb6c46d818e16c0ec2e061eeb1539b19e740614/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/16160778.jpg?locale=es"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661b9"
        },
        "codigo": "229",
        "nombre": "Llana Dentada",
        "precio": " $ 10,500 ",
        "cantidad": "6",
        "fecha": "2021-04-20",
        "descripcion": "Llana lisa, resistente, duradera, fácil de usar.\n",
        "categoria": "Herramientas",
        "url": "https://listocorona.vteximg.com.br/arquivos/ids/157716-1000-1000/LLANA-DENTADA-BL-MPA-6-X-6-CORONA-960130001_1.jpg?v=637457345070000000"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d66196"
        },
        "codigo": "137",
        "nombre": "Chazo Plástico",
        "precio": " $ 50 ",
        "cantidad": "3",
        "fecha": "2021-04-20",
        "descripcion": "Chazo plastico resitente para perforaciones en concreto, madera, uso para cargas livianas",
        "categoria": "Otros",
        "url": "https://i0.wp.com/pinturasyyesos.com/wp-content/uploads/2021/02/Chazo-Plastico.jpg?fit=800%2C800&ssl=1"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d66186"
        },
        "codigo": "103",
        "nombre": "Acople Grival",
        "precio": " $ 5,500 ",
        "cantidad": "4",
        "fecha": "2021-10-21",
        "descripcion": "Acople de excelente calidad, extremos que se ajustan según el conector, material resistente y duradero.",
        "categoria": "Hogar",
        "url": "https://cdnx.jumpseller.com/construvirtual/image/9186657/resize/540/540?1612306197"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d6618b"
        },
        "codigo": "115",
        "nombre": "Antena Tdt",
        "precio": " $ 20,000 ",
        "cantidad": "3",
        "fecha": "2021-04-20",
        "descripcion": "Antena extensible pasiva para TV y decodificadores TDT. Diseño práctico y compacto. No requiere ningún tipo de alimentación adicional. Conector coaxial tipo F y antena de 4 secciones retráctil. Cable de 2 metros de largo. Fácil de ubicar gracias a su tamaño compacto y base con imán. Excelente recepción de señal para TV digital. Compatible con diferentes sistemas de TV y dispositivos de recepción de señal digital.",
        "categoria": "Hogar",
        "url": "https://www.tiendaoi.com/wp-content/uploads/2020/05/ANTENA-TDT.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d66190"
        },
        "codigo": "122",
        "nombre": "Brocha Caribe 2\" ",
        "precio": " $ 3,500 ",
        "cantidad": "2",
        "fecha": "2021-04-20",
        "descripcion": "Brocha de calidad garantizada, con cerdas naturales, mango plástico negro y una perforación en la punta para su fácil almacenamiento.",
        "categoria": "Herramientas",
        "url": "https://www.ferredistarco.com/wp-content/uploads/2019/06/caribe4.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661bf"
        },
        "codigo": "238",
        "nombre": "Metro 3mts ",
        "precio": " $ 4,200 ",
        "cantidad": "6",
        "fecha": "2021-04-20",
        "descripcion": "Flexómetro con botón de bloqueo de la cinta métrica, superficie de la cinta recubierta con Mylar, película plástica que protege la graduación hasta 10 veces más que las cintas barnizadas, gancho cero absoluto permite mayor precisión en las mediciones, resorte tratado a calor para una mayor vida útil del mecanismo que rebobina la cinta métrica, escala métrica y en pulgadas.",
        "categoria": "Herramientas",
        "url": "https://belltec.com.co/8188-large_default/cinta-metrica-global-plus.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661c3"
        },
        "codigo": "248",
        "nombre": "Panel Led 18W Redondo",
        "precio": " $ 15,000 ",
        "cantidad": "6",
        "fecha": "2021-04-20",
        "descripcion": "Panel led de alta calidad, de uso domestico para ambientar espacios",
        "categoria": "Eléctricos",
        "url": "https://ingecomsas.com/wp-content/uploads/2018/04/P18-5.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661c8"
        },
        "codigo": "256",
        "nombre": "Punta Taladro Stanley ",
        "precio": " $ 2,000 ",
        "cantidad": "5",
        "fecha": "2021-04-20",
        "descripcion": "Punta para taladro",
        "categoria": "Herramientas",
        "url": "https://www.ferreteriasamir.com/7153-medium_default/punta-estria-n-2-para-taladro-68-992-stanley.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661a1"
        },
        "codigo": "167",
        "nombre": "Clavo de Acero",
        "precio": " $ 100 ",
        "cantidad": "9",
        "fecha": "2021-04-20",
        "descripcion": "Clavos de alta resitencia para uso en superficies duras",
        "url": "https://www.ferredistarco.com/wp-content/uploads/2019/06/CLAVO-VERT.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661aa"
        },
        "codigo": "193",
        "nombre": "Disco Diamantado Continuo Uduke",
        "precio": " $ 7,000 ",
        "cantidad": "13",
        "fecha": "2021-04-20",
        "descripcion": "Disco de uso domestico para corte de superficies de concreto y ceramicas",
        "categoria": "Otros",
        "url": "https://tiendacasaandina.com/2443-large_default/uduke-disco-diamantado-continuo-4-1-2-ht30580.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661b0"
        },
        "codigo": "207",
        "nombre": "Extensión 9FT",
        "precio": " $ 5,000 ",
        "cantidad": "19",
        "fecha": "2021-04-20",
        "descripcion": "Con polo a tierra, para uso electrodoméstico de alto consumo como hornos, ventiladores, planchas y dispositivos de mediano y bajo consumo, Número de salidas: 3 salidas con polo a tierra, longitud: 4.5 Metros (incluida clavija), calibre: 14/ 3 AWG y Cubierta: SPT-3.",
        "categoria": "Eléctricos",
        "url": "https://ssdielect.com/8179-large_default/pl-9ft.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661b7"
        },
        "codigo": "222",
        "nombre": "Lápices Rojos",
        "precio": " $ 1,000 ",
        "cantidad": "5",
        "fecha": "2021-04-20",
        "descripcion": "Uso para carpinteria y contruccion",
        "categoria": "Herramientas",
        "url": "https://granpapeleriabolivar.com/wp-content/uploads/La%CC%81pices-Rojos-Faber-Castell-2.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661cb"
        },
        "codigo": "265",
        "nombre": "Sifón Flexible Gris Uduke",
        "precio": " $ 5,000 ",
        "cantidad": "16",
        "fecha": "2021-04-20",
        "descripcion": "Sifón flexible Facilita la utilización de sifón en condiciones especiales de instalación. Sifón plástico Elaborado en resina de alta ingeniería. Fácil instalación, limpieza y mantenimiento.",
        "categoria": "Tuberia",
        "url": "https://www.corbeta.com.co/media/catalog/product/7/7/7706157698697-b.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661cf"
        },
        "codigo": "280",
        "nombre": "Tapa Ciega Octagonal",
        "precio": " $ 600 ",
        "cantidad": "15",
        "fecha": "2021-04-20",
        "descripcion": "Tapa ciega para uso en conexiones electricas sin funcionamiento",
        "categoria": "Eléctricos",
        "url": "https://edelco.co/wp-content/uploads/2020/09/TAPA-CIEGA-PVC-OCTAGONAL.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661d6"
        },
        "codigo": "301",
        "nombre": "Unión Presión",
        "precio": " $ 500 ",
        "cantidad": "12",
        "fecha": "2021-04-20",
        "descripcion": "Accesorio de uso en tuberias de presion",
        "categoria": "Tuberia",
        "url": "https://cdn1.totalcode.net/easy/product-zoom/es/union-presion-1~2%22-blanco-x12und-1.webp"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d6618e"
        },
        "codigo": "118",
        "nombre": "Bombillo Led 9W",
        "precio": " $ 5,000 ",
        "cantidad": "9",
        "fecha": "2021-04-20",
        "descripcion": "Bombillo tipo led para uso doméstico, ambienta espacios del hogar con una luz fría y ahorradora",
        "categoria": "Eléctricos",
        "url": "https://ingecomsas.com/wp-content/uploads/2018/04/91-final.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661a3"
        },
        "codigo": "176",
        "nombre": "Codo Sanitario 90 Grados",
        "precio": " $ 2,400 ",
        "cantidad": "15",
        "fecha": "2021-04-20",
        "descripcion": "Accesorios de tuberia sanitaria",
        "categoria": "Tuberia",
        "url": "https://katensa.com/store/wp-content/uploads/2020/12/3ad1b7ff9874e4d80b910b444474f1cd19afdc64-1592148096-12a15.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d66193"
        },
        "codigo": "302",
        "nombre": "Caja Octagonal",
        "precio": " $ 900 ",
        "cantidad": "9",
        "fecha": "2021-04-20",
        "descripcion": "Caja de material altamente resistente, autoextinguible que brinda proteccion a la toma electrica",
        "categoria": "Eléctricos",
        "url": "https://cdn1.totalcode.net/easy/product-zoom/es/caja-conductiva-octagonal-pvc-1.webp"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661a5"
        },
        "codigo": "182",
        "nombre": "Convertidor Polo a Tierra",
        "precio": " $ 1,400 ",
        "cantidad": "15",
        "fecha": "2021-04-20",
        "descripcion": "Elaborado en plástico ABS retardarte de llama. 125v-15A. 1875 vatios",
        "categoria": "Eléctricos",
        "url": "https://ventaspop-images.staticgnt.com/3efuobFCRLWc-G08u_0nHHBI6lc=/filters:strip_exif():quality(90)/files/products/487/2889/01607frontal.png"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661a7"
        },
        "codigo": "187",
        "nombre": "Curva Eléctrica",
        "precio": " $ 1,100 ",
        "cantidad": "15",
        "fecha": "2021-04-20",
        "descripcion": "Curva electrica plastica, ideal para conecciones electricas",
        "categoria": "Eléctricos",
        "url": "https://www.ie.com.co/imagenes/productos/80001002112.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661ad"
        },
        "codigo": "197",
        "nombre": "Disco Madera Uduke",
        "precio": " $ 6,000 ",
        "cantidad": "7",
        "fecha": "2021-04-20",
        "descripcion": "Disco de uso domestico para corte de madera",
        "categoria": "Otros",
        "url": "https://www.ferroariasjr.com/wp-content/uploads/2021/05/DISCOS-Y-BROCAS-DISCO-MADERA-UDUKE-PROFESIONAL-4-12X-18-DMA115-HT30598-8391.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661b2"
        },
        "codigo": "211",
        "nombre": "Grifo Cromado Uduke",
        "precio": " $ 10,000 ",
        "cantidad": "5",
        "fecha": "2021-04-20",
        "descripcion": "Grifo para tanque, altamente resistente y durader",
        "categoria": "Hogar",
        "url": "https://cdn1.totalcode.net/easy/product-zoom/es/llave-01_9983_11-manguera-liviana-metal-cromada-1.webp"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661bd"
        },
        "codigo": "235",
        "nombre": "Llave Lavamanos ",
        "precio": " $ 10,500 ",
        "cantidad": "4",
        "fecha": "2021-04-20",
        "descripcion": "Grifería sencilla fabricada en polímeros de alta ingeniería, brindando un toque de elegancia, calidad y ahorro de consumo de agua en comparación a otras marcas.\n",
        "categoria": "Hogar",
        "url": "https://www.alfa.com.co/wp-content/uploads/2021/06/135030036-10.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661d2"
        },
        "codigo": "287",
        "nombre": "Tee Presión",
        "precio": " $ 700 ",
        "cantidad": "19",
        "fecha": "2021-04-20",
        "descripcion": "Accesorio de uso en tuberias de presion",
        "categoria": "Tuberia",
        "url": "https://cdn1.totalcode.net/easy/product-zoom/es/tee-presion-1~2%22-pvc-3.webp"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d66187"
        },
        "codigo": "104",
        "nombre": "Adaptador Hembra Presión",
        "precio": " $ 500 ",
        "cantidad": "10",
        "fecha": "2021-04-20",
        "descripcion": "Adapatador para tuberia de agua",
        "categoria": "Tuberia",
        "url": "https://sucasamateriales.com/Inicio/wp-content/uploads/2018/07/adaptador-presion-1_2_-hembra-3.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d66199"
        },
        "codigo": "144",
        "nombre": "Cinta De Enmascarar Cellux ",
        "precio": " $ 2,700 ",
        "cantidad": "13",
        "fecha": "2021-04-20",
        "descripcion": "Cinta adhesiva para uso sobre superficies en las que se trabaje con pinturas y acabados",
        "categoria": "Otros",
        "url": "https://www.papelerianacional.com.co/wp-content/uploads/2020/07/TJL01-1.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661ab"
        },
        "codigo": "194",
        "nombre": "Disco Diamantado Segmentado ",
        "precio": " $ 7,200 ",
        "cantidad": "2",
        "fecha": "2021-04-20",
        "descripcion": "Disco de uso domestico para corte de superficies de concreto",
        "categoria": "Otros",
        "url": "https://qsbtools.com/wp-content/uploads/2019/04/diamantado-segmentado-especial-copia.jpg"
      },{
        "_id": {
          "$oid": "61672412aeab4ac259d661ca"
        },
        "codigo": "260",
        "nombre": "Rodillo Goya Bricolage",
        "precio": " $ 7,000 ",
        "cantidad": "12",
        "fecha": "2021-04-20",
        "descripcion": "Para pintar sobre todo tipo de superficies, para todo tipo de pinturas",
        "categoria": "Herramientas",
        "url": "https://pinturasyyesos.com/wp-content/uploads/2021/02/Rodillo-Felpa-Bricolaje-9-Goya.jpg"
      }
  ]

  const [carritoCompras, setCarrito] = useState([])
  const [buscarProducto, setBuscar] = useState('')

  function agregarCotizacion(index){
    setCarrito([
      ...carritoCompras,
      productosData[index]
    ])
  }

    return(
      <Layout>
        <div className="container mx-auto mt-5 mb-5">
          <div className="row">

            <section className="col-md-10 mx-auto">
                <ul className="nav nav-tabs nav-tabsp nav-fill" id="productos" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="todos-tab" data-bs-toggle="tab" data-bs-target="#todos"
                            type="button" href="/#" role="tab" aria-controls="todos" aria-selected="true">Todos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="hogar-tab" data-bs-toggle="tab" data-bs-target="#hogar"
                            type="button" href="/#" role="tab" aria-controls="hogar" aria-selected="true">Hogar</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="electricos-tab" data-bs-toggle="tab" data-bs-target="#electricos"
                            type="button" href="/#"  role="tab" aria-controls="electricos" aria-selected="true">Eléctricos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="herramientas-tab" data-bs-toggle="tab" data-bs-target="#herramientas"
                            type="button" href="/#" role="tab" aria-controls="herramientas" aria-selected="true">Herramientas</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="tuberias-tab" data-bs-toggle="tab" data-bs-target="#tuberias"
                        ype="button" href="/#" role="tab" aria-controls="tuberias" aria-selected="true">Tuberías</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="otros-tab" data-bs-toggle="tab" data-bs-target="#otros"
                      type="button" href="todos" role="tab" aria-controls="otros" aria-selected="true">Otros</a>
                    </li>
                    <li className="nav-item fontsearch" style= {{marginLeft: "4%"}}>
                      {/* <i className="fas fa-search"></i> */}
                      <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" value = {buscarProducto} name = "buscarProducto"  onChange={event => setBuscar(event.target.value)}/>
                    </li>
                    <li className="nav-item">
                      <button type="button" data-bs-toggle="modal" data-bs-target="#cotizar" id="cart-btn">
                      <i className="material-icons" id="cart">shopping_cart</i></button>
                    </li>
                </ul>

                <div className="modal fade" tabIndex="-1" id="cotizar" aria-hidden="true" aria-labelledby="cotizacion">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content text-dark">

                      <div className="modal-header">
                        <h5 className="modal-title" id="cotizacion">Cotización</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style= {{backgroundColor: "white"}}>
                        </button>
                      </div>

                      <div className="modal-body">
                        <table className="table table-hover">
                            <thead className="table-light" id="thead">
                                <tr>
                                    <th>Producto</th>
                                    <th className="cantidad">Cantidad</th>
                                    <th>Costo</th>
                                    <th></th>
                                </tr>  
                            </thead>

                            <tbody>
                              {carritoCompras.map((i,index)=>(
                                <tr key={index}>
                                    <td>{i.nombre}</td>
                                    <td>
                                        <button ><i className="fas fa-minus hvr-push" style= {{paddingRight: "12px"}}></i></button>1 <button ><i className="fas fa-plus hvr-push" style={{paddingLeft: "12px"}}></i></button>
                                    </td>
                                    <td>{i.precio}</td>
                                    <td>
                                        <button><i className="fas fa-trash-alt hvr-push"></i></button>
                                    </td>
                                </tr>
                              ))}
                            </tbody>

                            <tfoot style= {{borderBottom: "hidden"}}>
        
                                {/* <tr>
                                    <td></td>
                                    <td style= {{fontWeight: "bolder"}}>Total</td>
                                    <td></td>
                                </tr>
                                
                                <tr>
                                    <td></td>
                                    <td>No tienes productos en el carrito</td>
                                </tr> */}
                              
                            </tfoot>
                        </table>
                      </div>

                      <div className="modal-footer">
                        <button type="button" className="btn2">Guardar</button>
                        <button type="button" className="btn btn-secondary ">Cancelar</button>
                      </div>

                    </div>
                  </div>
                </div>
              </section>

          </div>

          <div className="tab-content">

            <div className="tab-pane fade show active" id="todos" role="tabpanel" aria-labelledby="todos-tab">
              <section className="row">
                {productosData.filter(i => i.nombre.toLowerCase().match(buscarProducto.toLowerCase())).map((i,index)=>(
                  <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                    <div className="card m-auto shadow" style= {{width: "200px"}}>
                      <button type="button" className="tags" gloss="Añadir a cotización" onClick = {()=> agregarCotizacion(index)}><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                      <img src = {i.url} className="card-img-top" alt="Imagen producto" id="imagenes-producto"/>
                      <div className="card-body border-top text-start">
                        <h5 className="card-title color-marca">{i.nombre}</h5>
                        <p className="card-text text-black review__item__text">
                            {i.descripcion}
                        </p>
                        <h5 className="card-title text-black">{i.precio}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </div>

            <div className="tab-pane fade" id="hogar" role="tabpanel" aria-labelledby="hogar-tab">
                <section className="row">
                  {productosData.filter(i => i.nombre.toLowerCase().match(buscarProducto.toLowerCase()) && i.categoria === "Hogar").map((i,index)=>(
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                      <div className="card m-auto shadow" style= {{width: "200px"}}>
                        <button type="button" className="tags" gloss="Añadir a cotización"><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                        <img src = {i.url} className="card-img-top" alt="Imagen producto" id="imagenes-producto"/>
                        <div className="card-body border-top text-start">
                          <h5 className="card-title color-marca">{i.nombre}</h5>
                          <p className="card-text text-black review__item__text">
                              {i.descripcion}
                          </p>
                          <h5 className="card-title text-black">{i.precio}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
            </div>

            <div className="tab-pane fade" id="electricos" role="tabpanel" aria-labelledby="electricos-tab">
                <section className="row">
                  {productosData.filter(i => i.nombre.toLowerCase().match(buscarProducto.toLowerCase()) && i.categoria === "Eléctricos").map((i,index)=>(
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                      <div className="card m-auto shadow" style= {{width: "200px"}}>
                        <button type="button" className="tags" gloss="Añadir a cotización"><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                        <img src = {i.url} className="card-img-top" alt="Imagen producto" id="imagenes-producto"/>
                        <div className="card-body border-top text-start">
                          <h5 className="card-title color-marca">{i.nombre}</h5>
                          <p className="card-text text-black review__item__text">
                              {i.descripcion}
                          </p>
                          <h5 className="card-title text-black">{i.precio}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
            </div>

            <div className="tab-pane fade" id="herramientas" role="tabpanel" aria-labelledby="herramientas-tab">
                <section className="row">
                  {productosData.filter(i => i.nombre.toLowerCase().match(buscarProducto.toLowerCase()) &&  i.categoria === "Herramientas").map((i,index)=>(
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                      <div className="card m-auto shadow" style= {{width: "200px"}}>
                        <button type="button" className="tags" gloss="Añadir a cotización"><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                        <img src = {i.url} className="card-img-top" alt="Imagen producto" id="imagenes-producto"/>
                        <div className="card-body border-top text-start">
                          <h5 className="card-title color-marca">{i.nombre}</h5>
                          <p className="card-text text-black review__item__text">
                              {i.descripcion}
                          </p>
                          <h5 className="card-title text-black">{i.precio}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
            </div>

            <div className="tab-pane fade" id="tuberias" role="tabpanel" aria-labelledby="tuberias-tab">
                <section className="row">
                  {productosData.filter(i => i.nombre.toLowerCase().match(buscarProducto.toLowerCase()) && i.categoria === "Tuberia").map((i,index)=>(
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                      <div className="card m-auto shadow" style= {{width: "200px"}}>
                        <button type="button" className="tags" gloss="Añadir a cotización"><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                        <img src = {i.url} className="card-img-top" alt="Imagen producto" id="imagenes-producto"/>
                        <div className="card-body border-top text-start">
                            <h5 className="card-title color-marca">{i.nombre}</h5>
                            <p className="card-text text-black review__item__text">
                                {i.descripcion}
                            </p>
                            <h5 className="card-title text-black">{i.precio}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
            </div>

            <div className="tab-pane fade" id="otros" role="tabpanel" aria-labelledby="otros-tab">
                <section className="row">
                  {productosData.filter(i => i.nombre.toLowerCase().match(buscarProducto.toLowerCase()) && i.categoria === "Otros").map((i,index)=>(
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                      <div className="card m-auto shadow" style= {{width: "200px"}}>
                        <button type="button" className="tags" gloss="Añadir a cotización"><i className="fas fa-plus-square hvr-bounce-in" id="plus"></i></button>
                        <img src = {i.url} className="card-img-top" alt="Imagen producto" id="imagenes-producto"/>
                        <div className="card-body border-top text-start">
                          <h5 className="card-title color-marca">{i.nombre}</h5>
                          <p className="card-text text-black review__item__text">
                              {i.descripcion}
                          </p>
                          <h5 className="card-title text-black">{i.precio}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
            </div>

          </div>
        </div>
      </Layout>
    )
}

export default Productos

