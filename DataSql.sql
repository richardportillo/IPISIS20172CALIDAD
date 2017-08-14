INSERT INTO area (id, nombre) VALUES
(1,'Administración de la Información'),
(2,'Algoritmina y Programación'),
(3,'Arquitectura de Máquinas y Sistemas Operativos'),
(4,'Ciencia Computacional'),
(5,'Comunicación de Datos'),
(6,'Elementos Sociales y Profesionales'),
(7,'Física'),
(8,'Formación Complementaria'),
(9,'Ingeniería'),
(10,'Ingeniería de Software'),
(11,'Matemáticas'),
(12,'Matemáticas Discretas'),
(13,'Proyecto Integrador'),
(14,'Sistemas de Información'),
(15,'Socio-Humanística');


INSERT INTO `materia`(codigo, nombre, electiva, area_id, admin_proyecto) VALUES 
(2505562,'Ética Profesional','0',6,'0'),
(2508102,'Introd. Ingeniería de Sistemas','0',6,'0'),
(2508103,'Proyecto Integrador I','0',13,'1'),
(2508107,'Lógica y Representación I','0',2,'0'),
(2508111,'Matemáticas Discretas I','0',12,'0'),
(2508202,'Lógica y Representación II','0',2,'0'),
(2508203,'Proyecto Integrador II - Área Electiva','0',13,'1'),
(2508205,'Modelos de Sistemas I','0',4,'0'),
(2508206,'Matemáticas Discretas II','0',12,'0'),
(2508245,'Técnicas de Programación y Lab.','0',2,'0'),
(2508305,'Lógica y Representación III','0',2,'0'),
(2508315,'Análisis y Diseño de Sistemas I','0',10,'0'),
(2508325,'Teoría de la Probabilidad y Colas','0',9,'0'),
(2508355,'Arquit. de Computadores y Lab.','0',3,'0'),
(2508417,'Análisis y Diseño de Sistemas II','0',10,'0'),
(2508425,'Estructuras Físicas de la Info. y Lab.','0',1,'0'),
(2508475,'Teoría de Lenguajes y Lab.','0',2,'0'),
(2508485,'Sistemas Operativos y Lab.','0',3,'0'),
(2508525,'Bases de Datos y Lab.','0',1,'0'),
(2508545,'Comunicaciones y Lab.','0',5,'0'),
(2508572,'Fundamentos de Investigación','0',6,'0'),
(2508585,'Arquitectura de Software','0',10,'0'),
(2508613,'Métodos Estadísticos','0',9,'0'),
(2508615,'Simulación de Sistemas y Lab.','0',4,'0'),
(2508625,'Calidad de Software','0',10,'0'),
(2508633,'Fund. de Sistemas de Información','0',14,'0'),
(2508646,'Comunicaciones II','0',5,'0'),
(2508834,'Gestión de Proyectos de S. I.','0',14,'0'),
(2517350,'Formac. Ciudadana y Constituc.','0',8,'0'),
(2536100,'Descubriendo la Física','0',7,'0'),
(2536200,'Física Mecánica','0',7,'0'),
(2536310,'Física de Campos','0',7,'0'),
(2536503,'Lab. Integrado de Física','0',7,'0'),
(2537100,'Vivamos la Universidad','0',8,'0'),
(2538100,'Inglés I','0',8,'0'),
(2538200,'Inglés II','0',8,'0'),
(2538300,'Inglés III','0',8,'0'),
(2538400,'Inglés IV','0',8,'0'),
(2538500,'Inglés V','0',8,'0'),
(2538600,'Inglés VI','0',8,'0'),
(2539100,'Lectoescritura','0',15,'0'),
(2555100,'Álgebra y Trigonometría','0',11,'0'),
(2555120,'Geometría Vectorial y Analítica','0',11,'0'),
(2555130,'Calculo Diferencial','0',11,'0'),
(2555220,'Álgebra Lineal','0',11,'0'),
(2555230,'Cálculo Integral','0',11,'0');

INSERT INTO `semestre` (codigo, fecha_inicio, fecha_cierre, inicio_inscripcion, fin_inscripcion) VALUES 
('2017-2','2017-06-06','2017-11-24','2017-06-06','2017-06-09');

INSERT INTO `equipo` (codigo, nombre, fecha_creacion) VALUES 
(1, 'IPISIS Seguridad', '2017-01-01');

INSERT INTO `estudiante` (id, identificacion, nombre_usuario, nombre) VALUES 
(1, '123456789', 'Estudiante1', 'Estudiante1N'),
(2, '987654321', 'Estudiante2', 'Estudiante2N');

INSERT INTO `equipo_estudiante` (id, equipo_codigo, estudiante_id) VALUES 
(1, 1, 1),
(2, 1, 2);

