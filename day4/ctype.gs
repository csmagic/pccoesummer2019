ctype Mylistint where
    El		: Mylistint
    Cons	: Int -> Mylistint -> Mylistint


myllen:Mylistint -> Int
myllen.El = 0
myllen.(Cons.x.y) = 1 + myllen.y

mylist.El=[]
mylist.(Cons.x.y)=x::mylist.y

mylist2.[]=El
mylist2.(x::xs)=Cons.x.(mylist2.xs)

ctype Mytree where
      Lf: Int-> Mytree
      Ct : Int -> Mytree -> Mytree -> Mytree


t1 = Ct.7.(Lf.3).(Lf.9)
t2 = Ct.3.(Lf.3).(Lf.4)
t3 = Ct.9.t1.t2

pre:Mytree->[Int]
pre.(Lf.x)= [x]
pre.(Ct.x.lt.rt) = x:: pre.lt ++ pre.rt

post:Mytree->[Int]
post.(Lf.x)= [x]
post.(Ct.x.lt.rt) = post.lt ++ post.rt ++ [x]
