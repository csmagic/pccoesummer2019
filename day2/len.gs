--len: [Int] -> Int
{-
len.[]		= 0
len.(x::xs)	= 1 + y
                 where
                 y = len.xs
-}

len.[]		= 0
len.(x::xs)	= 1 + len.xs

--app: [Int] -> [Int] ->[Int]

app.[].l = l
app.(x::xs).[]=x::xs
app.(x::xs).(y::ys)= x::app.xs.(y::ys)

zip2.[].l=[]
zip2.l.[]=[]
zip2.(x::xs).(y::ys)=(x,y)::zip2.xs.ys
		      

