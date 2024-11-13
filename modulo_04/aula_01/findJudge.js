/*
https://leetcode.com/problems/find-the-town-judge/description/
https://leetcode.com/problems/find-the-town-judge/solutions/6039069/you-don-t-need-graphs/
997. Find the Town Judge

In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.
Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.


Example 1:
Input: n = 2, trust = [[1,2]]
Output: 2

Example 2:
Input: n = 3, trust = [[1,3],[2,3]]
Output: 3

Example 3:
Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
 

Constraints:
1 <= n <= 1000
0 <= trust.length <= 104
trust[i].length == 2
All the pairs of trust are unique.
ai != bi
1 <= ai, bi <= n
*/

function findJudge(n, trust) {
    // // tentativa 1: criando a matrix de adjacências

    // let matrix = new Array(n + 1).fill(false).map(() => new Array(n + 1).fill(false));
    // for (let t of trust) {
    //     matrix[t[0]][t[1]] = true;
    // }

    // for (let person = 1; person <= n; person++) {

    //     let trustCounter = 0
    //     let isTrustedCounter = 0

    //     for (let i = 1; i <= n; i++) {
    //         if (matrix[person][i]) {
    //             trustCounter++
    //         }
    //     }

    //     for (let j = 1; j <= n; j++) {
    //         if (matrix[j][person]) {
    //             isTrustedCounter++
    //         }
    //     }

    //     if (isTrustedCounter === n - 1 && trustCounter === 0) {
    //         return person
    //     }
    // }

    // tentativa2: usando contadores
    let trustList = new Array(n + 1).fill(0)
    let isTrustedList = new Array(n + 1).fill(0)

    for (let t of trust) {
        trustList[t[0]]++
        isTrustedList[t[1]]++
    }

    for (let p = 1; p <= n; p++) {
        if (trustList[p] == 0 && isTrustedList[p] == n - 1) return p
    }

    return -1
};