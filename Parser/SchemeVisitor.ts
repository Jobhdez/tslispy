// Generated from Scheme.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
import { ExpApplicationContext } from "./SchemeParser";
import { ProgContext } from "./SchemeParser";
import { ExpContext } from "./SchemeParser";
import { BindingContext } from "./SchemeParser";
import { VarContext } from "./SchemeParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SchemeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SchemeVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `ExpVar`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpVar?: (ctx: ExpVarContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpLet`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpLet?: (ctx: ExpLetContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpSet`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpSet?: (ctx: ExpSetContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpBegin`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpBegin?: (ctx: ExpBeginContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpIf`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpIf?: (ctx: ExpIfContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpWhile`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpWhile?: (ctx: ExpWhileContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpBoolTrue`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpBoolTrue?: (ctx: ExpBoolTrueContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpBoolFalse`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpBoolFalse?: (ctx: ExpBoolFalseContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpVectorRef`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpVectorRef?: (ctx: ExpVectorRefContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpVector`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpVector?: (ctx: ExpVectorContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpVectorLength`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpVectorLength?: (ctx: ExpVectorLengthContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpAnd`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpAnd?: (ctx: ExpAndContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpOr`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpOr?: (ctx: ExpOrContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpNot`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpNot?: (ctx: ExpNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpEq`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpEq?: (ctx: ExpEqContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpPlus`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpPlus?: (ctx: ExpPlusContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpMinus`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpMinus?: (ctx: ExpMinusContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpLess`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpLess?: (ctx: ExpLessContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpGreater`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpGreater?: (ctx: ExpGreaterContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpInt`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpInt?: (ctx: ExpIntContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpNegative`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpNegative?: (ctx: ExpNegativeContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpApplication`
	 * labeled alternative in `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpApplication?: (ctx: ExpApplicationContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemeParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemeParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?: (ctx: ExpContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemeParser.binding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinding?: (ctx: BindingContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemeParser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;
}

