import styled from 'styled-components';
import { Typography, Container, ExperienceCard, Divider } from '../../atoms';
import { useState } from 'react';
import frontendIcon from './frontend-icon.svg';
import fullstackIcon from './fullstack-icon.svg';
import freelanceIcon from './freelance-icon.svg';
import leaderIcon from './leader-icon.svg';

const ExperienceSectionWrapper = styled.section`
  padding: 0  0 80px 0;
  background: transparent;
  position: relative;
  overflow: visible;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const ExperienceContent = styled.div`
  padding-top: 80px;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
  
  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const SectionIcon = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(185, 255, 102, 1);
  border-radius: 50%;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 24px;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const FloatingShape = styled.div`
  position: absolute;
  width: ${props => props.size || '120px'};
  height: ${props => props.size || '120px'};
  background: ${props => props.bg || 'rgba(0, 255, 136, 0.03)'};
  border-radius: ${props => props.rounded ? '50%' : '24px'};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  animation: floatGentle 12s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0.3;
  
  @keyframes floatGentle {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-25px) rotate(180deg); }
  }
  
  @media (max-width: 768px) {
    width: ${props => props.mobileSize || '80px'};
    height: ${props => props.mobileSize || '80px'};
  }
`;

// Iconos desde archivos SVG (carpeta Experience)
const FrontendIcon = () => (
  <img src={frontendIcon} alt="Frontend" />
);

const FullStackIcon = () => (
  <img src={fullstackIcon} alt="Fullstack" />
);

const FreelanceIcon = () => (
  <img src={freelanceIcon} alt="Freelance" />
);

const LeaderIcon = () => (
  <img src={leaderIcon} alt="Líder" />
);

const experienceData = [
  {
    "id": 1,
    "title": "Full Stack Developer",
    "company": "Cadmus Tech",
    "period": "2022 – 2024",
    "location": "Remoto",
    "teamSize": "5 desarrolladores",
    "methodology": "Scrum, entregas quincenales",
    "description": "Fullstack en proyectos críticos: app de citas con verificación avanzada, sistema de apuestas, sistema de inventario y web corporativa.",
    "icon": <FrontendIcon />,
    "iconMaskSrc": frontendIcon,
    "iconBg": "linear-gradient(135deg, #00ff88, #00cc6a)",
    "skills": ["React", "Next.js", "Node.js", "TypeScript", "Vite", "Styled-Components", "Jest", "MongoDB", "PostgreSQL", "Sockets"],
    "outcomes": [
      "Desarrollo fullstack en 4 proyectos de distinta complejidad",
      "Integración de verificación de identidad y chat en tiempo real",
      "Implementación de arquitectura escalable para sistemas de apuestas",
      "Entrega de sistema de inventario completo para empresa química"
    ],
    "projects": [
      {
        "name": "Paradise (App de citas)",
        "summary": "App tipo Glambu con verificación exhaustiva para asegurar autenticidad de usuarios.",
        "tech": ["React", "Node.js", "MongoDB", "Sockets"],
        "impact": [
          "Sistema de verificación por DNI con validaciones avanzadas",
          "Chat en tiempo real estable y escalable",
          "Búsqueda con filtros avanzados para usuarios"
        ],
        "responsibilities": [
          "Desarrollo del frontend en React",
          "Implementación de endpoints y lógica de negocio en Node.js",
          "Flujos de registro, roles (admin, usuario, chicas) y autenticación",
          "Integración de chat en tiempo real con sockets"
        ],
        "links": {}
      },
      {
        "name": "Sistema de apuestas de caballos",
        "summary": "Manejo de saldo, registro de apuestas, gestión de eventos y control administrativo.",
        "tech": ["React", "Node.js", "PostgreSQL"],
        "impact": [
          "Automatización del flujo de registro y resultados",
          "Módulo seguro para manejo de saldo y transacciones"
        ],
        "responsibilities": [
          "Desarrollo de módulos del lado del servidor",
          "Interfaz para registro y consulta de apuestas",
          "Integración con base de datos y control de eventos"
        ],
        "links": {}
      },
      {
        "name": "Sistema de Inventario - Empresa PEXOM",
        "summary": "Sistema completo de inventario para empresa de insumos químicos.",
        "tech": ["React", "Node.js", "PostgreSQL"],
        "impact": [
          "Control de stock, insumos, ingreso y salida del almacén",
          "Optimización del proceso de compra y registro"
        ],
        "responsibilities": [
          "Proyecto liderado individualmente",
          "Diseño de base de datos y arquitectura",
          "Dashboard, reportes y CRUDs completos"
        ],
        "links": {}
      },
      {
        "name": "Página web corporativa Cadmus Tech",
        "summary": "Sitio institucional desarrollado con Next.js.",
        "tech": ["Next.js", "Styled-Components"],
        "impact": ["Mejora de presencia digital de la empresa"],
        "responsibilities": [
          "Desarrollo completo del sitio",
          "Optimización SEO básica"
        ],
        "links": {}
      }
    ]
  },
  {
    "id": 2,
    "title": "Frontend Developer",
    "company": "Wost Solutions",
    "period": "2020 – 2022",
    "location": "Híbrido",
    "teamSize": "11 (2 frontend, 2 mobile, 4 backend, 1 PM, 2 analistas funcionales, 1 jefe de proyecto)",
    "methodology": "Kanban",
    "description": "Desarrollo frontend y apoyo backend en sistemas de ventas y ERP empresarial.",
    "icon": <FullStackIcon />,
    "iconMaskSrc": fullstackIcon,
    "iconBg": "linear-gradient(135deg, #00cc6a, #009955)",
    "skills": ["React", "React 16", ".NET", "Node.js", "Express", "PostgreSQL", "Docker"],
    "outcomes": [
      "Mejoras clave en sistema de ventas de Maracuyá",
      "Participación en ERP masivo para Grupo Rocío y Aviagen",
      "Optimización de consultas y apoyo en backend .NET"
    ],
    "projects": [
      {
        "name": "Sistema de ventas – Maracuyá",
        "summary": "Mejoras al sistema de ventas del negocio Maracuyá (regalos y accesorios).",
        "tech": ["React", "Node.js", "Express"],
        "impact": ["Flujos de venta más rápidos y reducción de errores operativos"],
        "responsibilities": [
          "Optimización de vistas y componentes",
          "Ajustes en lógica de ventas y carritos",
          "Integración con APIs internas"
        ],
        "links": {}
      },
      {
        "name": "ERP Grupo Rocío / Aviagen",
        "summary": "ERP creado desde cero para gestión de compra, crianza de pollos y venta de productos derivados.",
        "tech": ["React 16", ".NET", "PostgreSQL"],
        "impact": [
          "Gestión operativa más eficiente para múltiples plantas",
          "Centralización de datos críticos del negocio"
        ],
        "responsibilities": [
          "Construcción del frontend operativo en React 16",
          "Desarrollo de tablas, formularios, flujos complejos y validaciones",
          "Apoyo al backend .NET en módulos específicos",
          "Optimización de consultas y endpoints"
        ],
        "links": {}
      }
    ]
  },
  {
    "id": 3,
    "title": "Software Developer",
    "company": "Marea Picante",
    "period": "2019 – Presente",
    "location": "Remoto",
    "teamSize": "Único desarrollador (responsable de todo: arquitectura, diseño, hardware y software)",
    "methodology": "Lean",
    "description": "Digitalización completa del restaurante: desde hardware, arquitectura y diseño del sistema hasta el desarrollo fullstack de toda la plataforma operativa.",
    "icon": <FreelanceIcon />,
    "iconMaskSrc": freelanceIcon,
    "iconBg": "linear-gradient(135deg, #009955, #007744)",
    "skills": [
      "React",
      "Next.js",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Tailwind",
      "Stripe",
      "Facturación electrónica",
      "Integración con impresoras"
    ],
    "outcomes": [
      "Sistema operativo que eliminó confusiones en pedidos y cuentas",
      "Automatización de comandas y reducción significativa de errores de cocina",
      "Digitalización completa de caja, reportes, delivery y administración",
      "Panel en tiempo real para la jefa con control total del negocio"
    ],
    "projects": [
      {
        "name": "Sistema Integral para Restaurante – Marea Picante",
        "summary": "Plataforma completa para gestionar pedidos, caja, cocina, delivery y reportes en tiempo real.",
        "tech": ["React", "Next.js", "Node.js", "Supabase", "PostgreSQL"],
        "impact": [
          "Pedidos enviados automáticamente a cocina vía impresoras",
          "Reducción del tiempo de atención y mejora del orden interno",
          "Visibilidad en tiempo real del estado del restaurante desde el celular"
        ],
        "responsibilities": [
          "Toma de pedidos en tablets y teléfonos",
          "Vista operativa por mesas, salón, para llevar y delivery",
          "Modificadores (sin sal, extra limón, poco picante, etc.)",
          "División y unión de cuentas",
          "Reapertura de cuentas y edición controlada",
          "Envío automático a impresoras de cocina, bar y postres",
          "Estado de mesa: libre, atendiendo, esperando, cuenta pedida",
          "Apertura y cierre de caja",
          "Arqueo real vs sistema",
          "Registro de ingresos, egresos y propinas",
          "Gestión de métodos de pago: efectivo, Yape/Plin, Visa/Mastercard, QR y mixto",
          "Boletas y facturas automáticas con integración SUNAT",
          "Reenvío de comprobantes al correo del cliente",
          "Reportes: ventas diarias, semanales y mensuales",
          "Platos más vendidos y rentabilidad",
          "Configuración de productos, categorías, precios, combos, impresoras y parámetros",
          "Filtros por mesero, salón, método de pago y tipo de servicio (mesa, para llevar, delivery)",
          "Panel administrativo completo y dashboard en tiempo real"
        ],
        "links": {}
      }
    ]
  },
  {
    "id": 4,
    "title": "Freelance Developer",
    "company": "Dacax",
    "period": "2017 – 2019",
    "location": "On-site / Remoto",
    "teamSize": "Freelance (proyectos con equipos externos)",
    "methodology": "Scrum / Kanban según cliente",
    "description": "Desarrollo fullstack, levantamiento de requerimientos y arquitectura para múltiples sistemas empresariales creados para clientes corporativos.",
    "icon": <LeaderIcon />,
    "iconMaskSrc": leaderIcon,
    "iconBg": "linear-gradient(135deg, #007744, #005533)",
    "skills": [
      "React",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Arquitectura",
      "Levantamiento de requerimientos",
      "QA",
      "Diseño de sistemas"
    ],
    "outcomes": [
      "Automatización de procesos administrativos y operativos en 3 empresas",
      "Implementación de sistemas end-to-end desde cero",
      "Reducción de carga operativa y errores manuales mediante digitalización"
    ],
    "projects": [
      {
        "name": "Sistema de Reclutamiento – SmartTalent",
        "summary": "Plataforma completa para gestionar procesos de selección, postulantes y evaluaciones.",
        "tech": ["React", "Node.js", "MongoDB"],
        "impact": ["Digitalización del proceso de reclutamiento", "Seguimiento completo de candidatos y etapas"],
        "responsibilities": [
          "Análisis y levantamiento de requerimientos",
          "Arquitectura del sistema",
          "Desarrollo fullstack de módulos de candidatos, evaluaciones y flujo de selección",
          "Panel administrativo y reportes"
        ],
        "links": {}
      },
      {
        "name": "Gestión de Proyectos – Digenio",
        "summary": "Plataforma para gestionar proyectos, tareas y seguimiento en tiempo real.",
        "tech": ["Next.js", "GraphQL", "React", "Node.js", "PostgreSQL"],
        "impact": ["Mayor control operativo", "Seguimiento centralizado"],
        "responsibilities": [
          "Diseño funcional y UI",
          "Modelado de base de datos",
          "Desarrollo de módulos de proyectos, tareas y notificaciones"
        ],
        "links": {}
      },
      {
        "name": "Coplacont – Sistema Contable",
        "summary": "Software contable completo para empresa de servicios contables.",
        "tech": ["React", "Node.js", "PostgreSQL"],
        "impact": ["Automatización de procesos contables", "Mejor organización y control de documentos"],
        "responsibilities": [
          "Definición de arquitectura",
          "Módulos contables completos: clientes, comprobantes, balances, reportes",
          "Integración de flujos administrativos"
        ],
        "links": {}
      }
    ]
  }
];

const ModalOverlay = styled.div`
  display: ${props => (props.$open ? 'block' : 'none')};
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(6px);
  z-index: 2000;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(860px, 92vw);
  max-height: 86vh;
  overflow: auto;
  border-radius: 20px;
  border: 1px solid #3C4434;
  background: linear-gradient(103deg, #0F1408 16.66%, rgba(23, 32, 9, 0.27) 81.61%);
  box-shadow: 0 20px 60px rgba(0,0,0,0.35);
  padding: 28px;
  z-index: 2001;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
`;

const CloseButton = styled.button`
  margin-left: auto;
  background: none;
  border: 1px solid rgba(255,255,255,0.18);
  color: #ffffff;
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  
  &:hover { background: rgba(255,255,255,0.12); }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0 16px 0;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(185,255,102,0.35);
  color: #b9ff66;
  font-size: 12px;
  background: rgba(185,255,102,0.08);
`;

const SectionBlock = styled.div`
  margin-top: 18px;
`;

const BulletList = styled.ul`
  margin: 6px 0 0 0;
  padding-left: 18px;
  color: #cccccc;
  line-height: 1.6;
`;

const ProjectItem = styled.div`
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 12px;
  margin-top: 12px;
`;

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openExperienceModal = (exp) => {
    setSelectedExp(exp);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedExp(null);
  };

  return (
    <ExperienceSectionWrapper>
      <Divider direction='left' />
      <Container>
        <ExperienceContent>
          <SectionHeader>
            <SectionIcon />
            <Typography
              variant="h2"
              color="#ffffff"
              style={{ fontFamily: "'Tilt Neon', sans-serif" }}
            >
              Mi experiencia laboral
            </Typography>
          </SectionHeader>

          <ExperienceGrid>
            {experienceData.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                title={experience.title}
                company={experience.company}
                period={experience.period}
                description={experience.description}
                icon={experience.icon}
                iconBg={experience.iconBg}
                iconMaskSrc={experience.iconMaskSrc}
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
                onClick={() => openExperienceModal(experience)}
              />
            ))}
          </ExperienceGrid>
        </ExperienceContent>
      </Container>

      {/* Floating Shapes */}
      <FloatingShape
        top="12%"
        left="6%"
        size="130px"
        mobileSize="70px"
        rounded
        delay="0s"
        bg="rgba(0, 255, 136, 0.04)"
      />

      <FloatingShape
        bottom="18%"
        right="8%"
        size="110px"
        mobileSize="60px"
        delay="5s"
        bg="rgba(0, 255, 136, 0.06)"
      />

      <FloatingShape
        top="55%"
        right="4%"
        size="90px"
        mobileSize="50px"
        rounded
        delay="8s"
        bg="rgba(0, 255, 136, 0.03)"
      />

      <FloatingShape
        bottom="45%"
        left="8%"
        size="70px"
        mobileSize="40px"
        delay="3s"
        bg="rgba(0, 255, 136, 0.05)"
      />
      <ModalOverlay $open={modalOpen} onClick={closeModal} />
      {modalOpen && selectedExp && (
        <ModalContainer role="dialog" aria-modal="true">
          <ModalHeader>
            <Typography variant="h3" color="#ffffff" style={{ fontFamily: '"Tilt Neon"', fontSize: '1.5rem' }}>
              {selectedExp.title} · {selectedExp.company}
            </Typography>
            <CloseButton onClick={closeModal}>Cerrar</CloseButton>
          </ModalHeader>
          <Typography variant="subtitle" color="#cccccc" style={{ marginBottom: '4px' }}>
            {selectedExp.period} · {selectedExp.location} · {selectedExp.teamSize}
          </Typography>
          <Typography variant="body" color="#cccccc">
            {selectedExp.description}
          </Typography>

          <TagList>
            {selectedExp.skills?.map((s) => (<Tag key={s}>{s}</Tag>))}
          </TagList>

          {selectedExp.outcomes && (
            <SectionBlock>
              <Typography variant="h3" color="#b9ff66" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Impacto clave</Typography>
              <BulletList>
                {selectedExp.outcomes.map((o, i) => (<li key={i}>{o}</li>))}
              </BulletList>
            </SectionBlock>
          )}

          {selectedExp.projects && (
            <SectionBlock>
              <Typography variant="h3" color="#b9ff66" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Proyectos destacados</Typography>
              {selectedExp.projects.map((p, i) => (
                <ProjectItem key={i}>
                  <Typography variant="subtitle" color="#ffffff" style={{ fontWeight: 600 }}>{p.name}</Typography>
                  <Typography variant="body" color="#cccccc">{p.summary}</Typography>
                  <TagList>
                    {p.tech?.map((t) => (<Tag key={t}>{t}</Tag>))}
                  </TagList>
                  {p.responsibilities && (
                    <SectionBlock>
                      <Typography variant="h3" color="#b9ff66" style={{ fontSize: '1.05rem', fontWeight: 600 }}>Responsabilidades</Typography>
                      <BulletList>
                        {p.responsibilities.map((resp, j) => (<li key={j}>{resp}</li>))}
                      </BulletList>
                    </SectionBlock>
                  )}
                  {p.impact && (
                    <SectionBlock>
                      <Typography variant="h3" color="#b9ff66" style={{ fontSize: '1.05rem', fontWeight: 600 }}>Impacto</Typography>
                      <BulletList>
                        {p.impact.map((imp, j) => (<li key={j}>{imp}</li>))}
                      </BulletList>
                    </SectionBlock>
                  )}
                </ProjectItem>
              ))}
            </SectionBlock>
          )}
        </ModalContainer>
      )}
    </ExperienceSectionWrapper>
  );
};

export default Experience;
