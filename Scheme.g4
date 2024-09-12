grammar Scheme;

prog: exp+;

exp
    : VAR                                # ExpVar
    | '(' 'let' '(' binding ')' exp ')'     # ExpLet
    | '(' 'set' var exp ')'                     # ExpSet
    | '(' 'begin' exp+ ')'                  # ExpBegin
    | '(' 'if' exp exp exp ')'                 # ExpIf
    | '(' 'while' '(' exp ')' exp  ')'                  # ExpWhile
    | 'true'                             # ExpBoolTrue
    | 'false'                            # ExpBoolFalse
    | '(' 'vectorref' exp INT ')'              # ExpVectorRef
    | '(' 'vector' exp+ ')'                  # ExpVector
    | '(' 'vectorlength' exp ')'                # ExpVectorLength
    | '(' 'and' exp exp ')'                    # ExpAnd
    | '(' 'or' exp exp ')'                       # ExpOr
    | '(' 'not' exp ')'                          # ExpNot
    | '(' 'eq' exp exp ')'                       # ExpEq
    | '(' '+' exp exp ')'                        # ExpPlus
    | '(' '-' exp exp ')'                        # ExpMinus
    | '(' '<' exp exp ')'                        # ExpLess
    | '(' '>' exp exp ')'                       # ExpGreater
    | INT                                      # ExpInt
    | '(' '-' INT ')'                           # ExpNegative
    | '(' exp+ ')'                              # ExpApplication
    ;


binding
    : '(' VAR exp ')'                    
    ;

var: VAR;

INT: [0-9]+;

VAR: [a-zA-Z_][a-zA-Z_0-9]*;

WS: [ \t\n\r]+ -> skip;
