import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { SchemeLexer } from './SchemeLexer';
import { SchemeParser, ExpLetContext, ExpContext, BindingContext } from './SchemeParser';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SchemeVisitor } from './SchemeVisitor';

// 1. AST Node Definition
class LetExpressionAST {
  bindings: { variable: string; value: any }[];
  body: any;

  constructor(bindings: { variable: string; value: any }[], body: any) {
    this.bindings = bindings;
    this.body = body;
  }
}

// 2. Visitor Implementation
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
        variable: binding.VAR().text, // Access the variable name using VAR()
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

// 3. Usage: Parsing and Generating the AST
// Example Scheme expression
const input = '(let ((n 2)) n)';

// Create an input stream from the Scheme expression
const inputStream = new ANTLRInputStream(input);

// Create a lexer that feeds off of the input stream
const lexer = new SchemeLexer(inputStream);

// Create a token stream from the lexer
const tokenStream = new CommonTokenStream(lexer);

// Create a parser that feeds off of the token stream
const parser = new SchemeParser(tokenStream);
const tree = parser.prog(); // Assume 'prog' is the start rule

// Create the visitor
const buildASTVisitor = new BuildASTVisitor();
// Generate the AST by visiting the parse tree
const ast = buildASTVisitor.visit(tree);

console.log(ast instanceof LetExpressionAST)
console.log(JSON.stringify(ast, null, 2));
