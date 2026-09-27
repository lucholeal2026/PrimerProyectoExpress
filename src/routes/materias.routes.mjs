import { Router } from 'express';

const router = Router();

router.get('/api/materias', (request, response) => {
  response.send([
    { id: 1, nombre: "Programación Backend", codigo: "MAT-101", departamento: "Sistemas", nivel: 2 },
    { id: 2, nombre: "Bases de Datos I", codigo: "MAT-102", departamento: "Sistemas", nivel: 2 },
    { id: 3, nombre: "Estructuras de Datos", codigo: "MAT-103", departamento: "Sistemas", nivel: 1 },
    { id: 4, nombre: "Diseño Web Frontend", codigo: "MAT-104", departamento: "Diseño", nivel: 1 },
    { id: 5, nombre: "Arquitectura de Software", codigo: "MAT-105", departamento: "Sistemas", nivel: 3 },
    { id: 6, nombre: "Redes y Seguridad", codigo: "MAT-106", departamento: "Infraestructura", nivel: 3 },
    { id: 7, nombre: "Sistemas Operativos", codigo: "MAT-107", departamento: "Infraestructura", nivel: 2 },
    { id: 8, nombre: "Ingeniería de Requerimientos", codigo: "MAT-108", departamento: "Gestión", nivel: 2 },
    { id: 9, nombre: "Análisis Matemático I", codigo: "MAT-109", departamento: "Ciencias Básicas", nivel: 1 },
    { id: 10, nombre: "Álgebra Lineal", codigo: "MAT-110", departamento: "Ciencias Básicas", nivel: 1 },
    { id: 11, nombre: "Metodologías Ágiles", codigo: "MAT-111", departamento: "Gestión", nivel: 2 },
    { id: 12, nombre: "Inteligencia Artificial", codigo: "MAT-112", departamento: "Sistemas", nivel: 4 },
    { id: 13, nombre: "Computación en la Nube", codigo: "MAT-113", departamento: "Infraestructura", nivel: 4 },
    { id: 14, nombre: "Práctica Profesional Supervisada", codigo: "MAT-114", departamento: "Integración", nivel: 4 },
    { id: 15, nombre: "Ética y Legislación Informática", codigo: "MAT-115", departamento: "Humanidades", nivel: 3 }
  ])
})

export default router;