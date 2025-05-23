import type { Job } from '../types/job';

// Datos quemados (hardcoded) para las ofertas laborales
export const getJobs = (): Job[] => {
  return [
    {
      id: '1',
      status: 'Urgente',
      title: 'Product Owner',
      location: 'Colombia',
      applications: '5 postulaciones',
      profile: [
        'Buscamos un Product Owner con formación en Ingeniería de Sistemas o afines, graduado o estudiante en últimos semestres, con orientación hacia la gestión de procesos, pensamiento analítico y trabajo en equipo.',
        'Experiencia en gestión de productos continua.',
        'Capacidad para entender necesidades del negocio y traducirlas en requerimientos funcionales.',
        'Habilidades para trabajar en equipo desarrolladores y stakeholders de negocio.',
        'Actitud proactiva, disposición al aprendizaje continuo y excelente comunicación.',
        'Deseable experiencia en metodologías ágiles (Scrum, Kanban).'
      ],
      valueProps: [
        'Curiosidad tecnológica y capacidad de aportar ideas innovadoras.',
        'Habilidades de comunicación y liderazgo para facilitar procesos.',
        'Pensamiento estratégico y enfoque en la mejora continua.',
        'Compromiso con el equipo y los objetivos organizacionales.'
      ],
      details: {
        modality: 'Flexible / Híbrido / Presencial',
        location: 'Colombia (o disponibilidad para horario local)',
        salary: '$2.850.000'
      }
    },
    {
      id: '2',
      title: 'Desarrollador Frontend',
      location: 'Remoto',
      applications: '12 postulaciones',
      profile: [
        'Buscamos un desarrollador Frontend con experiencia en React o Vue.',
        'Conocimientos sólidos de HTML, CSS y JavaScript.',
        'Experiencia con sistemas de control de versiones (Git).',
        'Capacidad para trabajar en equipo y comunicarse efectivamente.'
      ],
      valueProps: [
        'Pasión por crear interfaces de usuario atractivas y funcionales.',
        'Interés en aprender nuevas tecnologías y frameworks.',
        'Atención al detalle y compromiso con la calidad del código.'
      ],
      details: {
        modality: 'Remoto',
        location: 'Latinoamérica',
        salary: '$800.000 - $1.200.000'
      }
    },
    {
      id: '3',
      title: 'Desarrollador Backend',
      location: 'Bogotá',
      applications: '8 postulaciones',
      profile: [
        'Buscamos un desarrollador Backend con experiencia en Node.js o Python.',
        'Conocimientos de bases de datos SQL y NoSQL.',
        'Experiencia con APIs RESTful.',
        'Capacidad para diseñar arquitecturas escalables.'
      ],
      valueProps: [
        'Interés en arquitecturas de microservicios.',
        'Compromiso con las buenas prácticas de desarrollo.',
        'Capacidad para resolver problemas complejos.'
      ],
      details: {
        modality: 'Híbrido',
        location: 'Bogotá, Colombia',
        salary: '$1.000.000 - $1.500.000'
      }
    }
  ];
};

export const getJobById = (id: string): Job | undefined => {
  const jobs = getJobs();
  return jobs.find(job => job.id === id);
};