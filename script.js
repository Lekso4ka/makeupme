let photos = {
    weeding: [
        "IMG_0101w"
    ],
    evening: [
        "IMG_0087w"
    ],
    school: [
        "IMG_0033w"
    ],
    special: [
        "3X5OiPXC13I", "ILjSlg9gw9s", "IMG_0031w", "IMG_0033w", "IMG_0087w", "IMG_0101w", "IMG_0113w", "IMG_0158w", "IMG_0236w", "IMG_0284w", "IMG_0294w", "IMG_1111w", "IMG_1128w", "IMG_1142w", "IMG_1218w", "IMG_1243w", "IMG_1259w", "IMG_1273w", "IMG_1350w", "IMG_1425w", "IMG_1504w", "IMG_1541w", "IMG_1547w", "IMG_1555w", "IMG_1595w", "IMG_1600w", "IMG_2289w", "IMG_2315w", "IMG_2333w", "IMG_2416w", "IMG_2510w", "IMG_2547w", "IMG_2562w", "IMG_2567w", "IMG_2572w", "IMG_2648w", "IMG_2717w", "IMG_2726w", "IMG_2756w", "IMG_2783w", "IMG_2840w", "IMG_2856w", "IMG_2861w", "IMG_2867w", "IMG_2894w", "IMG_2986w", "IMG_3033w", "IMG_3094w", "IMG_3102w", "IMG_3111w", "IMG_3184w", "IMG_3250w", "IMG_3266w", "IMG_3275w", "IMG_3288w", "IMG_3330w", "IMG_3355w", "IMG_3381w", "IMG_3390w", "IMG_3391w", "IMG_3403w", "IMG_3448w", "IMG_3500w", "IMG_3510w", "IMG_3512w", "IMG_3526w", "IMG_3592w", "IMG_3598w", "IMG_3637w", "IMG_3667w", "IMG_3678w", "IMG_3695-1w", "IMG_3695w", "IMG_3798w", "IMG_3811w", "IMG_3869-1w", "IMG_3869w", "IMG_3913w", "IMG_3925-1w", "IMG_3925w", "IMG_3930-1w", "IMG_3930w", "IMG_3953-1w", "IMG_3953w", "IMG_4008-1w", "IMG_4008w", "IMG_4014-1w", "IMG_4014w", "IMG_4121w", "IMG_4134w"//, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
    ]
};
let allPhotos = [];

for (let k in photos) {
    for (let i = 0; i < photos[k].length; i ++) {
        allPhotos.push(photos[k][i]);
    }
}
function shuffle(arr){
    let j, temp;
    for(let i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
shuffle(allPhotos);
photos.all = allPhotos;