//Thu Dec 12 2024 07:30:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x1674ae = _0x3f4dc2("电信抽奖");
const _0x2c18ed = require("got");
const _0x22f3aa = "chinaTelecom";
const _0x2658d6 = ["\n", "&", "@"];
const _0x52adbc = [_0x22f3aa + "Cookie"];
const _0x347030 = parseInt(process.env[_0x22f3aa + "Thread"]) || 50;
const _0x4cc150 = 8000;
const _0x5afb51 = 3;
const _0x3efdbd = "CtClient;10.2.0;iOS;16.1.2;iPhone 14 Pro Max;";
const _0x1567b8 = 13;
const _0x2ea9e1 = 1000;
const _0x1029ee = 3600000;
const _0x2d852d = 0;
const _0x52aef2 = [19, 68, 69, 70, 71];
class _0x43b779 {
  constructor() {
    this.index = _0x1674ae.userIdx++;
    this.name = "";
    this.valid = true;
    const _0x440eb7 = {
      limit: 0
    };
    const _0x24929f = {
      Connection: "keep-alive"
    };
    const _0x10f02f = {
      retry: _0x440eb7,
      timeout: _0x4cc150,
      followRedirect: false,
      headers: _0x24929f
    };
    this.got = _0x2c18ed.extend(_0x10f02f);
  }
  log(_0x368b6e, _0x3f5c02 = {}) {
    var _0x13785b = "";
    var _0x44000a = _0x1674ae.userCount.toString().length;
    if (this.index) {
      _0x13785b += "账号[" + _0x1674ae.padStr(this.index, _0x44000a) + "]";
    }
    if (this.name) {
      _0x13785b += "[" + this.name + "]";
    }
    _0x1674ae.log(_0x13785b + _0x368b6e, _0x3f5c02);
  }
  async request(_0x37e27b) {
    var _0x22718f = null;
    var _0x354355 = 0;
    var _0xfd3354 = _0x37e27b.fn || _0x37e27b.url;
    _0x37e27b.method = _0x37e27b?.["method"]?.["toUpperCase"]() || "GET";
    while (_0x354355++ < _0x5afb51) {
      try {
        await this.got(_0x37e27b).then(_0x13b7d5 => {
          _0x22718f = _0x13b7d5;
        }, _0x1bd73e => {
          _0x22718f = _0x1bd73e.response;
        });
        if ((_0x22718f?.["statusCode"] / 100 | 0) <= 4) {
          break;
        }
      } catch (_0x41b2c8) {
        _0x41b2c8.name == "TimeoutError" ? this.log("[" + _0xfd3354 + "]请求超时，重试第" + _0x354355 + "次") : this.log("[" + _0xfd3354 + "]请求错误(" + _0x41b2c8.message + ")，重试第" + _0x354355 + "次");
      }
    }
    const _0x20b86e = {
      statusCode: -1,
      headers: null,
      result: null
    };
    if (_0x22718f == null) {
      return Promise.resolve(_0x20b86e);
    }
    let {
      statusCode: _0x4918cc,
      headers: _0x3edc99,
      body: _0x5caeb4
    } = _0x22718f;
    if (_0x5caeb4) {
      try {
        _0x5caeb4 = JSON.parse(_0x5caeb4);
      } catch {}
    }
    const _0x5b46a7 = {
      statusCode: _0x4918cc,
      headers: _0x3edc99,
      result: _0x5caeb4
    };
    return Promise.resolve(_0x5b46a7);
  }
}
let _0x24b3f1 = new _0x43b779();
class _0x4960ff extends _0x43b779 {
  constructor(_0x1b4583) {
    super();
    this.cookie = _0x1b4583;
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: {
        "User-Agent": _0x3efdbd,
        activityCode: "ACTCODE20230427TR6A5NI3",
        cookie: this.cookie
      }
    });
  }
  async saveTaskRecord(_0x404fd7, _0x250281 = {}) {
    try {
      const _0x1dfd29 = {
        taskId: _0x404fd7
      };
      let _0x379a96 = {
        fn: "saveTaskRecord",
        method: "post",
        url: "https://wapact.189.cn:9001/mas-pub-web/taskRecord/saveTaskRecord",
        json: _0x1dfd29
      };
      let {
        result: _0xe8f3d4
      } = await this.request(_0x379a96);
      if (_0xe8f3d4?.["code"] == 1) {
        this.log("完成任务[" + _0x404fd7 + "]成功");
        await this.lottery();
      } else {
        let _0x339fb7 = _0xe8f3d4?.["exception"] || _0xe8f3d4?.["msg"] || "";
        this.log("完成任务[" + _0x404fd7 + "]失败: " + _0x339fb7);
      }
    } catch (_0x322d5f) {
      console.log(_0x322d5f);
    }
  }
  async lottery(_0x439c5f = {}) {
    try {
      let _0x406fe5 = {
        fn: "lottery",
        method: "get",
        url: "https://wapact.189.cn:9001/mas-pub-web/lotteryActivity/lottery"
      };
      let {
        result: _0x116fda
      } = await this.request(_0x406fe5);
      if (_0x116fda?.["code"] == 1) {
        this.log("抽奖: " + _0x116fda?.["data"]?.["goodsName"]);
      } else {
        let _0x3e8226 = _0x116fda?.["exception"] || _0x116fda?.["msg"] || "";
        this.log("抽奖失败: " + _0x3e8226);
        this.can_draw = false;
      }
    } catch (_0x541478) {
      console.log(_0x541478);
    }
  }
  async userTask() {
    for (let _0x4a6f6c of _0x52aef2) {
      await this.saveTaskRecord(_0x4a6f6c);
    }
    this.can_draw = true;
    while (this.can_draw) {
      await this.lottery();
    }
  }
}
!(async () => {
  _0x1674ae.read_env(_0x4960ff);
  for (let _0xa00b6a of _0x1674ae.userList) {
    await _0xa00b6a.userTask();
  }
})().catch(_0x1882cf => _0x1674ae.log(_0x1882cf)).finally(() => _0x1674ae.exitNow());
function _0x3f4dc2(_0x2eecc5) {
  return new class {
    constructor(_0x2eb1c6) {
      this.name = _0x2eb1c6;
      this.startTime = Date.now();
      const _0x3557de = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x3557de);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0xa31be1, _0x57d0e2 = {}) {
      let _0x15f982 = {
        console: true
      };
      Object.assign(_0x15f982, _0x57d0e2);
      if (_0x15f982.time) {
        let _0x5963e0 = _0x15f982.fmt || "hh:mm:ss";
        _0xa31be1 = "[" + this.time(_0x5963e0) + "]" + _0xa31be1;
      }
      if (_0x15f982.notify) {
        this.notifyStr.push(_0xa31be1);
      }
      if (_0x15f982.console) {
        console.log(_0xa31be1);
      }
    }
    get(_0x2f44f3, _0x57f6b6, _0x4e1db8 = "") {
      let _0x2bc9ed = _0x4e1db8;
      _0x2f44f3?.["hasOwnProperty"](_0x57f6b6) && (_0x2bc9ed = _0x2f44f3[_0x57f6b6]);
      return _0x2bc9ed;
    }
    pop(_0x17d609, _0x18cd56, _0x36927e = "") {
      let _0x2b0856 = _0x36927e;
      _0x17d609?.["hasOwnProperty"](_0x18cd56) && (_0x2b0856 = _0x17d609[_0x18cd56], delete _0x17d609[_0x18cd56]);
      return _0x2b0856;
    }
    copy(_0x195129) {
      return Object.assign({}, _0x195129);
    }
    read_env(_0x3c30d6) {
      let _0x577056 = _0x52adbc.map(_0x1702e5 => process.env[_0x1702e5]);
      for (let _0xa1ac13 of _0x577056.filter(_0x2f4e8c => !!_0x2f4e8c)) {
        let _0x303873 = _0x2658d6.filter(_0x3c88ff => _0xa1ac13.includes(_0x3c88ff));
        let _0x43e55c = _0x303873.length > 0 ? _0x303873[0] : _0x2658d6[0];
        for (let _0x5e2096 of _0xa1ac13.split(_0x43e55c).filter(_0x584e08 => !!_0x584e08)) {
          this.userList.push(new _0x3c30d6(_0x5e2096));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x12e257 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x52adbc.map(_0x47ac7d => "[" + _0x47ac7d + "]").join("或"), _0x12e257);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x428e42, _0x8379d3, _0xab48b0 = {}) {
      while (_0x8379d3.idx < _0x1674ae.userList.length) {
        let _0x463b64 = _0x1674ae.userList[_0x8379d3.idx++];
        if (!_0x463b64.valid) {
          continue;
        }
        await _0x463b64[_0x428e42](_0xab48b0);
      }
    }
    async threadTask(_0xc227a9, _0x37a99f) {
      let _0x5a8cf9 = [];
      let _0x21fd35 = {
        idx: 0
      };
      while (_0x37a99f--) {
        _0x5a8cf9.push(this.threads(_0xc227a9, _0x21fd35));
      }
      await Promise.all(_0x5a8cf9);
    }
    time(_0x1d19b4, _0x2d3bb9 = null) {
      let _0x29e539 = _0x2d3bb9 ? new Date(_0x2d3bb9) : new Date();
      let _0x15a94d = {
        "M+": _0x29e539.getMonth() + 1,
        "d+": _0x29e539.getDate(),
        "h+": _0x29e539.getHours(),
        "m+": _0x29e539.getMinutes(),
        "s+": _0x29e539.getSeconds(),
        "q+": Math.floor((_0x29e539.getMonth() + 3) / 3),
        S: this.padStr(_0x29e539.getMilliseconds(), 3)
      };
      /(y+)/.test(_0x1d19b4) && (_0x1d19b4 = _0x1d19b4.replace(RegExp.$1, (_0x29e539.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x33cec4 in _0x15a94d) new RegExp("(" + _0x33cec4 + ")").test(_0x1d19b4) && (_0x1d19b4 = _0x1d19b4.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x15a94d[_0x33cec4] : ("00" + _0x15a94d[_0x33cec4]).substr(("" + _0x15a94d[_0x33cec4]).length)));
      return _0x1d19b4;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x3c73b6 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x3c73b6.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x2945aa, _0x3b4787, _0x49bd8f = {}) {
      let _0x379750 = _0x49bd8f.padding || "0";
      let _0x3046ae = _0x49bd8f.mode || "l";
      let _0x4680ad = String(_0x2945aa);
      let _0x563b8c = _0x3b4787 > _0x4680ad.length ? _0x3b4787 - _0x4680ad.length : 0;
      let _0x866fba = "";
      for (let _0x869f16 = 0; _0x869f16 < _0x563b8c; _0x869f16++) {
        _0x866fba += _0x379750;
      }
      _0x3046ae == "r" ? _0x4680ad = _0x4680ad + _0x866fba : _0x4680ad = _0x866fba + _0x4680ad;
      return _0x4680ad;
    }
    json2str(_0x47eeb7, _0x4fc882, _0x19bb88 = false) {
      let _0x2fe10d = [];
      for (let _0x31159c of Object.keys(_0x47eeb7).sort()) {
        let _0x3fa998 = _0x47eeb7[_0x31159c];
        if (_0x3fa998 && _0x19bb88) {
          _0x3fa998 = encodeURIComponent(_0x3fa998);
        }
        _0x2fe10d.push(_0x31159c + "=" + _0x3fa998);
      }
      return _0x2fe10d.join(_0x4fc882);
    }
    str2json(_0x2c3c46, _0x16d1c7 = false) {
      let _0x591630 = {};
      for (let _0x248c0c of _0x2c3c46.split("&")) {
        if (!_0x248c0c) {
          continue;
        }
        let _0x45b2eb = _0x248c0c.indexOf("=");
        if (_0x45b2eb == -1) {
          continue;
        }
        let _0x43bf13 = _0x248c0c.substr(0, _0x45b2eb);
        let _0x56ecf4 = _0x248c0c.substr(_0x45b2eb + 1);
        if (_0x16d1c7) {
          _0x56ecf4 = decodeURIComponent(_0x56ecf4);
        }
        _0x591630[_0x43bf13] = _0x56ecf4;
      }
      return _0x591630;
    }
    randomPattern(_0x34d7a8, _0x1971f9 = "abcdef0123456789") {
      let _0x55684c = "";
      for (let _0x3c27ac of _0x34d7a8) {
        if (_0x3c27ac == "x") {
          _0x55684c += _0x1971f9.charAt(Math.floor(Math.random() * _0x1971f9.length));
        } else {
          _0x3c27ac == "X" ? _0x55684c += _0x1971f9.charAt(Math.floor(Math.random() * _0x1971f9.length)).toUpperCase() : _0x55684c += _0x3c27ac;
        }
      }
      return _0x55684c;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x2ec470, _0x2632dc = "abcdef0123456789") {
      let _0x6bfe66 = "";
      for (let _0x4749d4 = 0; _0x4749d4 < _0x2ec470; _0x4749d4++) {
        _0x6bfe66 += _0x2632dc.charAt(Math.floor(Math.random() * _0x2632dc.length));
      }
      return _0x6bfe66;
    }
    randomList(_0x49cde2) {
      let _0x26c3e9 = Math.floor(Math.random() * _0x49cde2.length);
      return _0x49cde2[_0x26c3e9];
    }
    wait(_0x2e1dd4) {
      return new Promise(_0x1dd5af => setTimeout(_0x1dd5af, _0x2e1dd4));
    }
    async exitNow() {
      await this.showmsg();
      let _0x2ca7ff = Date.now();
      let _0x228924 = (_0x2ca7ff - this.startTime) / 1000;
      this.log("");
      const _0x532dd6 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x228924 + "秒", _0x532dd6);
      process.exit(0);
    }
    normalize_time(_0x29aeca, _0x1871ce = {}) {
      let _0x457f92 = _0x1871ce.len || _0x1567b8;
      _0x29aeca = _0x29aeca.toString();
      let _0x58f54d = _0x29aeca.length;
      while (_0x58f54d < _0x457f92) {
        _0x29aeca += "0";
      }
      _0x58f54d > _0x457f92 && (_0x29aeca = _0x29aeca.slice(0, 13));
      return parseInt(_0x29aeca);
    }
    async wait_until(_0x29e0e7, _0x22437b = {}) {
      let _0x5ef277 = _0x22437b.logger || this;
      let _0x5f55d8 = _0x22437b.interval || _0x2ea9e1;
      let _0x49bd79 = _0x22437b.limit || _0x1029ee;
      let _0x31e399 = _0x22437b.ahead || _0x2d852d;
      if (typeof _0x29e0e7 == "string" && _0x29e0e7.includes(":")) {
        if (_0x29e0e7.includes("-")) {
          _0x29e0e7 = new Date(_0x29e0e7).getTime();
        } else {
          let _0x2a28c1 = this.time("yyyy-MM-dd ");
          _0x29e0e7 = new Date(_0x2a28c1 + _0x29e0e7).getTime();
        }
      }
      let _0x1831b8 = this.normalize_time(_0x29e0e7) - _0x31e399;
      let _0x143d34 = this.time("hh:mm:ss.S", _0x1831b8);
      let _0x39a24b = Date.now();
      _0x39a24b > _0x1831b8 && (_0x1831b8 += 86400000);
      let _0x2907e0 = _0x1831b8 - _0x39a24b;
      if (_0x2907e0 > _0x49bd79) {
        const _0x4f6313 = {
          time: true
        };
        _0x5ef277.log("离目标时间[" + _0x143d34 + "]大于" + _0x49bd79 / 1000 + "秒,不等待", _0x4f6313);
      } else {
        const _0x2b55e8 = {
          time: true
        };
        _0x5ef277.log("离目标时间[" + _0x143d34 + "]还有" + _0x2907e0 / 1000 + "秒,开始等待", _0x2b55e8);
        while (_0x2907e0 > 0) {
          let _0x586b69 = Math.min(_0x2907e0, _0x5f55d8);
          await this.wait(_0x586b69);
          _0x39a24b = Date.now();
          _0x2907e0 = _0x1831b8 - _0x39a24b;
        }
        const _0x354dc1 = {
          time: true
        };
        _0x5ef277.log("已完成等待", _0x354dc1);
      }
    }
    async wait_gap_interval(_0x5092cb, _0x3006a0) {
      let _0x125199 = Date.now() - _0x5092cb;
      _0x125199 < _0x3006a0 && (await this.wait(_0x3006a0 - _0x125199));
    }
  }(_0x2eecc5);
}