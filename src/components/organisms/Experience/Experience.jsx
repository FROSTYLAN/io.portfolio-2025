import styled from 'styled-components';
import { Typography, Container, ExperienceCard, Divider } from '../../atoms';
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
    id: 1,
    title: "Lead Frontend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem.",
    icon: <FrontendIcon />,
    iconMaskSrc: frontendIcon,
    iconBg: "linear-gradient(135deg, #00ff88, #00cc6a)"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem.",
    icon: <FullStackIcon />,
    iconMaskSrc: fullstackIcon,
    iconBg: "linear-gradient(135deg, #00cc6a, #009955)"
  },
  {
    id: 3,
    title: "Freelance Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem.",
    icon: <FreelanceIcon />,
    iconMaskSrc: freelanceIcon,
    iconBg: "linear-gradient(135deg, #009955, #007744)"
  },
  {
    id: 4,
    title: "Head of Development Area",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem.",
    icon: <LeaderIcon />,
    iconMaskSrc: leaderIcon,
    iconBg: "linear-gradient(135deg, #007744, #005533)"
  }
];

const Experience = () => {
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
                description={experience.description}
                icon={experience.icon}
                iconBg={experience.iconBg}
                iconMaskSrc={experience.iconMaskSrc}
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
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
    </ExperienceSectionWrapper>
  );
};

export default Experience;
