function encode(cipher: string, shift: number): string {
    const codes: string[] = [];

    for (let i = 0; i < cipher.length; i++) {
        const charCode: number = cipher.charCodeAt(i);
        codes[i] = String.fromCharCode(charCode + shift);
    }

    const encodedCipher = codes.join("");

    return encodedCipher;
}

function decode(cipher: string, shift: number): string {
    return cipher[shift]; // TODO
}

function onClickEncode(e: Event, $cipher: HTMLInputElement, $shift: HTMLInputElement, $encode: string): void {
    $cipher.value = encode($cipher.value, Number($shift.value));
}

function onClickDecode(e: Event, $cipher: HTMLInputElement, $shift: HTMLInputElement, $decode: string): void {
    $cipher.value = decode($cipher.value, Number($shift.value));
}

const $cipher = <HTMLInputElement>document.getElementById("cipher");
const $shift = <HTMLInputElement>document.getElementById("shift");
const $encode = <HTMLInputElement>document.getElementById("encode");
const $decode = <HTMLInputElement>document.getElementById("decode");

$encode.addEventListener("click", (e) => onClickEncode(e, $cipher, $shift, $encode.value));
$decode.addEventListener("click", (e) => onClickDecode(e, $cipher, $shift, $decode.value));