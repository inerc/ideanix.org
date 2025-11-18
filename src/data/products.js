export const products = [
  {
    id: 'logdoc-cloud',
    name: 'LogDoc Cloud',
    tagline: 'Observability Platform',
    description: 'Lightweight log collector and processor designed for high-load environments. Real-time log aggregation, analysis, and visualization.',
    longDescription: `LogDoc Cloud is a comprehensive observability platform that helps engineering teams understand their systems through intelligent log processing and analysis. Built for scale, it handles millions of events per second while providing real-time insights.

Our platform combines the power of structured logging with advanced analytics, allowing you to quickly identify issues, track performance metrics, and maintain system health across your entire infrastructure.`,
    pricing: {
      startingAt: 19,
      period: 'month',
      currency: 'USD'
    },
    features: [
      'Real-time log streaming and aggregation',
      'Structured log parsing with auto-detection',
      'Custom dashboards and visualizations',
      'Alerting and anomaly detection',
      'Long-term retention with compression',
      'Team collaboration features',
      'API and CLI access',
      'Integrations with 50+ services'
    ],
    useCases: [
      'Application performance monitoring',
      'Error tracking and debugging',
      'Security audit logging',
      'Infrastructure monitoring',
      'Compliance and audit trails'
    ],
    integrations: ['Kubernetes', 'Docker', 'AWS', 'GCP', 'Azure', 'Datadog', 'PagerDuty', 'Slack'],
    icon: 'log',
    color: '#6ccf8e'
  },
  {
    id: 'load-storm',
    name: 'Load Storm',
    tagline: 'Load Testing Platform',
    description: 'Distributed load testing platform for modern applications. Test your systems at scale with realistic traffic patterns.',
    longDescription: `Load Storm is an enterprise-grade load testing platform that enables teams to validate system performance under realistic conditions. Built on top of k6 and our custom distributed agents, it scales from simple API tests to complex multi-region load scenarios.

With Load Storm, you can simulate thousands of concurrent users, test across multiple protocols (HTTP, WebSocket, gRPC, Kafka), and get detailed performance metrics in real-time.`,
    pricing: {
      startingAt: 49,
      period: 'month',
      currency: 'USD'
    },
    features: [
      'Distributed load generation',
      'Support for HTTP, WebSocket, gRPC, Kafka',
      'Real-time metrics and dashboards',
      'CI/CD integration',
      'Custom scripting with JavaScript',
      'Geo-distributed testing',
      'Performance baselines and regression detection',
      'Detailed reports and exports'
    ],
    useCases: [
      'API performance testing',
      'Website load testing',
      'Microservices stress testing',
      'Database performance validation',
      'Pre-launch capacity planning'
    ],
    integrations: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'CircleCI', 'Grafana', 'Prometheus'],
    icon: 'storm',
    color: '#ff9830'
  },
  {
    id: 'environment-analyzer',
    name: 'Environment Analyzer',
    tagline: 'Infrastructure Scoring Tool',
    description: 'Analyze and score your infrastructure configuration. Get actionable insights to improve reliability and security.',
    longDescription: `Environment Analyzer scans your infrastructure and provides a comprehensive health score based on best practices, security standards, and operational excellence criteria.

Like Lighthouse for web performance, Environment Analyzer gives you a clear picture of your infrastructure's health with specific recommendations for improvement. Support for AWS, Kubernetes, and major DevOps tools.`,
    pricing: {
      startingAt: 99,
      period: 'report',
      currency: 'USD'
    },
    features: [
      'Infrastructure health scoring (0-100)',
      'Security vulnerability detection',
      'Configuration drift detection',
      'Cost optimization recommendations',
      'Compliance checking (SOC2, HIPAA, PCI)',
      'Detailed remediation guides',
      'Historical trend analysis',
      'PDF and JSON reports'
    ],
    useCases: [
      'Security audits',
      'Compliance preparation',
      'Cost optimization',
      'Infrastructure reviews',
      'DevOps maturity assessment'
    ],
    integrations: ['AWS', 'Kubernetes', 'Terraform', 'Ansible', 'Docker', 'Helm'],
    icon: 'analyze',
    color: '#3871dc'
  },
  {
    id: 'perfboard',
    name: 'Perfboard',
    tagline: 'Developer Performance Toolkit',
    description: 'Lightweight performance profiling and analysis toolkit for developers. Understand your code performance at a glance.',
    longDescription: `Perfboard is a developer-focused performance toolkit that helps you understand and optimize your application's performance. From CPU profiling to memory analysis, Perfboard provides the insights you need without the complexity.

Integrate Perfboard into your development workflow to catch performance issues early, establish baselines, and track improvements over time.`,
    pricing: {
      startingAt: 9,
      period: 'month',
      currency: 'USD'
    },
    features: [
      'CPU and memory profiling',
      'Flame graphs and call trees',
      'Performance baselines',
      'Regression detection',
      'CI/CD integration',
      'Language support for Go, Node.js, Python',
      'Local and cloud modes',
      'Team sharing and collaboration'
    ],
    useCases: [
      'Development-time profiling',
      'Performance optimization',
      'Memory leak detection',
      'Continuous performance monitoring',
      'Code review performance checks'
    ],
    integrations: ['VS Code', 'JetBrains', 'GitHub', 'GitLab'],
    icon: 'perf',
    color: '#e02f44'
  },
  {
    id: 'industrial-automation',
    name: 'Industrial Automation',
    tagline: 'Engineering Services',
    description: 'Custom industrial automation solutions. From packaging lines to IoT systems, we engineer complete automation projects.',
    longDescription: `Our Industrial Automation division provides end-to-end engineering services for manufacturing and industrial clients. We design, develop, and deploy custom automation solutions that increase efficiency, reduce costs, and improve quality.

With expertise in PLC programming, SCADA systems, IoT integration, and embedded systems, we deliver turnkey automation projects for diverse industries.`,
    pricing: {
      startingAt: 1000,
      period: 'project',
      currency: 'USD'
    },
    features: [
      'Custom PLC programming',
      'SCADA system development',
      'IoT sensor integration',
      'Embedded systems design',
      'HMI development',
      'Process optimization',
      'Predictive maintenance systems',
      'Legacy system modernization'
    ],
    useCases: [
      'Packaging line automation',
      'Quality control systems',
      'Warehouse automation',
      'Energy management',
      'Production monitoring'
    ],
    integrations: ['Siemens', 'Allen-Bradley', 'Beckhoff', 'Schneider', 'MQTT', 'OPC-UA'],
    icon: 'industry',
    color: '#8e8e8e'
  }
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductBySlug = (slug) => products.find(p => p.id === slug);
