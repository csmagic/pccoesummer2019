

len.[] = idop1
--len.(x::xs) = (+).1.len.xs
len.(x::xs)= op1. x. (len.xs)

idop1 = 0
op.x.y = 1 + y

suml.[] = idop2
-- suml.(x::xs) = x + suml.xs
suml.(x::xs) = op2.x. (suml.xs)
idop2=0
op2.x.y = x + y

prod.[]=1
prod.(x::xs)= x* prod.xs

conc.[] = []
conc.(x::xs) = x ++ xonc.xs


reduce.op1.idop1.l = red.l
    where
       red.[] = idop1
       red.(x::xs)= op1. x. (red.xs)

suml= reduce.op2.idop2


isort.[] = []
isort.(x::xs) = insert.x.(isort.xs)

insert.x.[] = []
insert.x.(y::ys)
            | x <= y = x::y::ys
	    |otherwise = y: insert.x.ys



          
