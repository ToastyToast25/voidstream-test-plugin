/**
 * VoidStream Test Plugin
 * A sample plugin for testing GitHub integration
 */

export interface PluginConfig {
  enabled: boolean;
  theme: 'dark' | 'light';
  refreshInterval: number;
}

export class TestPlugin {
  private config: PluginConfig;

  constructor(config: Partial<PluginConfig> = {}) {
    this.config = {
      enabled: true,
      theme: 'dark',
      refreshInterval: 30000,
      ...config,
    };
  }

  async initialize(): Promise<void> {
    console.log('VoidStream Test Plugin initialized');
  }

  getConfig(): PluginConfig {
    return { ...this.config };
  }
}

export default TestPlugin;
