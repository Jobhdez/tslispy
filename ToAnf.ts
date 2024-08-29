import {
  LetExpressionAST,
  SetExpressionAST,
  BeginExpressionAST,
  IfExpressionAST,
} from "./ToAnf";

interface ASTVisitor {
  visitLetExpression(node: LetExpressionAST): void;
  visitSetExpression(node: SetExpressionAST): void;
  visitBeginExpression(node: BeginExpressionAST): void;
  visitIfExpression(node: IfExpressionAST): void;
}
