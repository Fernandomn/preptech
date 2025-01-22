import { MaxPriorityQueue } from "@datastructures-js/priority-queue/src/maxPriorityQueue";

/**
 * https://leetcode.com/problems/top-k-frequent-words/description/
 * https://leetcode.com/problems/top-k-frequent-words/solutions/6313172/heap-or-sort-by-fernamn-ty5d/
 * 692. Top K Frequent Words
Given an array of strings words and an integer k, return the k most frequent strings.
Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.


Example 1:
Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.

Example 2:
Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
 

Constraints:
1 <= words.length <= 500
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
k is in the range [1, The number of unique words[i]]
 

Follow-up: Could you solve it in O(n log(k)) time and O(n) extra space?
 */
function topKFrequent(words: string[], k: number): string[] {
    // return usingHeap(words, k);
    return usingMap(words, k);
}

type WordFrequency = {
    word: string;
    freq: number;
};

const usingHeap = (words: string[], k: number): string[] => {
    const map: Record<string, number> = {};
    const heap = new MaxPriorityQueue<WordFrequency>({
        compare: (e1, e2) => {
            if (e1.freq !== e2.freq) return e2.freq - e1.freq;
            return e1.word < e2.word ? -1 : 1;
        },
    });
    const resultList: string[] = [];

    for (const word of words) {
        map[word] = (map[word] || 0) + 1;
    }

    for (const [word, freq] of Object.entries(map)) {
        heap.enqueue({ word, freq });
    }

    for (let i = 0; i < k; i++) {
        resultList.push(heap.dequeue().element.word);
    }

    return resultList;
};

const usingMap = (words: string[], k: number): string[] => {
    const freqMap = new Map<string, number>();

    for (const word of words) {
        freqMap.set(word, (freqMap.get(word) || 0) + 1);
    }

    return Array.from(freqMap.entries())
        .sort(([wordA, freqA], [wordB, freqB]) => {
            if (freqA !== freqB) return freqB - freqA;
            return wordA < wordB ? -1 : 1;
        })
        .slice(0, k)
        .map(([word]) => word);
};
