clean:
	rm Interpreter/*.js && rm Parser/*.js && rm *.js && rm server/*.js
repl:
	npx tsc && node repl.js
serve:
	npx tsc && node server/server.js
