// https://leetcode.com/problems/partition-labels/

const partitionLabels = function(str) {
    const locations = {};
    for (let i = 0; i < str.length; i++) {
        if (!locations[str[i]]) {
            locations[str[i]] = [i, i];
        } else {
            locations[str[i]][1] = i;
        }
    }
    const partitions = [];
    let inserted;
    for (let i in locations) {
        inserted = false;
        for (let j = 0; j < partitions.length; j++) {
            if (locations[i][0] > partitions[j][0] && locations[i][1] < partitions[j][1]) {
                inserted = true;
                break;
            } else if (locations[i][0] > partitions[j][0] && locations[i][0] < partitions[j][1]) {
                inserted = true;
                partitions[j][1] = locations[i][1];
                break;
            } else if (locations[i][1] > partitions[j][0] && locations[i][1] < partitions[j][1]) {
                inserted = true;
                partitions[j][0] = locations[i][0];
                break;
            }
        }
        if (!inserted) {
            partitions.push(locations[i]);
        }
    }
    for (let i = 0; i < partitions.length; i++) {
        partitions[i] = 1 + partitions[i][1] - partitions[i][0];
    }
    return partitions;
};

console.assert(JSON.stringify(partitionLabels("ababcbacadefegdehijhklij")) === JSON.stringify([9, 7, 8]), "works for ababcbacadefegdehijhklij");
