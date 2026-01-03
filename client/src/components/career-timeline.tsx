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
          <h3 className="text-lg font-bold text-foreground">Senior Frontend Engineer</h3>
          <p className="text-sm text-primary font-medium">TechCorp Inc. | 2022 - Present</p>
          <p className="mt-2 text-muted-foreground">
            Leading the frontend migration to Next.js, improving core web vitals by 40%. 
            Mentoring junior developers and establishing design system guidelines.
          </p>
        </div>
      ),
    },
    {
      color: 'blue',
      children: (
        <div className="mb-8">
          <h3 className="text-lg font-bold text-foreground">Frontend Developer</h3>
          <p className="text-sm text-primary font-medium">Creative Agency | 2020 - 2022</p>
          <p className="mt-2 text-muted-foreground">
            Built responsive websites for high-profile clients using React and GSAP. 
            Collaborated closely with designers to implement pixel-perfect UIs.
          </p>
        </div>
      ),
    },
    {
      color: 'green',
      dot: <GraduationCap className="w-4 h-4" />,
      children: (
        <div className="mb-8">
          <h3 className="text-lg font-bold text-foreground">BS Computer Science</h3>
          <p className="text-sm text-primary font-medium">University of Tech | 2016 - 2020</p>
          <p className="mt-2 text-muted-foreground">
            Focused on Human-Computer Interaction and Web Technologies. 
            Graduated with Honors.
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
