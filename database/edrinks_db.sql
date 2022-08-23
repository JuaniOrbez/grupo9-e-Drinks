-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema edrinks_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema edrinks_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `edrinks_db` DEFAULT CHARACTER SET utf8 ;
USE `edrinks_db` ;

-- -----------------------------------------------------
-- Table `products_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `products_category` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `description` VARCHAR(1000) NULL DEFAULT NULL,
  `category_id` INT(11) NOT NULL,
  `size` VARCHAR(50) NOT NULL,
  `price` VARCHAR(50) NOT NULL,
  `in_offer` INT(11) NULL DEFAULT NULL,
  `in_home` INT(11) NULL DEFAULT NULL,
  `image` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 29
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `order` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `cart_id` INT(11) NOT NULL,
  `product_id` INT(11) NOT NULL,
  `cantidad` INT(11) NOT NULL,
  `subtotal` DECIMAL(11,2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `users_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users_category` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `category_id` INT(11) NOT NULL,
  `age` VARCHAR(50) NOT NULL,
  `image` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cart` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `order_id` INT(11) NOT NULL,
  `total` DECIMAL(11,2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- -----------------------------------------------------
-- Relación users_category
-- -----------------------------------------------------

ALTER TABLE `users` 
ADD CONSTRAINT `fk_users_category`
  FOREIGN KEY (`category_id`)
  REFERENCES `edrinks_db`.`users_category` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- -----------------------------------------------------
-- Relación products_category
-- -----------------------------------------------------

ALTER TABLE `products` 
ADD CONSTRAINT `fk_products_category`
  FOREIGN KEY (`category_id`)
  REFERENCES `edrinks_db`.`products_category` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- -----------------------------------------------------
-- Relación order_cart
-- -----------------------------------------------------

ALTER TABLE `order` 
ADD CONSTRAINT `fk_order_cart`
  FOREIGN KEY (`cart_id`)
  REFERENCES `edrinks_db`.`cart` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- -----------------------------------------------------
-- Relación order_products
-- -----------------------------------------------------

ALTER TABLE `order` 
ADD CONSTRAINT `fk_order_products`
  FOREIGN KEY (`product_id`)
  REFERENCES `edrinks_db`.`products` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- -----------------------------------------------------
-- Relación cart_users
-- -----------------------------------------------------

ALTER TABLE `cart` 
ADD CONSTRAINT `fk_cart_users`
  FOREIGN KEY (`user_id`)
  REFERENCES `edrinks_db`.`users` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- -----------------------------------------------------
-- Relación cart_order
-- -----------------------------------------------------

ALTER TABLE `cart` 
ADD CONSTRAINT `fk_cart_order`
  FOREIGN KEY (`order_id`)
  REFERENCES `edrinks_db`.`order` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- -----------------------------------------------------
-- Data products_category
-- -----------------------------------------------------

INSERT INTO `products_category` (`id`, `name`) VALUES ('1', 'Whiskys');
INSERT INTO `products_category` (`id`, `name`) VALUES ('2', 'Espumantes');
INSERT INTO `products_category` (`id`, `name`) VALUES ('3', 'Cervezas');
INSERT INTO `products_category` (`id`, `name`) VALUES ('4', 'Gins');
INSERT INTO `products_category` (`id`, `name`) VALUES ('5', 'Vinos');
INSERT INTO `products_category` (`id`, `name`) VALUES ('6', 'Licores');

-- -----------------------------------------------------
-- Data users_category
-- -----------------------------------------------------

INSERT INTO `users_category` (`id`, `name`) VALUES ('1', 'Usuario');
INSERT INTO `users_category` (`id`, `name`) VALUES ('2', 'Administrador');

-- -----------------------------------------------------
-- Data products
-- -----------------------------------------------------

INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('1', 'WHISKY JIM BEAM BOURBON 750 ML', 'Origen: USA. Elegante. Suave. Refinado. Ese es el resultado de un bourbon añejado durante 4 años en barricas nuevas de roble blanco americano tostado. No obstante, vale la pena esforzarse por cada gota y nos encanta la idea de seguir la receta de nuestro tatarabuelo al pie de la letra. Desde 1795, la familia Beam ha elaborado y destilado Jim Beam con un gran respeto por los valores familiares. Siete generaciones más tarde, se continúa elaborando con los mismos valores y se añeja el doble de tiempo que requiere la ley. Quizás eso explique por qué Jim Beam es el bourbon n.º 1 del mundo en la actualidad', '1', '750', '$ 4529', '0', '0', 'whisky-jimBean.jpg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('2', 'WHISKY MONKEY SHOULDER 700 ML', 'Whisky Monkey es un excelente whisky de malta mezclado de William Grant, hecho con maltas individuales de tres famosas destilerías de Speyside. El resultado es un whisky escocés suave, cremoso, flexible y muy maltoso que funciona excelentemente limpio, sobre hielo o en cócteles de whisky (donde realmente sobresale)', '1', '700', '$ 7995', '0', '0', 'monkey-shoulder-700ml.jpeg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('3', 'WHISKY GRANTS TRIPLE WOOD BLEND 750 MML ', 'Muchos whiskies toman su sabor de un solo barril, pero maduramos Grant´s Triple Wood en tres tipos diferentes de madera: el barril Virgin Oak proporciona una robustez picante, el roble americano otorga una sutil suavidad a la vainilla y el relleno Bourbon ofrece una dulzura de azúcar morena, lo que resulta en una más suave y rica , sabor más suave.', '1', '750', '$ 2999', '0', '1', 'grants-750ml.jpeg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('4', 'WHISKY MAKERS MARK 750 ML', 'Este whisky cambió la forma en que concebimos el bourbon, todo porque un hombre cambió su forma de pensar sobre su elaboración. Bill Samuels, Sr. simplemente quería un whisky que tuviera un sabor excepcional. Makers Mark, ni amargo ni fuerte, está hecho con trigo blando rojo de invierno en lugar del centeno habitual, lo que logra un bourbon con un sabor único. Para garantizar la consistencia, rotamos cada barril a mano y añejamos nuestro bourbon según el sabor, no el tiempo.', '1', '750', '$ 8650', '0', '0', 'maker-marks-750ml.jpg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('5', 'WHISKY JIM BEAM HONEY MIEL 750 ML', 'Jim Beam Honey abre un capítulo suave en la leyenda de Jim Beam con notas complejas de caramelo, roble, vainilla y un final de miel dulce.Hecho con Kentucky Straight Bourbon Whiskey, infundido lentamente con miel dorada natural para producir un sabor sofisticado, profundo y rico con aroma a miel.Los amantes de los famosos sabores de Jim Beam se enamorarán de Jim Beam® Honey. Infundido con un toque de dulzura y sabor suave, se mezcla perfectamente con ginger ale o jugo de manzana y Soda. El toque de miel en este licor con sabores es perfecto, ni demasiado fuerte ni demasiado sutil, y sus cálidos tonos de licor permiten que brille la dulzura de la miel, por lo que es ideal para tomar un sorbo directamente.', '1', '750', '$ 4526', '0', '0', 'beam-honey-750ml.jpg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('6', 'TRUMPETER DOUX RESERVE 750 ML', 'VARIEDAD 85% Gewürztraminer, 15% Riesling de Valle de Uco. ENÓLOGO Lic. Mariano Di Paola. POTENCIAL DE GUARDA 3 años. SUGERENCIAS DE ACOMPAÑAMIENTO Aperitivos y tapeo, fiambres, terrina de campo, patés y foie gras, empanadas salteñas picantes, humita, omelettes, comidas con hierbas y especias, cocina vietnamita y marroquí, quesos intensos y fuertes, postres con caramelo, vainilla, coco y merengue, dulces regionales, entre otros. NOTAS DE CATA  Amarillo verdoso brillante. Con aromas a frutas blancas (melón,durazno, pera y manzana verde), con un toque de hierba fresca y flores. En boca se presenta muy frutado con algún dejo cítrico. Posee un equilibrado balance entre azúcar y acidez. Fluidez y frescura caracterizan a este blanco tan particular.', '5', '750', '$ 1414', '0', '0', 'trumpeter-reserve-doux.png');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('7', 'RUTINI GUALTALLARY SINGLE VINEYARD CABERNET FRANC 750 ML', 'Es un vino que a la vista presenta color rojo intenso con matices púrpuras. En nariz se perciben notas de frutos negros como moras y notas de hierbas frescas con un suave fondo mentolado combinadas también con notas de vainilla y tabaco. En boca es envolvente con sedosos taninos, posee buena acidez y un duradero final.', '5', '750', '$ 4827', '1', '1', 'Rutini-Gualtallary .jpg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('8', 'VINO DON NICANOR BARREL SELECT CABERNET FRANC 750 ML', 'Vino de color rojo rubí. Aromáticamente es fresco, con algunas notas de confituras como pasas, frutos rojos maduros y especias. Además, presenta notas de madera como chocolate amargo y ahumado. En boca tiene entrada dulce, taninos firmes y muy buena estructura.', '5', '750', '$ 1599', '0', '1', 'Don-Nicanor.jpg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('9', 'NORTON PERDRIEL SERIES MALBEC 750 ML', 'Color rojo intenso. Complejos aromas de frutos rojos como ciruelas y guindas maduras. Notas de especias.', '5', '750', '$ 1349', '0', '0', 'vino-rutini.png');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('10', 'CHAMPAGNE CRISTAL LOUIS ROEDERER', 'La cuvée Cristal está elaborada a partir de Grands Crus de la Montaña de Reims, el Valle del Marne y la Côte des Blancs. Cuenta con un promedio de 6 años de maduración en cavas y un reposo de 8 meses tras el degüelle, a fin de perfeccionar su madurez.', '2', '1000', '$ 199000', '0', '1', 'champ-cristal-brut-2009-louis-roederer.jpg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('11', 'PROSECCO DOC ITALIANO FREIXENET', 'Freixenet Prosecco está elaborado con las mejores uvas de Glera de la región italiana de Véneto. Freixenet extiende su amplia experiencia y prestigio al Prosecco uniendo una calidad superior con una belleza espectacular. Un vino espumoso afrutado, fresco y seductor, con azúcares naturales de color amarillo pajizo con viva efervescencia y aromas frescos a cítricos, manzanas y flores. Celebra con estilo con Freixenet Prosecco.', '2', '1500', '$ 6499', '0', '0', 'freixenet-prosecco-doc.png');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('12', 'CHAMPAGNE RUTINI BRUT NATURE ', 'VARIEDAD50% Chardonnay, 50% Pinot Noir de Gualtallary. CRIANZA 24 meses sobre lías. ENÓLOGO Lic. Mariano Di Paola. POTENCIAL DE GUARDA 5 años. SUGERENCIAS DE ACOMPAÑAMIENTO Aperitivo, salmón rosado, entradas frías, frutos de mar, ostras crustáceos, patés y foies gras, frutos de mar, pastelería seca. NOTAS DE CATA Dorado con reflejos amarillo verdosos. Burbuja pequeña, perezosa y muy persistente. Nariz compleja, donde se integran armoniosamente el aroma de pan sin hornear con frutas. En boca se perciben notas cítricas y tostadas, con un final limpio y fresco.', '2', '750', '$ 3929', '0', '0', 'Champagne-rutini.jpg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('13', 'CHAMPAGNE SALENTEIN BRUT NATURE', 'Champagne Brut Nature Bodega Salentein.', '2', '750', '$ 975', '0', '0', 'salenteinbrutnature.png');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('14', 'CHAMPAGNE SALENTEIN BRUT ROSE', 'De color rosado brillante delicado, posee un intenso aroma de cerezas y frambuesas típico del Pinot Noir de zonas de altura. En boca es amplio, frutado y fresco. Burbuja fina y persistente.', '2', '750', '$ 999', '0', '0', 'salenteinbrutrose.png');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('15', 'GIN HENDRICK´S DRY 700 ML', 'La infusión de rosa y pepino. Ninguna otra ginebra tiene un sabor como el de HENDRICK´S, porque ninguna otra ginebra se elabora como HENDRICK´S. Infusiona su ginebra con la extraordinaria Rosa Damascena de Bulgaria y pepinos seleccionados especialmente de los mejores productores. La ginebra HENDRICK´S se elabora a mano en pequeños lotes de solo 500 agradables litros a la vez, lo que ofrece a la maestra destiladora Lesley Gracie un mayor control de su cuidado arte. La maestra HENDRICK´S es la unión de dos bebidas espirituosas diferentes de dos alambiques distintos: El alambique Bennett y el alambique Carter-Head. Mediante la combinación de los dos, podemos crear una ginebra extraordinariamente suave que tiene el carácter necesario y un equilibrio de sutiles sabores.', '4', '700', '$ 8889', '1', '1', 'gin-hendricks.jpeg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('16', 'GIN BOMBAY RASPBERRY 700 ML', 'En nariz huele a enebro picante y amaderado, acompañados de ciertos toques cítricos.En paladar, es dulce y redondeado con un intenso sabor a fresa natural. Bombay Bramble está inspirada en el clásico cóctel Bramble, pero con el gusto que una marca como Bombay puede dar.', '4', '700', '$ 4600', '0', '1', 'gin-bombay.jpg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('17', 'GIN HERACLITO LONDON DRY X 750ML', 'Heraclito: Es un gin de corte tradicional sujeto a reglamentaciones específicas para calificar dentro de la categoría London Dry. Desde suelo Argentino y de la mano de su creador, Julian Varea, nace este gin compuesto por 13 botánicos. Aromaticamente brinda una salida firme de enebro y coriandro que se combina con notas cítricas provenientes de componentes como el limón, la lima y la naranja Curazao. En boca es aterciopelado, con buen volumen y surgen algunas notas complejas donde se destacan la menta y el romero.', '4', '750', '$ 1529', '0', '0', 'gin-beefeater.jpeg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('18', 'GIN TANQUERAY EXPORT STRENGTH LONDON DRY 750 ML', 'Tanqueray London Dry Gin Export Strength', '4', '750', '$ 2692', '0', '0', 'gin-tanqueray.png');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('19', 'GIN GORDONS 700ML LONDON DRY 700 ML', ' Gin Gordon´s London Dry Botella 700 ml La receta con la que se elabora Gordon´s Gin data del año 1769, cuando un terrateniente de origen escocés llamado Alexander Gordon la creó y la empezó a utilizar en la destilería que fundó en el sur de Londres ese mismo año. ', '4', '700', '$ 1720', '0', '0', 'gin-gordon.jpg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('20', 'LICOR BAILEYS CARAMEL 750 ML', 'Baileys Salted Caramel es una nueva edición de sabor a la lujosa colección BAILEYS Original Irish Cream Liqueur. Esta atractiva nueva variante mezcla caramelo rico y complejo con Baileys Original Irish Cream Liqueur para crear un sabor a caramelo, pero con un acabado salado moderno. Altamente mezclable, Baileys Salted Caramel es una excelente adición a cualquier cóctel o copa buscando un toque de estilo.', '6', '750', '$ 2800', '0', '1', 'baileys.png');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('21', 'LICOR FRANGELICO 750 ML', 'FRANGELICO SEDUCE A LOS SENTIDOS CON EL INTENSO SABOR DE LAS AVELLANAS ITALIANAS. ESTA VARIEDAD, LIGERAMENTE MÁS GRANDE, MÁS REDONDEADA Y UNIFORME, RESULTA IDEAL PARA EL TOSTADO Y NO TIENE AMARGOR, LO QUE APORTA A FRANGELICO SU SORPRENDENTE DULZURA DORADA.', '6', '750', '$ 3270', '0', '0', 'frangelico.png');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('22', 'BORGUETTI LIQUORE CAFFE 750 ML', 'Borguetti Licor de Caffe Expresso Es el resultado de una combinación exquisita. La de las variedades de los cafés Arábica y Robusta. El primero, suave pero muy rico, con su refinado blend, cultivado a gran altura en Sudamérica. Y el segundo, que con sus granos agrega cuerpo y profundidad, aporta el exquisito aroma del café.', '6', '750', '$ 1959', '0', '0', 'borghetti.jpg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('23', 'AMARULA 750 ML', 'Amarula 750 ml Dulce, cremoso y con sabor intenso a fruta en el paladar, con notas de caramelo, especias picantes y un toque cítrico, tiene un sabor irresistible que le provoca más deseo. El fruto del que se extrae el licor Amarula con su sabor único proviene del árbol marula (Scelerocarya birrea).', '6', '750', '$ 3699', '0', '0', 'amarula.jpg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('24', 'LICOR SHERIDANS 750 ML', 'Sheridan es un licor introducido por primera vez en 1994. Se produce en Dublín por Thomas Sheridan & Sons. La idea fue concebida originalmente en la década de 1980 por Pat Rigby (Director de Investigación y Desarrollo para Baileys), para agregar otro producto a la empresa de marca única. La producción comenzó en 1989. La empresa no pudo encontrar en Irlanda quién pudiera fabricar las botellas de vidrio, por lo que las botellas originales fueron hechas en Italia. Actualmente, las botellas están hechas en Francia e Inglaterra. Se embotella de forma única, que consta de dos secciones separadas por vidrio, pero fusionan. Una sección está llena de un licor negro, que consiste en café y whisky, mientras que el otro está lleno de un licor blanco de chocolate blanco con leche. Al verter en un vaso, el licor blanco debe flotar sobre el licor negro.', '6', '750', '$ 3697', '0', '0', 'sheridans.jpg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('25', 'CERVEZA CORONA 355 ML', 'Cerveza suave y rica para disfrutar con amigos.', '3', '355', '$ 367', '0', '0', 'corona.jpg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('26', 'CERVEZA STELLA ARTOIS LATA 473 ML', 'La cerveza belga número 1 en ventas a nivel mundial. Stella Artois tiene una rica herencia que se remonta al año 1366 en Leuven, Bélgica, y es hoy en día el estándar de oro de la calidad en más de 80 países. Este nuevo calibre que nos ofrece la marca es ideal para aquellos que quieren \"un poco más\" que la clásica botella de 330ml.', '3', '473', '$ 130', '0', '0', 'stella-artois.jpg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('27', 'CERVEZA HEINEKEN', 'Cerveza suave y rica para disfrutar con amigos.', '3', '500', '$ 367', '0', '0', 'heineken.jpg');
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `size`, `price`, `in_offer`, `in_home`, `image`) VALUES ('28', 'CERVEZA QUILMES', 'Cerveza suave y rica para disfrutar con amigos.', '3', '500', '$ 367', '0', '0', 'quilmes.jpg');

-- -----------------------------------------------------
-- Data users
-- -----------------------------------------------------

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `category_id`, `age`, `image`) VALUES ('1', 'ANDRES', 'PANDO', 'andrespando@gmail.com', '$2a$10$a0QA8pQqpmiS7lSZ/qJk4eY1TIF76EqtJV3ybcGfmjgx8nmhynbQq', '2', 'YES', '1656540322191_img.png');
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `category_id`, `age`, `image`) VALUES ('2', 'Juan', 'Orbez', 'orbez@gmail.com', '$2a$10$HW5.Gf1ZemOVqstUGj4DLeLhKXCM7IirU4EFGtuBgvu.w6yf8sYiW', '2', 'YES', '1656531487443_img.jpg');