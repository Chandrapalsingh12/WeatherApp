def processArray(val):
    i = 0
    while i < len(val) -1:        
        if val[i] >=100 and val[i+1] >=100:            
            count=1
            for j in range(i+1, len(val)):                
                if val[j] >=100:
                    count +=1
                else:
                    break
            val[i:i+count] = [count]
            i +=1
        else:
            i+=1
    return len(val)


numb = [22,113,135,62,14,161,129,375,66,7,-1]
arr = [] 
for i in numb:
    if i>=0:
        arr.append(i)

processArray(arr)

for i in arr:
    print(i)
