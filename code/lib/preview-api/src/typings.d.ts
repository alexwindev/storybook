/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
declare module 'lazy-universal-dotenv';
declare module 'pnp-webpack-plugin';
declare module '@storybook/manager/paths';
declare module 'better-opn';
declare module 'open';
declare module '@aw-web-design/x-default-browser';

declare var FEATURES: import('@storybook/types').StorybookConfigRaw['features'];

declare var STORIES: any;
declare var DOCS_OPTIONS: any;
declare var TAGS_OPTIONS: import('@storybook/types').StorybookConfigRaw['tags'];

// To enable user code to detect if it is running in Storybook
declare var IS_STORYBOOK: boolean;

// ClientApi (and StoreStore) are really singletons. However they are not created until the
// relevant framework instantiates them via `start.js`. The good news is this happens right away.
declare var __STORYBOOK_ADDONS_CHANNEL__: any;
declare var __STORYBOOK_ADDONS_PREVIEW: any;
declare var __STORYBOOK_PREVIEW__: import('./modules/preview-web/PreviewWeb').PreviewWeb<any>;
declare var __STORYBOOK_STORY_STORE__: any;
declare var STORYBOOK_HOOKS_CONTEXT: any;
declare var LOGLEVEL: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'silent' | undefined;
declare var sendTelemetryError: (error: any) => void;

declare module 'ansi-to-html';
declare class AnsiToHtml {
  constructor(options: { escapeHtml: boolean });

  toHtml: (ansi: string) => string;
}
