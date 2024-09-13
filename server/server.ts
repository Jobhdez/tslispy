import express, { Express, Request, Response, NextFunction } from "express";

import { interp, jsToScheme } from "../Interpreter/Interp";
import { parse_tree_to_ast } from "../Interpreter/ToAst";
const app: Express = express();

app.use(express.json());
app.post("/api/scheme", (req: Request, res: Response) => {
  let scheme_expression = req.body.exp;
  console.log(scheme_expression);
  let scm_exp = JSON.stringify(scheme_expression);
  console.log(scm_exp);
  let ast = parse_tree_to_ast(scheme_expression);
  let val = interp(ast[0]);
  res.json({ exp: jsToScheme(val) });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(`Error: ${err.message}`); // Log the error to the console

  // Send the error message in the response
  res.status(500).json({
    error: err.message,
  });
});

const server = app.listen(3000, () =>
  console.log(`server ready at: http://localhost:3000`),
);
