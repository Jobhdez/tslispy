clean:
	rm Interpreter/*.js && rm Parser/*.js
repl:
	npx tsc && node Interpreter/Interp.js
