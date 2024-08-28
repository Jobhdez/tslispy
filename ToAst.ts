import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { SchemeLexer } from './SchemeLexer';
import { SchemeParser, ExpLetContext, ExpContext, BindingContext } from './SchemeParser';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SchemeVisitor } from './SchemeVisitor';

class LetExpressionAST {
  bindings: { variable: string; value: any }[];
  body: any;

  constructor(bindings: { variable: string; value: any }[], body: any) {
    this.bindings = bindings;
    this.body = body;
  }
}

class BuildASTVisitor extends AbstractParseTreeVisitor<any> implements SchemeVisitor<any> {
  defaultResult() {
    return null;
  }

  aggregateResult(aggregate: any, nextResult: any) {
    return nextResult !== null ? nextResult : aggregate;
  }

  visitExpLet(ctx: ExpLetContext): LetExpressionAST {
    const bindings: { variable: string; value: any }[] = [];

    const bindingContexts = ctx.binding() as BindingContext | BindingContext[];
    const bindingList = Array.isArray(bindingContexts) ? bindingContexts : [bindingContexts];

    for (const binding of bindingList) {
      bindings.push({
        variable: binding.VAR().text,
        value: this.visit(binding.exp())
      });
    }

    const body = this.visit(ctx.exp());

    return new LetExpressionAST(bindings, body);
  }

  visitExpInt(ctx: ExpContext): number {
    return parseInt(ctx.text, 10);
  }

  visitExpVar(ctx: ExpContext): string {
    return ctx.text;
  }
}



const input = '(let ((n 2)) n)';


const inputStream = new ANTLRInputStream(input);


const lexer = new SchemeLexer(inputStream);


const tokenStream = new CommonTokenStream(lexer);


const parser = new SchemeParser(tokenStream);
const tree = parser.prog(); 


const buildASTVisitor = new BuildASTVisitor();

const ast = buildASTVisitor.visit(tree);

console.log(ast instanceof LetExpressionAST)
console.log(JSON.stringify(ast, null, 2));
