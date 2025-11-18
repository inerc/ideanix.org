export const ossProjects = [
  {
    id: 'logdoc-oss',
    name: 'LogDoc OSS',
    description: 'Open-source log processing and observability engine. Lightweight, fast, and extensible.',
    longDescription: `LogDoc OSS is the open-source core of our LogDoc Cloud platform. It provides a high-performance log collection, processing, and routing engine that you can run anywhere.

Perfect for teams who want full control over their observability stack or need to process logs in air-gapped environments.`,
    license: 'MIT',
    github: 'https://github.com/ideanix/logdoc',
    features: [
      'Fast structured log parsing',
      'Pluggable processors and outputs',
      'Support for multiple input formats',
      'Real-time pipeline processing',
      'Low memory footprint',
      'Docker and Kubernetes ready'
    ],
    language: 'Go',
    stars: '1.2k',
    relatedProduct: 'logdoc-cloud'
  },
  {
    id: 'load-storm-agents',
    name: 'Load Storm Agents & CLI',
    description: 'Open-source distributed load generators and CLI utilities for Load Storm platform.',
    longDescription: `The Load Storm open-source components include our distributed load generation agents and command-line tools. Run load tests from your own infrastructure while using Load Storm for orchestration and analytics.

Built with Go for maximum performance and minimal resource usage.`,
    license: 'Apache 2.0',
    github: 'https://github.com/ideanix/load-storm-agent',
    features: [
      'Distributed load generator',
      'K6 compatible scripts',
      'Multiple protocol support',
      'Prometheus metrics export',
      'Docker images available',
      'Helm charts for Kubernetes'
    ],
    language: 'Go',
    stars: '890',
    relatedProduct: 'load-storm'
  },
  {
    id: 'xk6-extensions',
    name: 'xk6 Extensions',
    description: 'Extensions for K6 load testing tool. Kafka, PostgreSQL, Protocol Buffers, and SQL support.',
    longDescription: `Our xk6 extensions add essential capabilities to the K6 load testing tool. Test real production scenarios with Kafka message queues, PostgreSQL databases, gRPC services, and more.

All extensions are production-tested and actively maintained.`,
    license: 'Apache 2.0',
    github: 'https://github.com/ideanix/xk6-extensions',
    features: [
      'xk6-kafka - Kafka producer/consumer testing',
      'xk6-pg - PostgreSQL load testing',
      'xk6-proto - Protocol Buffers support',
      'xk6-sql - Generic SQL database testing',
      'Full K6 compatibility',
      'Detailed documentation'
    ],
    language: 'Go',
    stars: '2.1k',
    relatedProduct: 'load-storm'
  },
  {
    id: 'environment-analyzer-cli',
    name: 'Environment Analyzer CLI',
    description: 'CLI tool for infrastructure scoring and analysis. Run locally or in CI/CD pipelines.',
    longDescription: `The Environment Analyzer CLI brings infrastructure scoring to your terminal and CI/CD pipelines. Get a quick health check of your infrastructure without sending data to the cloud.

Perfect for air-gapped environments, local development, or automated compliance checks.`,
    license: 'MIT',
    github: 'https://github.com/ideanix/env-analyzer',
    features: [
      'Local infrastructure scanning',
      'JSON and human-readable output',
      'CI/CD integration',
      'Custom rule definitions',
      'AWS and Kubernetes support',
      'Threshold-based exit codes'
    ],
    language: 'Go',
    stars: '650',
    relatedProduct: 'environment-analyzer'
  },
  {
    id: 'perfboard-cli',
    name: 'Perfboard CLI',
    description: 'Developer performance profiling toolkit. Lightweight CLI for local performance analysis.',
    longDescription: `Perfboard CLI is a lightweight profiling toolkit for developers. Collect CPU profiles, memory snapshots, and flame graphs without complex setup.

Integrate with your IDE or use from the command line for quick performance checks during development.`,
    license: 'MIT',
    github: 'https://github.com/ideanix/perfboard-cli',
    features: [
      'CPU profiling',
      'Memory analysis',
      'Flame graph generation',
      'Profile comparison',
      'Multiple language support',
      'IDE integrations'
    ],
    language: 'Go',
    stars: '420',
    relatedProduct: 'perfboard'
  }
];

export const getOssProjectById = (id) => ossProjects.find(p => p.id === id);
