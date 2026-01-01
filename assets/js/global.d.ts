export {};

declare global {
  function _$<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): HTMLElementTagNameMap[K] | null;
  function _$<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): SVGElementTagNameMap[K] | null;
  function _$<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): MathMLElementTagNameMap[K] | null;
  function _$<E extends Element = HTMLElement>(selectors: string): E | null;

  function _$$<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<HTMLElementTagNameMap[K]>;
  function _$$<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): NodeListOf<SVGElementTagNameMap[K]>;
  function _$$<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<MathMLElementTagNameMap[K]>;
  function _$$<E extends Element = HTMLElement>(
    selectors: string,
  ): NodeListOf<E>;
  /**
   * Pace.js
   *
   * https://github.com/CodeByZach/pace
   */
  var Pace: {
    on: (event: string, handler: () => void) => void;
    sources: any[];
  };
  /**
   * AOS.js
   */
  type easingOptions =
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "ease-in-back"
    | "ease-out-back"
    | "ease-in-out-back"
    | "ease-in-sine"
    | "ease-out-sine"
    | "ease-in-out-sine"
    | "ease-in-quad"
    | "ease-out-quad"
    | "ease-in-out-quad"
    | "ease-in-cubic"
    | "ease-out-cubic"
    | "ease-in-out-cubic"
    | "ease-in-quart"
    | "ease-out-quart"
    | "ease-in-out-quart";
  interface AOSOptions {
    offset: number;
    delay: number;
    duration: number;
    disable: boolean;
    once: boolean;
    startEvent: string;
    throttleDelay: number;
    debounceDelay: number;
    easing: easingOptions;
  }
  var AOS: {
    init: (options: Partial<AOSOptions>) => void;
    refresh: (initialize?: boolean) => void;
    refreshHard: () => void;
  };
  /**
   * Record the difference between the current scroll position and the previous scroll position
   */
  var diffY: number;
  var ALGOLIA_CONFIG: {
    logo: string;
    algolia: {
      applicationID: string;
      apiKey: string;
      indexName: string;
      hits: {
        per_page: number;
      };
      labels: {
        input_placeholder: string;
        hits_empty: string;
        hits_stats: string;
      };
    };
  };
  var instantsearch: any;
  var algoliasearch: any;
  var walineInstance: any;
  var ClipboardJS: any;
  var Pjax: any;
  var QRCode: any;
  var snapdom: any;
  var materialTheme: any;
  var bannerElement: HTMLImageElement | undefined;
  var generateSchemeHandler: () => void;
  var throttle: (
    func: (...args: any[]) => void,
    limit: number,
  ) => (...args: any[]) => void;
  /**
   * Lightbox status
   */
  var lightboxStatus: string | undefined;
  /**
   * Start loading
   */
  var startLoading: (() => void) | undefined;
  /**
   * End loading
   */
  var endLoading: (() => void) | undefined;
  /**
   * AOS init
   */
  var aosInit: (() => void) | undefined;
  /**
   * PanZoom instances list
   */
  var __panZoomList: any[] | undefined;

  var siteConfig: {
    icon_font?: string | boolean;
    clipboard?: {
      success: string;
      fail: string;
      copyright: {
        enable: boolean;
        count: number;
        content?: string;
      };
    };
    swPath?: string;
    outdate?: string;
    anchor_icon?: string | boolean;
    code_block?: {
      expand?: boolean;
    };
    i18n_languages?: {
      Lang: string;
      LanguageName: string;
    }[];
    base?: string;
  };

  var REIMU_POST: {
    author: string;
    title: string;
    url: string;
    description: string;
    cover: string;
  };

  var safeImport: (url: string, integrity?: string) => Promise<any>;

  interface Window {
    on: (
      type: string,
      listener?: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions,
    ) => Element;
    off: (
      type: string,
      listener?: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions,
    ) => Element;
    _addEventListener: (
      type: string,
      listener?: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions,
    ) => Element;
    _removeEventListener: (
      type: string,
      listener?: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions,
    ) => Element;
  }

  interface Element {
    on: typeof window.on;
    off: typeof window.off;
    _addEventListener: typeof window._addEventListener;
    _removeEventListener: typeof window._removeEventListener;
  }

  interface Document {
    on: typeof window.on;
    off: typeof window.off;
    _addEventListener: typeof window._addEventListener;
    _removeEventListener: typeof window._removeEventListener;
  }
}
