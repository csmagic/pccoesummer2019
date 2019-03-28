-- rot13i.x = (x+13) `mod` 26
rot13i = (+13);(`mod` 26)

--rot13.c = chr.(rot13i.(subtract.65.(ord.c))+65)

--rot13 =  ord ; (subtract.65) ; (+13) ; (`mod` 26) ; (+ 65) ; chr
rot13 =  ord ; (subtract.65) ; (+13) ; (`mod` 26) ; (+ 65) ; chr

-- rot13s = map.ord ; map.(subtract.65) ; map.(+13) ; map.(`mod` 26) ; map.(+ 65) ; map.chr

rot13s = map.(ord ; (subtract.65) ; (+13) ; (`mod` 26) ; (+ 65) ; chr)