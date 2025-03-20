let live2d = new Live2d();
// TODO 多语言化
function Live2d() {
  /**
   * 包含通用工具方法
   */
  const util = {};
  /**
   * 包含 Live2d 消息发送方法
   */
  const message = {};

  /**
   * 包含 Live2d 右侧小工具
   */
  const tools = {};

  class Live2d {
    #path;
    #config;
    defaultConfig = {
      apiPath: "https://live2d.fghrsh.net/api/",
      isTools: true,
      tools: ["hitokoto", "switch-model", "switch-texture", "photo", "info", "quit"],
      updateTime: "2022.12.09",
      version: "1.0.1",
      tipsPath: "live2d-tips.json",
    };
    /**
     * Live2d 公开加载入口。
     *
     * @param path 资源路径
     * @param config 配置文件
     */
    init(path, config = {}) {
      // 当前页面宽度大于等于 768 才进行加载
      if (screen.width >= 768) {
        Promise.all([
          util.loadExternalResource(path + "css/live2d.css", "css"),
          util.loadExternalResource(path + "lib/live2d/live2d.min.js", "js"),
        ]).then(() => {
          this.#path = path;
          this.defaultConfig.tipsPath = path + "live2d-tips.json";
          this.#config = { ...this.defaultConfig, ...config };
          this.#doInit();
        });
      }
    }

    get path() {
      return this.#path;
    }

    /**
     * 私有方法，实际加载 Live2d
     */
    #doInit() {
      document.body.insertAdjacentHTML("beforeend", `<div id="live2d-toggle"><span>看板娘</span></div>`);
      const toggle = document.getElementById("live2d-toggle");
      toggle.addEventListener("click", () => {
        toggle.classList.remove("live2d-toggle-active");
        if (toggle.getAttribute("first-time")) {
          this.#loadWidget();
          toggle.removeAttribute("first-time");
        } else {
          localStorage.removeItem("live2d-display");
          document.getElementById("live2d-plugin").style.display = "";
          setTimeout(() => {
            document.getElementById("live2d-plugin").style.bottom = 0;
          }, 0);
        }
      });
      if (localStorage.getItem("live2d-display") && Date.now() - localStorage.getItem("live2d-display") <= 86400000) {
        toggle.setAttribute("first-time", true);
        setTimeout(() => {
          toggle.classList.add("live2d-toggle-active");
        }, 0);
      } else {
        this.#loadWidget();
      }
    }

    #loadWidget() {
      localStorage.removeItem("live2d-display");
      sessionStorage.removeItem("live2d-text");
      document.body.insertAdjacentHTML(
        "beforeend",
        `<div id="live2d-plugin">
            <div id="live2d-tips"></div>
            <canvas id="live2d" width="800" height="800"></canvas>
            <div id="live2d-tool"></div>
        </div>`
      );
      let live2dDom = document.getElementById("live2d-plugin");
      setTimeout(() => {
        live2dDom.style.bottom = 0;
      }, 0);
      if (this.#config["live2dLocation"] === "right") {
        live2dDom.style.right = "50px";
        live2dDom.style.left = "auto";
      }
      const model = new Model(this.#config);
      // 加载右侧小工具
      if (this.#config["isTools"] === true) {
        if (typeof Iconify !== "undefined") {
          tools._registerTools(model, this.#config);
        } else {
          util.loadExternalResource(this.#path + "lib/iconify/3.0.1/iconify.min.js", "js").then(() => {
            tools._registerTools(model, this.#config);
          });
        }
      }
      // 初始化模组
      this.#initModel(model);
    }

    /**
     * 向 Live2d 注册事件
     *
     * @param result 从 tips 文件中读取的空闲消息数据
     */
    #registerEventListener(result) {
      // 检测用户活动状态，并在空闲时显示消息
      let userAction = false,
        userActionTimer,
        messageArray = result.message.default;
      window.addEventListener("mousemove", () => (userAction = true));
      window.addEventListener("keydown", () => (userAction = true));
      setInterval(() => {
        if (userAction) {
          userAction = false;
          clearInterval(userActionTimer);
          userActionTimer = null;
        } else if (!userActionTimer) {
          userActionTimer = setInterval(() => {
            message.showMessage(messageArray, 6000, 2);
          }, 20000);
        }
      }, 1000);
      // 首次进入网站触发事件
      if (this.#config["firstOpenSite"] === true) {
        message.showMessage(message.welcomeMessage(result.time), 7000, 4);
      }
      window.addEventListener("mouseover", (event) => {
        for (let { selector, text } of result.mouseover) {
          if (!event.target.matches(selector)) continue;
          text = util.randomSelection(text);
          text = text.replace("{text}", event.target.innerText);
          message.showMessage(text, 4000, 1);
          return;
        }
      });
      window.addEventListener("click", (event) => {
        for (let { selector, text } of result.click) {
          if (!event.target.matches(selector)) continue;
          text = util.randomSelection(text);
          text = text.replace("{text}", event.target.innerText);
          message.showMessage(text, 4000, 1);
          return;
        }
      });
      result["seasons"].forEach(({ date, text }) => {
        const now = new Date(),
          after = date.split("-")[0],
          before = date.split("-")[1] || after;
        if (
          after.split("/")[0] <= now.getMonth() + 1 &&
          now.getMonth() + 1 <= before.split("/")[0] &&
          after.split("/")[1] <= now.getDate() &&
          now.getDate() <= before.split("/")[1]
        ) {
          text = util.randomSelection(text);
          text = text.replace("{year}", now.getFullYear());
          messageArray.push(text);
        }
      });

      // 打开控制台事件
      if (this.#config["openConsole"] === true) {
        let devtools = () => {};
        devtools.toString = () => {
          message.showMessage(this.#config["openConsoleTip"] || result["message"]["console"], 6000, 2);
        };
      }
      // 复制内容触发事件
      if (this.#config["copyContent"] === true) {
        window.addEventListener("copy", () => {
          message.showMessage(this.#config["copyContentTip"] || result["message"]["copy"], 6000, 2);
        });
      }
      // 离开当前页面事件
      if (this.#config["backSite"] === true) {
        window.addEventListener("visibilitychange", () => {
          if (!document.hidden) {
            message.showMessage(this.#config["backSiteTip"] || result["message"]["visibilitychange"], 6000, 2);
          }
        });
      }
    }

    #initModel(model) {
      let modelId = localStorage.getItem("modelId");
      let modelTexturesId = localStorage.getItem("modelTexturesId");
      if (modelId === null || !!this.#config["isForceUseDefaultConfig"]) {
        // 加载指定模型的指定材质
        modelId = this.#config["modelId"] || 1; // 模型 ID
        modelTexturesId = this.#config["modelTexturesId"] || 53; // 材质 ID
      }
      
      if (this.#config["consoleShowStatu"]) {
        eval(
          (function (p, a, c, k, e, r) {
            e = function (c) {
              return (
                (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
              );
            };
            if (!"".replace(/^/, String)) {
              while (c--) r[e(c)] = k[c] || e(c);
              k = [
                function (e) {
                  return r[e];
                },
              ];
              e = function () {
                return "\\w+";
              };
              c = 1;
            }
            while (c--) if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
            return p;
          })(
            "8.d(\" \");8.d(\"\\U,.\\y\\5.\\1\\1\\1\\1/\\1,\\u\\2 \\H\\n\\1\\1\\1\\1\\1\\b ', !-\\r\\j-i\\1/\\1/\\g\\n\\1\\1\\1 \\1 \\a\\4\\f'\\1\\1\\1 L/\\a\\4\\5\\2\\n\\1\\1 \\1 /\\1 \\a,\\1 /|\\1 ,\\1 ,\\1\\1\\1 ',\\n\\1\\1\\1\\q \\1/ /-\\j/\\1\\h\\E \\9 \\5!\\1 i\\n\\1\\1\\1 \\3 \\6 7\\q\\4\\c\\1 \\3'\\s-\\c\\2!\\t|\\1 |\\n\\1\\1\\1\\1 !,/7 '0'\\1\\1 \\X\\w| \\1 |\\1\\1\\1\\n\\1\\1\\1\\1 |.\\x\\\"\\1\\l\\1\\1 ,,,, / |./ \\1 |\\n\\1\\1\\1\\1 \\3'| i\\z.\\2,,A\\l,.\\B / \\1.i \\1|\\n\\1\\1\\1\\1\\1 \\3'| | / C\\D/\\3'\\5,\\1\\9.\\1|\\n\\1\\1\\1\\1\\1\\1 | |/i \\m|/\\1 i\\1,.\\6 |\\F\\1|\\n\\1\\1\\1\\1\\1\\1.|/ /\\1\\h\\G \\1 \\6!\\1\\1\\b\\1|\\n\\1\\1\\1 \\1 \\1 k\\5>\\2\\9 \\1 o,.\\6\\2 \\1 /\\2!\\n\\1\\1\\1\\1\\1\\1 !'\\m//\\4\\I\\g', \\b \\4'7'\\J'\\n\\1\\1\\1\\1\\1\\1 \\3'\\K|M,p,\\O\\3|\\P\\n\\1\\1\\1\\1\\1 \\1\\1\\1\\c-,/\\1|p./\\n\\1\\1\\1\\1\\1 \\1\\1\\1'\\f'\\1\\1!o,.:\\Q \\R\\S\\T v\"+e.V+\" / W \"+e.N);8.d(\" \");",
            60,
            60,
            "|u3000|uff64|uff9a|uff40|u30fd|uff8d||console|uff8a|uff0f|uff3c|uff84|log|this.#config|uff70|u00b4|uff49||u2010||u3000_|u3008||_|___|uff72|u2500|uff67|u30cf|u30fc||u30bd|u4ece|u30d8|uff1e|__|u30a4|k_|uff17_|u3000L_|u3000i|uff1a|u3009|uff34|uff70r|u30fdL__||___i|updateTime|u30f3|u30ce|nLive2D|u770b|u677f|u5a18|u304f__|version|LIlGG|u00b40i".split(
              "|"
            ),
            0,
            {}
          )
        );
      }
      model.loadModel(modelId, modelTexturesId);
      // 加载各个来源的 tips 文件并进行合并
      this.#loadTips().then((result) => this.#registerEventListener(result));
    }

    /**
     * 从各个位置，获取 Live2d 提示文件，若配置的 tips 文件读取失败，则会回退到默认 tips 文件
     *
     * @returns {Promise<unknown>}
     */
    #loadTips() {
      let config = this.#config;
      return new Promise((resolve) => {
        Promise.all([util.loadTipsResource(config["themeTipsPath"]), util.loadTipsResource(config["tipsPath"])]).then(
          (result) => {
            // 后台配置 tips，其中包含 mouseover 及 click 两种配置，以及单独配置的 message
            let configTips = util.backendConfigConvert(config);
            // 主题设置 tips，其中包含 mouseover 及 click 两种配置（会过滤掉其他配置）
            let themeTips = {
              click: result[0]["click"] || [],
              mouseover: result[0]["mouseover"] || [],
            };
            // 配置的 tips 文件，包含所有属性 （click, mouseover, seasons, time, message）
            let defaultTips = result[1];
            // 若配置的 tips 文件不存在，则回退到默认 tips
            if (Object.keys(defaultTips).length === 0) {
              util.loadTipsResource(this.defaultConfig.tipsPath).then((tips) => {
                resolve(util.mergeTips(configTips, themeTips, tips));
              });
            } else {
              resolve(util.mergeTips(configTips, themeTips, defaultTips));
            }
          }
        );
      });
    }
  }

  class Model {
    #apiPath;
    #config;

    constructor(config) {
      let apiPath = config["apiPath"];
      if (apiPath !== undefined && typeof apiPath === "string" && apiPath.length > 0) {
        if (!apiPath.endsWith("/")) apiPath += "/";
      } else {
        throw "Invalid initWidget argument!";
      }
      this.#apiPath = apiPath;
      this.#config = config;
    }

    async loadModel(modelId, modelTexturesId, text) {
      localStorage.setItem("modelId", modelId);
      localStorage.setItem("modelTexturesId", modelTexturesId);
      message.showMessage(text, 4000, 3);
      loadlive2d(
        "live2d",
        `${this.#apiPath}get/?id=${modelId}-${modelTexturesId}`,
        this.#config["consoleShowStatu"] === true
          ? console.log(`[Status] Live2D 模型 ${modelId}-${modelTexturesId} 加载完成`)
          : null
      );
    }

    async loadRandModel() {
      const modelId = Number(localStorage.getItem("modelId")),
        modelTexturesId = Number(localStorage.getItem("modelTexturesId"));
      // 可选 "rand"(随机), "switch"(顺序)
      fetch(`${this.#apiPath}rand_textures/?id=${modelId}-${modelTexturesId}`)
        .then((response) => response.json())
        .then((result) => {
          if (result["textures"]["id"] === 1 && (modelTexturesId === 1 || modelTexturesId === 0)) {
            message.showMessage("我还没有其他衣服呢！", 4000, 3);
          } else {
            this.loadModel(modelId, result["textures"]["id"], "我的新衣服好看嘛？");
          }
        });
    }

    async loadOtherModel() {
      let modelId = Number(localStorage.getItem("modelId"));
      fetch(`${this.#apiPath}switch/?id=${modelId}`)
        .then((response) => response.json())
        .then((result) => {
          this.loadModel(result.model.id, 0, result.model.message);
        });
    }
  }

  /**
   * 异步加载对应的资源
   *
   * @param url 需要加载的资源链接
   * @param type 需要加载的资源类型，如 css/js
   *
   * @returns {Promise<unknown>} Promise
   */
  util.loadExternalResource = function (url, type) {
    return new Promise((resolve, reject) => {
      let tag;
      if (type === "css") {
        tag = document.createElement("link");
        tag.rel = "stylesheet";
        tag.href = url;
      } else if (type === "js") {
        tag = document.createElement("script");
        tag.src = url;
      }
      if (tag) {
        tag.onload = () => resolve(url);
        tag.onerror = () => reject(url);
        document.head.appendChild(tag);
      }
    });
  };

  /**
   * 从数组中获取任意一个数据。当给定数据不是数组时，将返回原数据。
   *
   * @param obj 需要获取随机数的数组
   * @returns {Object} 数组内的任意一个数据或原数据
   */
  util.randomSelection = function (obj) {
    return Array.isArray(obj) ? obj[Math.floor(Math.random() * obj.length)] : obj;
  };

  /**
   * 读取 tips 资源
   *
   * @param url 资源链接
   * @returns {Promise<unknown>}
   */
  util.loadTipsResource = function (url) {
    let defaultObj = {};
    return new Promise((resolve) => {
      if (!url) {
        resolve(defaultObj);
      }
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          resolve(result);
        })
        .catch(() => {
          resolve(defaultObj);
        });
    });
  };

  /**
   * 将后台主题中的配置转为适合 TIPS 的格式
   *
   * @param config 配置文件
   */
  util.backendConfigConvert = function (config = {}) {
    let tips = {
      click: [],
      mouseover: [],
      message: {},
    };
    // selector
    if (!!config["selectorTips"]) {
      config["selectorTips"].forEach((item) => {
        let texts = item["messageTexts"].map((text) => text.message);
        let obj = {
          selector: item["selector"],
          text: texts,
        };
        if (item["mouseAction"] === "click") {
          tips.click.push(obj);
        } else {
          tips.mouseover.push(obj);
        }
      });
    }
    // message
    tips.message.visibilitychange = config["backSiteTip"];
    tips.message.copy = config["copyContentTip"];
    tips.message.console = config["openConsoleTip"];
    return tips;
  };

  /**
   * 合并各个渠道的 tips，根据获取位置不同，合并时优先级也不同。优先级按高到低的顺序为
   *
   * <ul>
   *   <ol>后台插件配置文件中获得的 tips。（该配置文件只支持 mouseover 与 click 两种类型的 tips 属性，另外包括单独配置的 message）</ol>
   *   <ol>主题文件中设置的 tips （该配置文件只支持 mouseover 与 click 两种类型的 tips 属性）</ol>
   *   <ol>配置/默认的 tips 文件（该配置文件支持所有的 tips 属性，但其属性会被优先级高的覆盖）</ol>
   * </ul>
   *
   * 请注意，此项返回值为修改后的 defaultTips，任何修改 defaultTips 的情况都将导致返回值同步修改。
   *
   * @param configTips 后台配置文件中设置的 tips
   * @param themeTips 主题提供的 tips
   * @param defaultTips 配置/默认的 tips
   */
  util.mergeTips = function (configTips, themeTips, defaultTips) {
    let duplicateClick = [...configTips["click"], ...themeTips["click"], ...defaultTips["click"]];
    let duplicateMouseover = [...configTips["mouseover"], ...themeTips["mouseover"], ...defaultTips["mouseover"]];
    defaultTips.click = util.distinctArray(duplicateClick, "selector");
    defaultTips.mouseover = util.distinctArray(duplicateMouseover, "selector");
    defaultTips.message = { ...defaultTips.message, ...configTips.message };
    return defaultTips;
  };

  /**
   * 去重对象数组
   * @param dupArray 需要去重的数组
   * @param key 对象数组 key
   */
  util.distinctArray = function (dupArray, key) {
    let obj = {};
    return dupArray.reduce((curr, next) => {
      if (!obj[next[key]]) {
        obj[next[key]] = true;
        curr.push(next);
      }
      return curr;
    }, []);
  };

  message.messageTimer = null;

  /**
   * 显示消息至消息栏
   *
   * @param text 需要显示的消息
   * @param timeout 消息展示时间（最大）
   * @param priority 消息优先级，数字越大，优先级越大
   */
  message.showMessage = function (text, timeout, priority) {
    let live2dPriority = sessionStorage.getItem("live2d-priority");
    if (!text || (live2dPriority && live2dPriority > priority)) return;
    if (this.messageTimer) {
      clearTimeout(this.messageTimer);
      this.messageTimer = null;
    }
    text = util.randomSelection(text);
    sessionStorage.setItem("live2d-priority", priority);
    const tips = document.getElementById("live2d-tips");
    tips.innerHTML = text;
    tips.classList.add("live2d-tips-active");
    this.messageTimer = setTimeout(() => {
      sessionStorage.removeItem("live2d-priority");
      tips.classList.remove("live2d-tips-active");
    }, timeout);
  };

  /**
   * 创建一个流式效果的消息框。
   * 此消息框的优先级将大于所有其他消息框优先级，且不会被其他消息覆盖。
   *
   * @param timeout 等待消息流的最大时间，超过此时间将自动关闭流消息框
   * @param showTimeout 消息全部接受完之后，展示时长
   */
  message.createStreamMessage = function (timeout, showTimeout) {
    const priority = 99999;

    const updateTimer = function (time) {
      if (this.messageTimer) {
        clearTimeout(this.messageTimer);
        this.messageTimer = null;
      }
      this.messageTimer = setTimeout(() => {
        sessionStorage.removeItem("live2d-priority");
        tips.classList.remove("live2d-tips-active");
      }, time);
    };

    sessionStorage.setItem("live2d-priority", priority);
    const tips = document.getElementById("live2d-tips");
    tips.innerHTML = "";
    tips.classList.add("live2d-tips-active");
    updateTimer(timeout);

    const sendMessage = function (text) {
      tips.innerHTML += text;
    };

    const stop = function () {
      updateTimer(showTimeout);
    };

    return {
      sendMessage,
      stop,
    };
  };

  /**
   * 显示一言
   *
   * @param api 需要获取的一言接口
   * @param callback 获取到的一言返回结果特殊化处理（用于不同接口的差异性）。
   *                 其处理返回值为数组或字符串，数组第一位为一言（不可为空），数组第二位为作者，网站等信息（可为空）
   */
  message.showHitokoto = function (api, callback) {
    fetch(api)
      .then((response) => response.json())
      .then((result) => {
        let text = callback(result);
        if (typeof text === "string") {
          this.showMessage(text, 6000, 2);
        } else {
          this.showMessage(text[0], 6000, 2);
          if (text[1] !== undefined) {
            setTimeout(() => {
              this.showMessage(text[1], 4000, 2);
            }, 6000);
          }
        }
      });
  };

  /**
   * 首次进入，显示欢迎消息
   *
   * @param time 时间
   * @returns {string|*}
   */
  message.welcomeMessage = function (time) {
    // referrer 内获取的网页
    const domains = {
      baidu: "百度",
      so: "360搜索",
      google: "谷歌搜索",
    };
    // 如果是主页
    if (location.pathname === "/") {
      for (let { hour, text } of time) {
        const now = new Date(),
          after = hour.split("-")[0],
          before = hour.split("-")[1] || after;
        if (after <= now.getHours() && now.getHours() <= before) {
          return text;
        }
      }
    }
    const text = `欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;
    let from;
    if (document.referrer !== "") {
      const referrer = new URL(document.referrer),
        domain = referrer.hostname.split(".")[1];
      if (location.hostname === referrer.hostname) return text;
      if (domain in domains) {
        from = domains[domain];
      } else {
        from = referrer.hostname;
      }
      return `Hello！来自 <span>${from}</span> 的朋友<br>${text}`;
    }
    return text;
  };

  /**
   * Live2d 右侧一言小工具
   *
   * @param config
   * @returns {{icon: string, callback: (function(): void)}}
   */
  tools.hitokoto = function (config = {}) {
    let api = config["hitokotoApi"] || "https://v1.hitokoto.cn";
    let callback;
    switch (api) {
      case "https://v1.hitokoto.cn":
        callback = () =>
          message.showHitokoto(api, (result) => {
            return [
              result["hitokoto"],
              `这句一言来自 <span>「${result["from"]}」</span>，是 <span>${result["creator"]}</span> 在 hitokoto.cn 投稿的。`,
            ];
          });
        break;
      default:
        callback = () =>
          message.showHitokoto(api, (result) => {
            if (result["hitokoto"] !== undefined) {
              return [result["hitokoto"]];
            }
            return `一言接口格式不正确，请确保一言返回字段为 hitokoto，例如 {"hitokoto": "一言"}。特殊接口请联系插件作者增加适配`;
          });
        break;
    }
    return {
      icon: config["hitokotoIcon"] || "ph-chat-circle-fill",
      callback: callback,
    };
  };

  /**
   * 切换模组
   *
   * @param config
   * @returns {{icon: string, callback: callback}}
   */
  tools["switch-model"] = function (config = {}) {
    return {
      icon: config["switch-model-icon"] || "ph-arrows-counter-clockwise-fill",
      callback: () => {},
    };
  };

  /**
   * 切换纹理/衣服
   *
   * @param config
   * @returns {{icon: string, callback: callback}}
   */
  tools["switch-texture"] = function (config = {}) {
    return {
      icon: config["switch-texture-icon"] || "ph-dress-fill",
      callback: () => {},
    };
  };

  /**
   * 截图功能
   *
   * @param config
   * @returns {{icon: string, callback: callback}}
   */
  tools.photo = function (config = {}) {
    let photoName = config["photoName"] || "live2d";
    return {
      icon: config["photoIcon"] || "ph-camera-fill",
      callback: () => {
        message.showMessage("照好了嘛，是不是很可爱呢？", 6000, 2);
        Live2D.captureName = photoName + ".png";
        Live2D.captureFrame = true;
      },
    };
  };

  /**
   * 前往目标站点
   *
   * @param config
   * @returns {{icon: string, callback: callback}}
   */
  tools.info = function (config = {}) {
    let siteUrl = "https://github.com/LIlGG/plugin-live2d";
    return {
      icon: config["infoIcon"] || "ph-info-fill",
      callback: () => {
        open(siteUrl);
      },
    };
  };

  /**
   * 退出 live2d
   *
   * @param config
   * @returns {{icon: string, callback: callback}}
   */
  tools.quit = function (config = {}) {
    return {
      icon: config["quitIcon"] || "ph-x-bold",
      callback: () => {
        localStorage.setItem("live2d-display", Date.now());
        message.showMessage("愿你有一天能与重要的人重逢。", 2000, 4);
        document.getElementById("live2d-plugin").style.bottom = "-500px";
        setTimeout(() => {
          document.getElementById("live2d-plugin").style.display = "none";
          document.getElementById("live2d-toggle").classList.add("live2d-toggle-active");
        }, 3000);
      },
    };
  };

  /**
   * 注册工具
   *
   * @param model 需要添加工具的模组 {@link Model}
   * @param config 配置文件
   * @private 私有方法
   */
  tools._registerTools = function (model, config) {
    if (!Array.isArray(config.tools)) {
      config.tools = Object.keys(tools);
    }
    // TODO 小工具样式
    for (let tool of config.tools) {
      if (tools[tool]) {
        let { icon, callback } = tools[tool](config);
        switch (tool) {
          case "switch-model":
            callback = () => model.loadOtherModel();
            break;
          case "switch-texture":
            callback = () => model.loadRandModel();
            break;
        }
        document
          .getElementById("live2d-tool")
          .insertAdjacentHTML(
            "beforeend",
            `<span id="live2d-tool-${tool}"><i class="iconify" data-icon="${icon}" data-width="20" data-height="20"></i></span>`
          );
        document.getElementById(`live2d-tool-${tool}`).addEventListener("click", callback);
      }
    }
  };
  window.onload = function () {
    localStorage.removeItem("historyMessages");
  };

  return new Live2d();
}
