import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { SchemeLexer } from "./SchemeLexer";
import {
  ExpVarContext,
  ExpLetContext,
  ExpSetContext,
  ExpBeginContext,
  ExpIfContext,
  ExpWhileContext,
  ExpBoolTrueContext,
  ExpBoolFalseContext,
  ExpVectorRefContext,
  ExpVectorContext,
  ExpVectorLengthContext,
  ExpAndContext,
  ExpOrContext,
  ExpNotContext,
  ExpEqContext,
  ExpPlusContext,
  ExpMinusContext,
  ExpLessContext,
  ExpGreaterContext,
  ExpIntContext,
  ExpNegativeContext,
  ProgContext,
  ExpContext,
  BindingContext,
  ExpApplicationContext,
  SchemeParser,
} from "./SchemeParser";

import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { SchemeVisitor } from "./SchemeVisitor";

export class LetExpressionAST {
  bindings: { variable: string; value: any }[];
  body: any;

  constructor(bindings: { variable: string; value: any }[], body: any) {
    this.bindings = bindings;
    this.body = body;
  }
}

export class ApplicationExpAST {
  exps: any[];
  constructor(expressions: any[]) {
    this.exps = expressions;
  }
}

export class SetExpressionAST {
  variable: string;
  value: any;

  constructor(variable: string, value: any) {
    this.variable = variable;
    this.value = value;
  }
}

export class BeginExpressionAST {
  expressions: any[];

  constructor(expressions: any[]) {
    this.expressions = expressions;
  }
}

export class IfExpressionAST {
  condition: any;
  thenBranch: any;
  elseBranch: any;

  constructor(condition: any, thenBranch: any, elseBranch: any) {
    this.condition = condition;
    this.thenBranch = thenBranch;
    this.elseBranch = elseBranch;
  }
}

export class WhileExpressionAST {
  condition: any;
  body: any;

  constructor(condition: any, body: any) {
    this.condition = condition;
    this.body = body;
  }
}

export class BoolExpressionAST {
  value: boolean;

  constructor(value: boolean) {
    this.value = value;
  }
}

export class VectorRefExpressionAST {
  vector: any;
  index: number;

  constructor(vector: any, index: number) {
    this.vector = vector;
    this.index = index;
  }
}

export class VectorExpressionAST {
  elements: any[];

  constructor(elements: any[]) {
    this.elements = elements;
  }
}

export class VectorLengthExpressionAST {
  vector: any;

  constructor(vector: any) {
    this.vector = vector;
  }
}

export class AndExpressionAST {
  left: any;
  right: any;

  constructor(left: any, right: any) {
    this.left = left;
    this.right = right;
  }
}

export class OrExpressionAST {
  left: any;
  right: any;

  constructor(left: any, right: any) {
    this.left = left;
    this.right = right;
  }
}

export class NotExpressionAST {
  expression: any;

  constructor(expression: any) {
    this.expression = expression;
  }
}

export class EqExpressionAST {
  left: any;
  right: any;

  constructor(left: any, right: any) {
    this.left = left;
    this.right = right;
  }
}

export class PlusExpressionAST {
  left: any;
  right: any;

  constructor(left: any, right: any) {
    this.left = left;
    this.right = right;
  }
}

export class MinusExpressionAST {
  left: any;
  right: any;

  constructor(left: any, right: any) {
    this.left = left;
    this.right = right;
  }
}

export class LessExpressionAST {
  left: any;
  right: any;

  constructor(left: any, right: any) {
    this.left = left;
    this.right = right;
  }
}

export class GreaterExpressionAST {
  left: any;
  right: any;

  constructor(left: any, right: any) {
    this.left = left;
    this.right = right;
  }
}

export class IntExpressionAST {
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

export class NegativeExpressionAST {
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

class BuildASTVisitor
  extends AbstractParseTreeVisitor<any>
  implements SchemeVisitor<any>
{
  defaultResult() {
    return null;
  }

  aggregateResult(aggregate: any, nextResult: any) {
    return nextResult !== null ? nextResult : aggregate;
  }

  visitExpVar(ctx: ExpVarContext): string {
    return ctx.text;
  }

  visitExpLet(ctx: ExpLetContext): LetExpressionAST {
    const bindings: { variable: string; value: any }[] = [];

    const bindingContexts = ctx.binding() as BindingContext | BindingContext[];
    const bindingList = Array.isArray(bindingContexts)
      ? bindingContexts
      : [bindingContexts];

    for (const binding of bindingList) {
      bindings.push({
        variable: binding.VAR().text,
        value: this.visit(binding.exp()),
      });
    }

    const body = this.visit(ctx.exp());

    return new LetExpressionAST(bindings, body);
  }

  visitExpSet(ctx: ExpSetContext): SetExpressionAST {
    const variable = ctx.var().text;
    const value = this.visit(ctx.exp());
    return new SetExpressionAST(variable, value);
  }

  visitExpBegin(ctx: ExpBeginContext): BeginExpressionAST {
    const expressions = ctx.exp().map((exp) => this.visit(exp));
    return new BeginExpressionAST(expressions);
  }

  visitExpIf(ctx: ExpIfContext): IfExpressionAST {
    const condition = this.visit(ctx.exp(0));
    const thenBranch = this.visit(ctx.exp(1));
    const elseBranch = this.visit(ctx.exp(2));
    return new IfExpressionAST(condition, thenBranch, elseBranch);
  }

  visitExpWhile(ctx: ExpWhileContext): WhileExpressionAST {
    const condition = this.visit(ctx.exp(0));
    const body = this.visit(ctx.exp(1));
    return new WhileExpressionAST(condition, body);
  }

  visitExpBoolTrue(ctx: ExpBoolTrueContext): BoolExpressionAST {
    return new BoolExpressionAST(true);
  }

  visitExpBoolFalse(ctx: ExpBoolFalseContext): BoolExpressionAST {
    return new BoolExpressionAST(false);
  }

  visitExpVectorRef(ctx: ExpVectorRefContext): VectorRefExpressionAST {
    const vector = this.visit(ctx.exp());
    const index = parseInt(ctx.INT().text, 10);
    return new VectorRefExpressionAST(vector, index);
  }

  visitExpVector(ctx: ExpVectorContext): VectorExpressionAST {
    const elements = ctx.exp().map((exp) => this.visit(exp));
    return new VectorExpressionAST(elements);
  }

  visitExpVectorLength(ctx: ExpVectorLengthContext): VectorLengthExpressionAST {
    const vector = this.visit(ctx.exp());
    return new VectorLengthExpressionAST(vector);
  }

  visitExpAnd(ctx: ExpAndContext): AndExpressionAST {
    const left = this.visit(ctx.exp(0));
    const right = this.visit(ctx.exp(1));
    return new AndExpressionAST(left, right);
  }

  visitExpOr(ctx: ExpOrContext): OrExpressionAST {
    const left = this.visit(ctx.exp(0));
    const right = this.visit(ctx.exp(1));
    return new OrExpressionAST(left, right);
  }

  visitExpNot(ctx: ExpNotContext): NotExpressionAST {
    const expression = this.visit(ctx.exp());
    return new NotExpressionAST(expression);
  }

  visitExpEq(ctx: ExpEqContext): EqExpressionAST {
    const left = this.visit(ctx.exp(0));
    const right = this.visit(ctx.exp(1));
    return new EqExpressionAST(left, right);
  }

  visitExpPlus(ctx: ExpPlusContext): PlusExpressionAST {
    const left = this.visit(ctx.exp(0));
    const right = this.visit(ctx.exp(1));
    return new PlusExpressionAST(left, right);
  }

  visitExpMinus(ctx: ExpMinusContext): MinusExpressionAST {
    const left = this.visit(ctx.exp(0));
    const right = this.visit(ctx.exp(1));
    return new MinusExpressionAST(left, right);
  }

  visitExpLess(ctx: ExpLessContext): LessExpressionAST {
    const left = this.visit(ctx.exp(0));
    const right = this.visit(ctx.exp(1));
    return new LessExpressionAST(left, right);
  }

  visitExpGreater(ctx: ExpGreaterContext): GreaterExpressionAST {
    const left = this.visit(ctx.exp(0));
    const right = this.visit(ctx.exp(1));
    return new GreaterExpressionAST(left, right);
  }

  visitExpInt(ctx: ExpIntContext): IntExpressionAST {
    return new IntExpressionAST(parseInt(ctx.text, 10));
  }

  visitExpNegative(ctx: ExpNegativeContext): NegativeExpressionAST {
    return new NegativeExpressionAST(parseInt(ctx.INT().text, 10));
  }

  visitExpApplication(ctx: ExpApplicationContext): ApplicationExpAST {
    const elements = ctx.exp().map((exp) => this.visit(exp));
    return new ApplicationExpAST(elements);
  }

  visitProg(ctx: ProgContext): any {
    return ctx.exp().map((exp) => this.visit(exp));
  }
}

export const parse_tree_to_ast = (exp: string) => {
  const inputStream = new ANTLRInputStream(exp);
  const lexer = new SchemeLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new SchemeParser(tokenStream);

  const tree = parser.prog();
  const visitor = new BuildASTVisitor();
  const ast = visitor.visit(tree);

  //console.log(ast);

  //let letexp = ast[0];
  //let bg = letexp.body.expressions;
  //console.log(bg);
  return ast;
};

let ast = parse_tree_to_ast("(let ((n 3)) (+ n n))");
console.log(ast);
let ast_let = ast[0];
let bindings = ast_let.bindings;
console.log(parse_tree_to_ast("(let ((n 3)) (+ n n))"));
console.log(bindings);
