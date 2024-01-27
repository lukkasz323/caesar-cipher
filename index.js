function encode(cipher, shift) {
    const codes = [];
    for (let i = 0; i < cipher.length; i++) {
        const charCode = cipher.charCodeAt(i);
        codes[i] = String.fromCharCode(charCode + shift);
    }
    const encodedCipher = codes.join("");
    return encodedCipher;
}
function decode(cipher, shift) {
    return cipher[shift]; // TODO
}
function onClickEncode(e, $cipher, $shift, $encode) {
    $cipher.value = encode($cipher.value, Number($shift.value));
}
function onClickDecode(e, $cipher, $shift, $decode) {
    $cipher.value = decode($cipher.value, Number($shift.value));
}
const $cipher = document.getElementById("cipher");
const $shift = document.getElementById("shift");
const $encode = document.getElementById("encode");
const $decode = document.getElementById("decode");
$encode.addEventListener("click", (e) => onClickEncode(e, $cipher, $shift, $encode.value));
$decode.addEventListener("click", (e) => onClickDecode(e, $cipher, $shift, $decode.value));
