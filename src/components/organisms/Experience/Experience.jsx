import styled from 'styled-components';
import { Typography, Container, ExperienceCard } from '../../atoms';

const ExperienceSectionWrapper = styled.section`
  padding: 80px 0;
  background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 25% 25%, rgba(0, 255, 136, 0.04) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(0, 255, 136, 0.06) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const ExperienceContent = styled.div`
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
    justify-content: center;
  }
`;

const SectionIcon = styled.div`
  width: 16px;
  height: 16px;
  background: #00ff88;
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

// SVG Icons for each role
const FrontendIcon = () => (
  <svg viewBox="0 0 24 24" width="40" height="40" fill="white">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const FullStackIcon = () => (
  <svg viewBox="0 0 24 24" width="40" height="40" fill="white">
    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
    <circle cx="6" cy="18" r="2"/>
    <circle cx="18" cy="18" r="2"/>
  </svg>
);

const FreelanceIcon = () => (
  <svg viewBox="0 0 24 24" width="40" height="40" fill="white">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const LeaderIcon = () => (
  <svg viewBox="0 0 24 24" width="40" height="40" fill="white">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const experienceData = [
  {
    id: 1,
    title: "Lead Frontend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem.",
    icon: <FrontendIcon />,
    iconBg: "linear-gradient(135deg, #00ff88, #00cc6a)"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem.",
    icon: <FullStackIcon />,
    iconBg: "linear-gradient(135deg, #00cc6a, #009955)"
  },
  {
    id: 3,
    title: "Freelance Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem.",
    icon: <FreelanceIcon />,
    iconBg: "linear-gradient(135deg, #009955, #007744)"
  },
  {
    id: 4,
    title: "Head of Development Area",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem.",
    icon: <LeaderIcon />,
    iconBg: "linear-gradient(135deg, #007744, #005533)"
  }
];

const Experience = () => {
  return (
    <ExperienceSectionWrapper>
      <Container>
        <ExperienceContent>
          <SectionHeader>
            <SectionIcon />
            <Typography 
              variant="h2" 
              color="#ffffff"
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