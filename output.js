//Fri Dec 20 2024 14:44:02 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x24c9ac = _0x15771a("电信营业厅");
const _0x17383c = require("got");
const _0x41dd0f = require("fs");
const _0x4523a2 = require("crypto-js");
const {
  CookieJar: _0x1ed2e2
} = require("tough-cookie");
const _0x2f255e = "chinaTelecom";
const _0x34becb = /[\n\&\@]/;
const _0x29de5f = [_0x2f255e + "Account"];
const _0x3e1f75 = 8000;
const _0xe57457 = 3;
const _0x1b3d2b = 5.01;
const _0x4b08ef = "chinaTelecom";
const _0x36b2d7 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json";
let _0x55e27b = {};
const _0x239acd = "./chinaTelecom_cache.json";
const _0x25d3a3 = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1";
const _0x124360 = "34d7cb0bcdf07523";
const _0x5e096e = "1234567`90koiuyhgtfrdewsaqaqsqde";
const _0x5db981 = "\0\0\0\0\0\0\0\0";
const _0x4c8d9f = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB";
const _0x47941a = "-----BEGIN PUBLIC KEY-----\n" + _0x4c8d9f + "\n-----END PUBLIC KEY-----";
const _0x383e57 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORcAdcbpk2L+udld5kZNwIDAQAB";
const _0x5bc923 = "-----BEGIN PUBLIC KEY-----\n" + _0x383e57 + "\n-----END PUBLIC KEY-----";
const _0x67162f = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIPOHtjs6p4sTlpFvrx+ESsYkEvyT4JB/dcEbU6C8+yclpcmWEvwZFymqlKQq89laSH4IxUsPJHKIOiYAMzNibhED1swzecH5XLKEAJclopJqoO95o8W63Euq6K+AKMzyZt1SEqtZ0mXsN8UPnuN/5aoB3kbPLYpfEwBbhto6yrwIDAQAB";
const _0x21a889 = "-----BEGIN PUBLIC KEY-----\n" + _0x67162f + "\n-----END PUBLIC KEY-----";
const _0x596bae = require("node-rsa");
let _0x3c1ea4 = new _0x596bae(_0x47941a);
const _0x22e0d0 = {
  encryptionScheme: "pkcs1"
};
_0x3c1ea4.setOptions(_0x22e0d0);
let _0x1e233d = new _0x596bae(_0x5bc923);
const _0x1bcbd6 = {
  encryptionScheme: "pkcs1"
};
_0x1e233d.setOptions(_0x1bcbd6);
let _0x1c9119 = new _0x596bae(_0x21a889);
const _0xe461f4 = {
  encryptionScheme: "pkcs1"
};
_0x1c9119.setOptions(_0xe461f4);
const _0x219a57 = {
  taskShort: "hg_qd_rmrwtjq",
  taskLong: "hg_qd_zrwzjd",
  signReward: "hg_qd_qdjdtc",
  recommandExchange: "hg_qd_jddhsptjq",
  vipExchange: "hg_qd_jddhhl",
  continueSign: "hg_qd_qdtqtc",
  jindouExchangeHuafei_am: "hg_qd_jdmszswjp",
  jindouExchangeHuafei_pm: "hg_qd_jdmszxwjp"
};
const _0x1e017f = 5;
function _0x45ef9e(_0x4e20ef, _0x1718f1, _0x2ae414, _0x5379f0, _0x4aa02a, _0x413fa1) {
  return _0x4523a2[_0x4e20ef].encrypt(_0x4523a2.enc.Utf8.parse(_0x5379f0), _0x4523a2.enc.Utf8.parse(_0x4aa02a), {
    mode: _0x4523a2.mode[_0x1718f1],
    padding: _0x4523a2.pad[_0x2ae414],
    iv: _0x4523a2.enc.Utf8.parse(_0x413fa1)
  }).ciphertext.toString(_0x4523a2.enc.Hex);
}
function _0x4809ca(_0x505990, _0x2bae04, _0x549512, _0x2bf14b, _0x38ad4b, _0x542a4e) {
  return _0x4523a2[_0x505990].decrypt({
    ciphertext: _0x4523a2.enc.Hex.parse(_0x2bf14b)
  }, _0x4523a2.enc.Utf8.parse(_0x38ad4b), {
    mode: _0x4523a2.mode[_0x2bae04],
    padding: _0x4523a2.pad[_0x549512],
    iv: _0x4523a2.enc.Utf8.parse(_0x542a4e)
  }).toString(_0x4523a2.enc.Utf8);
}
function _0x2684ac() {
  try {
    _0x41dd0f.writeFileSync(_0x239acd, JSON.stringify(_0x55e27b, null, 4), "utf-8");
  } catch (_0x2517d1) {
    console.log("保存缓存出错");
  }
}
function _0x2b42fc() {
  try {
    _0x55e27b = JSON.parse(_0x41dd0f.readFileSync(_0x239acd, "utf-8"));
  } catch (_0x433153) {
    console.log("读取缓存出错, 新建一个token缓存");
    _0x2684ac();
  }
}
class _0x2c3530 {
  constructor() {
    this.index = _0x24c9ac.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x3e2ddc = {
      limit: 0
    };
    const _0x456202 = {
      Connection: "keep-alive"
    };
    const _0x58ff00 = {
      retry: _0x3e2ddc,
      timeout: _0x3e1f75,
      followRedirect: false,
      headers: _0x456202
    };
    this.got = _0x17383c.extend(_0x58ff00);
  }
  log(_0x320ae1, _0x1ecd68 = {}) {
    var _0xb127bb = "";
    var _0x30d9dc = _0x24c9ac.userCount.toString().length;
    if (this.index) {
      _0xb127bb += "账号[" + _0x24c9ac.padStr(this.index, _0x30d9dc) + "]";
    }
    if (this.name) {
      _0xb127bb += "[" + this.name + "]";
    }
    _0x24c9ac.log(_0xb127bb + _0x320ae1, _0x1ecd68);
  }
  async request(_0x244ae0) {
    var _0x2c06d9 = null;
    var _0x74818c = 0;
    var _0x1971ec = _0x244ae0.fn || _0x244ae0.url;
    _0x244ae0.method = _0x244ae0?.["method"]?.["toUpperCase"]() || "GET";
    while (_0x74818c++ < _0xe57457) {
      try {
        await this.got(_0x244ae0).then(_0x9e5105 => {
          _0x2c06d9 = _0x9e5105;
        }, _0x20d66a => {
          _0x2c06d9 = _0x20d66a.response;
        });
        if ((_0x2c06d9?.["statusCode"] / 100 | 0) <= 4) {
          break;
        }
      } catch (_0x2dddce) {
        _0x2dddce.name == "TimeoutError" ? this.log("[" + _0x1971ec + "]请求超时，重试第" + _0x74818c + "次") : this.log("[" + _0x1971ec + "]请求错误(" + _0x2dddce.message + ")，重试第" + _0x74818c + "次");
      }
    }
    const _0x5a0a00 = {
      statusCode: -1,
      headers: null,
      result: null
    };
    if (_0x2c06d9 == null) {
      return Promise.resolve(_0x5a0a00);
    }
    let {
      statusCode: _0x39e791,
      headers: _0x3b3916,
      body: _0x5e90f4
    } = _0x2c06d9;
    if (_0x5e90f4) {
      try {
        _0x5e90f4 = JSON.parse(_0x5e90f4);
      } catch {}
    }
    const _0x3ca98a = {
      statusCode: _0x39e791,
      headers: _0x3b3916,
      result: _0x5e90f4
    };
    return Promise.resolve(_0x3ca98a);
  }
}
let _0x24e1cc = new _0x2c3530();
class _0x34219d extends _0x2c3530 {
  constructor(_0x304ef2) {
    super();
    let _0x44dcb0 = _0x304ef2.split("#");
    this.name = _0x44dcb0[0];
    this.passwd = _0x44dcb0?.[1] || "";
    this.uuid = [_0x24c9ac.randomPattern("xxxxxxxx"), _0x24c9ac.randomPattern("xxxx"), _0x24c9ac.randomPattern("4xxx"), _0x24c9ac.randomPattern("xxxx"), _0x24c9ac.randomPattern("xxxxxxxxxxxx")];
    this.cookieJar = new _0x1ed2e2();
    this.can_feed = true;
    const _0x48e6df = {
      Connection: "keep-alive",
      "User-Agent": _0x25d3a3
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x48e6df
    });
  }
  load_token() {
    let _0x4f56f9 = false;
    _0x55e27b[this.name] && (this.userId = _0x55e27b[this.name].userId, this.token = _0x55e27b[this.name].token, this.log("读取到缓存token"), _0x4f56f9 = true);
    return _0x4f56f9;
  }
  encode_phone() {
    let _0x54870f = this.name.split("");
    for (let _0x2b9c7e in _0x54870f) {
      _0x54870f[_0x2b9c7e] = String.fromCharCode(_0x54870f[_0x2b9c7e].charCodeAt(0) + 2);
    }
    return _0x54870f.join("");
  }
  async login(_0x39051a = {}) {
    let _0x36a5e9 = false;
    try {
      let _0x207a3a = _0x24c9ac.time("yyyyMMddhhmmss");
      let _0xe6c59b = "iPhone 14 15.4." + this.uuid.slice(0, 2).join("") + this.name + _0x207a3a + this.passwd + "0$$$0.";
      let _0x35a731 = {
        fn: "login",
        method: "post",
        url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
        json: {
          headerInfos: {
            code: "userLoginNormal",
            timestamp: _0x207a3a,
            broadAccount: "",
            broadToken: "",
            clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
            shopId: "20002",
            source: "110003",
            sourcePassword: "Sid98s",
            token: "",
            userLoginName: this.name
          },
          content: {
            attach: "test",
            fieldData: {
              loginType: "4",
              accountType: "",
              loginAuthCipherAsymmertric: _0x3c1ea4.encrypt(_0xe6c59b, "base64"),
              deviceUid: this.uuid.slice(0, 3).join(""),
              phoneNum: this.encode_phone(),
              isChinatelecom: "0",
              systemVersion: "15.4.0",
              authentication: this.passwd
            }
          }
        }
      };
      let {
        result: _0x342dcc
      } = await this.request(_0x35a731);
      let _0x30badb = _0x24c9ac.get(_0x342dcc?.["responseData"], "resultCode", -1);
      if (_0x30badb == "0000") {
        let {
          userId = "",
          token = ""
        } = _0x342dcc?.["responseData"]?.["data"]?.["loginSuccessResult"] || {};
        this.userId = userId;
        this.token = token;
        this.log("使用服务密码登录成功");
        _0x55e27b[this.name] = {
          token: token,
          userId: userId,
          t: Date.now()
        };
        _0x2684ac();
        _0x36a5e9 = true;
      } else {
        let _0x295962 = _0x342dcc?.["msg"] || _0x342dcc?.["responseData"]?.["resultDesc"] || _0x342dcc?.["headerInfos"]?.["reason"] || "";
        this.log("服务密码登录失败[" + _0x30badb + "]: " + _0x295962);
      }
    } catch (_0x1b86d3) {
      console.log(_0x1b86d3);
    } finally {
      return _0x36a5e9;
    }
  }
  async get_ticket(_0x3d5021 = {}) {
    let _0x4ab864 = "";
    try {
      let _0x2e9409 = "\n            <Request>\n                <HeaderInfos>\n                    <Code>getSingle</Code>\n                    <Timestamp>" + _0x24c9ac.time("yyyyMMddhhmmss") + "</Timestamp>\n                    <BroadAccount></BroadAccount>\n                    <BroadToken></BroadToken>\n                    <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                    <ShopId>20002</ShopId>\n                    <Source>110003</Source>\n                    <SourcePassword>Sid98s</SourcePassword>\n                    <Token>" + this.token + "</Token>\n                    <UserLoginName>" + this.name + "</UserLoginName>\n                </HeaderInfos>\n                <Content>\n                    <Attach>test</Attach>\n                    <FieldData>\n                        <TargetId>" + _0x45ef9e("TripleDES", "CBC", "Pkcs7", this.userId, _0x5e096e, _0x5db981) + "</TargetId>\n                        <Url>4a6862274835b451</Url>\n                    </FieldData>\n                </Content>\n            </Request>";
      let _0x12af63 = {
        fn: "get_ticket",
        method: "post",
        url: "https://appgologin.189.cn:9031/map/clientXML",
        body: _0x2e9409
      };
      let {
        result: _0x15ad14
      } = await this.request(_0x12af63);
      if (_0x15ad14) {
        let _0x1b0d3d = _0x15ad14.match(/\<Ticket\>(\w+)\<\/Ticket\>/);
        if (_0x1b0d3d) {
          let _0x348772 = _0x1b0d3d[1];
          _0x4ab864 = _0x4809ca("TripleDES", "CBC", "Pkcs7", _0x348772, _0x5e096e, _0x5db981);
          this.ticket = _0x4ab864;
        }
      }
      !_0x4ab864 && (!_0x3d5021.retry && (await this.login()) ? (_0x3d5021.retry = true, _0x4ab864 = await this.get_ticket(_0x3d5021)) : (this.log("没有获取到ticket: "), _0x15ad14 && console.log(_0x15ad14)));
    } catch (_0x57d205) {
      console.log(_0x57d205);
    } finally {
      return _0x4ab864;
    }
  }
  async get_sign(_0x35324f = {}) {
    let _0xe3b2c8 = false;
    try {
      const _0x54d336 = {
        ticket: this.ticket
      };
      let _0x2637b7 = {
        fn: "login",
        method: "get",
        url: "https://wapside.189.cn:9001/jt-sign/ssoHomLogin",
        searchParams: _0x54d336
      };
      let {
        result: _0x4c4e68
      } = await this.request(_0x2637b7);
      let _0x1b1d8a = _0x24c9ac.get(_0x4c4e68, "resoultCode", -1);
      _0x4c4e68?.["resoultCode"] == 0 ? (_0xe3b2c8 = _0x4c4e68?.["sign"], this.sign = _0xe3b2c8, this.got = this.got.extend({
        headers: {
          sign: this.sign
        }
      })) : this.log("获取sign失败[" + _0x1b1d8a + "]");
    } catch (_0x3e8e4d) {
      console.log(_0x3e8e4d);
    } finally {
      return _0xe3b2c8;
    }
  }
  encrypt_para(_0x110d83) {
    return _0x1e233d.encrypt(JSON.stringify(_0x110d83), "hex");
  }
  async userCoinInfo(_0x92e768 = false, _0x573d3c = {}) {
    try {
      let _0x341d88 = {
        phone: this.name
      };
      let _0x4cb36c = {
        fn: "userCoinInfo",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/api/home/userCoinInfo",
        json: {
          para: this.encrypt_para(_0x341d88)
        }
      };
      let {
        result: _0x45e5c9
      } = await this.request(_0x4cb36c);
      let _0x2ea76e = _0x24c9ac.get(_0x45e5c9, "resoultCode", -1);
      if (_0x2ea76e == 0) {
        this.coin = _0x45e5c9?.["totalCoin"] || 0;
        if (_0x92e768) {
          const _0x533b8b = {
            notify: true
          };
          this.log("金豆余额: " + this.coin, _0x533b8b);
          if (_0x45e5c9.amountEx) {
            let _0x2e4de6 = _0x24c9ac.time("yyyy-MM-dd", _0x45e5c9.expireDate);
            const _0x27c608 = {
              notify: true
            };
            _0x24c9ac.log("-- [" + _0x2e4de6 + "]将过期" + _0x45e5c9.amountEx + "金豆", _0x27c608);
          }
        }
      } else {
        let _0x5e086b = _0x45e5c9?.["msg"] || _0x45e5c9?.["resoultMsg"] || _0x45e5c9?.["error"] || "";
        this.log("查询账户金豆余额错误[" + _0x2ea76e + "]: " + _0x5e086b);
      }
    } catch (_0x285697) {
      console.log(_0x285697);
    }
  }
  async userStatusInfo(_0xfaa09f = {}) {
    try {
      let _0x19263d = {
        phone: this.name
      };
      let _0xbff0f6 = {
        fn: "userStatusInfo",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/api/home/userStatusInfo",
        json: {
          para: this.encrypt_para(_0x19263d)
        }
      };
      let {
        result: _0xc05cd
      } = await this.request(_0xbff0f6);
      let _0x43c0e1 = _0x24c9ac.get(_0xc05cd, "resoultCode", -1);
      if (_0x43c0e1 == 0) {
        let {
          continuousDay: _0x367274,
          signDay: _0x584d17,
          isSign: _0x5d3238,
          isSeven: _0x56acf9
        } = _0xc05cd?.["data"];
        this.log("今天" + (_0x5d3238 ? "已" : "未") + "签到, 已签到" + _0x584d17 + "天, 连签" + _0x367274 + "天");
        !_0x5d3238 && (await this.doSign());
        _0x56acf9 && (await this.exchangePrize());
      } else {
        let _0x10fcbc = _0xc05cd?.["msg"] || _0xc05cd?.["resoultMsg"] || _0xc05cd?.["error"] || "";
        this.log("查询账户签到状态错误[" + _0x43c0e1 + "]: " + _0x10fcbc);
      }
    } catch (_0x99992a) {
      console.log(_0x99992a);
    }
  }
  async doSign(_0x2f416b = {}) {
    try {
      let _0x190dea = {
        phone: this.name,
        date: Date.now(),
        sysType: "20002"
      };
      let _0xc808fd = {
        fn: "doSign",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/webSign/sign",
        json: {
          encode: _0x45ef9e("AES", "ECB", "Pkcs7", JSON.stringify(_0x190dea), _0x124360, 0)
        }
      };
      let {
        result: _0x4d2b86
      } = await this.request(_0xc808fd);
      let _0x3a6834 = _0x24c9ac.get(_0x4d2b86, "resoultCode", -1);
      if (_0x3a6834 == 0) {
        let _0x3b0fed = _0x24c9ac.get(_0x2f416b?.["data"], "code", -1);
        if (_0x3b0fed == 1) {
          const _0x28adf1 = {
            notify: true
          };
          this.log("签到成功，获得" + (_0x4d2b86?.["data"]?.["coin"] || 0) + "金豆", _0x28adf1);
          await this.userStatusInfo();
        } else {
          const _0x3f629e = {
            notify: true
          };
          this.log("签到失败[" + _0x3b0fed + "]: " + _0x4d2b86.data.msg, _0x3f629e);
        }
      } else {
        let _0x2ecd53 = _0x4d2b86?.["msg"] || _0x4d2b86?.["resoultMsg"] || _0x4d2b86?.["error"] || "";
        this.log("签到错误[" + _0x3a6834 + "]: " + _0x2ecd53);
      }
    } catch (_0x4362e8) {
      console.log(_0x4362e8);
    }
  }
  async exchangePrize(_0x291d05 = {}) {
    try {
      let _0x141c0e = {
        phone: this.name,
        type: _0x24c9ac.get(_0x291d05, "type", "7")
      };
      let _0x20c4a4 = {
        fn: "exchangePrize",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/webSign/exchangePrize",
        json: {
          para: this.encrypt_para(_0x141c0e)
        }
      };
      let {
        result: _0x2abc3a
      } = await this.request(_0x20c4a4);
      let _0x1936d6 = _0x24c9ac.get(_0x2abc3a, "resoultCode", -1);
      if (_0x1936d6 == 0) {
        let _0x20e645 = _0x24c9ac.get(_0x2abc3a?.["prizeDetail"], "code", -1);
        if (_0x20e645 == 0) {
          const _0x473eac = {
            notify: true
          };
          this.log("连签7天抽奖: " + _0x2abc3a?.["prizeDetail"]?.["biz"]?.["winTitle"], _0x473eac);
        } else {
          let _0x116872 = _0x2abc3a?.["prizeDetail"]?.["err"] || "";
          const _0x39106c = {
            notify: true
          };
          this.log("连签7天抽奖失败[" + _0x20e645 + "]: " + _0x116872, _0x39106c);
        }
      } else {
        let _0x52e5e2 = _0x2abc3a?.["msg"] || _0x2abc3a?.["resoultMsg"] || _0x2abc3a?.["error"] || "";
        this.log("连签7天抽奖错误[" + _0x1936d6 + "]: " + _0x52e5e2);
      }
    } catch (_0x45115d) {
      console.log(_0x45115d);
    }
  }
  async homepage(_0x5f104b, _0x112a26 = {}) {
    try {
      let _0x3ad427 = {
        phone: this.name,
        shopId: "20001",
        type: _0x5f104b
      };
      let _0x173586 = {
        fn: "homepage",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/webSign/homepage",
        json: {
          para: this.encrypt_para(_0x3ad427)
        }
      };
      let {
        result: _0x5a8115
      } = await this.request(_0x173586);
      let _0x52375d = _0x24c9ac.get(_0x5a8115, "resoultCode", -1);
      if (_0x52375d == 0) {
        let _0x2c1cd0 = _0x24c9ac.get(_0x5a8115?.["data"]?.["head"], "code", -1);
        if (_0x2c1cd0 == 0) {
          for (let _0x1f27c1 of _0x5a8115?.["data"]?.["biz"]?.["adItems"] || []) {
            let _0x45c217 = _0x1f27c1.title;
            let _0x457a44 = [];
            switch (_0x1f27c1?.["taskState"]) {
              case "1":
                console.log("[" + _0x45c217 + "] -- 可领取奖励");
                break;
              case "2":
                console.log("[" + _0x45c217 + "] -- 已完成");
                break;
              case "0":
              default:
                console.log("[" + _0x45c217 + "] -- 未完成");
                break;
            }
            if (["0", "1"].includes(_0x1f27c1?.["taskState"])) {
              switch (_0x1f27c1.contentOne) {
                case "3":
                  if (_0x1f27c1?.["reward_id"]) {
                    await this.receiveReward(_0x1f27c1);
                  }
                  break;
                case "5":
                  await this.openMsg(_0x1f27c1);
                  break;
                case "6":
                  await this.sharingGetGold();
                  break;
                case "10":
                  if (!this.xtoken) {
                    await this.get_usercode();
                  }
                  if (this.xtoken) {
                    for (let _0x529e16 = 0; _0x529e16 < _0x1f27c1.numOfTimes; _0x529e16++) {
                      let _0x1b158d = Math.floor(Math.random() * 1000) + 1000;
                      _0x457a44.push(this.watchLiveInit(_0x1b158d));
                    }
                    await Promise.all(_0x457a44);
                  }
                  break;
                case "13":
                  if (!this.xtoken) {
                    await this.get_usercode();
                  }
                  if (this.xtoken) {
                    for (let _0x5a1101 = 0; _0x5a1101 < _0x1f27c1.numOfTimes; _0x5a1101++) {
                      let _0x126708 = Math.floor(Math.random() * 1000) + 3000;
                      await this.watchVideo(_0x126708);
                    }
                  }
                  break;
                case "18":
                  await this.polymerize(_0x1f27c1);
                  break;
                default:
                  break;
              }
            }
          }
        } else {
          let _0x199924 = _0x5a8115?.["data"]?.["head"]?.["err"] || "";
          this.log("获取任务列表失败[" + _0x2c1cd0 + "]: " + _0x199924);
        }
      } else {
        this.log("获取任务列表错误[" + code + "]");
      }
    } catch (_0x3c9089) {
      console.log(_0x3c9089);
    }
  }
  async receiveReward(_0x398b18, _0x45187d = {}) {
    try {
      let _0x137454 = _0x398b18?.["title"]?.["split"](" ")?.[0];
      let _0x44f928 = {
        phone: this.name,
        rewardId: _0x398b18?.["reward_id"] || ""
      };
      let _0x27f00a = {
        fn: "receiveReward",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/paradise/receiveReward",
        json: {
          para: this.encrypt_para(_0x44f928)
        }
      };
      let {
        result: _0x27c5f4
      } = await this.request(_0x27f00a);
      let _0x479ccf = _0x24c9ac.get(_0x27c5f4, "resoultCode", -1);
      if (_0x479ccf == 0) {
        this.log("领取任务[" + _0x137454 + "]奖励成功: " + _0x27c5f4?.["resoultMsg"]);
      } else {
        let _0x5d2b28 = _0x27c5f4?.["msg"] || _0x27c5f4?.["resoultMsg"] || _0x27c5f4?.["error"] || "";
        this.log("领取任务[" + _0x137454 + "]奖励错误[" + _0x479ccf + "]: " + _0x5d2b28);
      }
    } catch (_0x13b215) {
      console.log(_0x13b215);
    }
  }
  async openMsg(_0x2b537a, _0x5dd016 = {}) {
    try {
      let _0x2cd698 = _0x2b537a?.["title"]?.["split"](" ")?.[0];
      let _0x3aeb43 = {
        phone: this.name
      };
      let _0x3e1b30 = {
        fn: "openMsg",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/paradise/openMsg",
        json: {
          para: this.encrypt_para(_0x3aeb43)
        }
      };
      let {
        result: _0x13b61d
      } = await this.request(_0x3e1b30);
      let _0x352d00 = _0x24c9ac.get(_0x13b61d, "resoultCode", -1);
      if (_0x352d00 == 0) {
        this.log("完成任务[" + _0x2cd698 + "]成功: " + _0x13b61d?.["resoultMsg"]);
      } else {
        let _0x4081f6 = _0x13b61d?.["msg"] || _0x13b61d?.["resoultMsg"] || _0x13b61d?.["error"] || "";
        this.log("完成任务[" + _0x2cd698 + "]错误[" + _0x352d00 + "]: " + _0x4081f6);
      }
    } catch (_0x54f188) {
      console.log(_0x54f188);
    }
  }
  async polymerize(_0xd343f7, _0x35d246 = {}) {
    try {
      let _0x5a72b0 = _0xd343f7?.["title"]?.["split"](" ")?.[0];
      let _0x56bfe7 = {
        phone: this.name,
        jobId: _0xd343f7.taskId
      };
      let _0x9c8222 = {
        fn: "polymerize",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/webSign/polymerize",
        json: {
          para: this.encrypt_para(_0x56bfe7)
        }
      };
      let {
        result: _0x1549c3
      } = await this.request(_0x9c8222);
      let _0x4ddc66 = _0x24c9ac.get(_0x1549c3, "resoultCode", -1);
      if (_0x4ddc66 == 0) {
        this.log("完成任务[" + _0x5a72b0 + "]成功: " + _0x1549c3?.["resoultMsg"]);
      } else {
        let _0x666556 = _0x1549c3?.["msg"] || _0x1549c3?.["resoultMsg"] || _0x1549c3?.["error"] || "";
        this.log("完成任务[" + _0x5a72b0 + "]错误[" + _0x4ddc66 + "]: " + _0x666556);
      }
    } catch (_0x55ec4a) {
      console.log(_0x55ec4a);
    }
  }
  async food(_0x24f553, _0x3e4626 = {}) {
    try {
      let _0x52c4a4 = {
        phone: this.name
      };
      let _0xec7980 = {
        fn: "food",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/paradise/food",
        json: {
          para: this.encrypt_para(_0x52c4a4)
        }
      };
      let {
        result: _0x1e2b3e
      } = await this.request(_0xec7980);
      let _0x535d6b = _0x24c9ac.get(_0x1e2b3e, "resoultCode", -1);
      if (_0x535d6b == 0) {
        this.log("第" + _0x24f553 + "次喂食: " + (_0x1e2b3e?.["resoultMsg"] || "成功"));
        if (_0x1e2b3e?.["levelUp"]) {
          let _0x2d42ec = _0x1e2b3e?.["currLevelRightList"][0]?.["level"];
          const _0x3df89b = {
            notify: true
          };
          this.log("宠物已升级到[LV." + _0x2d42ec + "], 获得: " + _0x1e2b3e?.["currLevelRightList"][0]?.["righstName"], _0x3df89b);
        }
      } else {
        let _0x473cf0 = _0x1e2b3e?.["msg"] || _0x1e2b3e?.["resoultMsg"] || _0x1e2b3e?.["error"] || "";
        this.log("第" + _0x24f553 + "次喂食失败[" + _0x535d6b + "]: " + _0x473cf0);
        _0x473cf0?.["includes"]("最大喂食次数") && (this.can_feed = false);
      }
    } catch (_0x4da54d) {
      console.log(_0x4da54d);
    }
  }
  async getParadiseInfo(_0xee7923 = {}) {
    try {
      let _0x18b411 = {
        phone: this.name
      };
      let _0x1327ac = {
        fn: "getParadiseInfo",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/paradise/getParadiseInfo",
        json: {
          para: this.encrypt_para(_0x18b411)
        }
      };
      {
        let {
          result: _0x2af77b
        } = await this.request(_0x1327ac);
        let _0x5ba3c0 = _0x24c9ac.get(_0x2af77b, "resoultCode", -1);
        if (_0x5ba3c0 == 0) {
          let _0x534021 = _0x2af77b?.["userInfo"]?.["levelInfoMap"];
          this.level = _0x534021?.["level"];
          for (let _0x487691 = 1; _0x487691 <= 10 && this.can_feed; _0x487691++) {
            await this.food(_0x487691);
          }
        } else {
          let _0x1093a8 = _0x2af77b?.["msg"] || _0x2af77b?.["resoultMsg"] || _0x2af77b?.["error"] || "";
          this.log("查询宠物等级失败[" + _0x5ba3c0 + "]: " + _0x1093a8);
          return;
        }
      }
      {
        let {
          result: _0x1b5569
        } = await this.request(_0x1327ac);
        let _0x5c8225 = _0x24c9ac.get(_0x1b5569, "resoultCode", -1);
        if (_0x5c8225 == 0) {
          let _0x105b9b = _0x1b5569?.["userInfo"]?.["levelInfoMap"];
          this.level = _0x105b9b?.["level"];
          const _0x39765b = {
            notify: true
          };
          this.log("宠物等级[Lv." + _0x105b9b?.["level"] + "], 升级进度: " + _0x105b9b?.["growthValue"] + "/" + _0x105b9b?.["fullGrowthCoinValue"], _0x39765b);
        } else {
          let _0x5545c5 = _0x1b5569?.["msg"] || _0x1b5569?.["resoultMsg"] || _0x1b5569?.["error"] || "";
          this.log("查询宠物等级失败[" + _0x5c8225 + "]: " + _0x5545c5);
          return;
        }
      }
    } catch (_0x236d58) {
      console.log(_0x236d58);
    }
  }
  async getLevelRightsList(_0x175fcc = {}) {
    try {
      let _0xcbdeba = {
        phone: this.name
      };
      let _0x4e919b = {
        fn: "getLevelRightsList",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/paradise/getLevelRightsList",
        json: {
          para: this.encrypt_para(_0xcbdeba)
        }
      };
      let {
        result: _0x213234
      } = await this.request(_0x4e919b);
      if (_0x213234?.["currentLevel"]) {
        let _0x4cfe2f = _0x213234?.["currentLevel"] || 6;
        for (let _0x5947bf = _0x4cfe2f; _0x5947bf > 0; _0x5947bf--) {
          let _0x3434ca = "V" + _0x5947bf;
          for (let _0x2acc6a of _0x213234[_0x3434ca] || []) {
            let _0x9ebbb3 = _0x2acc6a?.["righstName"] || "";
            if (this.coin < _0x2acc6a.costCoin) {
              continue;
            }
            (_0x9ebbb3?.["includes"]("话费") || _0x9ebbb3?.["includes"]("专享") && _0x9ebbb3?.["includes"]("金豆")) && (await this.conversionRights(_0x2acc6a));
          }
        }
      } else {
        let _0x475016 = _0x213234?.["msg"] || _0x213234?.["resoultMsg"] || _0x213234?.["error"] || "";
        this.log("查询宠物兑换权益失败: " + _0x475016);
      }
    } catch (_0xada1af) {
      console.log(_0xada1af);
    }
  }
  async conversionRights(_0x168744, _0x5a6911 = {}) {
    try {
      let _0xe72b16 = _0x168744?.["righstName"] || "";
      let _0x3b13af = {
        phone: this.name,
        rightsId: _0x168744.id
      };
      let _0x43222a = {
        fn: "conversionRights",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/paradise/conversionRights",
        json: {
          para: this.encrypt_para(_0x3b13af)
        }
      };
      let {
        result: _0x395305
      } = await this.request(_0x43222a);
      let _0x26f660 = _0x24c9ac.get(_0x395305, "resoultCode", -1);
      if (_0x26f660 == 0) {
        this.log("兑换权益[" + _0xe72b16 + "]成功");
      } else {
        let _0x274597 = _0x395305?.["msg"] || _0x395305?.["resoultMsg"] || _0x395305?.["error"] || "";
        this.log("兑换权益[" + _0xe72b16 + "]失败[" + _0x26f660 + "]: " + _0x274597);
      }
    } catch (_0x3d1d02) {
      console.log(_0x3d1d02);
    }
  }
  async get_usercode(_0x535d9b = {}) {
    try {
      const _0x31eee5 = {
        fn: "get_usercode",
        method: "get",
        url: "https://xbk.189.cn/xbkapi/api/auth/jump",
        searchParams: {}
      };
      _0x31eee5.searchParams.userID = this.ticket;
      _0x31eee5.searchParams.version = "9.3.3";
      _0x31eee5.searchParams.type = "room";
      _0x31eee5.searchParams.l = "renwu";
      let _0x47b60b = _0x31eee5;
      let {
        statusCode: _0x43e432,
        headers: _0x4e24f4
      } = await this.request(_0x47b60b);
      let _0x3f2b0 = _0x4e24f4?.["location"]?.["match"](/usercode=(\w+)/);
      _0x3f2b0 ? await this.codeToken(_0x3f2b0[1]) : this.log("获取code失败[" + _0x43e432 + "]");
    } catch (_0x174037) {
      console.log(_0x174037);
    }
  }
  async codeToken(_0x505de3, _0xec140b = {}) {
    try {
      const _0x1b3c99 = {
        usercode: _0x505de3
      };
      let _0x5b09b3 = {
        fn: "codeToken",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/api/auth/userinfo/codeToken",
        json: _0x1b3c99
      };
      let {
        result: _0x21fe61
      } = await this.request(_0x5b09b3);
      let _0x37d329 = _0x24c9ac.get(_0x21fe61, "code", -1);
      if (_0x37d329 == 0) {
        this.xtoken = _0x21fe61?.["data"]?.["token"];
        this.got = this.got.extend({
          headers: {
            Authorization: "Bearer " + _0x1c9119.encrypt(this.xtoken, "base64")
          }
        });
      } else {
        let _0x2985db = _0x21fe61?.["msg"] || _0x21fe61?.["resoultMsg"] || _0x21fe61?.["error"] || _0x21fe61?.["msg"] || "";
        this.log("获取token失败[" + _0x37d329 + "]: " + _0x2985db);
      }
    } catch (_0x52a0b5) {
      console.log(_0x52a0b5);
    }
  }
  async watchLiveInit(_0x296e96, _0x1b0374 = {}) {
    try {
      const _0x4630b0 = {
        period: 1,
        liveId: _0x296e96
      };
      let _0x2df077 = {
        fn: "watchLiveInit",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLiveInit",
        json: _0x4630b0
      };
      let {
        result: _0x263e4c
      } = await this.request(_0x2df077);
      let _0x573b91 = _0x24c9ac.get(_0x263e4c, "code", -1);
      if (_0x573b91 == 0) {
        await _0x24c9ac.wait(15000);
        await this.watchLive(_0x296e96, _0x263e4c?.["data"]);
      } else {
        let _0x93253c = _0x263e4c?.["msg"] || _0x263e4c?.["resoultMsg"] || _0x263e4c?.["error"] || _0x263e4c?.["msg"] || "";
        this.log("开始观看直播[" + _0x296e96 + "]失败[" + _0x573b91 + "]: " + _0x93253c);
      }
    } catch (_0x586100) {
      console.log(_0x586100);
    }
  }
  async watchLive(_0x4f6c05, _0x3096da, _0x15b612 = {}) {
    try {
      const _0x935640 = {
        period: 1,
        liveId: _0x4f6c05,
        key: _0x3096da
      };
      let _0x3148cf = {
        fn: "watchLive",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLive",
        json: _0x935640
      };
      let {
        result: _0x9818cc
      } = await this.request(_0x3148cf);
      let _0xc9aaf9 = _0x24c9ac.get(_0x9818cc, "code", -1);
      if (_0xc9aaf9 == 0) {
        this.log("观看直播[" + _0x4f6c05 + "]成功");
      } else {
        let _0x5ceab0 = _0x9818cc?.["msg"] || _0x9818cc?.["resoultMsg"] || _0x9818cc?.["error"] || _0x9818cc?.["msg"] || "";
        this.log("观看直播[" + _0x4f6c05 + "]失败[" + _0xc9aaf9 + "]: " + _0x5ceab0);
      }
    } catch (_0x10c4d3) {
      console.log(_0x10c4d3);
    }
  }
  async watchVideo(_0x42c6bf, _0x572053 = {}) {
    try {
      const _0x88eb4f = {
        articleId: _0x42c6bf
      };
      let _0x20f21f = {
        fn: "watchVideo",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchVideo",
        json: _0x88eb4f
      };
      let {
        result: _0x13a9bc
      } = await this.request(_0x20f21f);
      let _0x10ab3c = _0x24c9ac.get(_0x13a9bc, "code", -1);
      if (_0x10ab3c == 0) {
        this.log("观看短视频[" + _0x42c6bf + "]成功");
      } else {
        let _0x3354b6 = _0x13a9bc?.["msg"] || _0x13a9bc?.["resoultMsg"] || _0x13a9bc?.["error"] || _0x13a9bc?.["msg"] || "";
        this.log("观看短视频[" + _0x42c6bf + "]失败[" + _0x10ab3c + "]: " + _0x3354b6);
      }
    } catch (_0xc0b6cd) {
      console.log(_0xc0b6cd);
    }
  }
  async like(_0x2559eb, _0x3ff000 = {}) {
    try {
      const _0x2f057c = {
        account: this.name,
        liveId: _0x2559eb
      };
      let _0xf3833f = {
        fn: "like",
        method: "post",
        url: "https://xbk.189.cn/xbkapi/lteration/room/like",
        json: _0x2f057c
      };
      let {
        result: _0x288fe0
      } = await this.request(_0xf3833f);
      let _0x185586 = _0x24c9ac.get(_0x288fe0, "code", -1);
      if (_0x185586 == 0) {
        this.log("点赞直播间[" + _0x2559eb + "]成功");
      } else {
        let _0x555bb2 = _0x288fe0?.["msg"] || _0x288fe0?.["resoultMsg"] || _0x288fe0?.["error"] || _0x288fe0?.["msg"] || "";
        this.log("点赞直播间[" + _0x2559eb + "]失败[" + _0x185586 + "]: " + _0x555bb2);
      }
    } catch (_0xdc7d27) {
      console.log(_0xdc7d27);
    }
  }
  async sharingGetGold(_0x4c1054 = {}) {
    try {
      let _0x3f268a = {
        fn: "sharingGetGold",
        method: "post",
        url: "https://appfuwu.189.cn:9021/query/sharingGetGold",
        json: {
          headerInfos: {
            code: "sharingGetGold",
            timestamp: _0x24c9ac.time("yyyyMMddhhmmss"),
            broadAccount: "",
            broadToken: "",
            clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
            shopId: "20002",
            source: "110003",
            sourcePassword: "Sid98s",
            token: this.token,
            userLoginName: this.name
          },
          content: {
            attach: "test",
            fieldData: {
              shareSource: "3",
              userId: this.userId,
              account: this.encode_phone()
            }
          }
        }
      };
      let {
        result: _0x139614
      } = await this.request(_0x3f268a);
      let _0x11dd44 = _0x24c9ac.get(_0x139614?.["responseData"], "resultCode", -1);
      if (_0x11dd44 == "0000") {
        this.log("分享成功");
      } else {
        let _0x11934a = _0x139614?.["msg"] || _0x139614?.["responseData"]?.["resultDesc"] || _0x139614?.["error"] || _0x139614?.["msg"] || "";
        this.log("分享失败[" + _0x11dd44 + "]: " + _0x11934a);
      }
    } catch (_0x5babc8) {
      console.log(_0x5babc8);
    }
  }
  async userTask() {
    const _0x4e7e2a = {
      notify: true
    };
    _0x24c9ac.log("\n======= 账号[" + this.index + "][" + this.name + "] =======", _0x4e7e2a);
    if (!this.load_token() && !(await this.login())) {
      return;
    }
    if (!(await this.get_ticket())) {
      return;
    }
    if (!(await this.get_sign())) {
      return;
    }
    await this.userCoinInfo();
    await this.getLevelRightsList();
    await this.userStatusInfo();
    await this.homepage(_0x219a57.taskLong);
    await this.getParadiseInfo();
    await this.userCoinInfo(true);
  }
}
!(async () => {
  if (!(await _0x496ad8())) {
    return;
  }
  _0x24c9ac.read_env(_0x34219d);
  _0x2b42fc();
  for (let _0x15a9c8 of _0x24c9ac.userList) {
    await _0x15a9c8.userTask();
  }
})().catch(_0x40031d => _0x24c9ac.log(_0x40031d)).finally(() => _0x24c9ac.exitNow());
async function _0x496ad8(_0x47f998 = 0) {
  let _0x5ca129 = false;
  try {
    let _0x2f78bb = {
      fn: "auth",
      method: "get",
      url: _0x36b2d7,
      timeout: 20000
    };
    let {
      statusCode: _0x1f2a06,
      result: _0x40ce6d
    } = await _0x24e1cc.request(_0x2f78bb);
    if (_0x1f2a06 != 200) {
      _0x47f998++ < _0x1e017f && (_0x5ca129 = await _0x496ad8(_0x47f998));
      return _0x5ca129;
    }
    if (_0x40ce6d?.["code"] == 0) {
      _0x40ce6d = JSON.parse(_0x40ce6d.data.file.data);
      if (_0x40ce6d?.["commonNotify"] && _0x40ce6d.commonNotify.length > 0) {
        const _0x3f945c = {
          notify: true
        };
        _0x24c9ac.log(_0x40ce6d.commonNotify.join("\n") + "\n", _0x3f945c);
      }
      _0x40ce6d?.["commonMsg"] && _0x40ce6d.commonMsg.length > 0 && _0x24c9ac.log(_0x40ce6d.commonMsg.join("\n") + "\n");
      if (_0x40ce6d[_0x4b08ef]) {
        let _0x4973e5 = _0x40ce6d[_0x4b08ef];
        _0x4973e5.status == 0 ? _0x1b3d2b >= _0x4973e5.version ? (_0x5ca129 = true, _0x24c9ac.log(_0x4973e5.msg[_0x4973e5.status]), _0x24c9ac.log(_0x4973e5.updateMsg), _0x24c9ac.log("现在运行的脚本版本是：" + _0x1b3d2b + "，最新脚本版本：" + _0x4973e5.latestVersion)) : _0x24c9ac.log(_0x4973e5.versionMsg) : _0x24c9ac.log(_0x4973e5.msg[_0x4973e5.status]);
      } else {
        _0x24c9ac.log(_0x40ce6d.errorMsg);
      }
    } else {
      _0x47f998++ < _0x1e017f && (_0x5ca129 = await _0x496ad8(_0x47f998));
    }
  } catch (_0x23eb9f) {
    _0x24c9ac.log(_0x23eb9f);
  } finally {
    return _0x5ca129;
  }
}
function _0x15771a(_0x372934) {
  return new class {
    constructor(_0x98204e) {
      this.name = _0x98204e;
      this.startTime = Date.now();
      const _0x6ad8f6 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x6ad8f6);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
    }
    log(_0x2dfd3b, _0x48d103 = {}) {
      let _0x564d55 = {
        console: true
      };
      Object.assign(_0x564d55, _0x48d103);
      if (_0x564d55.time) {
        let _0x12e7d = _0x564d55.fmt || "hh:mm:ss";
        _0x2dfd3b = "[" + this.time(_0x12e7d) + "]" + _0x2dfd3b;
      }
      if (_0x564d55.notify) {
        this.notifyStr.push(_0x2dfd3b);
      }
      if (_0x564d55.console) {
        console.log(_0x2dfd3b);
      }
    }
    get(_0x35073d, _0x209003, _0x49f869 = "") {
      let _0x5c54f2 = _0x49f869;
      _0x35073d?.["hasOwnProperty"](_0x209003) && (_0x5c54f2 = _0x35073d[_0x209003]);
      return _0x5c54f2;
    }
    pop(_0x155b98, _0xb8ef8c, _0x576cbd = "") {
      let _0x472fc3 = _0x576cbd;
      _0x155b98?.["hasOwnProperty"](_0xb8ef8c) && (_0x472fc3 = _0x155b98[_0xb8ef8c], delete _0x155b98[_0xb8ef8c]);
      return _0x472fc3;
    }
    copy(_0x5ae07c) {
      return Object.assign({}, _0x5ae07c);
    }
    read_env(_0x3cf34a) {
      let _0x2c8a1d = _0x29de5f.map(_0x53f712 => process.env[_0x53f712]);
      for (let _0x2e6f6e of _0x2c8a1d.filter(_0x65aba3 => !!_0x65aba3)) {
        for (let _0x202362 of _0x2e6f6e.split(_0x34becb).filter(_0x127ded => !!_0x127ded)) {
          if (this.userList.includes(_0x202362)) {
            continue;
          }
          this.userList.push(new _0x3cf34a(_0x202362));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x42973a = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x29de5f.map(_0x3e4f22 => "[" + _0x3e4f22 + "]").join("或"), _0x42973a);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x4f6f36, _0x4b969f = null) {
      let _0x20a84c = _0x4b969f ? new Date(_0x4b969f) : new Date();
      let _0x3ef7f9 = {
        "M+": _0x20a84c.getMonth() + 1,
        "d+": _0x20a84c.getDate(),
        "h+": _0x20a84c.getHours(),
        "m+": _0x20a84c.getMinutes(),
        "s+": _0x20a84c.getSeconds(),
        "q+": Math.floor((_0x20a84c.getMonth() + 3) / 3),
        S: this.padStr(_0x20a84c.getMilliseconds(), 3)
      };
      /(y+)/.test(_0x4f6f36) && (_0x4f6f36 = _0x4f6f36.replace(RegExp.$1, (_0x20a84c.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x46ff1a in _0x3ef7f9) new RegExp("(" + _0x46ff1a + ")").test(_0x4f6f36) && (_0x4f6f36 = _0x4f6f36.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3ef7f9[_0x46ff1a] : ("00" + _0x3ef7f9[_0x46ff1a]).substr(("" + _0x3ef7f9[_0x46ff1a]).length)));
      return _0x4f6f36;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x24aa9a = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x24aa9a.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x35bd81, _0x623ae0, _0x405a89 = {}) {
      let _0x4f130c = _0x405a89.padding || "0";
      let _0x21162e = _0x405a89.mode || "l";
      let _0x51a231 = String(_0x35bd81);
      let _0x52d7b8 = _0x623ae0 > _0x51a231.length ? _0x623ae0 - _0x51a231.length : 0;
      let _0x32270d = "";
      for (let _0x29d792 = 0; _0x29d792 < _0x52d7b8; _0x29d792++) {
        _0x32270d += _0x4f130c;
      }
      _0x21162e == "r" ? _0x51a231 = _0x51a231 + _0x32270d : _0x51a231 = _0x32270d + _0x51a231;
      return _0x51a231;
    }
    json2str(_0x510d0e, _0x5cfe50, _0x47edaf = false) {
      let _0x22519c = [];
      for (let _0x508193 of Object.keys(_0x510d0e).sort()) {
        let _0x48aad0 = _0x510d0e[_0x508193];
        if (_0x48aad0 && _0x47edaf) {
          _0x48aad0 = encodeURIComponent(_0x48aad0);
        }
        _0x22519c.push(_0x508193 + "=" + _0x48aad0);
      }
      return _0x22519c.join(_0x5cfe50);
    }
    str2json(_0x3b51de, _0x391ab3 = false) {
      let _0x4a53cb = {};
      for (let _0x584c99 of _0x3b51de.split("&")) {
        if (!_0x584c99) {
          continue;
        }
        let _0x311344 = _0x584c99.indexOf("=");
        if (_0x311344 == -1) {
          continue;
        }
        let _0x579788 = _0x584c99.substr(0, _0x311344);
        let _0x198e55 = _0x584c99.substr(_0x311344 + 1);
        if (_0x391ab3) {
          _0x198e55 = decodeURIComponent(_0x198e55);
        }
        _0x4a53cb[_0x579788] = _0x198e55;
      }
      return _0x4a53cb;
    }
    randomPattern(_0x409e0b, _0x2cf142 = "abcdef0123456789") {
      let _0x57cbe8 = "";
      for (let _0x19d6b4 of _0x409e0b) {
        if (_0x19d6b4 == "x") {
          _0x57cbe8 += _0x2cf142.charAt(Math.floor(Math.random() * _0x2cf142.length));
        } else {
          _0x19d6b4 == "X" ? _0x57cbe8 += _0x2cf142.charAt(Math.floor(Math.random() * _0x2cf142.length)).toUpperCase() : _0x57cbe8 += _0x19d6b4;
        }
      }
      return _0x57cbe8;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x36f6af, _0x48a91c = "abcdef0123456789") {
      let _0xdbe7a = "";
      for (let _0x58885a = 0; _0x58885a < _0x36f6af; _0x58885a++) {
        _0xdbe7a += _0x48a91c.charAt(Math.floor(Math.random() * _0x48a91c.length));
      }
      return _0xdbe7a;
    }
    randomList(_0x4caf7b) {
      let _0x1730ac = Math.floor(Math.random() * _0x4caf7b.length);
      return _0x4caf7b[_0x1730ac];
    }
    wait(_0x41afdd) {
      return new Promise(_0x4a4527 => setTimeout(_0x4a4527, _0x41afdd));
    }
    async exitNow() {
      await this.showmsg();
      let _0x4e2a0e = Date.now();
      let _0x3f600d = (_0x4e2a0e - this.startTime) / 1000;
      this.log("");
      const _0x2040fd = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x3f600d + "秒", _0x2040fd);
      process.exit(0);
    }
    normalize_time(_0x25ad41, _0x5539f2 = {}) {
      let _0x27bdce = _0x5539f2.len || this.default_timestamp_len;
      _0x25ad41 = _0x25ad41.toString();
      let _0xcf504c = _0x25ad41.length;
      while (_0xcf504c < _0x27bdce) {
        _0x25ad41 += "0";
      }
      _0xcf504c > _0x27bdce && (_0x25ad41 = _0x25ad41.slice(0, 13));
      return parseInt(_0x25ad41);
    }
    async wait_until(_0x4ddd61, _0x466cb0 = {}) {
      let _0x14028e = _0x466cb0.logger || this;
      let _0x1859f6 = _0x466cb0.interval || this.default_wait_interval;
      let _0x5d22d5 = _0x466cb0.limit || this.default_wait_limit;
      let _0x5ee947 = _0x466cb0.ahead || this.default_wait_ahead;
      if (typeof _0x4ddd61 == "string" && _0x4ddd61.includes(":")) {
        if (_0x4ddd61.includes("-")) {
          _0x4ddd61 = new Date(_0x4ddd61).getTime();
        } else {
          let _0x3c512a = this.time("yyyy-MM-dd ");
          _0x4ddd61 = new Date(_0x3c512a + _0x4ddd61).getTime();
        }
      }
      let _0x279242 = this.normalize_time(_0x4ddd61) - _0x5ee947;
      let _0x48c837 = this.time("hh:mm:ss.S", _0x279242);
      let _0xf645b5 = Date.now();
      _0xf645b5 > _0x279242 && (_0x279242 += 86400000);
      let _0x2d35fd = _0x279242 - _0xf645b5;
      if (_0x2d35fd > _0x5d22d5) {
        const _0x5bc698 = {
          time: true
        };
        _0x14028e.log("离目标时间[" + _0x48c837 + "]大于" + _0x5d22d5 / 1000 + "秒,不等待", _0x5bc698);
      } else {
        const _0x4444b3 = {
          time: true
        };
        _0x14028e.log("离目标时间[" + _0x48c837 + "]还有" + _0x2d35fd / 1000 + "秒,开始等待", _0x4444b3);
        while (_0x2d35fd > 0) {
          let _0x3e8305 = Math.min(_0x2d35fd, _0x1859f6);
          await this.wait(_0x3e8305);
          _0xf645b5 = Date.now();
          _0x2d35fd = _0x279242 - _0xf645b5;
        }
        const _0x5f33f5 = {
          time: true
        };
        _0x14028e.log("已完成等待", _0x5f33f5);
      }
    }
    async wait_gap_interval(_0x3afc29, _0x9643c0) {
      let _0x20e91d = Date.now() - _0x3afc29;
      _0x20e91d < _0x9643c0 && (await this.wait(_0x9643c0 - _0x20e91d));
    }
  }(_0x372934);
}