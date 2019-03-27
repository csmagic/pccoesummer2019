f = const."34"

{-suml: [Int]->Int
suml.[] = 0
suml.(x::xs) = x + suml.xs
-}

len.[] = id1
--len.(x::xs) = 1+ len.xs
len.(x::xs) = op1.x.(len.xs)
id1 =0
op1.x.y = 1+y

{- reducer.op1.id1 = len
   where
     len.[] = id1
     len.(x::xs) = op1.x.(len.xs)
-}

reducer.op.id.l = reducer'.l
   where
     reducer'.[] = id
     reducer'.(x::xs) = op.x.(reducer'.xs)


suml: [Int]->Int
suml.[] = id2
--suml.(x::xs) = x + suml.xs
suml.(x::xs) = op2.x.(suml.xs)
id2 =0
op2.x.y = x + y


prodl: [Int]->Int
prodl.[] = id3
prodl.(x::xs) = op3.x.( prodl.xs)
id3 = 1
op3.x.y = x * y


cat.[] = id4
cat.(x::xs) = op4.x.( cat.xs)

id4 = []
op4.x.y = x ++ y
{-
suml1= red
prodl1=
catl1=

-}


insort.[] = []
insort.(x::xs) = insert.x. (insort.xs)

insert1.x.[] = [x]
insert1.x.(y::ys)
          |x <=y = x::y::ys
	  |otherwise = y::(insert1.x.ys)