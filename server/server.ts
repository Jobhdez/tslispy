import express, { Express, Request, Response} from "express";
import { interp, jsToScheme } from "../Interpreter/Interp";
import { parse_tree_to_ast } from "../Interpreter/ToAst";

const app: Express = express();

app.use(express.json());
app.post("/api/scheme", (req: Request, res: Response) => {
  let scheme_expression = req.body.exp;
  let ast = parse_tree_to_ast(scheme_expression);
  let val = interp(ast[0]);
  res.json({ exp: jsToScheme(val) });
});

const server = app.listen(3000, () =>
  console.log(`server ready at: http://localhost:3000`),
);
