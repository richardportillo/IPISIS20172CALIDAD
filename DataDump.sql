-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: ipisis
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `anuncio`
--

LOCK TABLES `anuncio` WRITE;
/*!40000 ALTER TABLE `anuncio` DISABLE KEYS */;
/*!40000 ALTER TABLE `anuncio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES (1,'Administración de la Información'),(2,'Algoritmina y Programación'),(3,'Arquitectura de Máquinas y Sistemas Operativos'),(4,'Ciencia Computacional'),(5,'Comunicación de Datos'),(6,'Elementos Sociales y Profesionales'),(7,'Física'),(8,'Formación Complementaria'),(9,'Ingeniería'),(10,'Ingeniería de Software'),(11,'Matemáticas'),(12,'Matemáticas Discretas'),(13,'Proyecto Integrador'),(14,'Sistemas de Información'),(15,'Socio-Humanística');
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `compromiso_adj_materia`
--

LOCK TABLES `compromiso_adj_materia` WRITE;
/*!40000 ALTER TABLE `compromiso_adj_materia` DISABLE KEYS */;
/*!40000 ALTER TABLE `compromiso_adj_materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `compromiso_adj_proyecto`
--

LOCK TABLES `compromiso_adj_proyecto` WRITE;
/*!40000 ALTER TABLE `compromiso_adj_proyecto` DISABLE KEYS */;
/*!40000 ALTER TABLE `compromiso_adj_proyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `compromiso_formato`
--

LOCK TABLES `compromiso_formato` WRITE;
/*!40000 ALTER TABLE `compromiso_formato` DISABLE KEYS */;
/*!40000 ALTER TABLE `compromiso_formato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `equipo`
--

LOCK TABLES `equipo` WRITE;
/*!40000 ALTER TABLE `equipo` DISABLE KEYS */;
INSERT INTO `equipo` VALUES (1,'Inscripción a proyectos integradores de sístemas','2017-08-13 22:02:39');
/*!40000 ALTER TABLE `equipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `equipo_estudiante`
--

LOCK TABLES `equipo_estudiante` WRITE;
/*!40000 ALTER TABLE `equipo_estudiante` DISABLE KEYS */;
INSERT INTO `equipo_estudiante` VALUES (1,'PENDIENTE',1,1),(2,'ACEPTADA',1,2);
/*!40000 ALTER TABLE `equipo_estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `estado`
--

LOCK TABLES `estado` WRITE;
/*!40000 ALTER TABLE `estado` DISABLE KEYS */;
/*!40000 ALTER TABLE `estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `estudiante`
--

LOCK TABLES `estudiante` WRITE;
/*!40000 ALTER TABLE `estudiante` DISABLE KEYS */;
INSERT INTO `estudiante` VALUES (1,'123456789','estudiante1','estudiante1',NULL),(2,'987654321','estudiante2','estudiante2',NULL);
/*!40000 ALTER TABLE `estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `formato`
--

LOCK TABLES `formato` WRITE;
/*!40000 ALTER TABLE `formato` DISABLE KEYS */;
/*!40000 ALTER TABLE `formato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `historial_idea`
--

LOCK TABLES `historial_idea` WRITE;
/*!40000 ALTER TABLE `historial_idea` DISABLE KEYS */;
INSERT INTO `historial_idea` VALUES (1,'2017-08-14 05:25:48','Idea creada','PROPUESTA',1),(2,'2017-08-14 05:30:20','Idea creada','PROPUESTA',2),(3,'2017-08-14 05:36:06','Idea creada','PROPUESTA',3),(4,'2017-08-14 05:44:09','Idea creada','PROPUESTA',4),(5,'2017-08-14 05:52:49','Idea creada','PROPUESTA',5),(6,'2017-08-14 05:56:15','Idea creada','PROPUESTA',6);
/*!40000 ALTER TABLE `historial_idea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `historial_inscripcion`
--

LOCK TABLES `historial_inscripcion` WRITE;
/*!40000 ALTER TABLE `historial_inscripcion` DISABLE KEYS */;
/*!40000 ALTER TABLE `historial_inscripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `idea`
--

LOCK TABLES `idea` WRITE;
/*!40000 ALTER TABLE `idea` DISABLE KEYS */;
INSERT INTO `idea` VALUES (1,'Shellability en grafos bipartitos y árboles','Algunas estructuras combinatorias como los grafos exhiben una propiedad conocida como shellability. Su utilidad se ha evidenciado, por ejemplo, en modelos de compresión y descompresión de información geográfica. \nA pesar de que determinar si un grafo es shellable o no puede consumir demasiados recursos computacionales, se desconoce si el problema es NP-Completo. Para tratar de comprender la naturaleza computacional de problemas con estas características es común restringir las instancias de entrada por clases particulares de grafos.\nEste proyecto pretende explorar el problema de la shellability de grafos para árboles y grafos bipartitos en dos vías complementarias: \n1) Mediante un análisis experimental que induzca conjeturas acerca del comportamiento asintótico del problema. Podría requerirse el uso de técnicas de paralelización.\n2) A través de su caracterización computacional como problema de decisión; es decir, verificar si el problema se incluye en la clase P o NP-Completa.\n\nReferencias\nGalvis, A., Cruz, R., Trefftz, C., & Branch, J. W. (2013, May). Parallelizing an algorithm to decide if a bipartite graph is shellable. In Electro/Information Technology (EIT), 2013 IEEE International Conference on (pp. 1-3). IEEE.\nIMAI, S. M. A. N. H. (2002). FAST AND SPACE-EFFICIENT ALGORITHMS FOR DECIDING SHELLABILITY OF SIMPLICIAL COMPLEXES OF LARGE SIZE USING/i-ASSIGNMENTS. In Mathematical Software: Proceedings of the First International Congress of Mathematical Software: Beijing, China, 17-19 August 2002 (p. 82). World Scientific.',2,1),(2,'3-coloración equitativa','Sea G=(V,E) un grafo con un conjunto finito de vértices V y una colección de aristas E que consta de pares distintos y no ordenados de vértices en V. Una coloración de G es una asignación de enteros (colores) a cada uno de los vértices del grafo de forma tal que pares de vértices adyacentes tomen colores distintos, formando así una partición del conjunto V por clases de color. En una coloración equitativa los cardinales de las clases de color difieren en, a lo sumo, un vértice.\nEl problema de decisión de la 3-coloración equitativa consiste, entonces, en la verificación de si es posible colorear equitativamente un grafo G con 3 colores. El problema es NP-Completo y, por lo tanto, se desconoce si existen algoritmos eficientes para su solución.\nEn los proyectos que se deriven de este concepto se pretende hacer una exploración de:\n1) La transición de fase de la 3-coloración equitativa. Varios problemas NP-Completos exhiben transiciones de fase análogas a las de los sistemas físicos. Interesa explorar el área donde ocurre esta transición pues esta se relaciona con el costo computacional.\n2) Un conjunto de heurísticas de solución que disminuyan el tiempo de búsqueda promedio del algoritmo. Su implementación puede requerir técnicas de procesamiento en paralelo.\n3) Aplicaciones existentes y potenciales del concepto.\n \nReferencias\nMeyer, W. (1973). Equitable coloring. The American Mathematical Monthly, 80(8), 920-922.\nKierstead, H. A., Kostochka, A. V., Mydlarz, M., & Szemerédi, E. (2010). A fast algorithm for equitable coloring. Combinatorica, 30(2), 217-224.\nLih, K. W. (2013). Equitable coloring of graphs. In Handbook of Combinatorial Optimization (pp. 1199-1248). Springer New York.\nKaliraj, K., Vivin, J. V., & Akbar Ali, M. M. (2014). On equitable colouring of Knödel graphs. International Journal of Computer Mathematics, 91(7), 1428-1433.',2,1),(3,'Algoritmo para la búsqueda de imágenes digitales (ABI)','En el proceso creativo de los artistas es muy común buscar referentes que apoyan el desarrollo de las obras, tanto desde lo conceptual como lo técnico. En el caso del fotógrafo, se hace común la creación de repositorios de imágenes (propias y de otros artistas) que están en constante crecimiento porque se ven alimentadas por los distintos procesos creativos y académicos.\n\nTeniendo un repositorio creciente de imágenes que corresponden a diferentes y diversas escenas, así como a distintos autores y técnicas, se hace muy dispendioso encontrar alguna imagen si sólo se tienen algunas referencias visuales de la imagen buscada o incluso una imagen de referencia. Un fotógrafo puede tener una colección de miles de imágenes agrupadas en decenas de carpetas digitales, el proceso creativo y académico exige encontrar en términos de segundos algunas imágenes pertinentes a su intención de búsqueda. Además, las imágenes de la colección son catalogadas por el fotógrafo a medida que las va reuniendo, siguiendo un proceso irregular que lleva a que no todas las imágenes están apropiadamente caracterizadas.\n\n¿Cómo expresar una intención de búsqueda de imágenes?\n¿Cómo encontrar en tiempos cortos una imagen deseada en una gran colección de imágenes digitales?\n¿Cómo aprovechar el proceso de búsqueda para precisar de forma automática la caracterización de las imágenes?',2,1),(4,'Identificación de Señales de Tráfico Mediante Procesamiento Digital de Imágenes','Implementar bajo técnicas de Procesamiento Digital de Imágenes y Aprendizaje de Máquinas una aplicación que identifique señales de tráfico para ser usada en un vehículo en marcha.',2,1),(5,'Apoyo al diagnóstico médico de Retinopatías utilizando técnicas de Procesamiento digital de imágenes y aprendizaje de máquinas','Aportar al desarrollo de algoritmos basados en Procesamiento Digital de Imágenes y técnicas de Aprendizaje de Máquinas para la ayuda del diagnóstico médico de Retinopatías.',2,1),(6,'IPISIS','El departamento de Ingeniería de Sistemas de la UdeA requiere automatizar la matrícula de los proyectos integradores y, además,  llevar un seguimiento de los compromisos por parte de los tutores y demás entes interesados y/o encargados.',3,2);
/*!40000 ALTER TABLE `idea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `idea_materia`
--

LOCK TABLES `idea_materia` WRITE;
/*!40000 ALTER TABLE `idea_materia` DISABLE KEYS */;
INSERT INTO `idea_materia` VALUES (1,1,2508103),(2,2,2508103),(3,3,2508103),(4,3,2508203),(5,4,2508103),(6,4,2508203),(7,5,2508103),(8,5,2508203),(9,6,2508103),(10,6,2508203);
/*!40000 ALTER TABLE `idea_materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `inscripcion`
--

LOCK TABLES `inscripcion` WRITE;
/*!40000 ALTER TABLE `inscripcion` DISABLE KEYS */;
/*!40000 ALTER TABLE `inscripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `materia`
--

LOCK TABLES `materia` WRITE;
/*!40000 ALTER TABLE `materia` DISABLE KEYS */;
INSERT INTO `materia` VALUES (2505562,'Ética Profesional',0,0,6),(2508102,'Introd. Ingeniería de Sistemas',0,0,6),(2508103,'Proyecto Integrador I',0,1,13),(2508107,'Lógica y Representación I',0,0,2),(2508111,'Matemáticas Discretas I',0,0,12),(2508202,'Lógica y Representación II',0,0,2),(2508203,'Proyecto Integrador II - Área Electiva',0,1,13),(2508205,'Modelos de Sistemas I',0,0,4),(2508206,'Matemáticas Discretas II',0,0,12),(2508245,'Técnicas de Programación y Lab.',0,0,2),(2508305,'Lógica y Representación III',0,0,2),(2508315,'Análisis y Diseño de Sistemas I',0,0,10),(2508325,'Teoría de la Probabilidad y Colas',0,0,9),(2508355,'Arquit. de Computadores y Lab.',0,0,3),(2508417,'Análisis y Diseño de Sistemas II',0,0,10),(2508425,'Estructuras Físicas de la Info. y Lab.',0,0,1),(2508475,'Teoría de Lenguajes y Lab.',0,0,2),(2508485,'Sistemas Operativos y Lab.',0,0,3),(2508525,'Bases de Datos y Lab.',0,0,1),(2508545,'Comunicaciones y Lab.',0,0,5),(2508572,'Fundamentos de Investigación',0,0,6),(2508585,'Arquitectura de Software',0,0,10),(2508613,'Métodos Estadísticos',0,0,9),(2508615,'Simulación de Sistemas y Lab.',0,0,4),(2508625,'Calidad de Software',0,0,10),(2508633,'Fund. de Sistemas de Información',0,0,14),(2508646,'Comunicaciones II',0,0,5),(2508834,'Gestión de Proyectos de S. I.',0,0,14),(2517350,'Formac. Ciudadana y Constituc.',0,0,8),(2536100,'Descubriendo la Física',0,0,7),(2536200,'Física Mecánica',0,0,7),(2536310,'Física de Campos',0,0,7),(2536503,'Lab. Integrado de Física',0,0,7),(2537100,'Vivamos la Universidad',0,0,8),(2538100,'Inglés I',0,0,8),(2538200,'Inglés II',0,0,8),(2538300,'Inglés III',0,0,8),(2538400,'Inglés IV',0,0,8),(2538500,'Inglés V',0,0,8),(2538600,'Inglés VI',0,0,8),(2539100,'Lectoescritura',0,0,15),(2555100,'Álgebra y Trigonometría',0,0,11),(2555120,'Geometría Vectorial y Analítica',0,0,11),(2555130,'Calculo Diferencial',0,0,11),(2555220,'Álgebra Lineal',0,0,11),(2555230,'Cálculo Integral',0,0,11);
/*!40000 ALTER TABLE `materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `materia_compromiso`
--

LOCK TABLES `materia_compromiso` WRITE;
/*!40000 ALTER TABLE `materia_compromiso` DISABLE KEYS */;
/*!40000 ALTER TABLE `materia_compromiso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `oferta`
--

LOCK TABLES `oferta` WRITE;
/*!40000 ALTER TABLE `oferta` DISABLE KEYS */;
/*!40000 ALTER TABLE `oferta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `preinscripcion`
--

LOCK TABLES `preinscripcion` WRITE;
/*!40000 ALTER TABLE `preinscripcion` DISABLE KEYS */;
/*!40000 ALTER TABLE `preinscripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `prerrequisito`
--

LOCK TABLES `prerrequisito` WRITE;
/*!40000 ALTER TABLE `prerrequisito` DISABLE KEYS */;
INSERT INTO `prerrequisito` VALUES (1,1,2508245),(2,1,2508305),(3,1,2508613),(4,1,2538300),(5,1,2555220),(6,2,2508245),(7,2,2508305),(8,2,2508613),(9,2,2538300),(10,2,2555220),(11,3,2508245),(12,3,2508525),(13,3,2538300),(14,4,2536200),(15,4,2555100),(16,4,2555120),(17,4,2555130),(18,4,2555220),(19,4,2555230),(20,5,2555100),(21,5,2555120),(22,5,2555130),(23,5,2555220),(24,5,2555230),(25,6,2508315),(26,6,2508425);
/*!40000 ALTER TABLE `prerrequisito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `profesor`
--

LOCK TABLES `profesor` WRITE;
/*!40000 ALTER TABLE `profesor` DISABLE KEYS */;
INSERT INTO `profesor` VALUES (1,'profesor1','profesor1',NULL,NULL);
/*!40000 ALTER TABLE `profesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `proponente`
--

LOCK TABLES `proponente` WRITE;
/*!40000 ALTER TABLE `proponente` DISABLE KEYS */;
INSERT INTO `proponente` VALUES (1,'1','Gabriel Dario Uribe','gabriel.uribe@udea.edu.co',1),(2,'1','Andrés David Santamaría','andres.santamaria@udea.edu.co',1),(3,'1','Gabriel Darío Uribe','gabriel.dario@udea.edu.co',2),(4,'1','Andrés David Santamaria','andres.santamaria@udea.edu.co',2),(5,'2','Pablo Pulgarín','pablo.pulgarin@udea.edu.co',3),(6,'2','David Stephen Fernández Mc Cann','david.fernandez@udea.edu.co',4),(7,'1','David Stephen Fernández Mc Cann','david.fernandez@udea.edu.co',5),(8,'1','Hernando Silva','hsilva@udea.edu.co',6),(9,'1','Luz Viviana Cobaleda','luz.cobaleda@udea.edu.co',6);
/*!40000 ALTER TABLE `proponente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `proyecto`
--

LOCK TABLES `proyecto` WRITE;
/*!40000 ALTER TABLE `proyecto` DISABLE KEYS */;
/*!40000 ALTER TABLE `proyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `proyecto_compromiso`
--

LOCK TABLES `proyecto_compromiso` WRITE;
/*!40000 ALTER TABLE `proyecto_compromiso` DISABLE KEYS */;
/*!40000 ALTER TABLE `proyecto_compromiso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `seccion`
--

LOCK TABLES `seccion` WRITE;
/*!40000 ALTER TABLE `seccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `seccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `seguimiento_formato`
--

LOCK TABLES `seguimiento_formato` WRITE;
/*!40000 ALTER TABLE `seguimiento_formato` DISABLE KEYS */;
/*!40000 ALTER TABLE `seguimiento_formato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `semestre`
--

LOCK TABLES `semestre` WRITE;
/*!40000 ALTER TABLE `semestre` DISABLE KEYS */;
INSERT INTO `semestre` VALUES ('2017-2','2017-06-06 00:00:00','2017-11-24 00:00:00','2017-06-06 00:00:00','2017-06-09 00:00:00');
/*!40000 ALTER TABLE `semestre` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-14  0:58:13
