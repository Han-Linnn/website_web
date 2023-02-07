(this["webpackJsonpresume-front"] = this["webpackJsonpresume-front"] || []).push([
    [0], {
        162: function(e, t, a) { e.exports = a(319) },
        167: function(e, t, a) {},
        169: function(e, t, a) {},
        170: function(e, t, a) {},
        171: function(e, t, a) {},
        176: function(e, t, a) {},
        177: function(e, t, a) {},
        292: function(e, t, a) {},
        296: function(e, t, a) {},
        311: function(e, t, a) {},
        318: function(e, t, a) {},
        319: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                c = a(16),
                l = a.n(c),
                i = (a(167), a(168), a(169), a(5)),
                s = a(6),
                o = a(10),
                u = a(9),
                m = a(32),
                p = (a(170), a(171), a(41)),
                d = function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() {
                        var e;
                        Object(i.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(r))).state = {}, e
                    }
                    return Object(s.a)(a, [{ key: "render", value: function() { return r.a.createElement("div", { className: "body" }, r.a.createElement("div", { className: "body__content" }, r.a.createElement("div", { className: "body__content-title" }, "AI\u7b80\u5386\u89e3\u6790"), r.a.createElement("div", { className: "body__content-des" }, "\u57fa\u4e8e\u81ea\u4e3b\u7814\u53d1\u7684\u81ea\u7136\u8bed\u8a00\u7406\u89e3\u6846\u67b6\u53ca\u5e03\u5c40\u5206\u6790\u5f15\u64ce, \u5feb\u901f\u9ad8\u6548\u7684\u5904\u7406\u6d77\u91cf\u7b80\u5386"), r.a.createElement("div", { className: "body__content-btn" }, r.a.createElement(p.b, { to: "/analyze" }, r.a.createElement("button", { className: "body__content-btn-left" }, "\u4f53\u9a8c\u89e3\u6790")), r.a.createElement("button", { className: "body__content-btn-right", onClick: this.props.handleModel }, "\u7533\u8bf7\u8bd5\u7528")))) } }]), a
                }(n.Component),
                v = (a(176), function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() {
                        var e;
                        Object(i.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(r))).state = {}, e
                    }
                    return Object(s.a)(a, [{ key: "render", value: function() { var e = this.props; return r.a.createElement("div", null, e.imgLeft ? r.a.createElement("div", { className: "gray" }, r.a.createElement("div", { className: "card" }, r.a.createElement("div", { className: "card__img" }, r.a.createElement("img", { src: e.mainCardImg, alt: "\u6280\u672f\u4ecb\u7ecd\u56fe\u7247" })), r.a.createElement("div", { className: "card__word" }, r.a.createElement("div", { className: "card__word--title" }, e.mainCardTitle), r.a.createElement("div", { className: "card__word--des" }, e.mainCardDes)))) : r.a.createElement("div", { className: "card" }, r.a.createElement("div", { className: "card__word" }, r.a.createElement("div", { className: "card__word--title" }, e.mainCardTitle), r.a.createElement("div", { className: "card__word--des" }, e.mainCardDes)), r.a.createElement("div", { className: "card__img" }, r.a.createElement("img", { src: e.mainCardImg, alt: "\u6280\u672f\u4ecb\u7ecd\u56fe\u7247" })))) } }]), a
                }(r.a.Component)),
                h = a(29),
                f = a.n(h),
                E = a(42),
                y = a(89),
                b = (a(177), a(325)),
                _ = a(321),
                g = a(324),
                w = a(75),
                k = a(327),
                N = a(328),
                C = a(329),
                O = a(330),
                j = a(331),
                x = a(332),
                z = a(96),
                I = a.n(z);
            console.log("production"), I.a.defaults.baseURL = "https://api.ucpin.com/v1/";
            var A = { get: function(e, t) { return t = t || {}, new Promise((function(a, n) { I.a.get(e, { params: t }).then((function(e) { a(e.data) })).catch((function(e) { console.log(e), n(e) })) })) }, post: function(e, t) { return t = t || {}, new Promise((function(a, n) { I.a.post(e, t).then((function(e) { a(e.data) })).catch((function(e) { console.log(e), n(e) })) })) } },
                S = function() {
                    function e() { Object(i.a)(this, e) }
                    return Object(s.a)(e, [{
                        key: "getVerifyCode",
                        value: function() {
                            var e = Object(E.a)(f.a.mark((function e(t) {
                                var a, n;
                                return f.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return "/send/verify/code", a = { mobile: t }, e.next = 4, A.post("/send/verify/code", a);
                                        case 4:
                                            return n = e.sent, console.log(n), e.abrupt("return", n);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }()
                    }, {
                        key: "createApply",
                        value: function() {
                            var e = Object(E.a)(f.a.mark((function e(t) {
                                var a;
                                return f.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return "/ai/apply/create", e.next = 3, A.post("/ai/apply/create", t);
                                        case 3:
                                            return a = e.sent, e.abrupt("return", a);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }()
                    }]), e
                }(),
                T = function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() {
                        var e;
                        Object(i.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(r))).state = { userName: "", mobile: 0, eMail: "", company: "", advice: "", isTimeOut: !1, getCodeText: "\u83b7\u53d6\u9a8c\u8bc1\u7801", count: 60 }, e.getInputVal = function(t, a) {
                            var n = a.target.value;
                            n && e.setState(Object(y.a)({}, t, n))
                        }, e.getMobile = function(t) {
                            var a = t.target.value;
                            a && e.setState({ mobile: a })
                        }, e.getCode = Object(E.a)(f.a.mark((function t() {
                            var a, n;
                            return f.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.state.mobile) { t.next = 4; break }
                                        return b.b.error("\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801 ! "), t.abrupt("return");
                                    case 4:
                                        return n = new S, t.next = 7, n.getVerifyCode(a);
                                    case 7:
                                        200 === t.sent.code ? (b.b.success("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001, \u8bf7\u6ce8\u610f\u67e5\u6536"), e.setTime()) : b.b.error("\u9a8c\u8bc1\u7801\u53d1\u9001\u5931\u8d25, \u8bf7\u7a0d\u540e\u518d\u8bd5");
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), e
                    }
                    return Object(s.a)(a, [{
                        key: "setTime",
                        value: function() {
                            var e = this,
                                t = this.state.count;
                            console.log(t);
                            var a = setInterval((function() { e.setState({ count: t--, isTimeOut: !0, getCodeText: t + "s\u540e\u91cd\u65b0\u53d1\u9001" }, (function() { console.log(e.state.count), 0 === t && (clearInterval(a), e.setState({ isTimeOut: !1, getCodeText: "\u83b7\u53d6\u9a8c\u8bc1\u7801", count: 60 })) })) }), 1e3)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.openModel,
                                a = new RegExp("^((13[0-9])|(14[1]|[4-9])|(15([0-3]|[5-9]))|(16[2]|[5-7])|(17[0-3]|[5-8])|(18[0-9])|(19[1|8|9]))\\d{8}$"),
                                n = function() {
                                    var t = Object(E.a)(f.a.mark((function t(a) {
                                        var n, r;
                                        return f.a.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    if (a.code) { t.next = 3; break }
                                                    return b.b.error("\u8bf7\u9a8c\u8bc1\u624b\u673a\u53f7\u7801"), t.abrupt("return");
                                                case 3:
                                                    return n = new S, t.next = 6, n.createApply(a);
                                                case 6:
                                                    r = t.sent, console.dir(r), 200 === r.code ? (b.b.success("\u7533\u8bf7\u6210\u529f !"), e.props.closeModel()) : b.b.error("\u7533\u8bf7\u5931\u8d25 !"), console.log("Received values of form: ", a);
                                                case 10:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function(e) { return t.apply(this, arguments) }
                                }();
                            return r.a.createElement("div", null, t && r.a.createElement("div", null, r.a.createElement("div", { className: "model_shadow" }), r.a.createElement("div", { className: "apply_model" }, r.a.createElement("div", { className: "apply_model__closeBtn", onClick: this.props.closeModel }, r.a.createElement(k.a, null)), r.a.createElement("div", { className: "apply_model__title" }, "\u7533\u8bf7\u8bd5\u7528"), r.a.createElement("div", { className: "apply_model__des" }, "\u5c0a\u656c\u7684\u7528\u6237, \u6211\u4eec\u5c06\u63d0\u4f9b\u514d\u8d39\u8bd5\u7528\u7684\u989d\u5ea6,"), r.a.createElement("div", { className: "apply_model__des" }, "\u8bf7\u7559\u4e0b\u4f01\u4e1a\u4fe1\u606f\u548c\u8054\u7cfb\u65b9\u5f0f, \u6211\u4eec\u5c06\u4f1a\u5728\u7b2c\u4e00\u65f6\u95f4\u8054\u7cfb\u60a8\u3002"), r.a.createElement(_.a, { name: "normal_login", className: "login-form", initialValues: { remember: !0 }, onFinish: n }, r.a.createElement(_.a.Item, { name: "name", rules: [{ required: !0, message: "\u8bf7\u8f93\u5165\u59d3\u540d" }] }, r.a.createElement(g.a, { prefix: r.a.createElement(N.a, null), placeholder: "\u8bf7\u8f93\u5165\u59d3\u540d" })), r.a.createElement(_.a.Item, { name: "mobile", rules: [{ required: !0, message: "\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801" }, { pattern: a, message: "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801" }] }, r.a.createElement(g.a, { prefix: r.a.createElement(C.a, null), type: "tel", placeholder: "\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801", maxLength: 11, onBlur: this.getMobile })), r.a.createElement(_.a.Item, { name: "code" }, r.a.createElement(g.a.Search, { prefix: r.a.createElement(O.a, null), enterButton: this.state.getCodeText, placeholder: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801", onSearch: this.getCode })), r.a.createElement(_.a.Item, { name: "email", rules: [{ required: !0, message: "\u8bf7\u8f93\u5165\u90ae\u7bb1\u5730\u5740" }, { type: "email", message: "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u5730\u5740" }] }, r.a.createElement(g.a, { prefix: r.a.createElement(j.a, null), placeholder: "\u8bf7\u8f93\u5165\u90ae\u7bb1\u5730\u5740" })), r.a.createElement(_.a.Item, { name: "company_name", rules: [{ required: !0, message: "\u8bf7\u8f93\u5165\u516c\u53f8\u540d\u79f0" }] }, r.a.createElement(g.a, { prefix: r.a.createElement(x.a, null), placeholder: "\u8bf7\u8f93\u5165\u516c\u53f8\u540d\u79f0" })), r.a.createElement(_.a.Item, { name: "remark" }, r.a.createElement(g.a.TextArea, { placeholder: "\u8bf7\u7b80\u5355\u63cf\u8ff0\u60a8\u7684\u9700\u6c42" })), r.a.createElement(_.a.Item, null, r.a.createElement(w.a, { type: "primary", htmlType: "submit", className: "login-form-button" }, "\u786e\u5b9a"))))))
                        }
                    }]), a
                }(r.a.Component),
                M = function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() {
                        var e;
                        Object(i.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(r))).handleModel = function() { e.setState({ openModel: !0 }) }, e.closeModel = function() { e.setState({ openModel: !1 }) }, e.state = { openModel: !1, mainData: { mainCardImg1: "https://ucpin.oss-cn-shenzhen.aliyuncs.com/AI-static/des3.png", mainCardTitle1: "\u667a\u80fd\u7b80\u5386\u89e3\u6790\u5f15\u64ce", mainCardDes1: "\u91c7\u7528\u5148\u8fdb\u7684\u81ea\u7136\u8bed\u8a00\u5904\u7406\u7684\u6df1\u5ea6\u5b66\u4e60\u6280\u672f,\u5145\u5206\u5229\u7528\u6d77\u91cf\u6807\u6ce8\u6570\u636e,\u5bf9\u7b80\u5386\u6d89\u53ca\u7684150\u4f59\u79cd\u7279\u5f81\u505a\u5904\u7406,\u63d0\u4f9b\u9ad8\u8d28\u91cf\u7684\u8bc6\u522b\u7ed3\u679c;", mainCardImg2: "https://ucpin.oss-cn-shenzhen.aliyuncs.com/AI-static/des2.png", mainCardTitle2: "\u5e94\u7528\u573a\u666f\u5e7f\u6cdb", mainCardDes2: "\u9488\u5bf9\u4f17\u591a\u5177\u4f53\u7684OCR\u5e94\u7528\u573a\u666f,\u8fdb\u884c\u4e86\u5927\u91cf\u7684\u6a21\u578b\u4f18\u5316,\u5728\u804c\u4f4d\u63a8\u8350, \u4eba\u624d\u5339\u914d, \u4eba\u624d\u641c\u7d22\u7b49\u573a\u666f\u5177\u6709\u5f88\u597d\u7684\u5e94\u7528\u6548\u679c\u3002", mainCardImg3: "https://ucpin.oss-cn-shenzhen.aliyuncs.com/AI-static/des1.png", mainCardTitle3: "\u7b80\u5355\u6613\u7528", mainCardDes3: "\u76f4\u63a5\u901a\u8fc7HTTP\u8c03\u7528API\u63a5\u53e3, \u5bf9\u5173\u952e\u7684\u5b57\u6bb5\u5df2\u505a\u89c4\u8303\u5316\u5904\u7406, \u63d0\u4f9b\u591a\u79cd\u793a\u4f8b\u4ee3\u7801\u4f9b\u5f00\u53d1\u8005\u4f7f\u7528, \u652f\u6301\u591a\u79cd\u7ec8\u7aef\u8bbe\u5907\u53ca\u73af\u5883, \u590d\u7528\u4f7f\u7528\u7b80\u5355\u5feb\u6377, \u517c\u5bb9\u6027\u5f3a" } }, e
                    }
                    return Object(s.a)(a, [{ key: "componentDidMount", value: function() {} }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = this.state.mainData;
                            return r.a.createElement("div", null, r.a.createElement(d, { handleModel: this.handleModel }), r.a.createElement(v, { mainCardImg: t.mainCardImg1, mainCardTitle: t.mainCardTitle1, mainCardDes: t.mainCardDes1, imgLeft: !0 }), r.a.createElement(v, { mainCardImg: t.mainCardImg2, mainCardTitle: t.mainCardTitle2, mainCardDes: t.mainCardDes2 }), r.a.createElement(v, { mainCardImg: t.mainCardImg3, mainCardTitle: t.mainCardTitle3, mainCardDes: t.mainCardDes3, imgLeft: !0 }), r.a.createElement(T, { handleModel: this.handleModel, closeModel: this.closeModel, openModel: e.openModel }))
                        }
                    }]), a
                }(r.a.Component),
                D = (a(60), function() {
                    function e() { Object(i.a)(this, e) }
                    return Object(s.a)(e, [{
                        key: "uploadTxt",
                        value: function() {
                            var e = Object(E.a)(f.a.mark((function e(t) {
                                var a;
                                return f.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return "/ai/parse", e.next = 3, A.post("/ai/parse", t);
                                        case 3:
                                            return a = e.sent, e.abrupt("return", a);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }()
                    }, {
                        key: "getResumeInfo",
                        value: function() {
                            var e = Object(E.a)(f.a.mark((function e(t) {
                                var a;
                                return f.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return "/ai/parse/result", e.next = 3, A.post("/ai/parse/result", t);
                                        case 3:
                                            return a = e.sent, e.abrupt("return", a);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }()
                    }]), e
                }()),
                L = function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() { return Object(i.a)(this, a), t.apply(this, arguments) }
                    return Object(s.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props.info,
                                t = e.basic_info,
                                a = e.expect;
                            return r.a.createElement("div", { className: "analyze_result__top" }, r.a.createElement("div", { className: "analyze_result__top-title" }, t.name), r.a.createElement("div", { className: "analyze_result__top-des" }, r.a.createElement("span", null, a.city), a.city && r.a.createElement("div", { className: "analyze_result__top-des-d" }, "|"), r.a.createElement("span", null, t.work_experience), t.work_experience && r.a.createElement("div", { className: "analyze_result__top-des-d" }, "|"), r.a.createElement("span", null, t.birthday), t.birthday && r.a.createElement("div", { className: "analyze_result__top-des-d" }, "|"), r.a.createElement("span", null, t.status)))
                        }
                    }]), a
                }(n.Component),
                R = function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() { return Object(i.a)(this, a), t.apply(this, arguments) }
                    return Object(s.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.title,
                                a = e.icon;
                            return r.a.createElement("div", { className: "analyze_result__hr" }, r.a.createElement("div", { className: "analyze_result__hr-info" }, r.a.createElement("img", { src: a, alt: "\u89e3\u6790\u7ed3\u679c\u56fe\u6807" }), r.a.createElement("span", null, t)), r.a.createElement("div", { className: "analyze_result__hr-line" }))
                        }
                    }]), a
                }(n.Component),
                B = function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() { return Object(i.a)(this, a), t.apply(this, arguments) }
                    return Object(s.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.title,
                                a = e.value;
                            return r.a.createElement("div", { className: "analyze_result__content-item" }, r.a.createElement("div", { className: "analyze_result__content-item-name" }, t, ": "), r.a.createElement("div", null, a, " "))
                        }
                    }]), a
                }(n.Component),
                H = function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() { return Object(i.a)(this, a), t.apply(this, arguments) }
                    return Object(s.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props.info,
                                t = e.basic_info,
                                a = e.expect,
                                n = e.contact;
                            return r.a.createElement("div", { className: "analyze_result__content" }, r.a.createElement(B, { title: "\u59d3\u540d", value: t.name }), r.a.createElement(B, { title: "\u5de5\u4f5c\u5e74\u9650", value: t.gender }), r.a.createElement(B, { title: "ID", value: t.id_number }), r.a.createElement(B, { title: "\u73b0\u5c45\u4f4f\u5730", value: t.location_province + t.location_city }), r.a.createElement(B, { title: "\u6027\u522b", value: t.gender }), r.a.createElement(B, { title: "\u5a5a\u59fb\u60c5\u51b5", value: t.marital_status }), r.a.createElement(B, { title: "\u5e74\u9f84", value: t.birthday }), r.a.createElement(B, { title: "\u662f\u5426\u5df2\u80b2", value: t.marital_status }), r.a.createElement(B, { title: "\u7c4d\u8d2f", value: t.residence }), r.a.createElement(B, { title: "\u6c42\u804c\u72b6\u6001", value: t.status }), r.a.createElement(B, { title: "\u624b\u673a", value: n.mobile }), r.a.createElement(B, { title: "\u671f\u671b\u884c\u4e1a", value: a.industries }), r.a.createElement(B, { title: "QQ", value: n.qq }), r.a.createElement(B, { title: "\u671f\u671b\u804c\u4f4d", value: a.title }), r.a.createElement(B, { title: "\u90ae\u7bb1", value: n.email }), r.a.createElement(B, { title: "\u671f\u671b\u5730\u70b9", value: a.city }), r.a.createElement(B, { title: "\u5fae\u4fe1", value: n.wechat }), r.a.createElement(B, { title: "\u671f\u671b\u6708\u85aa", value: a.salary }))
                        }
                    }]), a
                }(n.Component),
                P = function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() { return Object(i.a)(this, a), t.apply(this, arguments) }
                    return Object(s.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.title,
                                a = e.value,
                                n = e.type,
                                c = e.arr;
                            return r.a.createElement("div", { className: "analyze_result__content-row" }, r.a.createElement("div", { className: "analyze_result__content-row-name" }, t, ": "), "map" === n ? c && c.map((function(e, t) { return r.a.createElement("span", { key: t }, e.name + " ") })) : r.a.createElement("div", null, a))
                        }
                    }]), a
                }(n.Component),
                q = function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() { return Object(i.a)(this, a), t.apply(this, arguments) }
                    return Object(s.a)(a, [{ key: "render", value: function() { var e = this.props.info.occupations; return r.a.createElement("div", null, e.map((function(e, t) { return r.a.createElement("div", { key: t }, r.a.createElement("h3", null, e.start_time + "-" + e.end_time + " " + e.company + " "), r.a.createElement("div", { className: "analyze_result__content" }, r.a.createElement(B, { title: "\u804c\u4f4d", value: e.title }), r.a.createElement(B, { title: "\u85aa\u8d44", value: e.salary }), r.a.createElement(B, { title: "\u90e8\u95e8", value: e.department }), r.a.createElement(B, { title: "\u8bc1\u660e\u4eba", value: e.referer }), r.a.createElement(B, { title: "\u884c\u4e1a", value: e.industry }), r.a.createElement(B, { title: "\u8bc1\u660e\u4eba\u7535\u8bdd", value: e.referer_mobile }), r.a.createElement(P, { title: "\u5de5\u4f5c\u63cf\u8ff0", value: e.desc, type: "normal" }), r.a.createElement(P, { title: "\u79bb\u804c\u539f\u56e0", value: e.leave_reason, type: "normal" }))) }))) } }]), a
                }(n.Component),
                J = function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() { return Object(i.a)(this, a), t.apply(this, arguments) }
                    return Object(s.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.info,
                                a = e.type;
                            return r.a.createElement("div", null, "projects" === a && t.map((function(e, t) { return r.a.createElement("div", { key: t + "projectsItem" }, r.a.createElement("h3", null, e.start_time + "-" + e.end_time + " " + e.company + " "), r.a.createElement("div", { className: "analyze_result__content" }, r.a.createElement(B, { title: "\u804c\u4f4d", value: e.title }), r.a.createElement(B, { title: "\u804c\u8d23", value: e.salary }), r.a.createElement(P, { title: "\u5de5\u4f5c\u63cf\u8ff0", value: e.desc, type: "normal" }))) })), "educations" === a && t.map((function(e, t) { return r.a.createElement("div", { key: t + "educationsItem" }, r.a.createElement("h3", null, e.start_time + " " + e.end_time + " " + e.school + " "), r.a.createElement("div", { className: "analyze_result__content" }, r.a.createElement(B, { title: "\u5b66\u5386", value: e.degree }), r.a.createElement(B, { title: "\u4e13\u4e1a", value: e.major }), r.a.createElement(P, { title: "\u4e13\u4e1a\u4ecb\u7ecd", value: e.desc, type: "normal" }))) })))
                        }
                    }]), a
                }(n.Component),
                V = "https://ucpin.oss-cn-shenzhen.aliyuncs.com/AI-static/",
                F = { AnalyzeResult: { user: V + "info.png", work: V + "work.png", project: V + "proInfo.png", education: V + "education.png", other: V + "other.png", back: V + "back.png" }, Analyze: { upload: V + "upload.png" } },
                Q = (a(292), function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() {
                        var e;
                        Object(i.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(r))).state = {}, e
                    }
                    return Object(s.a)(a, [{ key: "render", value: function() { var e = this.props.isLoading; return r.a.createElement("div", null, e && r.a.createElement("div", { className: "ucpin_loading" }, r.a.createElement("img", { src: "https://ucpin.oss-cn-shenzhen.aliyuncs.com/AI-static/loading70.gif", alt: "\u7b49\u5f85\u52a0\u8f7d\u56fe\u6807" }), r.a.createElement("p", null, "\u6b63\u5728\u52a0\u8f7d\u4e2d..."))) } }]), a
                }(n.Component)),
                U = a(148),
                W = a.n(U),
                $ = function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() {
                        var e;
                        Object(i.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(r))).state = { info: { basic_info: { self_evaluate: "" }, expect: {}, contact: {}, occupations: [], projects: [], educations: [], skills: [] }, isNav: !0, infoJson: "", loading: !1 }, e.gotoBack = function() { W()().goBack() }, e.changeNav = function(t) { "result" === t ? e.setState({ isNav: !0 }) : e.setState({ isNav: !1 }) }, e
                    }
                    return Object(s.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(E.a)(f.a.mark((function e() {
                                var t, a, n, r, c;
                                return f.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = this.props.location.state.key) { e.next = 6; break }
                                            return b.b.error("\u7b80\u5386\u4e0a\u4f20\u6709\u8bef ! "), e.abrupt("return");
                                        case 6:
                                            return this.setState({ loading: !0 }), a = { key: t }, n = new D, e.next = 11, n.getResumeInfo(a);
                                        case 11:
                                            200 === (r = e.sent).code ? (c = JSON.stringify(r.data, null, 2), this.setState({ info: r.data, infoJson: c })) : b.b.error("\u7b80\u5386\u4e0a\u4f20\u6709\u8bef ! "), this.setState({ loading: !1 });
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()
                    }, { key: "render", value: function() { var e = this; return r.a.createElement("div", { className: "analyze_result_body" }, r.a.createElement(Q, { isLoading: this.state.loading }), r.a.createElement("div", { className: "analyze_result_margin" }), r.a.createElement("div", { className: "analyze_result" }, r.a.createElement("div", { className: "analyze_result__btns" }, r.a.createElement("div", { className: "analyze_result__nav" }, r.a.createElement("button", { className: this.state.isNav ? "analyze_result__nav-active" : "analyze_result__nav-no", onClick: function() { return e.changeNav("result") } }, "\u89e3\u6790\u7ed3\u679c"), r.a.createElement("button", { className: this.state.isNav ? "analyze_result__nav-no" : "analyze_result__nav-active", onClick: function() { return e.changeNav("data") } }, "\u8fd4\u56de\u6570\u636e")), r.a.createElement("div", { onClick: this.gotoBack }, r.a.createElement("img", { src: F.AnalyzeResult.back, alt: "\u8fd4\u56de\u56fe\u6807" }), r.a.createElement("button", null, "\u8fd4\u56de\u6f14\u793a\u9875"))), this.state.isNav ? r.a.createElement("div", null, r.a.createElement(L, { info: this.state.info }), r.a.createElement(R, { title: "\u57fa\u672c\u4fe1\u606f", icon: F.AnalyzeResult.user }), r.a.createElement(H, { info: this.state.info }), r.a.createElement(R, { title: "\u5de5\u4f5c\u7ecf\u5386", icon: F.AnalyzeResult.work }), r.a.createElement(q, { info: this.state.info }), r.a.createElement(R, { title: "\u9879\u76ee\u7ecf\u5386", icon: F.AnalyzeResult.project }), r.a.createElement(J, { info: this.state.info.projects, type: "projects" }), r.a.createElement(R, { title: "\u6559\u80b2\u7ecf\u5386", icon: F.AnalyzeResult.education }), r.a.createElement(J, { info: this.state.info.educations, type: "educations" }), r.a.createElement(R, { title: "\u5176\u4ed6\u4fe1\u606f", icon: F.AnalyzeResult.other }), r.a.createElement(P, { title: "\u4e13\u4e1a\u6280\u80fd", arr: this.state.info.skills, type: "map" }), r.a.createElement(P, { title: "\u4e13\u4e1a\u8bc1\u4e66", arr: this.state.info.skills, type: "map" }), r.a.createElement(P, { title: "\u81ea\u6211\u4ecb\u7ecd", value: this.state.info.basic_info.self_evaluate, type: "normal" })) : r.a.createElement("pre", { style: { height: "700px" } }, this.state.infoJson))) } }]), a
                }(n.Component),
                G = Object(m.g)($),
                K = a(159),
                X = (a(296), a(322)),
                Y = a(149),
                Z = a(320),
                ee = function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() { return Object(i.a)(this, a), t.apply(this, arguments) }
                    return Object(s.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.imgSrc,
                                a = e.imgStyle;
                            return r.a.createElement(Z.a, { component: function() { return r.a.createElement("img", { style: Object(Y.a)({ width: "1em", height: "1em" }, a), src: t, alt: "icon" }) } })
                        }
                    }]), a
                }(r.a.Component),
                te = function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() {
                        var e;
                        Object(i.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(r))).state = { showContent1: !0, showContent2: !1, showContent3: !1, devImg: "https://ucpin.oss-cn-shenzhen.aliyuncs.com/AI-static/developing.png", txt: "", fileList: [], key: "", loading: !1, url: "#", count: 0 }, e.hanldeNavChange = function(t) { console.log(t), 1 === t ? e.setState({ showContent1: !0, showContent2: !1, showContent3: !1 }) : 2 === t ? e.setState({ showContent1: !1, showContent2: !0, showContent3: !1 }) : e.setState({ showContent1: !1, showContent2: !1, showContent3: !0 }) }, e.handleFileChange = function(t) {
                            var a = Object(K.a)(t.fileList);
                            a = (a = a.slice(-1)).map((function(e) { return e.response && (e.url = e.response.url), e })), e.setState({ fileList: a });
                            var n = t.file.status;
                            if ("done" === n) {
                                if (1001 === t.fileList[0].response.code) return void b.b.error("".concat(t.file.name, " ").concat(t.fileList[0].response.msg, " ! "));
                                b.b.success("".concat(t.file.name, " \u7b80\u5386\u4e0a\u4f20\u6210\u529f ! ")), e.setState({ key: t.fileList[0].response.data.key, url: "/analyze_result" })
                            } else "error" === n && b.b.error("".concat(t.file.name, " \u7b80\u5386\u4e0a\u4f20\u5931\u8d25\u3002"))
                        }, e.handleInput = function() {
                            var t = Object(E.a)(f.a.mark((function t(a) {
                                return f.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            e.setState({ txt: a.target.value });
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) { return t.apply(this, arguments) }
                        }(), e.countInput = function(t) { e.setState({ count: t.target.value.length }) }, e.submitTxt = Object(E.a)(f.a.mark((function t() {
                            var a, n, r;
                            return f.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.state.txt) { t.next = 3; break }
                                        return b.b.error("\u7b80\u5386\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"), t.abrupt("return");
                                    case 3:
                                        return e.setState({ loading: !0 }), a = new D, n = { type: "txt", txt: e.state.txt }, t.next = 8, a.uploadTxt(n);
                                    case 8:
                                        200 === (r = t.sent).code ? e.setState({ key: r.data.key }, (function() { e.state.key && e.props.history.push({ pathname: "/analyze_result", state: { key: e.state.key } }) })) : b.b.error("\u7b80\u5386\u4e0a\u4f20\u5931\u8d25 !"), e.setState({ loading: !1 });
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), e
                    }
                    return Object(s.a)(a, [{ key: "componentDidMount", value: function() {} }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = X.a.Dragger,
                                a = this.state.count,
                                n = { name: "file", data: { type: "file" }, onChange: this.handleFileChange, action: "https://api.ucpin.com/v1/ai/parse" };
                            return r.a.createElement("div", null, r.a.createElement(Q, { isLoading: this.state.loading }), r.a.createElement("div", { className: "analyze_body" }, r.a.createElement("svg", { className: "hidden" }, r.a.createElement("defs", null, r.a.createElement("path", { id: "tabshape", d: "M80,60C34,53.5,64.417,0,0,0v60H80z" }))), r.a.createElement("div", { className: "analyze_container" }, r.a.createElement("section", null, r.a.createElement("div", { className: "analyze_tabs analyze_tabs-style-shape" }, r.a.createElement("nav", null, r.a.createElement("ul", null, r.a.createElement("li", { className: this.state.showContent1 ? "tab-current" : "" }, r.a.createElement(p.b, { to: "/analyze/analyze_upload01", onClick: function() { return e.hanldeNavChange(1) } }, r.a.createElement("svg", { viewBox: "0 0 80 60", preserveAspectRatio: "none" }, r.a.createElement("use", { xlinkHref: "#tabshape" })), r.a.createElement("span", null, "\u6587\u4ef6\u89e3\u6790"))), r.a.createElement("li", { className: this.state.showContent2 ? "tab-current" : "" }, r.a.createElement(p.b, { to: "/analyze/analyze_upload02", onClick: function() { return e.hanldeNavChange(2) } }, r.a.createElement("svg", { viewBox: "0 0 80 60", preserveAspectRatio: "none" }, r.a.createElement("use", { xlinkHref: "#tabshape" })), r.a.createElement("svg", { viewBox: "0 0 80 60", preserveAspectRatio: "none" }, r.a.createElement("use", { xlinkHref: "#tabshape" })), r.a.createElement("span", null, "\u6587\u672c\u89e3\u6790"))), r.a.createElement("li", { className: this.state.showContent3 ? "tab-current" : "" }, r.a.createElement(p.b, { to: "/analyze/analyze_upload03", onClick: function() { return e.hanldeNavChange(3) } }, r.a.createElement("svg", { viewBox: "0 0 80 60", preserveAspectRatio: "none" }, r.a.createElement("use", { xlinkHref: "#tabshape" })), r.a.createElement("svg", { viewBox: "0 0 80 60", preserveAspectRatio: "none" }, r.a.createElement("use", { xlinkHref: "#tabshape" })), r.a.createElement("span", null, "\u5217\u8868\u89e3\u6790"))))), r.a.createElement("div", { className: "analyze_content-wrap", style: { display: this.state.showContent1 ? "block" : "none" } }, r.a.createElement(t, Object.assign({}, n, { fileList: this.state.fileList }), r.a.createElement("p", { className: "ant-upload-drag-icon" }, r.a.createElement(ee, { imgSrc: F.Analyze.upload, imgStyle: { width: "7rem", height: "5.8rem" } })), r.a.createElement("p", { className: "ant-upload-text" }, "\u70b9\u51fb\u6216\u8005\u62d6\u52a8\u6587\u4ef6\u81f3\u6846\u5185")), r.a.createElement(w.a, { disabled: "" === this.state.key, className: "analyze_content-btn", type: "primary" }, r.a.createElement(p.b, { to: { pathname: "/analyze_result", state: { key: this.state.key } } }, "\u5f00\u59cb\u89e3\u6790"))), r.a.createElement("div", { className: "analyze_content-wrap", style: { display: this.state.showContent2 ? "block" : "none" } }, r.a.createElement(g.a.TextArea, { className: "analyze_content-input", placeholder: "\u652f\u6301\u4e2d\u6587\u6587\u672c, \u6682\u4e0d\u652f\u6301\u56fe\u7247, \u6700\u591a5000\u5b57", rows: 12, maxLength: 5e3, onChange: function(t) { return e.countInput(t) }, onBlur: function(t) { return e.handleInput(t) } }), r.a.createElement("span", { className: "analyze_content-count" }, a, "/5000"), r.a.createElement(w.a, { onClick: this.submitTxt, className: "analyze_content-btn2", type: "primary" }, "\u5f00\u59cb\u89e3\u6790")), r.a.createElement("div", { className: "analyze_content-wrap", style: { display: this.state.showContent3 ? "block" : "none" } }, r.a.createElement("img", { className: "analyze_content-wrap-img", src: this.state.devImg, alt: "\u5f00\u53d1\u4e2d\u56fe\u7247" }), r.a.createElement("p", null, "\u65bd\u5de5\u4e2d, \u656c\u8bf7\u671f\u5f85~")))))))
                        }
                    }]), a
                }(r.a.Component),
                ae = function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() {
                        var e;
                        Object(i.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(r))).state = {}, e
                    }
                    return Object(s.a)(a, [{ key: "render", value: function() { return r.a.createElement(m.d, null, r.a.createElement(m.b, { path: "/", exact: !0, component: M }), r.a.createElement(m.b, { path: "/analyze", component: te }), r.a.createElement(m.b, { path: "/analyze_result", component: G }), r.a.createElement(m.a, { to: "/" })) } }]), a
                }(n.Component),
                ne = (a(311), a(323)),
                re = function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() {
                        var e;
                        Object(i.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(r))).state = { show: "none", logo: "https://ucpin.oss-cn-shenzhen.aliyuncs.com/AI-static/logo.png", headerList: [{ id: "0", name: "\u9996\u9875", link: "https://www.ucpin.com" }, { id: "1", name: "AI\u4ea7\u54c1" }, { id: "2", name: "ucdata", link: "https://ucdata.ucpin.com" }, { id: "3", name: "\u627e\u5de5\u4f5c", link: "https://ucdata.ucpin.com/search" }, { id: "4", name: "\u62db\u8058\u4f1a", link: "https://ucdata.ucpin.com/jobfair" }], loginList: [{ id: "0", name: "\u730e\u5934\u767b\u5f55", link: "https://www.ucpin.com/login" }, { id: "1", name: "HR\u767b\u5f55", link: "https://www.ucpin.com/login" }, { id: "2", name: "\u6c42\u804c\u8005\u767b\u5f55", link: "https://www.ucpin.com/login" }], aiList: [{ id: "0", name: "\u7b80\u5386\u89e3\u6790", link: "/ai" }] }, e.hiddenoption = function() { e.setState({ show: "none" }) }, e.selectOption = function(t) { e.setState({ show: "block" }), t.nativeEvent.stopImmediatePropagation() }, e
                    }
                    return Object(s.a)(a, [{ key: "componentDidMount", value: function() {} }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state;
                            return r.a.createElement("header", { className: "ucpin_header" }, r.a.createElement("div", null, r.a.createElement("img", { src: t.logo, alt: "logo", className: "ucpin_header__logo" })), r.a.createElement("div", null, r.a.createElement("ul", { className: "ucpin_header__nav" }, t.headerList.map((function(a) { return r.a.createElement("li", { className: "ucpin_header__nav-item", id: a.id, key: "headerListItem" + a.id }, "1" === a.id ? r.a.createElement("div", { className: "block" === e.state.show ? "ucpin_ai-nav-active" : "ucpin_ai-nav", onMouseOver: e.selectOption, onMouseOut: e.hiddenoption }, r.a.createElement(p.b, { to: "/" }, a.name), r.a.createElement(ne.a, { className: "ucpin_select", style: { display: e.state.show } }, t.aiList.map((function(e) { return r.a.createElement(ne.a.Item, { key: e.id }, r.a.createElement(p.b, { to: e.link }, e.name)) })))) : r.a.createElement("a", { href: a.link }, a.name)) })))), r.a.createElement("div", { className: "login_nav" }, r.a.createElement("ul", { className: "ucpin_header__nav" }, t.loginList.map((function(e) { return r.a.createElement("li", { className: "ucpin_header__nav-item login", id: e.id, key: "login" + e.id }, r.a.createElement("a", { href: e.link }, e.name)) })))))
                        }
                    }]), a
                }(r.a.Component),
                ce = (a(318), function(e) {
                    Object(o.a)(a, e);
                    var t = Object(u.a)(a);

                    function a() {
                        var e;
                        Object(i.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
                        return (e = t.call.apply(t, [this].concat(r))).state = { footerData: { img1: "https://ucpin.oss-cn-shenzhen.aliyuncs.com/AI-static/icon1.png", txt1: "\u5feb\u901f\u53d1\u5e03\u804c\u4f4d", img2: "https://ucpin.oss-cn-shenzhen.aliyuncs.com/AI-static/icon1.png", txt2: "\u6c42\u804c\u627e\u5de5\u4f5c", img3: "https://ucpin.oss-cn-shenzhen.aliyuncs.com/AI-static/icon2.png", txt3: "service@ucpin.com", record: "Copyright\xa9 2017-2020 UCPIN.COM All Rights Reserved. \u7ca4ICP\u590713016216\u53f7-3" } }, e
                    }
                    return Object(s.a)(a, [{ key: "render", value: function() { var e = this.state; return r.a.createElement("div", { className: "ucpin_web_footer" }, r.a.createElement("div", { className: "ucpin_web_footer--concact" }, r.a.createElement("img", { src: e.footerData.img1, alt: "" }), r.a.createElement("div", { className: "ucpin_web_footer--concact-t" }, e.footerData.txt1)), r.a.createElement("div", { className: "ucpin_web_footer--concact" }, r.a.createElement("img", { src: e.footerData.img2, alt: "" }), r.a.createElement("div", { className: "ucpin_web_footer--concact-t" }, e.footerData.txt2)), r.a.createElement("div", { className: "ucpin_web_footer--concact" }, r.a.createElement("img", { src: e.footerData.img3, alt: "" }), r.a.createElement("div", { className: "ucpin_web_footer--concact-t" }, e.footerData.txt3)), r.a.createElement("div", { className: "ucpin_web_footer--record" }, e.footerData.record)) } }]), a
                }(r.a.Component));
            var le = function() { return r.a.createElement("div", { className: "App" }, r.a.createElement(re, null), r.a.createElement(ae, null), r.a.createElement(ce, null)) };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            l.a.render(r.a.createElement(p.a, null, r.a.createElement(le, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) { e.unregister() })).catch((function(e) { console.error(e.message) }))
        },
        60: function(e, t, a) {}
    },
    [
        [162, 1, 2]
    ]
]);
//# sourceMappingURL=main.cc9c0e11.chunk.js.map