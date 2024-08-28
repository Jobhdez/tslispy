// Generated from Scheme.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ExpVarContext } from "./SchemeParser";
import { ExpLetContext } from "./SchemeParser";
import { ExpSetContext } from "./SchemeParser";
import { ExpBeginContext } from "./SchemeParser";
import { ExpIfContext } from "./SchemeParser";
import { ExpWhileContext } from "./SchemeParser";
import { ExpBoolTrueContext } from "./SchemeParser";
import { ExpBoolFalseContext } from "./SchemeParser";
import { ExpVectorRefContext } from "./SchemeParser";
import { ExpVectorContext } from "./SchemeParser";
import { ExpVectorLengthContext } from "./SchemeParser";
import { ExpAndContext } from "./SchemeParser";
import { ExpOrContext } from "./SchemeParser";
import { ExpNotContext } from "./SchemeParser";
import { ExpEqContext } from "./SchemeParser";
import { ExpPlusContext } from "./SchemeParser";
import { ExpMinusContext } from "./SchemeParser";
import { ExpLessContext } from "./SchemeParser";
import { ExpGreaterContext } from "./SchemeParser";
import { ExpIntContext } from "./SchemeParser";
import { ExpNegativeContext } from "./SchemeParser";
import { ProgContext } from "./SchemeParser";
import { ExpContext } from "./SchemeParser";
import { BindingContext } from "./SchemeParser";
import { VarContext } from "./SchemeParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SchemeParser`.
 */
export interface SchemeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `ExpVar`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpVar?: (ctx: ExpVarContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpVar`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpVar?: (ctx: ExpVarContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpLet`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpLet?: (ctx: ExpLetContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpLet`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpLet?: (ctx: ExpLetContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpSet`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpSet?: (ctx: ExpSetContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpSet`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpSet?: (ctx: ExpSetContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpBegin`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpBegin?: (ctx: ExpBeginContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpBegin`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpBegin?: (ctx: ExpBeginContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpIf`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpIf?: (ctx: ExpIfContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpIf`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpIf?: (ctx: ExpIfContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpWhile`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpWhile?: (ctx: ExpWhileContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpWhile`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpWhile?: (ctx: ExpWhileContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpBoolTrue`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpBoolTrue?: (ctx: ExpBoolTrueContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpBoolTrue`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpBoolTrue?: (ctx: ExpBoolTrueContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpBoolFalse`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpBoolFalse?: (ctx: ExpBoolFalseContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpBoolFalse`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpBoolFalse?: (ctx: ExpBoolFalseContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpVectorRef`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpVectorRef?: (ctx: ExpVectorRefContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpVectorRef`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpVectorRef?: (ctx: ExpVectorRefContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpVector`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpVector?: (ctx: ExpVectorContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpVector`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpVector?: (ctx: ExpVectorContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpVectorLength`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpVectorLength?: (ctx: ExpVectorLengthContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpVectorLength`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpVectorLength?: (ctx: ExpVectorLengthContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpAnd`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpAnd?: (ctx: ExpAndContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpAnd`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpAnd?: (ctx: ExpAndContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpOr`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpOr?: (ctx: ExpOrContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpOr`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpOr?: (ctx: ExpOrContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpNot`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpNot?: (ctx: ExpNotContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpNot`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpNot?: (ctx: ExpNotContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpEq`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpEq?: (ctx: ExpEqContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpEq`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpEq?: (ctx: ExpEqContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpPlus`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpPlus?: (ctx: ExpPlusContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpPlus`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpPlus?: (ctx: ExpPlusContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpMinus`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpMinus?: (ctx: ExpMinusContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpMinus`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpMinus?: (ctx: ExpMinusContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpLess`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpLess?: (ctx: ExpLessContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpLess`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpLess?: (ctx: ExpLessContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpGreater`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpGreater?: (ctx: ExpGreaterContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpGreater`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpGreater?: (ctx: ExpGreaterContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpInt`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpInt?: (ctx: ExpIntContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpInt`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpInt?: (ctx: ExpIntContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpNegative`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpNegative?: (ctx: ExpNegativeContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpNegative`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpNegative?: (ctx: ExpNegativeContext) => void;

	/**
	 * Enter a parse tree produced by `SchemeParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `SchemeParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `SchemeParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;

	/**
	 * Enter a parse tree produced by `SchemeParser.binding`.
	 * @param ctx the parse tree
	 */
	enterBinding?: (ctx: BindingContext) => void;
	/**
	 * Exit a parse tree produced by `SchemeParser.binding`.
	 * @param ctx the parse tree
	 */
	exitBinding?: (ctx: BindingContext) => void;

	/**
	 * Enter a parse tree produced by `SchemeParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by `SchemeParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;
}

