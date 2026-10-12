/** Format angka ke Rupiah: 99000 -> "Rp99.000" */
export function rupiah(value: number) {
  return "Rp" + value.toLocaleString("id-ID");
}
