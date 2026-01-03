import { ConfigProvider, Timeline, theme as antdTheme } from 'antd';
import { useTheme } from '@/hooks/use-theme';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Section } from './ui/section';

export function CareerTimeline() {
  const { theme } = useTheme();

  // Determine if dark mode is active for Ant Design config
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const items = [
    {
      color: 'blue',
      dot: <Briefcase className="w-4 h-4" />,
      children: (
        <div className="mb-8">
          <h3 className="text-lg font-bold text-foreground">Software Development Engineer-1</h3>
          <p className="text-sm text-primary font-medium">Repute Networks | 06/2023 – 11/2025</p>
          <p className="mt-2 text-muted-foreground">
            Optimised collaboration for an employee benefit marketplace (insurance, tax filing, credit services).
            Teamed up to construct a fully automated onboarding and background check application.
            Engineered a responsive ReactJS front-end with seamless iframe compatibility for HRMS systems.
            Spearheaded backend data integration and directed data flow using Redux.
          </p>
        </div>
      ),
    },
    {
      color: 'blue',
      children: (
        <div className="mb-8">
          <h3 className="text-lg font-bold text-foreground">Associate Software Engineer Intern</h3>
          <p className="text-sm text-primary font-medium">Refactor Academy | 10/2022 – 05/2023</p>
          <p className="mt-2 text-muted-foreground">
            Developed a responsive AI-driven interview application.
            Crafted accessible code using modern JavaScript libraries.
            Contributed to testing and debugging while delivering reusable ReactJS components and integrating backend APIs.
          </p>
        </div>
      ),
    },
    {
      color: 'green',
      dot: <GraduationCap className="w-4 h-4" />,
      children: (
        <div className="mb-8">
          <h3 className="text-lg font-bold text-foreground">BE - Electrical and Electronics Engineering</h3>
          <p className="text-sm text-primary font-medium">JNN College of Engineering | 09/2016 – 05/2022</p>
          <p className="mt-2 text-muted-foreground">
            Shivamogga, India.
          </p>
        </div>
      ),
    },
  ];

  return (
    <Section id="timeline">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold font-display mb-4">My Journey</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A timeline of my professional career and education milestones.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <ConfigProvider
          theme={{
            algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
            token: {
              fontFamily: 'var(--font-sans)',
              colorText: 'hsl(var(--foreground))',
              colorBgContainer: 'transparent',
            }
          }}
        >
          <Timeline 
            mode="left"
            items={items}
          />
        </ConfigProvider>
      </div>
    </Section>
  );
}
