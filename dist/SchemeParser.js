"use strict";
// Generated from Scheme.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.VarContext = exports.BindingContext = exports.ExpNegativeContext = exports.ExpIntContext = exports.ExpGreaterContext = exports.ExpLessContext = exports.ExpMinusContext = exports.ExpPlusContext = exports.ExpEqContext = exports.ExpNotContext = exports.ExpOrContext = exports.ExpAndContext = exports.ExpVectorLengthContext = exports.ExpVectorContext = exports.ExpVectorRefContext = exports.ExpBoolFalseContext = exports.ExpBoolTrueContext = exports.ExpWhileContext = exports.ExpIfContext = exports.ExpBeginContext = exports.ExpSetContext = exports.ExpLetContext = exports.ExpVarContext = exports.ExpContext = exports.ProgContext = exports.SchemeParser = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class SchemeParser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return SchemeParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "Scheme.g4"; }
    // @Override
    get ruleNames() { return SchemeParser.ruleNames; }
    // @Override
    get serializedATN() { return SchemeParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(SchemeParser._ATN, this);
    }
    // @RuleVersion(0)
    prog() {
        let _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, SchemeParser.RULE_prog);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 9;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 8;
                            this.exp();
                        }
                    }
                    this.state = 11;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SchemeParser.T__0) | (1 << SchemeParser.T__7) | (1 << SchemeParser.T__8) | (1 << SchemeParser.INT) | (1 << SchemeParser.VAR))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    exp() {
        let _localctx = new ExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, SchemeParser.RULE_exp);
        let _la;
        try {
            this.state = 126;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    _localctx = new ExpVarContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 13;
                        this.match(SchemeParser.VAR);
                    }
                    break;
                case 2:
                    _localctx = new ExpLetContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 14;
                        this.match(SchemeParser.T__0);
                        this.state = 15;
                        this.match(SchemeParser.T__1);
                        this.state = 16;
                        this.match(SchemeParser.T__0);
                        this.state = 17;
                        this.binding();
                        this.state = 18;
                        this.match(SchemeParser.T__2);
                        this.state = 19;
                        this.exp();
                        this.state = 20;
                        this.match(SchemeParser.T__2);
                    }
                    break;
                case 3:
                    _localctx = new ExpSetContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 22;
                        this.match(SchemeParser.T__0);
                        this.state = 23;
                        this.match(SchemeParser.T__3);
                        this.state = 24;
                        this.var();
                        this.state = 25;
                        this.exp();
                        this.state = 26;
                        this.match(SchemeParser.T__2);
                    }
                    break;
                case 4:
                    _localctx = new ExpBeginContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 28;
                        this.match(SchemeParser.T__0);
                        this.state = 29;
                        this.match(SchemeParser.T__4);
                        this.state = 31;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 30;
                                    this.exp();
                                }
                            }
                            this.state = 33;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SchemeParser.T__0) | (1 << SchemeParser.T__7) | (1 << SchemeParser.T__8) | (1 << SchemeParser.INT) | (1 << SchemeParser.VAR))) !== 0));
                        this.state = 35;
                        this.match(SchemeParser.T__2);
                    }
                    break;
                case 5:
                    _localctx = new ExpIfContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 37;
                        this.match(SchemeParser.T__0);
                        this.state = 38;
                        this.match(SchemeParser.T__5);
                        this.state = 39;
                        this.exp();
                        this.state = 40;
                        this.exp();
                        this.state = 41;
                        this.exp();
                        this.state = 42;
                        this.match(SchemeParser.T__2);
                    }
                    break;
                case 6:
                    _localctx = new ExpWhileContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 44;
                        this.match(SchemeParser.T__0);
                        this.state = 45;
                        this.match(SchemeParser.T__6);
                        this.state = 46;
                        this.match(SchemeParser.T__0);
                        this.state = 47;
                        this.exp();
                        this.state = 48;
                        this.match(SchemeParser.T__2);
                        this.state = 49;
                        this.exp();
                        this.state = 50;
                        this.match(SchemeParser.T__2);
                    }
                    break;
                case 7:
                    _localctx = new ExpBoolTrueContext(_localctx);
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 52;
                        this.match(SchemeParser.T__7);
                    }
                    break;
                case 8:
                    _localctx = new ExpBoolFalseContext(_localctx);
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 53;
                        this.match(SchemeParser.T__8);
                    }
                    break;
                case 9:
                    _localctx = new ExpVectorRefContext(_localctx);
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 54;
                        this.match(SchemeParser.T__0);
                        this.state = 55;
                        this.match(SchemeParser.T__9);
                        this.state = 56;
                        this.exp();
                        this.state = 57;
                        this.match(SchemeParser.INT);
                        this.state = 58;
                        this.match(SchemeParser.T__2);
                    }
                    break;
                case 10:
                    _localctx = new ExpVectorContext(_localctx);
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 60;
                        this.match(SchemeParser.T__0);
                        this.state = 61;
                        this.match(SchemeParser.T__10);
                        this.state = 63;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 62;
                                    this.exp();
                                }
                            }
                            this.state = 65;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SchemeParser.T__0) | (1 << SchemeParser.T__7) | (1 << SchemeParser.T__8) | (1 << SchemeParser.INT) | (1 << SchemeParser.VAR))) !== 0));
                        this.state = 67;
                        this.match(SchemeParser.T__2);
                    }
                    break;
                case 11:
                    _localctx = new ExpVectorLengthContext(_localctx);
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 69;
                        this.match(SchemeParser.T__0);
                        this.state = 70;
                        this.match(SchemeParser.T__11);
                        this.state = 71;
                        this.exp();
                        this.state = 72;
                        this.match(SchemeParser.T__2);
                    }
                    break;
                case 12:
                    _localctx = new ExpAndContext(_localctx);
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 74;
                        this.match(SchemeParser.T__0);
                        this.state = 75;
                        this.match(SchemeParser.T__12);
                        this.state = 76;
                        this.exp();
                        this.state = 77;
                        this.exp();
                        this.state = 78;
                        this.match(SchemeParser.T__2);
                    }
                    break;
                case 13:
                    _localctx = new ExpOrContext(_localctx);
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 80;
                        this.match(SchemeParser.T__0);
                        this.state = 81;
                        this.match(SchemeParser.T__13);
                        this.state = 82;
                        this.exp();
                        this.state = 83;
                        this.exp();
                        this.state = 84;
                        this.match(SchemeParser.T__2);
                    }
                    break;
                case 14:
                    _localctx = new ExpNotContext(_localctx);
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 86;
                        this.match(SchemeParser.T__0);
                        this.state = 87;
                        this.match(SchemeParser.T__14);
                        this.state = 88;
                        this.exp();
                        this.state = 89;
                        this.match(SchemeParser.T__2);
                    }
                    break;
                case 15:
                    _localctx = new ExpEqContext(_localctx);
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 91;
                        this.match(SchemeParser.T__0);
                        this.state = 92;
                        this.match(SchemeParser.T__15);
                        this.state = 93;
                        this.exp();
                        this.state = 94;
                        this.exp();
                        this.state = 95;
                        this.match(SchemeParser.T__2);
                    }
                    break;
                case 16:
                    _localctx = new ExpPlusContext(_localctx);
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 97;
                        this.match(SchemeParser.T__0);
                        this.state = 98;
                        this.match(SchemeParser.T__16);
                        this.state = 99;
                        this.exp();
                        this.state = 100;
                        this.exp();
                        this.state = 101;
                        this.match(SchemeParser.T__2);
                    }
                    break;
                case 17:
                    _localctx = new ExpMinusContext(_localctx);
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 103;
                        this.match(SchemeParser.T__0);
                        this.state = 104;
                        this.match(SchemeParser.T__17);
                        this.state = 105;
                        this.exp();
                        this.state = 106;
                        this.exp();
                        this.state = 107;
                        this.match(SchemeParser.T__2);
                    }
                    break;
                case 18:
                    _localctx = new ExpLessContext(_localctx);
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 109;
                        this.match(SchemeParser.T__0);
                        this.state = 110;
                        this.match(SchemeParser.T__18);
                        this.state = 111;
                        this.exp();
                        this.state = 112;
                        this.exp();
                        this.state = 113;
                        this.match(SchemeParser.T__2);
                    }
                    break;
                case 19:
                    _localctx = new ExpGreaterContext(_localctx);
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 115;
                        this.match(SchemeParser.T__0);
                        this.state = 116;
                        this.match(SchemeParser.T__19);
                        this.state = 117;
                        this.exp();
                        this.state = 118;
                        this.exp();
                        this.state = 119;
                        this.match(SchemeParser.T__2);
                    }
                    break;
                case 20:
                    _localctx = new ExpIntContext(_localctx);
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 121;
                        this.match(SchemeParser.INT);
                    }
                    break;
                case 21:
                    _localctx = new ExpNegativeContext(_localctx);
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 122;
                        this.match(SchemeParser.T__0);
                        this.state = 123;
                        this.match(SchemeParser.T__17);
                        this.state = 124;
                        this.match(SchemeParser.INT);
                        this.state = 125;
                        this.match(SchemeParser.T__2);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    binding() {
        let _localctx = new BindingContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, SchemeParser.RULE_binding);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 128;
                this.match(SchemeParser.T__0);
                this.state = 129;
                this.match(SchemeParser.VAR);
                this.state = 130;
                this.exp();
                this.state = 131;
                this.match(SchemeParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    var() {
        let _localctx = new VarContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, SchemeParser.RULE_var);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 133;
                this.match(SchemeParser.VAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!SchemeParser.__ATN) {
            SchemeParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SchemeParser._serializedATN));
        }
        return SchemeParser.__ATN;
    }
}
exports.SchemeParser = SchemeParser;
SchemeParser.T__0 = 1;
SchemeParser.T__1 = 2;
SchemeParser.T__2 = 3;
SchemeParser.T__3 = 4;
SchemeParser.T__4 = 5;
SchemeParser.T__5 = 6;
SchemeParser.T__6 = 7;
SchemeParser.T__7 = 8;
SchemeParser.T__8 = 9;
SchemeParser.T__9 = 10;
SchemeParser.T__10 = 11;
SchemeParser.T__11 = 12;
SchemeParser.T__12 = 13;
SchemeParser.T__13 = 14;
SchemeParser.T__14 = 15;
SchemeParser.T__15 = 16;
SchemeParser.T__16 = 17;
SchemeParser.T__17 = 18;
SchemeParser.T__18 = 19;
SchemeParser.T__19 = 20;
SchemeParser.INT = 21;
SchemeParser.VAR = 22;
SchemeParser.WS = 23;
SchemeParser.RULE_prog = 0;
SchemeParser.RULE_exp = 1;
SchemeParser.RULE_binding = 2;
SchemeParser.RULE_var = 3;
// tslint:disable:no-trailing-whitespace
SchemeParser.ruleNames = [
    "prog", "exp", "binding", "var",
];
SchemeParser._LITERAL_NAMES = [
    undefined, "'('", "'let'", "')'", "'set'", "'begin'", "'if'", "'while'",
    "'true'", "'false'", "'vectorref'", "'vector'", "'vectorlength'", "'and'",
    "'or'", "'not'", "'eq'", "'+'", "'-'", "'<'", "'>'",
];
SchemeParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    "INT", "VAR", "WS",
];
SchemeParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SchemeParser._LITERAL_NAMES, SchemeParser._SYMBOLIC_NAMES, []);
SchemeParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x19\x8A\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x06\x02\f\n\x02" +
    "\r\x02\x0E\x02\r\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x06\x03\"\n\x03\r\x03\x0E\x03#\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x06\x03B\n\x03" +
    "\r\x03\x0E\x03C\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x81\n" +
    "\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x02" +
    "\x02\x02\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x02\x02\x9C\x02\v\x03\x02" +
    "\x02\x02\x04\x80\x03\x02\x02\x02\x06\x82\x03\x02\x02\x02\b\x87\x03\x02" +
    "\x02\x02\n\f\x05\x04\x03\x02\v\n\x03\x02\x02\x02\f\r\x03\x02\x02\x02\r" +
    "\v\x03\x02\x02\x02\r\x0E\x03\x02\x02\x02\x0E\x03\x03\x02\x02\x02\x0F\x81" +
    "\x07\x18\x02\x02\x10\x11\x07\x03\x02\x02\x11\x12\x07\x04\x02\x02\x12\x13" +
    "\x07\x03\x02\x02\x13\x14\x05\x06\x04\x02\x14\x15\x07\x05\x02\x02\x15\x16" +
    "\x05\x04\x03\x02\x16\x17\x07\x05\x02\x02\x17\x81\x03\x02\x02\x02\x18\x19" +
    "\x07\x03\x02\x02\x19\x1A\x07\x06\x02\x02\x1A\x1B\x05\b\x05\x02\x1B\x1C" +
    "\x05\x04\x03\x02\x1C\x1D\x07\x05\x02\x02\x1D\x81\x03\x02\x02\x02\x1E\x1F" +
    "\x07\x03\x02\x02\x1F!\x07\x07\x02\x02 \"\x05\x04\x03\x02! \x03\x02\x02" +
    "\x02\"#\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$%\x03\x02" +
    "\x02\x02%&\x07\x05\x02\x02&\x81\x03\x02\x02\x02\'(\x07\x03\x02\x02()\x07" +
    "\b\x02\x02)*\x05\x04\x03\x02*+\x05\x04\x03\x02+,\x05\x04\x03\x02,-\x07" +
    "\x05\x02\x02-\x81\x03\x02\x02\x02./\x07\x03\x02\x02/0\x07\t\x02\x0201" +
    "\x07\x03\x02\x0212\x05\x04\x03\x0223\x07\x05\x02\x0234\x05\x04\x03\x02" +
    "45\x07\x05\x02\x025\x81\x03\x02\x02\x026\x81\x07\n\x02\x027\x81\x07\v" +
    "\x02\x0289\x07\x03\x02\x029:\x07\f\x02\x02:;\x05\x04\x03\x02;<\x07\x17" +
    "\x02\x02<=\x07\x05\x02\x02=\x81\x03\x02\x02\x02>?\x07\x03\x02\x02?A\x07" +
    "\r\x02\x02@B\x05\x04\x03\x02A@\x03\x02\x02\x02BC\x03\x02\x02\x02CA\x03" +
    "\x02\x02\x02CD\x03\x02\x02\x02DE\x03\x02\x02\x02EF\x07\x05\x02\x02F\x81" +
    "\x03\x02\x02\x02GH\x07\x03\x02\x02HI\x07\x0E\x02\x02IJ\x05\x04\x03\x02" +
    "JK\x07\x05\x02\x02K\x81\x03\x02\x02\x02LM\x07\x03\x02\x02MN\x07\x0F\x02" +
    "\x02NO\x05\x04\x03\x02OP\x05\x04\x03\x02PQ\x07\x05\x02\x02Q\x81\x03\x02" +
    "\x02\x02RS\x07\x03\x02\x02ST\x07\x10\x02\x02TU\x05\x04\x03\x02UV\x05\x04" +
    "\x03\x02VW\x07\x05\x02\x02W\x81\x03\x02\x02\x02XY\x07\x03\x02\x02YZ\x07" +
    "\x11\x02\x02Z[\x05\x04\x03\x02[\\\x07\x05\x02\x02\\\x81\x03\x02\x02\x02" +
    "]^\x07\x03\x02\x02^_\x07\x12\x02\x02_`\x05\x04\x03\x02`a\x05\x04\x03\x02" +
    "ab\x07\x05\x02\x02b\x81\x03\x02\x02\x02cd\x07\x03\x02\x02de\x07\x13\x02" +
    "\x02ef\x05\x04\x03\x02fg\x05\x04\x03\x02gh\x07\x05\x02\x02h\x81\x03\x02" +
    "\x02\x02ij\x07\x03\x02\x02jk\x07\x14\x02\x02kl\x05\x04\x03\x02lm\x05\x04" +
    "\x03\x02mn\x07\x05\x02\x02n\x81\x03\x02\x02\x02op\x07\x03\x02\x02pq\x07" +
    "\x15\x02\x02qr\x05\x04\x03\x02rs\x05\x04\x03\x02st\x07\x05\x02\x02t\x81" +
    "\x03\x02\x02\x02uv\x07\x03\x02\x02vw\x07\x16\x02\x02wx\x05\x04\x03\x02" +
    "xy\x05\x04\x03\x02yz\x07\x05\x02\x02z\x81\x03\x02\x02\x02{\x81\x07\x17" +
    "\x02\x02|}\x07\x03\x02\x02}~\x07\x14\x02\x02~\x7F\x07\x17\x02\x02\x7F" +
    "\x81\x07\x05\x02\x02\x80\x0F\x03\x02\x02\x02\x80\x10\x03\x02\x02\x02\x80" +
    "\x18\x03\x02\x02\x02\x80\x1E\x03\x02\x02\x02\x80\'\x03\x02\x02\x02\x80" +
    ".\x03\x02\x02\x02\x806\x03\x02\x02\x02\x807\x03\x02\x02\x02\x808\x03\x02" +
    "\x02\x02\x80>\x03\x02\x02\x02\x80G\x03\x02\x02\x02\x80L\x03\x02\x02\x02" +
    "\x80R\x03\x02\x02\x02\x80X\x03\x02\x02\x02\x80]\x03\x02\x02\x02\x80c\x03" +
    "\x02\x02\x02\x80i\x03\x02\x02\x02\x80o\x03\x02\x02\x02\x80u\x03\x02\x02" +
    "\x02\x80{\x03\x02\x02\x02\x80|\x03\x02\x02\x02\x81\x05\x03\x02\x02\x02" +
    "\x82\x83\x07\x03\x02\x02\x83\x84\x07\x18\x02\x02\x84\x85\x05\x04\x03\x02" +
    "\x85\x86\x07\x05\x02\x02\x86\x07\x03\x02\x02\x02\x87\x88\x07\x18\x02\x02" +
    "\x88\t\x03\x02\x02\x02\x06\r#C\x80";
class ProgContext extends ParserRuleContext_1.ParserRuleContext {
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SchemeParser.RULE_prog; }
    // @Override
    enterRule(listener) {
        if (listener.enterProg) {
            listener.enterProg(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProg) {
            listener.exitProg(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProgContext = ProgContext;
class ExpContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SchemeParser.RULE_exp; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ExpContext = ExpContext;
class ExpVarContext extends ExpContext {
    VAR() { return this.getToken(SchemeParser.VAR, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpVar) {
            listener.enterExpVar(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpVar) {
            listener.exitExpVar(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpVar) {
            return visitor.visitExpVar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpVarContext = ExpVarContext;
class ExpLetContext extends ExpContext {
    binding() {
        return this.getRuleContext(0, BindingContext);
    }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpLet) {
            listener.enterExpLet(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpLet) {
            listener.exitExpLet(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpLet) {
            return visitor.visitExpLet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpLetContext = ExpLetContext;
class ExpSetContext extends ExpContext {
    var() {
        return this.getRuleContext(0, VarContext);
    }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpSet) {
            listener.enterExpSet(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpSet) {
            listener.exitExpSet(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpSet) {
            return visitor.visitExpSet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpSetContext = ExpSetContext;
class ExpBeginContext extends ExpContext {
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpBegin) {
            listener.enterExpBegin(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpBegin) {
            listener.exitExpBegin(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpBegin) {
            return visitor.visitExpBegin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpBeginContext = ExpBeginContext;
class ExpIfContext extends ExpContext {
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpIf) {
            listener.enterExpIf(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpIf) {
            listener.exitExpIf(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpIf) {
            return visitor.visitExpIf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpIfContext = ExpIfContext;
class ExpWhileContext extends ExpContext {
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpWhile) {
            listener.enterExpWhile(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpWhile) {
            listener.exitExpWhile(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpWhile) {
            return visitor.visitExpWhile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpWhileContext = ExpWhileContext;
class ExpBoolTrueContext extends ExpContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpBoolTrue) {
            listener.enterExpBoolTrue(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpBoolTrue) {
            listener.exitExpBoolTrue(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpBoolTrue) {
            return visitor.visitExpBoolTrue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpBoolTrueContext = ExpBoolTrueContext;
class ExpBoolFalseContext extends ExpContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpBoolFalse) {
            listener.enterExpBoolFalse(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpBoolFalse) {
            listener.exitExpBoolFalse(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpBoolFalse) {
            return visitor.visitExpBoolFalse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpBoolFalseContext = ExpBoolFalseContext;
class ExpVectorRefContext extends ExpContext {
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    INT() { return this.getToken(SchemeParser.INT, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpVectorRef) {
            listener.enterExpVectorRef(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpVectorRef) {
            listener.exitExpVectorRef(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpVectorRef) {
            return visitor.visitExpVectorRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpVectorRefContext = ExpVectorRefContext;
class ExpVectorContext extends ExpContext {
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpVector) {
            listener.enterExpVector(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpVector) {
            listener.exitExpVector(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpVector) {
            return visitor.visitExpVector(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpVectorContext = ExpVectorContext;
class ExpVectorLengthContext extends ExpContext {
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpVectorLength) {
            listener.enterExpVectorLength(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpVectorLength) {
            listener.exitExpVectorLength(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpVectorLength) {
            return visitor.visitExpVectorLength(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpVectorLengthContext = ExpVectorLengthContext;
class ExpAndContext extends ExpContext {
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpAnd) {
            listener.enterExpAnd(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpAnd) {
            listener.exitExpAnd(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpAnd) {
            return visitor.visitExpAnd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpAndContext = ExpAndContext;
class ExpOrContext extends ExpContext {
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpOr) {
            listener.enterExpOr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpOr) {
            listener.exitExpOr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpOr) {
            return visitor.visitExpOr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpOrContext = ExpOrContext;
class ExpNotContext extends ExpContext {
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpNot) {
            listener.enterExpNot(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpNot) {
            listener.exitExpNot(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpNot) {
            return visitor.visitExpNot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpNotContext = ExpNotContext;
class ExpEqContext extends ExpContext {
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpEq) {
            listener.enterExpEq(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpEq) {
            listener.exitExpEq(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpEq) {
            return visitor.visitExpEq(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpEqContext = ExpEqContext;
class ExpPlusContext extends ExpContext {
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpPlus) {
            listener.enterExpPlus(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpPlus) {
            listener.exitExpPlus(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpPlus) {
            return visitor.visitExpPlus(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpPlusContext = ExpPlusContext;
class ExpMinusContext extends ExpContext {
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpMinus) {
            listener.enterExpMinus(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpMinus) {
            listener.exitExpMinus(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpMinus) {
            return visitor.visitExpMinus(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpMinusContext = ExpMinusContext;
class ExpLessContext extends ExpContext {
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpLess) {
            listener.enterExpLess(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpLess) {
            listener.exitExpLess(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpLess) {
            return visitor.visitExpLess(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpLessContext = ExpLessContext;
class ExpGreaterContext extends ExpContext {
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpGreater) {
            listener.enterExpGreater(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpGreater) {
            listener.exitExpGreater(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpGreater) {
            return visitor.visitExpGreater(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpGreaterContext = ExpGreaterContext;
class ExpIntContext extends ExpContext {
    INT() { return this.getToken(SchemeParser.INT, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpInt) {
            listener.enterExpInt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpInt) {
            listener.exitExpInt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpInt) {
            return visitor.visitExpInt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpIntContext = ExpIntContext;
class ExpNegativeContext extends ExpContext {
    INT() { return this.getToken(SchemeParser.INT, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpNegative) {
            listener.enterExpNegative(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpNegative) {
            listener.exitExpNegative(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpNegative) {
            return visitor.visitExpNegative(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpNegativeContext = ExpNegativeContext;
class BindingContext extends ParserRuleContext_1.ParserRuleContext {
    VAR() { return this.getToken(SchemeParser.VAR, 0); }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SchemeParser.RULE_binding; }
    // @Override
    enterRule(listener) {
        if (listener.enterBinding) {
            listener.enterBinding(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBinding) {
            listener.exitBinding(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBinding) {
            return visitor.visitBinding(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BindingContext = BindingContext;
class VarContext extends ParserRuleContext_1.ParserRuleContext {
    VAR() { return this.getToken(SchemeParser.VAR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SchemeParser.RULE_var; }
    // @Override
    enterRule(listener) {
        if (listener.enterVar) {
            listener.enterVar(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVar) {
            listener.exitVar(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVar) {
            return visitor.visitVar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VarContext = VarContext;
