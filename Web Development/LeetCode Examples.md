### Two-Sum

#### Info
>  *int[] twoSum ( int[] nums, int target )

returns `[ int , int ]`  which is the index of the **sum** of the `ints` in the given array ( `nums[]` )

#### Example
`[ 1, 2, 3, 4]` , `int target = 5`    => return  `[0, 3]`
    ^               ^

#### Walktrough
// starting with the first index 0, chech the other indexes with a second loop

iterate nums index i = 0 {
	iterate nums index j = i {
		if target.equals ( nums [ i ] + nums [ j ] )
			return new int[] { [ i , j ]}  
	}
}

#### Brute Force

```java
for (int i = 0; i < nums.length; i++) {
	for (int j = i; j < nums.length; j++) {
		if ( target == (nums[i] + nums [j])){
			return new int[] {i, j};
		}
	}
}
return 0;


```

#### Optimization
X

#### Implementation
refer to Brute Force


### First Letter to Appear Twice
#### Info
> *char repeatedCharacter ( String s )

returns the first `char` that appears twics in the string `s`

#### Example
`"abcdefghijklmnoa"` => return `"a"` because its the first character to appear ==twice==
 ^                            ^

#### Walktorugh
// use a HashMap to keep a record of every letter that appears and return the first entry that was already in the hashMap

iterate s {
	if hash doesnt contains the next char {
		put the char in the hash
	}
	else it does contatins it {
		return that char
	}
	
}

#### Brute Force
```java

char[] letters = s.toCharArray();  
  
HashMap<Character,Integer> map = new HashMap<>();  
  
for (char c: letters){  
    if(!map.containsKey(c)) {  
	    map.put(c, 1);  
    } else {  
	    return c;  
    }  
}  
  
return 0;

```

#### Optimization
#### Implementation


### Substring with Concatenation of All Words

#### Info
> `public List <Integer> findSubstring(String s, String[] words)`

You are given a string `s` and an array of strings `words` of **the same length**. Return all starting indices of substring(s) in `s` that is a concatenation of each word in `words` **exactly once**, **in any order**, and **without any intervening characters**.

#### Example
**Input:** s = `"barfoothefoobarman"`, words = [ "foo", "bar" ]   ==> Output: [ 0, 9 ]
                   ^               ^   
                    barfoo
                                     foobar

| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17|
| - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |
| b | a | r | f | o | o | t | h | e | f | o | o | b | a | r | m | a | n |
| ^ |  |  |  |  |  |  |  |  | ^ |  |  |  |  |  |  |  |  |







                               
**Explanation:** Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.

#### Walktorugh
wordLength = get the word length

look it up in at the start of the string 
	is there
		deleat and look for the next
	is no there
		
	



#### Brute Force

#### Optimization

#### Implementation

