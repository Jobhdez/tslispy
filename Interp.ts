import {
  LetExpressionAST,
  SetExpressionAST,
  BeginExpressionAST,
  IfExpressionAST,
  WhileExpressionAST,
  BoolExpressionAST,
  VectorExpressionAST,
  VectorRefExpressionAST,
  VectorLengthExpressionAST,
  AndExpressionAST,
  OrExpressionAST,
  NotExpressionAST,
  EqExpressionAST,
  PlusExpressionAST,
  MinusExpressionAST,
  LessExpressionAST,
  GreaterExpressionAST,
  IntExpressionAST,
  NegativeExpressionAST,
  ApplicationExpAST,
  parse_tree_to_ast,
} from "./ToAst";

class Env {
  bindings: Map<string, any>;
  outer: Env | null;

  constructor(
    params: string[] = [],
    args: any[] = [],
    outer: Env | null = null,
  ) {
    this.bindings = new Map(params.map((p, i) => [p, args[i]]));
    this.outer = outer;
  }

  find(varName: string): Env {
    if (this.bindings.has(varName)) {
      return this;
    } else if (this.outer !== null) {
      return this.outer.find(varName);
    } else {
      throw new Error(`Variable '${varName}' is not defined.`);
    }
  }
}

class Procedure {
  params: string[];
  body: any;
  env: Env;

  constructor(params: string[], body: any, env: Env) {
    this.params = params;
    this.body = body;
    this.env = env;
  }

  call(...args: any[]): any {
    return interp(this.body, new Env(this.params, args, this.env));
  }
}

function standardEnv(): Env {
  const env = new Env();
  env.bindings.set("car", (x: any[]) => x[0]);
  env.bindings.set("cdr", (x: any[]) => x.slice(1));
  env.bindings.set("cons", (x: any, y: any) => [x, y]);
  env.bindings.set("list", (...x: any[]) => x);
  env.bindings.set("map", (...args: any[]) => args.map(args[0]));
  env.bindings.set("eq?", Object.is);
  env.bindings.set("equal?", (a: any, b: any) => a === b);
  env.bindings.set("list?", (x: any) => Array.isArray(x));
  env.bindings.set("length", (x: any[]) => x.length);
  env.bindings.set("null?", (x: any[]) => x.length === 0);

  return env;
}

const globalEnv = standardEnv();

function interp(exp: any, env: Env = globalEnv): any {
  switch (exp.constructor) {
    case BoolExpressionAST:
      return exp.value;

    case IfExpressionAST:
      return interp(exp.condition, env)
        ? interp(exp.thenBranch, env)
        : interp(exp.elseBranch, env);

    case PlusExpressionAST:
      return interp(exp.left, env) + interp(exp.right, env);

    case MinusExpressionAST:
      return interp(exp.left, env) - interp(exp.right, env);

    case EqExpressionAST:
      return interp(exp.left, env) === interp(exp.right, env);

    case LetExpressionAST:
      const newEnv = new Env(
        exp.bindings.map((b: any) => b.variable),
        exp.bindings.map((b: any) => interp(b.value, env)),
        env,
      );
      return interp(exp.body, newEnv);

    case SetExpressionAST:
      env.find(exp.variable).bindings.set(exp.variable, interp(exp.value, env));
      return null;

    case BeginExpressionAST:
      let result;
      for (const expression of exp.expressions) {
        result = interp(expression, env);
      }
      return result;

    case Procedure:
      const procedure = interp(exp, env);
      const args = exp.args.map((arg: any) => interp(arg, env));
      return procedure.call(...args);

    case IntExpressionAST:
      return exp.value;

    case String:
      return env.bindings.get(exp);

    case ApplicationExpAST:
      let exps = exp.exps;
      let op = interp(exps[0], env);
      let vals = [];
      for (let i = 1; i < exps.length; i++) {
        vals.push(interp(exps[i], env));
      }

      return op(...vals);

    default:
      throw new Error(`Unknown expression type: ${exp.constructor.name}`);
  }
}

type SchemeValue = boolean | string | SchemeValue[];

function jsToScheme(e: SchemeValue): string {
  if (Array.isArray(e)) {
    return "(" + e.map(jsToScheme).join(" ") + ")";
  } else if (e === true) {
    return "#t";
  } else if (e === false) {
    return "#f";
  } else {
    return String(e);
  }
}

async function repl(prompt: string = "lambda> "): Promise<void> {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function question(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
  }

  while (true) {
    const userInput = await question(prompt);
    const trimmedInput = userInput.trim();

    if (trimmedInput === "(quit)") {
      rl.close();
      break;
    }

    const tree = parse_tree_to_ast(trimmedInput);
    const val = interp(tree[0]);

    if (val !== undefined) {
      console.log(jsToScheme(val));
    }
  }
}

repl();
