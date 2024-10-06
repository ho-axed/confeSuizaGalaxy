-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 06, 2024 at 03:43 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `confesuizagalaxy`
--

-- --------------------------------------------------------

--
-- Table structure for table `specimens`
--

CREATE TABLE `specimens` (
  `idSpecimens` int(11) NOT NULL,
  `name` varchar(180) DEFAULT NULL,
  `description` mediumtext DEFAULT NULL,
  `image` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `specimens`
--

INSERT INTO `specimens` (`idSpecimens`, `name`, `description`,`image`) VALUES
(1, 'Gusano de Esmeralda Química (Chemovermis viridis)', 'Este gusano mide alrededor de 14 cm y posee una piel gruesa recubierta por una capa mucosa de bacterias quimiosintéticas, que le dan un distintivo tono verdoso. Estas bacterias metabolizan sulfato de hidrógeno, dióxido de carbono y oxígeno, generando energía que el gusano utiliza para sobrevivir en ambientes ricos en compuestos químicos tóxicos.', 'media/chemovermis-viridis.jpeg'),
(2, 'Pulpo Luminiscente de Éter (Octolumina quimera)', 'Este molusco fluorescente, similar a un pulpo, tiene 4 tentáculos y un cuerpo que brilla en tonos etéreos. En su interior alberga bacterias quimiosintéticas que transforman organismos absorbidos por sus tentáculos en energía. Este proceso lo mantiene activo y adaptado a un entorno subacuático donde la luz solar es inexistente.', 'media/pulpodumbo.png'),
(3, 'Pez Incandescente de Fuego Frío (Ignisfex thermalis)', 'Este pez de 10 cm vive en las profundidades cercanas a fuentes termales y filtraciones de metano. Posee bacterias quimiosintéticas en sus branquias que le permiten procesar sulfuro de hidrógeno, generando energía vital para su supervivencia en estas zonas extremas, donde prevalecen los elementos químicos sobre la luz.'),
(4, 'Crustáceo Bicolor (Chimera crustacea)', 'El Crustáceo Bicolor mide aproximadamente 15 cm y presenta un exoesqueleto robusto de color naranja brillante con manchas negras, lo que le permite camuflarse en su entorno. Sus patas están adaptadas para excavar en el fondo marino. Este crustáceo tiene bacterias quimiosintéticas en su exoesqueleto que metabolizan sulfuro de hidrógeno, convirtiéndolo en energía utilizable. Se alimenta de materia orgánica y pequeños organismos del sustrato, optimizando su supervivencia en ambientes oscuros.'),
(5, 'Medusa Fluorescente (Luminara medusoidea)', 'La Medusa Fluorescente tiene un diámetro de 25 cm y una campana translúcida que emite un brillo azul en la oscuridad. Sus tentáculos, diseñados para capturar organismos microscópicos, albergan bacterias quimiosintéticas que metabolizan sulfuro de hidrógeno y metano para producir energía. Captura plancton a través de sus tentáculos y se beneficia de la energía generada por las bacterias, estableciendo una simbiosis eficaz en su entorno sin luz solar.'),
(6, 'Anémona de Profundidad (Anémona profundis)', 'La Anémona de Profundidad alcanza una altura de 30 cm y presenta tentáculos en colores vibrantes como rojo y púrpura. En su base, alberga bacterias quimiosintéticas que metabolizan sulfuro de hidrógeno, produciendo energía para su crecimiento. Filtra el agua para atrapar pequeños organismos y se nutre de los nutrientes proporcionados por las bacterias, prosperando en un ecosistema donde la luz solar no está presente.'),
(7, 'Cazador Espectral (Spectridae venenosa)', 'El Cazador Espectral mide entre 30 y 40 cm, con un cuerpo flexible y translúcido que le permite moverse sigilosamente en las profundidades. Se camufla fácilmente en su entorno gracias a su piel iridiscente y cuenta con bacterias quimiosintéticas que le proporcionan energía cuando no está cazando.\nEspecializado en atacar presas pequeñas como el Gusano de Esmeralda Química o el Pez Incandescente de Fuego Frío, inyecta un veneno paralizante a través de un aguijón retráctil. Su tamaño compacto le permite emboscar con agilidad y aprovechar oportunidades cuando otros organismos como el Pulpo Luminiscente de Éter atraen a sus presas.\nEste depredador equilibra la energía que obtiene de sus bacterias y su caza, adaptándose perfectamente a su entorno quimiosintético.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `specimens`
--
ALTER TABLE `specimens`
  ADD PRIMARY KEY (`idSpecimens`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `specimens`
--
ALTER TABLE `specimens`
  MODIFY `idSpecimens` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
