"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const SchemeLexer_1 = require("./SchemeLexer");
const SchemeParser_1 = require("./SchemeParser");
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
// 1. AST Node Definition
class LetExpressionAST {
    constructor(bindings, body) {
        this.bindings = bindings;
        this.body = body;
    }
}
// 2. Visitor Implementation
class BuildASTVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return null;
    }
    aggregateResult(aggregate, nextResult) {
        return nextResult !== null ? nextResult : aggregate;
    }
    visitExpLet(ctx) {
        const bindings = [];
        const bindingContexts = ctx.binding();
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
    visitExpInt(ctx) {
        return parseInt(ctx.text, 10);
    }
    visitExpVar(ctx) {
        return ctx.text;
    }
}
// 3. Usage: Parsing and Generating the AST
// Example Scheme expression
const input = '(let ((n 2)) n)';
// Create an input stream from the Scheme expression
const inputStream = new antlr4ts_1.ANTLRInputStream(input);
// Create a lexer that feeds off of the input stream
const lexer = new SchemeLexer_1.SchemeLexer(inputStream);
// Create a token stream from the lexer
const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
// Create a parser that feeds off of the token stream
const parser = new SchemeParser_1.SchemeParser(tokenStream);
const tree = parser.prog(); // Assume 'prog' is the start rule
// Create the visitor
const buildASTVisitor = new BuildASTVisitor();
// Generate the AST by visiting the parse tree
const ast = buildASTVisitor.visit(tree);
console.log(JSON.stringify(ast, null, 2));
