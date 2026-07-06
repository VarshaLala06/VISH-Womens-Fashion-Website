# 1) didn't get 

# 2) Count the freq of word in an given string without predifined methods.
# str="innomatics hi hi research labs hi labs labs"
# word=""
# arr=[]
# dict={}
# for i in range(len(str)):
#     if str[i]==" ":
#         arr.append(word)
#         word=""
#     else:
#         word+=str[i]
# arr.append(word)
# print(arr)
# for i in range(len(arr)):
#     if arr[i] in dict:
#         dict[arr[i]]+=1
#     else:
#         dict[arr[i]]=1
# print(dict)


# 3) Every time take one alph from either varaible.
# str1 = "Hello world world"
# str2 = "Innomatics"
# val=min(len(str1),len(str2))
# fix=val
# j=0   
# newstr=""
# while val>0:
#     if j%2==0:
#         newstr+=str1[j]
#         j+=1
#         val-=1
#     else:
#         newstr+=str2[j]
#         j+=1
#         val-=1
# # printing remaining chars in string with more length
# if len(str1)>fix:
#     for i in range(fix,len(str1)):
#         if str1[i]!=" ":
#            newstr+=str1[i]
# if len(str2)>fix:
#     for i in range(fix,len(str2)):
#         if str2[i]!=" ":
#            newstr+=str2[i]
# print(newstr)


# 4) Palindrome:
# x = "silent"
# y = "listen"
# dict1={}
# dict2={}
# for i in range(len(x)):
#     if x[i] in dict1:
#         dict1[x[i]]+=1
#     else:
#         dict1[x[i]]=1
# for i in range(len(y)):
#     if y[i] in dict2:
#         dict2[y[i]]+=1
#     else:
#         dict2[y[i]]=1
# if dict1==dict2:
#     print(True)
# else:
#     print(False)


# 5)Return the alph with highest freq in the given word.
# str="innomaticccccs"
# dict={}
# for i in range(len(str)):
#     if str[i] in dict:
#         dict[str[i]]+=1
#     else:
#         dict[str[i]]=1
# print(dict)
# max=0
# alph=""
# for i in dict:
#     if dict[i]>max:
#         max=dict[i]
#         alph=i
# print(alph)


# 6) Unique apt string
# this code will print the last occurence of the alphabet in the string 
# x = "inntommaticsst"
# y=""
# for i in range(len(x)):
#     found=False
#     for j in range(i+1,len(x)):
#         if x[i]==x[j]:
#             found=True
#             break
#     if found:
#         continue
#     else:
#         y+=x[i]

# print(y)


# 7)Given a string in which there are few words in it make sure that you generate a same copy of the current string but small changes need to be added in the new string.
# x = "hello my name is rahul we are learning DSA"
# y=""
# space=0
# for i in range(len(x)):
#     if x[i]==" ":
#         for j in range(space):
#             y+="."
#         space=0
#     else:
#         y+=x[i]
#         space+=1
# for j in range(space):
#     y+="."
# print(y)

arr = [23, 5, 1, 678, 3409, 4555, 146, 23]

# Function to count digits
def digits(num):
    count = 0
    while num > 0:
        num //= 10
        count += 1
    return count

# Bubble Sort based on digit count
for i in range(len(arr)):
    for j in range(len(arr) - 1 - i):
        if digits(arr[j]) > digits(arr[j + 1]):
            arr[j], arr[j + 1] = arr[j + 1], arr[j]

print(arr)