f.x = 1+x
g.x = 2*x
h.x = 3*x

fl = [f,g,h]

pam:[a->b] -> a ->[b]

--pam.functions.x = [fn.x | fn <- functions]

pam.[].x = []
pam.(f::fs).x =f.x::pam.fs.x
pam2.funs.x = map.(.x).funs
